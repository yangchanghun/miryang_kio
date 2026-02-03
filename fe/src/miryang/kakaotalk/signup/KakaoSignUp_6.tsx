import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";
import type { ReactNode } from "react";
const KakaoSignUp_6 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] = useState<ReactNode>(
    <>
      비밀번호를 입력해주세요!
      <br />
      <span className="text-red-500">
        비밀번호는 4~32자리, 영문+숫자 조합이어야 합니다
      </span>
    </>,
  );

  const email = (localStorage.getItem("email") ?? "test") + "@kakao.com";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /** ✅ 파생 상태 (state ❌) */
  const passwordValid =
    password.length >= 4 &&
    password.length <= 32 &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);

  const passwordsMatch = password !== "" && password === confirmPassword;

  const canGoNext = passwordValid && passwordsMatch;

  const handleNext = () => {
    if (!password.trim()) {
      setModalMessage("비밀번호를 입력해주세요!");
      setModal(true);
      return;
    }

    if (!passwordValid) {
      setModalMessage(
        <>
          올바른 비밀번호를 입력해주세요!
          <br />
          <span className="text-red-500">
            4~32자리, 영문+숫자 조합이어야 합니다
          </span>
        </>,
      );
      setModal(true);
      return;
    }

    if (!confirmPassword.trim()) {
      setModalMessage("비밀번호 확인을 입력해주세요!");
      setModal(true);
      return;
    }

    if (!passwordsMatch) {
      setModalMessage(
        <>
          비밀번호가 일치하지 않습니다!
          <br />
          <span className="text-red-500">비밀번호를 다시 확인해주세요</span>
        </>,
      );
      setModal(true);
      return;
    }

    setModalMessage("성공입니다!");
    setModal(true);

    setTimeout(() => {
      navigate("/miryang/kakaotalk/signup/7");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-center text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">6 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/6.mp3" autoPlay />

        <h1 className="mb-10 text-center text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 본문 */}
        <div className="mb-20 text-left">
          <h2 className="mb-2 text-[28px] font-semibold text-gray-800">
            카카오계정 로그인에 사용할
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            비밀번호를 등록해 주세요.
          </p>

          {/* 계정 정보 */}
          <div className="mb-8">
            <label className="mb-2 block text-base font-semibold text-gray-800">
              카카오계정
            </label>
            <div className="rounded-lg border bg-gray-50 px-5 py-4 text-lg text-gray-600">
              {email}
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="mb-6 relative">
            <label className="mb-2 block text-base font-semibold text-gray-800">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호 입력 (4~32자리)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={32}
              className={`w-full rounded-lg border-2 px-5 py-4 outline-none
                ${
                  password
                    ? passwordValid
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300 focus:border-[#FEE500]"
                }`}
            />
            {password && (
              <span
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold
                  ${passwordValid ? "text-green-500" : "text-red-500"}`}
              >
                {passwordValid ? "✓" : "✗"}
              </span>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="mb-8 relative">
            <label className="mb-2 block text-base font-semibold text-gray-800">
              비밀번호 재입력
            </label>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              maxLength={32}
              className={`w-full rounded-lg border-2 px-5 py-4 outline-none
                ${
                  confirmPassword
                    ? passwordsMatch
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300 focus:border-[#FEE500]"
                }`}
            />
            {confirmPassword && (
              <span
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold
                  ${passwordsMatch ? "text-green-500" : "text-red-500"}`}
              >
                {passwordsMatch ? "✓" : "✗"}
              </span>
            )}
          </div>

          {/* 규칙 */}
          <div className="space-y-3 text-sm text-gray-600">
            <p className="flex gap-2">
              <span>•</span>
              비밀번호는 4~32자리의 영문, 숫자 조합이어야 합니다.
            </p>
            <p className="flex gap-2">
              <span>•</span>
              다른 사이트에서 사용하는 쉬운 비밀번호는 사용하지 마세요.
            </p>
            <p className="flex gap-2">
              <span>•</span>
              안전한 계정 사용을 위해 비밀번호를 주기적으로 변경해 주세요.
            </p>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/miryang/kakaotalk/signup/5")}
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
              onClick={handleNext}
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

export default KakaoSignUp_6;
