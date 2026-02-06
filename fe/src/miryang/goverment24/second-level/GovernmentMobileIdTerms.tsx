import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";
const GovernmentMobileIdTerms: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);
  const [agreements, setAgreements] = useState({
    electronic: false,
    usage: false,
    personalInfo: false,
  });

  const toggleAgreement = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isAllAgreed =
    agreements.electronic && agreements.usage && agreements.personalInfo;

  const handleCancel = () => {
    navigate("/miryang/goverment/main");
  };

  const handleConfirm = () => {
    if (!isAllAgreed) return;
    navigate("/miryang/goverment/mobileregister/passauth");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white">
      <audio src="/goverment/voice/first/2.mp3" autoPlay />

      {/* Header */}
      <header className="border-b px-6 py-4 flex justify-center">
        <div className="flex items-center gap-3">
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부 로고"
            className="w-11 h-11 rounded-full"
          />
          <span className="text-[26px] font-medium">
            주민등록증 모바일 확인서비스
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-10">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-[34px] font-bold text-gray-800 leading-snug">
            주민등록증
          </h2>
          <h2 className="text-[34px] font-bold text-gray-800 leading-snug">
            모바일 확인서비스 약관에
          </h2>
          <h2 className="text-[34px] font-bold text-gray-800 leading-snug">
            동의해주세요.
          </h2>
        </div>

        {/* Terms */}
        <div className="space-y-6">
          {[
            { key: "electronic", label: "전자약관동의" },
            { key: "usage", label: "이용약관(필수)" },
            {
              key: "personalInfo",
              label: "개인정보 수집 및 이용 동의(필수)",
            },
          ].map((item) => (
            <label
              key={item.key}
              className="flex items-center gap-4 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={agreements[item.key as keyof typeof agreements]}
                onChange={() =>
                  toggleAgreement(item.key as keyof typeof agreements)
                }
                className="hidden"
              />

              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2
                ${
                  agreements[item.key as keyof typeof agreements]
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300"
                }`}
              >
                ✓
              </span>

              <span className="text-[18px] font-medium text-gray-800">
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </main>

      {/* Bottom Buttons */}
      <div className="border-t px-6 py-6 flex gap-4">
        <button
          onClick={handleCancel}
          className="flex-1 py-4 rounded-lg text-lg font-bold
                     bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          취소
        </button>

        <button
          onClick={handleConfirm}
          disabled={!isAllAgreed}
          className={`flex-1 py-4 rounded-lg text-lg font-bold transition
            ${
              isAllAgreed
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          확인
        </button>
      </div>

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
          guideSteps={["약관에 모두 동의한 후 확인 버튼을 눌러주세요."]}
        />
      )}
    </div>
  );
};

export default GovernmentMobileIdTerms;
