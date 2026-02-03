import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoTGrab = () => {
  const navigate = useNavigate();

  const mapRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimatedTime] = useState("8분");

  const drawPolyline = () => {
    if (!mapInstance.current) return;

    const mainPath = [
      [37.566826, 126.9786567],
      [37.5658, 126.9775],
      [37.5638, 126.9768],
      [37.5612, 126.9762],
      [37.5598, 126.9759],
      [37.5572, 126.9753],
    ].map(([lat, lng]) => new window.kakao.maps.LatLng(lat, lng));

    new window.kakao.maps.Polyline({
      map: mapInstance.current,
      path: mainPath,
      strokeWeight: 6,
      strokeColor: "#00C851",
      strokeOpacity: 0.8,
    });

    new window.kakao.maps.Polyline({
      map: mapInstance.current,
      path: mainPath,
      strokeWeight: 8,
      strokeColor: "#ffffff",
      strokeOpacity: 0.4,
      strokeStyle: "shortdash",
    });
  };

  const addMarkers = () => {
    if (!mapInstance.current) return;

    new window.kakao.maps.Marker({
      map: mapInstance.current,
      position: new window.kakao.maps.LatLng(37.566826, 126.9786567),
    });

    new window.kakao.maps.Marker({
      map: mapInstance.current,
      position: new window.kakao.maps.LatLng(37.5572, 126.9753),
    });

    new window.kakao.maps.Circle({
      map: mapInstance.current,
      center: new window.kakao.maps.LatLng(37.5625, 126.9765),
      radius: 50,
      strokeWeight: 3,
      strokeColor: "#0078FF",
      strokeOpacity: 0.8,
      fillColor: "#0078FF",
      fillOpacity: 0.3,
    });
  };

  const initializeMap = useCallback(() => {
    try {
      if (!window.kakao?.maps) {
        throw new Error("카카오 지도 API가 로드되지 않았습니다");
      }
      if (!mapRef.current) {
        throw new Error("지도 컨테이너가 없습니다");
      }

      mapInstance.current = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 4,
      });

      drawPolyline();
      addMarkers();

      setMapLoaded(true);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setMapLoaded(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(initializeMap, 100);
    return () => clearTimeout(timer);
  }, [initializeMap]);

  return (
    <div className="mx-auto flex h-screen max-w-[785px] flex-col bg-gray-100">
      {/* 음성 */}
      <audio
        src="/kakaot/audio/호출이 완료되었습니다 다시 연습하시려.m4a"
        autoPlay
      />

      {/* HEADER */}
      <header className="flex items-center justify-between border-b bg-white px-5 py-4">
        <button
          onClick={() => navigate("/miryang/kakaot/main")}
          className="rounded-lg p-2 text-xl hover:bg-gray-100"
        >
          🏠
        </button>
        <button
          onClick={() => navigate("/miryang/kakaot/taxi")}
          className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white"
        >
          호출취소
        </button>
      </header>

      {/* MAP */}
      <div className="relative h-[50vh] bg-gray-200">
        <div ref={mapRef} className="h-full w-full" />

        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center text-gray-600">
              {error ? (
                <>
                  <p className="mb-3 font-semibold">⚠️ 지도 로딩 실패</p>
                  <p className="mb-4 text-sm">{error}</p>
                  <button
                    onClick={initializeMap}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                  >
                    다시 시도
                  </button>
                </>
              ) : (
                <>
                  <p className="mb-2 animate-pulse font-semibold">
                    🗺️ 경로를 그리고 있습니다...
                  </p>
                  <p className="text-sm">잠시만 기다려주세요</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* TARGET */}
        <button className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl shadow hover:bg-gray-100">
          🎯
        </button>
      </div>

      {/* INFO */}
      <section className="flex flex-1 flex-col gap-4 overflow-y-auto border-t bg-white px-5 py-6">
        <h3 className="text-xl font-bold">탑승 위치로 오는 중</h3>

        {/* DRIVER */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-4">
          <img
            src="/kakaot/lion_profile.png"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">
              경기 34 바 4208 현대<span className="animate-pulse">...</span>
            </p>
            <p className="text-sm text-gray-600">이준열 기사님</p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={() =>
              alert("교육용 앱으로 실제 기능은 비활성화 되어 있습니다")
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border bg-gray-100 px-4 py-3 text-sm"
          >
            💬 기사님께 메시지 보내기...
          </button>
          <button
            onClick={() =>
              alert("교육용 앱으로 실제 기능은 비활성화 되어 있습니다")
            }
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 text-xl text-white"
          >
            📞
          </button>
        </div>

        {/* ROUTE INFO */}
        <div className="rounded-xl border-l-4 border-blue-500 bg-gray-100 p-4 text-sm text-gray-700">
          <p className="mb-2">🚗 예상 도착 시간: {estimatedTime}</p>
          <p>📍 현재 위치에서 500m</p>
        </div>

        <button
          onClick={() => navigate("/miryang/kakaot/complete")}
          className="mt-auto rounded-lg bg-blue-500 py-3 text-white"
        >
          교육 마치기
        </button>
      </section>
    </div>
  );
};

export default KakaoTGrab;
