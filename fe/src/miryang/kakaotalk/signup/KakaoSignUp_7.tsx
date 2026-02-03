import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

const MAX_LENGTH = 20;

const KakaoSignUp_7 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] = useState<ReactNode>(
    <>
      카카오톡에서 사용할 닉네임을 입력해주세요!
      <br />
      <span className="text-red-500">닉네임은 1~20자 이내여야 합니다</span>
    </>,
  );

  const [nickname, setNickname] = useState("");

  /** ✅ 파생 상태 */
  const trimmed = nickname.trim();
  const isValid = trimmed.length >= 1 && trimmed.length <= MAX_LENGTH;

  const handleNext = () => {
    if (!trimmed) {
      setModalMessage(
        <>
          닉네임을 입력해주세요!
          <br />
          <span className="text-red-500">닉네임은 1~20자 이내여야 합니다</span>
        </>,
      );
      setModal(true);
      return;
    }

    if (!isValid) {
      setModalMessage(
        <>
          올바른 닉네임을 입력해주세요!
          <br />
          <span className="text-red-500">닉네임은 1~20자 이내여야 합니다</span>
        </>,
      );
      setModal(true);
      return;
    }

    localStorage.setItem("nickname", trimmed);
    setModalMessage("성공입니다!");
    setModal(true);

    setTimeout(() => {
      navigate("/miryang/kakaotalk/signup/8");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-center text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">7 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/7.mp3" autoPlay />

        <h1 className="mb-10 text-center text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 본문 */}
        <div className="mb-20 text-left">
          <h2 className="mb-2 text-[28px] font-semibold text-gray-800">
            카카오계정 프로필을
          </h2>
          <p className="mb-12 text-lg text-gray-600">설정해 주세요.</p>

          {/* 닉네임 */}
          <label className="mb-3 block text-base font-semibold text-gray-800">
            닉네임
          </label>

          <div className="relative mb-2">
            <input
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              maxLength={MAX_LENGTH}
              onChange={(e) => setNickname(e.target.value)}
              className={`w-full rounded-lg border-2 px-5 py-4 pr-24 text-base outline-none
                ${
                  nickname
                    ? isValid
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300 focus:border-[#FEE500]"
                }`}
            />

            {/* 글자수 */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              <span
                className={
                  nickname.length >= MAX_LENGTH
                    ? "font-semibold text-red-500"
                    : ""
                }
              >
                {nickname.length}
              </span>
              /{MAX_LENGTH}
            </div>

            {/* 체크 아이콘 */}
            {nickname && (
              <span
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xl font-bold
                  ${isValid ? "text-green-500" : "text-red-500"}`}
              >
                {isValid ? "✓" : "✗"}
              </span>
            )}
          </div>

          <p className="text-sm text-[#ff6b35]">닉네임을 입력해 주세요.</p>
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/miryang/kakaotalk/signup/6")}
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
                  isValid
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

export default KakaoSignUp_7;
