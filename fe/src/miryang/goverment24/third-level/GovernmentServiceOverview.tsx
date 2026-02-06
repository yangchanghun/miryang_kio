import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const GovernmentServiceOverview = () => {
  const [guide, setGuide] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/miryang/goverment/main");
  };

  const handleApply = () => {
    navigate("/miryang/goverment/overview/document");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white">
      <audio src="/goverment/voice/third/2.mp3" autoPlay />

      {/* Header */}
      <header className="border-b bg-white px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부24"
            className="w-[75px] h-[75px] rounded-full"
          />
          <span className="text-[26px] font-bold text-gray-800">정부24</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h1 className="text-[26px] font-semibold text-gray-800">
            주민등록표 등본(초본) 발급
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-6">
        <h2 className="text-[26px] font-bold border-b pb-3 mb-6">
          서비스 개요
        </h2>

        <div className="divide-y">
          {/* 신청방법 */}
          <section className="py-6">
            <h3 className="text-[25px] font-semibold mb-3">신청방법</h3>
            <p className="text-[20px] text-gray-600">
              인터넷, 방문, 우편발급기
            </p>
          </section>

          {/* 신청자격 */}
          <section className="py-6">
            <h3 className="text-[25px] font-semibold mb-3">신청자격</h3>
            <p className="text-[20px] text-gray-600">
              본인 또는 대리인(오헌인은 대리인 신청 불가)
            </p>
          </section>

          {/* 발급서류 */}
          <section className="py-6">
            <h3 className="text-[25px] font-semibold mb-3">발급서류</h3>
            <p className="text-[20px] text-gray-600">
              주민등록표 등본(초본)
              <br />
              (주민등록표 사용자격 : 발신사 18, 19호)
            </p>
          </section>

          {/* 처리기간 */}
          <section className="py-6">
            <h3 className="text-[25px] font-semibold mb-3">처리기간</h3>
            <p className="text-[20px] text-gray-600">
              즉시 (근무시간 내 3시간)
            </p>

            <div className="flex items-center gap-2 mt-3 text-blue-600 text-sm cursor-pointer">
              <span>ℹ️</span>
              <span>처리기간 계산 방법</span>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Button */}
      <div className="border-t bg-white px-6 py-6">
        <button
          onClick={handleApply}
          className="w-full py-5 rounded-xl
                     bg-blue-600 text-white
                     text-[18px] font-bold
                     hover:bg-blue-700"
        >
          발급하기
        </button>
      </div>

      {/* Guide */}
      <button
        className="fixed right-5 bottom-[250px] bg-blue-500 text-white px-4 py-2 rounded-full shadow"
        onClick={() => setGuide(true)}
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "주민등록표 등본 발급을 위해 발급하기 버튼을 선택해주세요.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentServiceOverview;
