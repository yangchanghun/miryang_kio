import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainSuccessModal from "../success/MainSuccessModal";
import SignExplainBtn from "../signup/signexplain/SignExplainBtn";
import SignExplainModal from "../signup/signexplain/SignExplainModal";

interface LocationState {
  name?: string;
  email?: string;
}

const CoupangSignup5: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = (location.state as LocationState) || {};

  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  /* 휴대폰 번호 포맷 */
  const handlePhoneChange = (value: string) => {
    const numeric = value.replace(/[^0-9]/g, "");

    let formatted = numeric;
    if (numeric.length > 3 && numeric.length <= 7) {
      formatted = `${numeric.slice(0, 3)}-${numeric.slice(3)}`;
    } else if (numeric.length > 7) {
      formatted = `${numeric.slice(0, 3)}-${numeric.slice(
        3,
        7,
      )}-${numeric.slice(7, 11)}`;
    }

    setPhone(formatted);
    if (hasError && formatted.trim()) setHasError(false);
  };

  /* 인증 요청 */
  const handleVerificationRequest = () => {
    const onlyNumber = phone.replace(/[^0-9]/g, "");
    if (onlyNumber.length !== 11) {
      setHasError(true);
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    setIsVerificationSent(true);
    setHasError(false);

    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 500);
  };

  /* 다음 */
  const handleNext = () => {
    const onlyNumber = phone.replace(/[^0-9]/g, "");

    if (onlyNumber.length !== 11) {
      setHasError(true);
      return;
    }

    if (verificationCode !== generatedCode) {
      alert("인증번호가 일치하지 않습니다");
      return;
    }

    setSuccessModal(true);
    setTimeout(() => {
      localStorage.setItem("계정", JSON.stringify({ name, email, phone }));
      navigate("/miryang/coupang/signup/6");
    }, 2000);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[780px] flex-col bg-white font-sans">
      <audio src="/coupang/voice/5.mp3" autoPlay />

      {/* SMS 알림 */}
      {showNotification && (
        <div className="fixed left-1/2 top-5 z-[1000] w-[320px] -translate-x-1/2 rounded-xl bg-black/90 p-4 text-white shadow-2xl">
          <div className="mb-1 flex items-center gap-2 text-sm">
            <span>💬</span>
            <span className="font-semibold">메시지</span>
            <span className="ml-auto text-xs text-gray-400">지금</span>
          </div>
          <p className="text-sm">
            <span className="block font-semibold text-blue-400">쿠팡</span>
            인증번호는{" "}
            <strong className="text-blue-400">{generatedCode}</strong> 입니다.
          </p>
        </div>
      )}

      {/* 상단 진행 */}
      <div className="border-b px-5 pt-5">
        <div className="mb-5 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M13.5 4.5L6 12L2.5 8.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="mt-2 text-xs font-medium text-black">
              동의하기
            </span>
          </div>

          <div className="h-[2px] w-14 bg-black" />

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
              2
            </div>
            <span className="mt-2 text-xs font-medium text-black">
              정보 입력하기
            </span>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="flex-1 px-5 py-10">
        <h2 className="mb-10 text-2xl font-semibold text-gray-800">
          휴대폰번호를 입력 후 인증해주세요
        </h2>

        {/* 휴대폰 입력 */}
        <div className="mb-5">
          <div
            className={`relative flex items-center rounded-lg border-2 ${
              hasError ? "border-red-500" : "border-blue-500"
            }`}
          >
            <span className="absolute left-4 text-lg text-blue-500">📱</span>
            <input
              type="text"
              value={phone}
              placeholder="휴대폰 번호"
              onChange={(e) => handlePhoneChange(e.target.value)}
              maxLength={13}
              className="w-full bg-transparent px-4 py-4 pl-12 text-base outline-none"
            />
            <button
              onClick={handleVerificationRequest}
              className="mr-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 active:bg-gray-300"
            >
              인증 요청
            </button>
          </div>

          {hasError && (
            <p className="mt-3 text-sm text-red-500">
              ⚠ 올바른 휴대폰번호를 입력해주세요.
            </p>
          )}
        </div>

        {/* 인증번호 입력 */}
        {isVerificationSent && (
          <div className="mb-8">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                🔒
              </span>
              <input
                type="text"
                placeholder="인증번호 입력"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-4 pl-12 text-base outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {/* 정보 표시 */}
        <div className="space-y-3">
          <div className="relative rounded-lg border-2 bg-gray-50 px-4 py-4 pl-12">
            <span className="absolute left-4 text-lg text-gray-500">✉️</span>
            <span className="text-base text-gray-800">{email}</span>
          </div>

          <div className="relative rounded-lg border-2 bg-gray-50 px-4 py-4 pl-12">
            <span className="absolute left-4 text-lg text-gray-500">👤</span>
            <span className="text-base text-gray-800">{name}</span>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="border-t p-5">
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white active:bg-blue-700"
        >
          가입완료
        </button>
      </div>

      {/* 공통 */}
      <SignExplainBtn setModal={setModal} />
      {modal && <SignExplainModal setModal={setModal} />}
      {successModal && <MainSuccessModal setSuccessModal={setSuccessModal} />}

      {/* 처음으로 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed left-3 top-3 rounded bg-black px-4 py-2 text-sm text-white"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangSignup5;
