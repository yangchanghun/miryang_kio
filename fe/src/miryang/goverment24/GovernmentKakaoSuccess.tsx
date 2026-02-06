import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

const GovernmentKakaoSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [guide, setGuide] = useState(false);

  const name = localStorage.getItem("name");

  const handleClose = () => {
    navigate("/miryang/goverment/kakaoauth");
  };

  const handleNext = () => {
    if (showDetails) {
      navigate("/miryang/goverment/authcomplete");
    }
  };

  return (
    <div className="relative mx-auto max-w-[1000px] min-h-screen bg-white p-5">
      <audio src="/goverment/voice/zero/6.mp3" autoPlay />

      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      {/* Content */}
      <div className="pt-10 pb-6">
        {/* Title */}
        <h1 className="text-[35px] font-semibold text-center text-gray-800 mb-8">
          카카오 인증서로 인증했습니다
        </h1>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부24"
            className="w-[100px] h-[100px] border-2 border-gray-300 bg-gray-100"
          />
          <span className="text-[35px] font-semibold text-gray-800">
            정부24
          </span>
        </div>

        {/* User Card */}
        <div className="border-y-4 border-gray-300 p-5 mb-6 space-y-3">
          <div className="grid grid-cols-[120px_1fr] text-[20px] font-extrabold">
            <span>요청구분</span>
            <span>정부24 인증서비스</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] text-[20px] font-extrabold">
            <span>받는이</span>
            <span>{name}</span>
          </div>
          <div className="grid grid-cols-[120px_1fr] text-[20px] font-extrabold">
            <span>유효일시</span>
            <span>2025.09.23 17:34:10</span>
          </div>
        </div>

        {/* Service Info */}
        <div className="mb-8 space-y-2">
          <div className="grid grid-cols-[180px_1fr]">
            <span className="text-[18px] text-gray-600">정부24 고객센터</span>
            <span className="text-[18px] font-semibold text-blue-600">
              1588-2188
            </span>
          </div>
          <div className="grid grid-cols-[180px_1fr]">
            <span className="text-[18px] text-gray-600">
              카카오 인증사 문의
            </span>
            <span className="text-[18px] font-semibold text-blue-600">
              1577-3754
            </span>
          </div>
        </div>

        {/* Agreement */}
        <div className="border-t pt-5">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-start gap-3 w-full text-left"
          >
            <input
              type="checkbox"
              checked={showDetails}
              readOnly
              className="w-5 h-5 mt-1 accent-blue-600"
            />
            <span className="text-sm text-gray-800">
              [확인] 개인정보 수집 및 이용 동의
            </span>
          </button>

          {showDetails && (
            <div className="mt-4 p-4 bg-gray-50 border rounded-lg space-y-2">
              <p className="text-sm text-gray-600">
                • 개인정보의 이용목적 : 본인확인
              </p>
              <p className="text-sm text-gray-600">
                • 이용 항목명 : 본인확인정보, 본인확인결과
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!showDetails}
        className={`w-full py-4 text-lg font-bold rounded-lg transition
          ${
            showDetails
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
      >
        다음
      </button>

      {/* Guide */}
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
          guideSteps={["약관 동의 후 인증을 완료해주세요"]}
        />
      )}
    </div>
  );
};

export default GovernmentKakaoSuccess;
