import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const GovernmentPasswordRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);

  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });

  const update = (key: "password" | "confirmPassword", value: string) => {
    // 숫자만 입력 허용
    if (!/^\d*$/.test(value)) return;
    setPasswords((p) => ({ ...p, [key]: value }));
  };

  const handleConfirm = () => {
    if (passwords.password.length !== 6) {
      alert("6자리 비밀번호를 입력해주세요.");
      return;
    }
    if (passwords.password !== passwords.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    navigate("/miryang/goverment/mobileregister/identity");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white">
      <audio src="/goverment/voice/first/5.mp3" autoPlay />

      {/* Header */}
      <header className="border-b px-6 py-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부 로고"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-[26px] font-medium">
            주민등록증 모바일 확인서비스
          </span>
        </div>

        <h2 className="text-[28px] font-bold mb-2">비밀번호 등록</h2>
        <p className="text-gray-600 text-[18px] leading-relaxed">
          6자리 숫자 비밀번호를 설정해주세요.
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-12 space-y-10">
        {/* Password */}
        <div>
          <label className="block text-[22px] font-semibold mb-4">
            비밀번호 입력
          </label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={passwords.password}
            onChange={(e) => update("password", e.target.value)}
            placeholder="● ● ● ● ● ●"
            className="w-full border-b-2 border-blue-500 py-4 text-[22px]
                       tracking-[0.3em] text-center outline-none"
          />
        </div>

        {/* Confirm */}
        <div>
          <label className="block text-[22px] font-semibold mb-4">
            비밀번호 확인
          </label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={passwords.confirmPassword}
            onChange={(e) => update("confirmPassword", e.target.value)}
            placeholder="● ● ● ● ● ●"
            className="w-full border-b-2 border-blue-500 py-4 text-[22px]
                       tracking-[0.3em] text-center outline-none"
          />
        </div>
      </main>

      {/* Bottom Buttons */}
      <div className="border-t px-6 py-6 flex gap-4">
        <button
          onClick={() =>
            navigate("/miryang/goverment/mobileregister/basicinfo")
          }
          className="flex-1 py-4 rounded-lg border text-[18px]"
        >
          취소
        </button>

        <button
          onClick={handleConfirm}
          className="flex-1 py-4 rounded-lg
                     bg-blue-600 text-white text-[18px] font-bold
                     hover:bg-blue-700"
        >
          확인
        </button>
      </div>

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
            "6자리 숫자 비밀번호를 입력해주세요.",
            "같은 번호를 한 번 더 입력하면 완료됩니다.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentPasswordRegistration;
