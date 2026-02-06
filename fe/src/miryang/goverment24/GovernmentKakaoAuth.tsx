import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

type Step = "form" | "terms";

interface FormData {
  provider: string;
  name: string;
  birthdate: string;
  phoneNumber: string;
}

interface AgreementData {
  personalInfo: boolean;
  thirdParty: boolean;
  publicAuth: boolean;
}

const GovernmentKakaoAuth: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>("form");

  const [formData, setFormData] = useState<FormData>({
    provider: "카카오톡",
    name: "",
    birthdate: "",
    phoneNumber: "",
  });

  const [agreementData, setAgreementData] = useState<AgreementData>({
    personalInfo: false,
    thirdParty: false,
    publicAuth: false,
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAgreementChange = (field: keyof AgreementData) => {
    setAgreementData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleNextStep = () => {
    if (!formData.name) return alert("이름을 입력해주세요");
    if (!formData.birthdate) return alert("생년월일을 입력해주세요");
    if (!formData.phoneNumber) return alert("핸드폰번호를 입력해주세요");
    setCurrentStep("terms");
  };

  const handleFinalSubmit = () => {
    localStorage.setItem("name", formData.name);
    localStorage.setItem("birth", formData.birthdate);
    navigate("/miryang/goverment/kakaosuccess");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-white">
      <audio src="/goverment/voice/zero/5.mp3" autoPlay />

      {currentStep === "form" ? (
        /* ================= FORM ================= */
        <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-700">
          {/* Header */}
          <header className="flex justify-end px-4 py-4">
            <div className="flex items-center gap-2 text-white">
              <img
                src="/goverment/icon/goverment_icon.png"
                className="w-8 h-8 rounded-full bg-white"
              />
              <span className="font-semibold">정부24</span>
            </div>
          </header>

          {/* Form */}
          <main className="bg-gray-100 rounded-t-2xl px-5 py-8 min-h-[calc(100vh-64px)]">
            {/* Provider */}
            <div className="mb-6">
              <label className="block mb-2 text-base font-semibold text-gray-800">
                민간인증서
              </label>
              <div className="flex items-center gap-3 bg-white border rounded-lg p-4">
                <img src="/goverment/icon/kakaotalk.png" className="w-8 h-8" />
                <span className="text-gray-800 font-medium">카카오톡</span>
              </div>
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">이름</label>
              <input
                className="w-full p-4 border rounded-lg text-lg"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            {/* Birth */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">생년월일</label>
              <input
                className="w-full p-4 border rounded-lg text-lg"
                placeholder="YYMMDD"
                maxLength={6}
                value={formData.birthdate}
                onChange={(e) => handleInputChange("birthdate", e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="mb-8">
              <label className="block mb-2 font-semibold">휴대폰번호</label>
              <div className="flex gap-3">
                <div className="flex items-center justify-between w-24 p-4 border rounded-lg bg-white">
                  <span>010</span>▼
                </div>
                <input
                  className="flex-1 p-4 border rounded-lg text-lg"
                  placeholder="나머지 번호 입력"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                />
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className="w-full py-4 bg-blue-600 text-white
                         text-lg font-bold rounded-lg
                         hover:bg-blue-700 transition"
            >
              다음
            </button>
          </main>
        </div>
      ) : (
        /* ================= TERMS ================= */
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="relative px-4 py-4 border-b">
            <button
              onClick={() => setCurrentStep("form")}
              className="absolute right-4 top-4 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-center text-lg font-semibold">이용약관 동의</h2>
          </header>

          {/* Terms */}
          <div className="flex-1 px-5 py-6 space-y-6">
            {[
              { key: "personalInfo", label: "개인정보 이용 동의" },
              { key: "thirdParty", label: "제3자정보제공동의" },
              { key: "publicAuth", label: "공공실명정보처리동의" },
            ].map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center border-b pb-4"
              >
                <label className="flex items-center gap-3 text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={agreementData[item.key as keyof AgreementData]}
                    onChange={() =>
                      handleAgreementChange(item.key as keyof AgreementData)
                    }
                    className="w-5 h-5"
                  />
                  {item.label}
                </label>
                <button className="text-blue-600 underline">보기</button>
              </div>
            ))}
          </div>

          <button
            disabled={
              !agreementData.personalInfo ||
              !agreementData.thirdParty ||
              !agreementData.publicAuth
            }
            onClick={handleFinalSubmit}
            className="m-5 py-4 rounded-lg text-lg font-bold
                       text-white transition
                       disabled:bg-gray-300
                       bg-blue-600 hover:bg-blue-700"
          >
            모두 동의하고 인증요청
          </button>
        </div>
      )}

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
          guideSteps={[
            "이름, 생년월일, 전화번호를 입력 후 다음을 눌러주세요",
            "약관을 모두 동의해주세요",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentKakaoAuth;
