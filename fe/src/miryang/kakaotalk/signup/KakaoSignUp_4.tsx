import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

const KakaoSignUp_4 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "휴대폰 번호를 입력하고 인증요청을 눌러주세요!",
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [showSmsNotification, setShowSmsNotification] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  /** 파생 상태 (useEffect ❌) */
  const isPhoneValid = phoneNumber.replace(/[^0-9]/g, "").length === 11;
  const canGoNext = isCodeVerified;

  /** 6자리 인증번호 생성 */
  const generateVerificationCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 7) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7);
    }
    setPhoneNumber(value);
  };

  const handleVerificationRequest = () => {
    if (!isPhoneValid) {
      setModalMessage("올바른 휴대폰 번호를 입력해주세요!");
      setModal(true);
      return;
    }

    const code = generateVerificationCode();
    setGeneratedCode(code);
    setShowVerificationInput(true);

    setShowSmsNotification(true);
    setTimeout(() => setShowSmsNotification(false), 15000);

    setModalMessage(`인증번호가 발송되었습니다! 인증번호: ${code}`);
    setModal(true);
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 6) return;

    setVerificationCode(value);

    if (value.length === 6) {
      if (value === generatedCode) {
        setIsCodeVerified(true);
        setModalMessage("인증이 완료되었습니다!");
      } else {
        setIsCodeVerified(false);
        setModalMessage("인증번호가 일치하지 않습니다!");
      }
      setModal(true);
    }
  };

  const goNext = () => {
    if (!canGoNext) {
      setModalMessage(
        showVerificationInput
          ? "인증번호를 올바르게 입력해주세요!"
          : "휴대폰 번호를 입력하고 인증요청을 눌러주세요!",
      );
      setModal(true);
      return;
    }
    navigate("/miryang/kakaotalk/signup/5");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 text-center shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">4 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/4.mp3" autoPlay />

        <h1 className="mb-10 text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* SMS 알림 */}
        {showSmsNotification && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 rounded-lg bg-gray-800 px-6 py-3 text-[35px] text-white shadow-xl">
            📱 [카카오] 인증번호: {generatedCode}
          </div>
        )}

        {/* 본문 */}
        <div className="mb-20">
          <h2 className="mb-2 text-[28px] font-semibold text-gray-800">
            카카오계정 가입을 위해
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            휴대폰 인증을 진행해 주세요.
          </p>

          {/* 전화번호 */}
          <div className="mx-auto mb-8 flex max-w-[500px] flex-col gap-3 md:flex-row">
            <select className="rounded-lg border-2 border-gray-300 px-3 py-4 focus:border-[#FEE500] outline-none">
              <option value="+82">+82</option>
            </select>

            <input
              type="text"
              placeholder="전화번호 입력"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="flex-1 rounded-lg border-2 border-gray-300 px-5 py-4 outline-none focus:border-[#FEE500]"
              maxLength={13}
            />

            <button
              onClick={handleVerificationRequest}
              disabled={!isPhoneValid}
              className="whitespace-nowrap rounded-lg px-6 py-4 text-base font-semibold
                         bg-[#FEE500] text-[#3c1e1e]
                         enabled:hover:bg-[#fdd835]
                         disabled:bg-gray-200 disabled:text-gray-400"
            >
              인증요청
            </button>
          </div>

          {/* 인증번호 */}
          {showVerificationInput && (
            <div className="mt-8 animate-[fadeIn_0.3s_ease-out]">
              <div className="relative mx-auto mb-3 max-w-[300px]">
                <input
                  type="text"
                  placeholder="인증번호 6자리 입력"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  maxLength={6}
                  className={`w-full rounded-lg border-2 px-5 py-4 text-center text-lg tracking-widest outline-none
                    ${
                      isCodeVerified
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 focus:border-[#FEE500]"
                    }`}
                />
                {isCodeVerified && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-xl font-bold">
                    ✓
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                인증번호가 오지 않나요? 잠시 후 다시 시도해주세요.
              </p>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/miryang/kakaotalk/signup/3")}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e] shadow hover:bg-[#fdd835]"
            >
              이전
            </button>
            <button
              onClick={() => navigate("/miryang/kakaotalk/main")}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e] shadow hover:bg-[#fdd835]"
            >
              처음으로
            </button>
            <button
              onClick={goNext}
              className={`rounded-lg px-8 py-4 text-lg font-semibold shadow
                ${
                  canGoNext
                    ? "bg-[#FEE500] text-[#3c1e1e] hover:bg-[#fdd835]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              다음
            </button>
          </div>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_4;
