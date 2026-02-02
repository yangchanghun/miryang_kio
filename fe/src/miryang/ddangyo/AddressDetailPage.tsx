import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

declare global {
  interface Window {
    kakao: {
      maps: any;
    };
  }
}

export default function AddressDetailPage() {
  const [onModal, setOnModal] = useState(true);
  const [detailAddress, setDetailAddress] = useState("");
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<unknown>(null);

  const addressInfo = {
    jibunAddress: localStorage.getItem("address") || "밀양시청",
    lat: Number(localStorage.getItem("latitude")) || 37.6176,
    lng: Number(localStorage.getItem("longtitude")) || 126.9227,
  };
  function initializeMap() {
    if (!mapRef.current || !window.kakao) return;

    const map = new window.kakao.maps.Map(mapRef.current, {
      center: new window.kakao.maps.LatLng(addressInfo.lat, addressInfo.lng),
      level: 3,
    });

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(addressInfo.lat, addressInfo.lng),
      draggable: true,
    });

    marker.setMap(map);
    markerRef.current = marker;
  }
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      setIsMapLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!isMapLoaded) return;
    initializeMap();
  }, [isMapLoaded]);

  /* ✅ function 선언 (호이스팅 OK) */

  const handleSubmit = () => {
    localStorage.setItem("detailaddress", detailAddress);
    navigate("/miryang/ddangyo/onboard");
  };
  return (
    <MobileLayout>
      <div className="flex h-full flex-col bg-[#f8f9fa]">
        {/* 지도 영역 */}
        <div className="relative border-b border-[#e0e0e0] bg-white">
          <div ref={mapRef} className="w-full h-[300px] max-[480px]:h-[250px]">
            {!isMapLoaded && (
              <div className="flex h-full w-full items-center justify-center border border-dashed border-[#ccc] bg-[#f5f5f5]">
                <div className="text-center text-[#666]">
                  <div className="mx-auto mb-3 h-[32px] w-[32px] rounded-full border-[3px] border-[#f3f3f3] border-t-[#ff6b35] animate-spinSlow" />
                  <p className="text-[14px]">지도를 불러오는 중...</p>
                </div>
              </div>
            )}
          </div>

          <div className="absolute left-3 right-3 top-3 z-10">
            <div className="rounded-[6px] bg-black/80 px-3 py-2 text-center text-[12px] text-white backdrop-blur max-[480px]:px-2 max-[480px]:py-1.5 max-[480px]:text-[11px]">
              지도를 움직여 위치를 조정해주세요
            </div>
          </div>
        </div>

        <audio src="/ddangyo/voice/4.mp3" autoPlay />

        {/* 주소 정보 */}
        <div className="flex flex-1 flex-col gap-6 px-5 py-6 max-[480px]:px-4 max-[480px]:py-5">
          <div className="rounded-[12px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <h2 className="mb-3 text-[18px] font-bold leading-[1.4] text-[#333] max-[480px]:text-[16px]">
              {addressInfo.jibunAddress}
            </h2>
          </div>

          <div className="rounded-[12px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <input
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
              placeholder="상세주소를 입력해주세요. (건물명,동,호)"
              maxLength={100}
              className="w-full rounded-[12px] border-[2px] border-[#e0e0e0] bg-[#f8f9fa] p-4 text-[16px] text-[#333] placeholder:text-[#999] transition focus:border-[#ff6b35] focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,107,53,0.1)] max-[480px]:p-3.5 max-[480px]:text-[15px]"
            />

            <div className="mt-2 flex items-center justify-between">
              <span className="text-[12px] text-[#888]">
                예: 101동 1501호, 3층, B1층 등
              </span>
              <span className="text-[12px] text-[#999]">
                {detailAddress.length}/100
              </span>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="border-t border-[#e0e0e0] bg-white px-5 pb-5 pt-4 max-[480px]:px-4 max-[480px]:pb-4">
          <button
            onClick={handleSubmit}
            className="w-full rounded-[12px] bg-[#ff6b35] py-4 text-[16px] font-semibold text-white transition hover:-translate-y-[1px] hover:bg-[#e55a2e] hover:shadow-[0_4px_12px_rgba(255,107,53,0.3)] active:translate-y-0 active:bg-[#d14e26] max-[480px]:py-3.5 max-[480px]:text-[15px]"
          >
            주소등록
          </button>
        </div>
      </div>

      <CommonModal
        onModal={onModal}
        setOnModal={setOnModal}
        title="땡겨요 이용하기"
        steps={["상세 주소를 입력해주세요!", "주소등록을 선택해주세요!"]}
      />

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-[200px] right-[20px] rounded-full bg-[#ff6b35] px-4 py-2.5 text-[14px] font-semibold text-white shadow hover:bg-[#e55a2e]"
      >
        사용법 다시보기
      </button>

      <HomeButton />
    </MobileLayout>
  );
}
