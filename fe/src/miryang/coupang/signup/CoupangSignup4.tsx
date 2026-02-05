import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignExplainBtn from "../signup/signexplain/SignExplainBtn";
import SignExplainModal from "../signup/signexplain/SignExplainModal";
import MainSuccessModal from "../success/MainSuccessModal";

interface LocationState {
  name?: string;
}

const CoupangSignup4: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = (location.state as LocationState) || {};

  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (hasError && value.trim()) {
      setHasError(false);
    }
  };

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleNext = () => {
    if (!email.trim() || !isValidEmail(email)) {
      setHasError(true);
      return;
    }

    setSuccessModal(true);
    setTimeout(() => {
      navigate("/miryang/coupang/signup/5", {
        state: { name, email },
      });
    }, 2000);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[780px] flex-col bg-white font-sans">
      <audio src="/coupang/voice/4.mp3" autoPlay />

      {/* 상단 진행 표시 */}
      <div className="border-b px-5 pt-5">
        <div className="mb-5 flex items-center justify-center gap-8">
          {/* 완료 */}
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

          {/* 현재 단계 */}
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
          이메일을 입력해주세요
        </h2>

        {/* 이메일 입력 */}
        <div className="mb-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
              ✉️
            </span>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full rounded-lg border-2 px-4 py-4 pl-12 text-base outline-none transition
                ${
                  hasError
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }
              `}
            />
          </div>

          {hasError && (
            <p className="mt-3 flex items-center gap-1 text-sm text-red-500">
              ⚠ 올바른 이메일을 입력해주세요.
            </p>
          )}
        </div>

        {/* 이름 표시 */}
        <div className="mt-8">
          <div className="relative rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-4 pl-12">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-500">
              👤
            </span>
            <span className="text-base text-gray-800">
              {name || "이름 정보 없음"}
            </span>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="border-t p-5">
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white active:bg-blue-700"
        >
          다음
        </button>
      </div>

      {/* 공통 컴포넌트 */}
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

export default CoupangSignup4;
