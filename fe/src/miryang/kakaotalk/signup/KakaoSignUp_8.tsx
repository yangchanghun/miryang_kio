import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

const KakaoSignUp_8 = () => {
  const navigate = useNavigate();

  /** ✅ localStorage 값은 파생 데이터 → state 필요 없음 */
  const email = (localStorage.getItem("email") ?? "test") + "@kakao.com";
  const nickname = localStorage.getItem("nickname") ?? "test";

  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<ReactNode>("");

  const handleStartClick = () => {
    setModalMessage(
      <>
        회원가입이 완료되었습니다 🎉
        <br />
        처음으로 버튼을 누르시면 홈으로 이동됩니다.
      </>,
    );
    setModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 text-center shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">8 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/8.mp3" autoPlay />

        <h1 className="mb-10 text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 완료 메시지 */}
        <div className="mb-16">
          <h2 className="mb-6 text-4xl font-semibold text-gray-800">
            환영합니다!
          </h2>
          <p className="mb-2 text-lg font-semibold text-gray-700">
            카카오계정 가입이 완료되었습니다.
          </p>
          <p className="text-lg text-gray-600">
            하나의 계정으로 다양한 서비스를 편리하게 이용해 보세요!
          </p>
        </div>

        {/* 프로필 */}
        <div className="mb-16">
          <div
            className="mx-auto mb-6 flex h-[120px] w-[120px] items-center justify-center rounded-full
                          bg-gradient-to-br from-sky-300 to-sky-200 shadow-lg relative"
          >
            <span className="text-5xl">👤</span>
            <span
              className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center
                             rounded-full bg-white shadow text-sm"
            >
              📷
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-xl font-semibold text-gray-800">{email}</div>
            <div className="text-lg font-medium text-blue-600">{nickname}</div>
          </div>
        </div>

        {/* 시작 버튼 */}
        <button
          onClick={handleStartClick}
          className="rounded-lg bg-[#FEE500] px-20 py-4 text-xl font-semibold
                     text-[#3c1e1e] shadow hover:bg-[#fdd835] active:bg-[#f9a825]"
        >
          시작하기
        </button>

        {/* 처음으로 */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/miryang/kakaotalk/main")}
            className="text-sm font-medium text-gray-500 underline"
          >
            처음으로
          </button>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_8;
