import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

const KakaoSignUp_2 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "이메일이 있습니다 버튼을 선택해주세요!",
  );

  const goNext = () => {
    navigate("/kakaotalk/tutorial");
  };

  const goPrev = () => {
    navigate("/kakaotalk/signup/1");
  };

  const handleHaveEmailClick = () => {
    setModalMessage("성공입니다!");
    setModal(true);

    setTimeout(() => {
      navigate("/miryang/kakaotalk/signup/3");
    }, 1500);
  };

  const handleNoEmailClick = () => {
    setModalMessage("이메일이 있습니다 버튼을 선택해주세요!");
    setModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 text-center shadow-lg">
        {/* 안내 메시지 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-lg font-semibold text-[#3c1e1e]">
          <p>
            카카오톡 회원가입 따라하기{" "}
            <span className="ml-1 text-[20px] font-medium">2 / 8단계</span>
          </p>
        </div>

        <audio src="/kakaotalk/voice/signup/2.mp3" autoPlay />

        {/* 타이틀 */}
        <h1 className="mb-16 text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 콘텐츠 */}
        <div className="mb-16">
          <h2 className="mb-10 text-[32px] font-semibold text-gray-800">
            가입을 시작합니다!
          </h2>

          <div className="mb-16">
            <p className="mb-2 text-xl font-semibold text-gray-800">
              카카오계정 하나로
            </p>
            <p className="text-base text-gray-600">
              다양한 서비스를 편리하게 이용해 보세요.
            </p>
          </div>

          <div className="mb-10">
            <p className="text-lg font-medium text-gray-800">
              카카오계정으로 사용할 이메일이 있나요?
            </p>
          </div>

          {/* 버튼 그룹 */}
          <div className="mx-auto flex max-w-[400px] flex-col gap-4">
            <button
              onClick={handleHaveEmailClick}
              className="rounded-lg bg-[#FEE500] px-6 py-5 text-lg font-semibold text-[#3c1e1e]
                         transition hover:bg-[#fdd835] active:bg-[#f9a825]"
            >
              이메일이 있습니다.
            </button>

            <button
              onClick={handleNoEmailClick}
              className="rounded-lg border-2 border-gray-300 bg-gray-50 px-6 py-5 text-lg font-semibold text-gray-600
                         transition hover:border-gray-400 hover:bg-gray-100 active:bg-gray-200"
            >
              새 이메일이 필요합니다.
            </button>
          </div>
        </div>

        {/* 하단 고정 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={goPrev}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e]
                         shadow transition hover:-translate-y-1 hover:bg-[#fdd835] hover:shadow-md active:bg-[#f9a825]"
            >
              이전
            </button>

            <button
              onClick={goNext}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e]
                         shadow transition hover:-translate-y-1 hover:bg-[#fdd835] hover:shadow-md active:bg-[#f9a825]"
            >
              처음으로
            </button>
          </div>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_2;
