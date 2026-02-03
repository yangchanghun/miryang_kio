import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KakaoTGuideBtn from "./modal/KakaoTGuideBtn";
import KakaoTGuide from "./modal/KakaoTGuide";
import HomeButton from "../../utils/HomeButton";
interface RouteSectionRoad {
  vertexes: number[];
}

interface RouteSection {
  roads?: RouteSectionRoad[];
}

interface RouteSummary {
  distance?: number;
  duration?: number;
  fare?: {
    taxi?: number;
    toll?: number;
    fuel?: number;
  };
}

interface KakaoRoute {
  summary?: RouteSummary;
  sections?: RouteSection[];
}

interface KakaoRouteResponse {
  routes: KakaoRoute[];
}
interface LocationPoint {
  name: string;
  coords: {
    x: number;
    y: number;
  };
}
export default function KakaoResult() {
  const navigate = useNavigate();
  const { state } = useLocation() as {
    state?: {
      routeData: KakaoRouteResponse;
      startLocation: LocationPoint;
      destLocation: LocationPoint;
    };
  };

  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<kakao.maps.Map | null>(null);
  const polylineRef = useRef<kakao.maps.Polyline | null>(null);

  const [modal, setModal] = useState(false);
  const [selectedRoute] = useState(0);

  if (!state) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        잘못된 접근입니다.
      </div>
    );
  }

  const { routeData, startLocation, destLocation } = state;
  const routes = routeData.routes;

  const fare = routes[0]?.summary?.fare?.taxi ?? 0;
  const duration = routes[0]?.summary?.duration ?? 0;

  const formatDuration = (sec: number) => {
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    return hr > 0 ? `${hr}시간 ${min % 60}분` : `${min}분`;
  };

  /* =====================
     지도 초기화
  ===================== */
  useEffect(() => {
    if (!window.kakao || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(
        startLocation.coords.y,
        startLocation.coords.x,
      );

      const map = new window.kakao.maps.Map(mapRef.current!, {
        center,
        level: 7,
      });

      mapInstance.current = map;

      // 출발 / 도착 마커
      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          startLocation.coords.y,
          startLocation.coords.x,
        ),
        map,
      });

      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          destLocation.coords.y,
          destLocation.coords.x,
        ),
        map,
      });

      drawRoute(routes[selectedRoute]);
    });
  }, [routes, selectedRoute]);

  /* =====================
     경로 그리기
  ===================== */
  const drawRoute = (route: KakaoRoute) => {
    if (!mapInstance.current || !route.sections) return;

    polylineRef.current?.setMap(null);

    const path: kakao.maps.LatLng[] = [];

    route.sections.forEach((section) => {
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

    const polyline = new window.kakao.maps.Polyline({
      path,
      strokeWeight: 5,
      strokeColor: "#3b82f6",
      strokeOpacity: 0.9,
    });

    polyline.setMap(mapInstance.current);
    polylineRef.current = polyline;
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[785px] flex-col bg-white">
      {/* HEADER */}
      <header className="flex items-center gap-3 border-b px-4 py-3">
        <button onClick={() => navigate(-1)} className="text-lg">
          ←
        </button>
        <p className="font-semibold truncate">
          {startLocation.name} → {destLocation.name}
        </p>
      </header>

      {/* MAP */}
      <div className="relative h-[300px]">
        <div ref={mapRef} className="h-full w-full" />
        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white">
          예상 {formatDuration(duration)}
        </div>
      </div>

      {/* TAXI OPTIONS */}
      <div className="flex-1 divide-y px-4">
        <div
          className="flex cursor-pointer items-center gap-4 py-4"
          onClick={() => {
            navigate("/miryang/kakaot/booking", {
              state: {
                routeData,
                startLocation,
                destLocation,
                fare,
                time: duration,
              },
            });
          }}
        >
          <img src="/kakaot/common_car.png" className="h-10 w-10" />
          <div className="flex-1">
            <p className="font-semibold">일반호출</p>
            <p className="text-sm text-gray-500">주변 택시 호출</p>
          </div>
          <span className="font-bold">{fare.toLocaleString()}원</span>
        </div>
      </div>

      <KakaoTGuideBtn setModal={setModal} />
      {modal && <KakaoTGuide setModal={setModal} />}
      <HomeButton />
    </div>
  );
}
