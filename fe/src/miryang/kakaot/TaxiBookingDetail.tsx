import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KakaoTGuideBtn from "./modal/KakaoTGuideBtn";
import KakaoTGuide from "./modal/KakaoTGuide";
import HomeButton from "../../utils/HomeButton";

interface LocationPoint {
  name: string;
  coords: {
    x: number;
    y: number;
  };
}

interface RouteRoad {
  vertexes: number[];
}

interface RouteSection {
  roads?: RouteRoad[];
}

interface KakaoRoute {
  sections?: RouteSection[];
}

interface RouteData {
  routes: KakaoRoute[];
}

export default function TaxiBookingDetail() {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state?: {
      routeData: RouteData;
      startLocation: LocationPoint;
      destLocation: LocationPoint;
      fare: number;
      time: number;
    };
  };

  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<kakao.maps.Map | null>(null);

  const [modal, setModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"중형" | "대형">("중형");

  if (!state) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        경로 데이터를 불러올 수 없습니다.
      </div>
    );
  }

  const { routeData, startLocation, destLocation, fare, time } = state;

  /* =====================
     지도 초기화
  ===================== */
  useEffect(() => {
    if (!window.kakao || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const map = new window.kakao.maps.Map(mapRef.current!, {
        center: new window.kakao.maps.LatLng(
          startLocation.coords.y,
          startLocation.coords.x,
        ),
        level: 7,
      });

      mapInstance.current = map;

      const bounds = new window.kakao.maps.LatLngBounds();

      const makeMarker = (lat: number, lng: number) => {
        const pos = new window.kakao.maps.LatLng(lat, lng);
        new window.kakao.maps.Marker({ position: pos, map });
        bounds.extend(pos);
      };

      makeMarker(startLocation.coords.y, startLocation.coords.x);
      makeMarker(destLocation.coords.y, destLocation.coords.x);

      const path: kakao.maps.LatLng[] = [];

      routeData.routes[0]?.sections?.forEach((section) => {
        section.roads?.forEach((road) => {
          for (let i = 0; i < road.vertexes.length; i += 2) {
            path.push(
              new window.kakao.maps.LatLng(
                road.vertexes[i + 1],
                road.vertexes[i],
              ),
            );
          }
        });
      });

      new window.kakao.maps.Polyline({
        path,
        strokeWeight: 5,
        strokeColor: "#3b82f6",
        strokeOpacity: 0.9,
        map,
      });

      map.setBounds(bounds);
    });
  }, [routeData, startLocation, destLocation]);

  return (
    <div className="mx-auto flex min-h-screen max-w-[785px] flex-col bg-white">
      <audio src="/kakaot/audio/호출하기를 선택해주세요.m4a" autoPlay />

      {/* HEADER */}
      <header className="flex items-center gap-3 border-b px-4 py-3">
        <button onClick={() => navigate(-1)}>←</button>
        <p className="truncate font-semibold">
          {startLocation.name} → {destLocation.name}
        </p>
      </header>

      {/* MAP */}
      <div className="relative h-[280px]">
        <div ref={mapRef} className="h-full w-full" />
        <div className="absolute left-4 bottom-4 rounded-full bg-white px-4 py-2 text-sm text-blue-500 shadow">
          추천경로
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 py-5">
        {/* TAXI TYPE */}
        <div className="flex items-center gap-4 mb-4">
          <img src="/kakaot/common_car.png" className="h-12 w-12" />
          <div className="text-lg font-semibold">일반호출</div>
        </div>

        {/* SIZE */}
        <div className="flex gap-2 mb-6">
          {(["중형", "대형"] as const).map((size) => (
            <button
              key={size}
              onClick={() =>
                size === "중형"
                  ? setSelectedSize(size)
                  : alert("호출하기를 선택해주세요!")
              }
              className={`rounded-full border px-4 py-2 text-sm ${
                selectedSize === size
                  ? "border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* FARE */}
        <div className="flex items-center justify-between border-y py-4 mb-6">
          <span className="text-gray-700">예상 요금</span>
          <span className="text-lg font-bold">{fare.toLocaleString()}원</span>
        </div>

        {/* CALL */}
        <button
          onClick={() => {
            navigate("/miryang/kakaot/loading", {
              state: {
                start: startLocation.name,
                dest: destLocation.name,
              },
            });
          }}
          className="w-full rounded-xl bg-blue-500 py-4 text-lg font-semibold text-white active:scale-95"
        >
          호출하기
        </button>
      </div>

      <KakaoTGuideBtn setModal={setModal} />
      {modal && <KakaoTGuide setModal={setModal} />}
      <HomeButton />
    </div>
  );
}
