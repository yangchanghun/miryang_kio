import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const carriers = [
  { id: "skt", name: "SK telecom", logo: "/goverment/icon/sktelecom.png" },
  { id: "kt", name: "KT", logo: "/goverment/icon/kt.png" },
  { id: "lgu", name: "LG U+", logo: "/goverment/icon/lgu.png" },
  { id: "altools", name: "알뜰폰", logo: "/goverment/icon/al.jpg" },
];

const authMethods = [
  { id: "sms", name: "개인정보이용동의", required: true },
  { id: "credit", name: "고유식별정보처리동의", required: true },
  { id: "ipinCheck", name: "서비스이용약관동의", required: true },
  { id: "ipinReg", name: "통신사이용약관동의", required: true },
];

const GovernmentPassAuth: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const [agreements, setAgreements] = useState<Record<string, boolean>>(
    Object.fromEntries(authMethods.map((m) => [m.id, false])),
  );

  const allRequiredChecked = useMemo(
    () => authMethods.filter((m) => m.required).every((m) => agreements[m.id]),
    [agreements],
  );

  const someChecked = useMemo(() => {
    const any = authMethods.some((m) => agreements[m.id]);
    return any && !allRequiredChecked;
  }, [agreements, allRequiredChecked]);

  const masterRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (masterRef.current) {
      masterRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  const toggleAll = () => {
    const next = !allRequiredChecked;
    setAgreements(Object.fromEntries(authMethods.map((m) => [m.id, next])));
  };

  const toggleOne = (id: string) => {
    setAgreements((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const guard = () => {
    if (!allRequiredChecked) {
      alert("필수 약관에 모두 동의해 주세요.");
      return false;
    }
    return true;
  };

  const handlePassAuth = () => {
    if (!selectedCarrier) {
      alert("통신사를 선택해주세요.");
      return;
    }
    if (!guard()) return;
    navigate("/miryang/goverment/mobileregister/basicinfo");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white">
      <audio src="/goverment/voice/first/3.mp3" autoPlay />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <button
          onClick={() => navigate("/miryang/goverment/mobileregister/term")}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          ←
        </button>
        <h1 className="text-lg font-semibold">본인인증</h1>
        <button
          onClick={() => navigate("/miryang/goverment/mobileregister/term")}
          className="p-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-10">
        {/* PASS Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 text-white px-6 py-2 rounded font-extrabold tracking-widest">
            PASS
          </div>
        </div>

        <h2 className="text-[30px] font-bold mb-8">
          이용중이신 통신사를 선택해주세요.
        </h2>

        {/* Carrier */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {carriers.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCarrier(c.id)}
              className={`mx-auto w-[160px] h-[160px] rounded-full border-2
                flex items-center justify-center transition
                ${
                  selectedCarrier === c.id
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300"
                }`}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="w-24 h-24 object-contain"
              />
            </button>
          ))}
        </div>

        {/* Agreements */}
        <div className="space-y-6">
          {/* Master */}
          <label className="flex items-center gap-4 text-[22px] font-semibold">
            <input
              ref={masterRef}
              type="checkbox"
              checked={allRequiredChecked}
              onChange={toggleAll}
              className="hidden"
            />
            <span
              className={`w-7 h-7 flex items-center justify-center rounded-full border-2
              ${
                allRequiredChecked
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300"
              }`}
            >
              ✓
            </span>
            전체 동의하기
          </label>

          <div className="grid grid-cols-2 gap-6">
            {authMethods.map((m) => (
              <label
                key={m.id}
                className="flex items-center gap-4 text-[20px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={agreements[m.id]}
                  onChange={() => toggleOne(m.id)}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2
                  ${
                    agreements[m.id]
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300"
                  }`}
                >
                  ✓
                </span>
                <span>
                  {m.name}
                  {m.required && (
                    <span className="text-red-500 font-bold"> (필수)</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      </main>

      {/* Buttons */}
      <div className="border-t px-6 py-6 space-y-4">
        <button
          onClick={handlePassAuth}
          disabled={!selectedCarrier || !allRequiredChecked}
          className={`w-full py-4 rounded-lg text-lg font-bold
            ${
              selectedCarrier && allRequiredChecked
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          PASS로 인증하기
        </button>
      </div>

      {/* Guide */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px]
                   bg-blue-500 text-white px-4 py-2 rounded-full shadow"
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "통신사를 선택해주세요.",
            "약관 전체 동의 후 PASS로 인증하기를 눌러주세요.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentPassAuth;
