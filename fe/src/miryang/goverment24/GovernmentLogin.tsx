import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

const GovernmentLogin: React.FC = () => {
  const navigate = useNavigate();
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [guide, setGuide] = useState(false);

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-white">
      <audio src="/goverment/voice/zero/3.mp3" autoPlay />

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <button className="p-1">
          <svg width="24" height="24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h1 className="text-lg font-semibold text-gray-800">로그인</h1>

        <div className="flex gap-3 text-gray-500">
          <button>🔍</button>
          <button>☰</button>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-8">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-[35px] font-extrabold leading-tight text-gray-800">
            로그인 방식을
          </h2>
          <h2 className="text-[35px] font-extrabold leading-tight text-gray-800">
            선택해 주세요.
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <span className="flex-1 font-medium text-gray-700">
            정부 통합로그인 <span className="text-blue-500">ⓘ</span>
          </span>

          <button
            onClick={() => setIsToggleOn(!isToggleOn)}
            className={`relative w-12 h-7 rounded-full transition
              ${isToggleOn ? "bg-blue-500" : "bg-gray-300"}`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition
                ${isToggleOn ? "translate-x-5" : ""}`}
            />
          </button>

          <span className="text-sm text-gray-500 min-w-[40px]">
            {isToggleOn ? "사용" : "미사용"}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex border rounded-lg overflow-hidden mb-8">
          <button className="flex-1 py-4 bg-blue-800 text-white font-medium">
            개인
          </button>
          <button className="flex-1 py-4 bg-gray-100 text-gray-600">
            법인
          </button>
        </div>

        {/* Login Options */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { label: "모바일 신분증" },
            {
              label: "간편인증",
              onClick: () => navigate("/miryang/goverment/cert"),
            },
            { label: "공동인증서" },
            { label: "금융인증서" },
            { label: "민간ID" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className="flex flex-col items-center justify-center
                         p-6 rounded-xl border bg-gray-50
                         hover:bg-gray-100 hover:border-blue-500
                         transition"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center text-gray-500">
                🔐
              </div>
              <span className="text-[25px] font-bold text-gray-800 text-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-4 mb-10">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-sm text-gray-700">
              어떤 정부 통합인증(Any-ID) 사용자가 아니신가요?
            </span>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
              사용자 등록 →
            </button>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-sm text-gray-700">정부 통합인증(Any-ID)</span>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
              사용자 관리 →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t">
          <span className="font-semibold text-blue-600">정부24 로그인</span>
        </div>
      </main>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px]
                   bg-blue-500 text-white px-4 py-2
                   rounded-full shadow"
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={["간편인증 버튼을 선택해주세요"]}
        />
      )}
    </div>
  );
};

export default GovernmentLogin;
