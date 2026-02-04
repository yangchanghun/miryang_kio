import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayAuth = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState<boolean>(false);
  const [guide, setGuide] = useState<boolean>(false);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="relative bg-white">
        <button
          onClick={() => navigate("/miryang/kakaopay/login/main")}
          className="absolute right-5 top-[50px] text-sm text-gray-400"
        >
          취소
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 pb-10 pt-[60px]">
        <section>
          <audio src="/kakaopay/login/2.mp3" autoPlay />

          {/* Title */}
          <h1 className="mb-4 text-center text-[26px] font-bold leading-snug text-black">
            안전한 사용을 위해
            <br />
            본인이 맞는지 확인할게요
          </h1>

          <p className="mb-12 text-center text-sm text-gray-400">
            입력한 정보는 안전하게 저장됩니다.
          </p>

          {/* KakaoTalk Card */}
          <div className="mb-10 rounded-2xl bg-gradient-to-br from-[#fff9e6] to-[#fef5d4] px-8 py-10 text-center">
            {/* Shield */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 rotate-45 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg shadow-blue-500/30">
                <div className="h-8 w-8 rounded-full bg-[#FEE500]" />
              </div>
            </div>

            <h2 className="mb-6 text-xl font-bold text-black">
              카카오톡으로 간편하게
            </h2>

            <button
              onClick={() => navigate("/miryang/kakaopay/login/auth/start")}
              className="mx-auto w-full max-w-[400px] rounded-full bg-[#FEE500] py-4 text-base font-bold text-black transition hover:bg-yellow-400"
            >
              카카오톡 인증
            </button>
          </div>

          {/* Other Options */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <button
              onClick={() => setAlertModal(true)}
              className="flex w-full items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                📱
              </div>
              <span className="flex-1 text-left text-base font-medium text-black">
                휴대폰 인증
              </span>
              <span className="text-2xl font-light text-gray-300">›</span>
            </button>

            {/* Card */}
            <button
              onClick={() => setAlertModal(true)}
              className="flex w-full items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                💳
              </div>
              <span className="flex-1 text-left text-base font-medium text-black">
                카드 인증
              </span>
              <span className="text-2xl font-light text-gray-300">›</span>
            </button>
          </div>
        </section>
      </main>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

      {/* Modals */}
      {alertModal && (
        <KakaoPayGuideModal
          onModal={alertModal}
          setOnModal={setAlertModal}
          guideSteps={["실제 카카오페이에서 사용해보세요"]}
        />
      )}

      {guide && (
        <KakaoPayGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={["카카오톡 인증 버튼을 클릭해주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayAuth;
