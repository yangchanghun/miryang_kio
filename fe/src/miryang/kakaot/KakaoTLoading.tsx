import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoTLoading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const start = location?.state?.start ?? "서울역";
  const dest = location?.state?.dest ?? "김포공항";

  const mapRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializeMap = useCallback(() => {
    try {
      if (!window.kakao?.maps) {
        throw new Error("카카오 지도 API가 로드되지 않았습니다.");
      }
      if (!mapRef.current) {
        throw new Error("지도 컨테이너를 찾을 수 없습니다.");
      }

      const mapOption = {
        center: new window.kakao.maps.LatLng(37.555946, 126.972317),
        level: 3,
      };

      mapInstance.current = new window.kakao.maps.Map(
        mapRef.current,
        mapOption,
      );

      setMapLoaded(true);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setMapLoaded(false);
    }
  }, []);

  useEffect(() => {
    const mapTimer = setTimeout(initializeMap, 100);
    const redirectTimer = setTimeout(() => {
      navigate("/miryang/kakaot/grab");
    }, 5000);

    return () => {
      clearTimeout(mapTimer);
      clearTimeout(redirectTimer);
    };
  }, [initializeMap, navigate]);

  return (
    <div className="mx-auto flex h-screen max-w-[785px] flex-col bg-gray-100 font-sans">
      {/* MAP */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-gray-200">
        <div ref={mapRef} className="h-full w-full" />

        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <div className="text-center text-gray-600">
              {error ? (
                <>
                  <h3 className="mb-3 text-lg font-semibold">
                    ⚠️ 지도 로딩 실패
                  </h3>
                  <p className="mb-4 text-sm">{error}</p>
                  <button
                    onClick={initializeMap}
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    다시 시도
                  </button>
                </>
              ) : (
                <>
                  <h3 className="mb-2 animate-bounce text-lg font-semibold">
                    🗺️ 지도를 불러오는 중...
                  </h3>
                  <p className="text-sm">잠시만 기다려주세요</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* MAP BUTTONS */}
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            onClick={() => navigate("/miryang/kakaot/taxi")}
            className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-gray-100"
          >
            🏠
          </button>
          <button
            onClick={() => navigate("/miryang/kakaot/taxi")}
            className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-gray-100"
          >
            호출취소
          </button>
        </div>

        {/* CENTER MARKER */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow">
            🚩 <span>5초 후 자동 매칭됩니다...</span>
          </div>
        </div>
      </div>

      {/* INFO PANEL */}
      <div className="flex flex-1 flex-col justify-start border-t bg-white px-5 py-6">
        <h3 className="mb-5 text-lg font-semibold leading-snug text-gray-900">
          최대 8분 거리의 기사에게
          <br />
          요청 중입니다..
        </h3>

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
          📍 <span>{start}</span>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-red-500">
          🏪 <span>{dest}</span>
        </div>
      </div>
    </div>
  );
};

export default KakaoTLoading;
