import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoTGuideBtn from "./modal/KakaoTGuideBtn";
import KakaoTGuide from "./modal/KakaoTGuide";
import HomeButton from "../../utils/HomeButton";

export default function KakaoMap() {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [currentLocation, setCurrentLocation] =
    useState("위치 정보 확인 중...");
  const [destination] = useState("");
  const [locationError, setLocationError] = useState("");

  const mapRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ps = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markers = useRef<any[]>([]);

  const [currentX, setCurrentX] = useState("");
  const [currentY, setCurrentY] = useState("");

  const setDefaultLocation = () => {
    const lat = 35.503777640163364;
    const lng = 128.7465438723983;
    const address = "밀양시청";

    setCurrentX(String(lng));
    setCurrentY(String(lat));
    setCurrentLocation(address);
    setLocationError("");

    if (!mapInstance.current) return;

    const pos = new window.kakao.maps.LatLng(lat, lng);
    mapInstance.current.setCenter(pos);

    markers.current.forEach((m) => m.setMap(null));
    markers.current = [];

    const marker = new window.kakao.maps.Marker({ position: pos });
    marker.setMap(mapInstance.current);
    markers.current.push(marker);
  };

  /* =========================
     현재 위치 가져오기
  ========================= */
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setCurrentLocation("위치 서비스를 지원하지 않아 기본 위치로 설정됩니다");
      setDefaultLocation();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCurrentX(String(lng));
        setCurrentY(String(lat));
        setLocationError("");

        if (!mapInstance.current) return;

        const loc = new window.kakao.maps.LatLng(lat, lng);
        mapInstance.current.setCenter(loc);

        markers.current.forEach((m) => m.setMap(null));
        markers.current = [];

        const marker = new window.kakao.maps.Marker({ position: loc });
        marker.setMap(mapInstance.current);
        markers.current.push(marker);

        const geocoder = new window.kakao.maps.services.Geocoder();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        geocoder.coord2Address(lng, lat, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setCurrentLocation(result[0].address.address_name);
          } else {
            setCurrentLocation(
              `현재 위치 (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
            );
          }
        });
      },
      () => {
        setLocationError("PERMISSION_DENIED");
        setCurrentLocation("위치 권한이 거부되어 기본 위치로 설정됩니다");
        setDefaultLocation();
      },
    );
  };

  /* =========================
     지도 초기화
  ========================= */
  // useEffect(() => {
  //   if (!window.kakao || !window.kakao.maps) return;

  //   const init = () => {
  //     mapInstance.current = new window.kakao.maps.Map(mapRef.current, {
  //       center: new window.kakao.maps.LatLng(37.555946, 126.972317),
  //       level: 3,
  //     });

  //     ps.current = new window.kakao.maps.services.Places();
  //     getCurrentLocation();
  //   };

  //   if (window.kakao.maps.services) {
  //     init();
  //   } else {
  //     const timer = setInterval(() => {
  //       if (window.kakao.maps.services) {
  //         clearInterval(timer);
  //         init();
  //       }
  //     }, 100);

  //     setTimeout(() => clearInterval(timer), 10000);
  //   }
  // }, []);

  useEffect(() => {
    if (!window.kakao || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 5,
      });

      // ✅ 반드시 저장
      mapInstance.current = map;

      // ✅ 위치 서비스 객체
      ps.current = new window.kakao.maps.services.Places();

      // ✅ 여기서 위치 로직 실행
      getCurrentLocation();
    });
  }, []);
  return (
    <div className="mx-auto flex h-screen max-w-[785px] flex-col bg-gray-100">
      <audio src="/kakaot/audio/어디로 갈까요를 클릭 해주세요.m4a" autoPlay />

      {/* HEADER */}
      <header className="z-20 flex items-center gap-3 border-b bg-white px-4 py-3 shadow">
        <button onClick={() => navigate(-1)} className="text-lg font-bold">
          ←
        </button>
        <h1 className="text-lg font-semibold text-gray-800">길찾기</h1>
      </header>

      {/* MAP */}
      <div className="relative flex-1">
        <div ref={mapRef} className="h-full w-full" />

        {/* 위치 오류 안내 */}
        {locationError && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40">
            <div className="w-[90%] rounded-xl bg-white p-6 text-center">
              <p className="mb-4 text-base font-medium text-gray-700">
                {currentLocation}
              </p>

              {locationError === "PERMISSION_DENIED" && (
                <div className="mb-4 text-sm text-gray-600">
                  <p className="font-semibold">🔒 위치 권한 허용 방법</p>
                  <p>주소창 옆 🔒 → 위치 → 허용</p>
                  <p>페이지 새로고침</p>
                </div>
              )}

              <button
                onClick={getCurrentLocation}
                className="mt-2 rounded-full bg-blue-500 px-6 py-3 text-white"
              >
                위치 정보 다시 가져오기
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SEARCH INPUT */}
      <div className="bg-white px-4 py-3 shadow-inner">
        <div className="mb-2 flex items-center rounded-lg bg-gray-100 px-4 py-3">
          <span className="mr-3 h-3 w-3 rounded-full bg-blue-500" />
          <input
            className="flex-1 bg-transparent text-lg outline-none"
            value={currentLocation}
            placeholder="현재 위치"
            readOnly
            onClick={() =>
              navigate("/miryang/kakaot/search", {
                state: {
                  searchType: "origin",
                  currentX,
                  currentY,
                  currentAddress: currentLocation,
                },
              })
            }
          />
        </div>

        <div className="flex items-center rounded-lg bg-gray-100 px-4 py-3">
          <span className="mr-3 h-3 w-3 rounded-full bg-red-500" />
          <input
            className="flex-1 bg-transparent text-lg text-red-500 outline-none"
            value={destination}
            placeholder="어디로 갈까요?"
            readOnly
            onClick={() =>
              navigate("/miryang/kakaot/search", {
                state: {
                  searchType: "destination",
                  currentX,
                  currentY,
                  currentAddress: currentLocation,
                },
              })
            }
          />
        </div>
      </div>

      {/* GUIDE + HOME */}
      <KakaoTGuideBtn setModal={setModal} />
      {modal && <KakaoTGuide setModal={setModal} />}
      <HomeButton />
    </div>
  );
}
