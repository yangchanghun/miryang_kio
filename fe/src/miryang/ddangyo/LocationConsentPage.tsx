import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

export default function LocationConsentPage() {
  const navigate = useNavigate();
  const [onModal, setOnModal] = useState(true);

  return (
    <MobileLayout>
      <div className="flex h-full flex-col bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
        <div className="flex flex-1 flex-col justify-between px-6 pt-10 pb-6 text-center max-[480px]:px-5 max-[480px]:pt-8 max-[480px]:pb-5">
          {/* 헤더 */}
          <h1 className="mb-5 text-[22px] font-bold leading-[1.4] text-[#333] max-[480px]:text-[20px]">
            우리동네 맛집을 찾으려면
            <br />
            약관 동의가 필요해요
          </h1>

          <audio src="/ddangyo/voice/2.mp3" autoPlay />

          {/* 일러스트 */}
          <div className="my-10 flex flex-1 items-center justify-center">
            <div className="relative h-[280px] w-[280px] max-[480px]:h-[240px] max-[480px]:w-[240px]">
              {/* 지도 */}
              <div className="absolute bottom-0 left-1/2 h-[120px] w-[200px] -translate-x-1/2 rounded-[12px] bg-[#e8f5e8] shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-[480px]:h-[100px] max-[480px]:w-[160px]">
                <div className="absolute top-1/2 h-[12px] w-full -translate-y-1/2 bg-[#ddd]" />
                <div className="absolute left-1/2 h-full w-[12px] -translate-x-1/2 bg-[#ddd]" />

                <div className="absolute left-[20px] top-[15px] h-[40px] w-[30px] rounded-[2px] bg-[#ff6b4a]" />
                <div className="absolute right-[25px] top-[20px] h-[35px] w-[25px] rounded-[2px] bg-[#4a90e2]" />

                <div className="absolute left-[60px] top-[25px] h-[16px] w-[16px] rounded-full bg-[#4caf50]" />
                <div className="absolute bottom-[25px] right-[60px] h-[16px] w-[16px] rounded-full bg-[#4caf50]" />
              </div>

              {/* 위치 핀 */}
              <div className="absolute left-[50px] top-[20px] z-10 animate-bouncePin">
                <div className="relative">
                  <div className="h-[40px] w-[40px] rounded-full border-[4px] border-white bg-[#ff1744] shadow-[0_2px_8px_rgba(0,0,0,0.2)]" />
                  <div className="absolute bottom-[-8px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#ff1744]" />
                </div>
              </div>

              {/* 펭귄 */}
              <div className="absolute right-[20px] top-[80px]">
                <div className="relative h-[100px] w-[80px] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#87ceeb] max-[480px]:h-[90px] max-[480px]:w-[70px]">
                  <div className="absolute left-1/2 top-[20px] h-[60px] w-[50px] -translate-x-1/2 rounded-full bg-white" />

                  <div className="absolute left-1/2 top-[-15px] h-[60px] w-[60px] -translate-x-1/2 rounded-full border-[3px] border-[#87ceeb] bg-white max-[480px]:h-[55px] max-[480px]:w-[55px]">
                    <div className="absolute left-[15px] top-[20px] h-[8px] w-[8px] rounded-full bg-[#333]" />
                    <div className="absolute right-[15px] top-[20px] h-[8px] w-[8px] rounded-full bg-[#333]" />

                    <div className="absolute left-1/2 top-[28px] h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#ffa726]" />

                    <div className="absolute left-[8px] top-[32px] h-[8px] w-[12px] rounded-full bg-[#ffb3ba]" />
                    <div className="absolute right-[8px] top-[32px] h-[8px] w-[12px] rounded-full bg-[#ffb3ba]" />
                  </div>

                  <div className="absolute left-[-8px] top-[30px] h-[40px] w-[20px] rotate-[-20deg] rounded-full bg-[#87ceeb]" />
                  <div className="absolute right-[-8px] top-[30px] h-[40px] w-[20px] rotate-[20deg] rounded-full bg-[#87ceeb]" />
                </div>
              </div>
            </div>
          </div>

          {/* 동의 항목 */}
          <div className="mb-6">
            <div className="flex items-center py-4 text-left">
              <div className="mr-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#ff6b35] text-[14px] font-bold text-white">
                ✓
              </div>
              <span className="text-[15px] text-[#333] max-[480px]:text-[14px]">
                [필수] 만 14세 이상입니다.
              </span>
            </div>

            <div
              className="flex cursor-pointer items-center rounded-[8px] py-4 text-left hover:bg-black/5"
              onClick={() => console.log("위치기반 서비스 동의")}
            >
              <div className="mr-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#ff6b35] text-[14px] font-bold text-white">
                ✓
              </div>
              <span className="flex-1 text-[15px] text-[#333] max-[480px]:text-[14px]">
                [필수] 땡겨요 위치기반 서비스 이용 동의
              </span>
              <span className="ml-2 text-[20px] text-[#999]">›</span>
            </div>
          </div>

          {/* 시작 버튼 */}
          <button
            onClick={() => navigate("/miryang/ddangyo/address/search")}
            className="w-full rounded-[25px] bg-[#ff6b35] py-[18px] text-[16px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#e55a2e] active:translate-y-0 active:bg-[#d14e26] max-[480px]:py-4 max-[480px]:text-[15px]"
          >
            동의하고 땡겨요 시작하기
          </button>
        </div>
      </div>

      <CommonModal
        onModal={onModal}
        setOnModal={setOnModal}
        title="땡겨요 이용하기"
        steps={[
          "현재 위치를 알아야 우리 동네 맛집을 찾을 수 있어요",
          "동의하고 땡겨요 시작하기를 선택해주세요",
        ]}
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
