import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

export default function OnboardingPage() {
  const [onModal, setOnModal] = useState(true);
  const navigate = useNavigate();

  const handleSkip = () => {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 30);
    localStorage.setItem("skipOnboarding", expireDate.toISOString());
    navigate("/miryang/ddangyo/main/home");
  };

  const handleStart = () => {
    navigate("/miryang/ddangyo/main/home");
  };

  return (
    <MobileLayout>
      <div className="flex h-full flex-col">
        {/* 메인 이미지 영역 */}
        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-[#ffe5d6] to-[#ffd4b3] p-5 max-[480px]:p-4">
          <img
            src="/ddangyo/onboarding.jpg"
            alt="땡겨요 온보딩"
            className="h-[70%] w-[70%] object-cover max-w-full max-h-full"
          />
        </div>

        <audio src="/ddangyo/voice/5.mp3" autoPlay />

        {/* 하단 버튼 영역 */}
        <div className="grid grid-cols-2 bg-white">
          <button
            onClick={handleSkip}
            className="
              border-r border-[#e0e0e0]
              bg-[#f8f9fa]
              py-5
              text-[16px]
              font-medium
              text-[#666]
              transition
              hover:bg-[#e9ecef]
              hover:text-[#333]
              active:bg-[#dee2e6]
              max-[480px]:py-4
              max-[480px]:text-[15px]
            "
          >
            한달간 보지않기
          </button>

          <button
            onClick={handleStart}
            className="
              bg-[#ff6b35]
              py-5
              text-[16px]
              font-semibold
              text-white
              transition
              hover:-translate-y-[1px]
              hover:bg-[#e55a2e]
              active:translate-y-0
              active:bg-[#d14e26]
              max-[480px]:py-4
              max-[480px]:text-[15px]
            "
          >
            시작하기
          </button>
        </div>
      </div>

      {/* 가이드 모달 */}
      <CommonModal
        onModal={onModal}
        setOnModal={setOnModal}
        title="땡겨요 이용하기"
        steps={[
          "해당 페이지는 광고 페이지입니다",
          "시작하기 혹은 한달간 보지않기를 선택해주세요",
        ]}
      />

      {/* 사용법 다시보기 */}
      <button
        onClick={() => setOnModal(true)}
        className="
          fixed
          bottom-[200px]
          right-[20px]
          rounded-full
          bg-[#ff6b35]
          px-4
          py-2.5
          text-[14px]
          font-semibold
          text-white
          shadow
          hover:bg-[#e55a2e]
        "
      >
        사용법 다시보기
      </button>

      <HomeButton />
    </MobileLayout>
  );
}
