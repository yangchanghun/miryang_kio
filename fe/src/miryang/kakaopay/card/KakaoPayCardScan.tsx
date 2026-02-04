import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayCardScan = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gradient-to-b from-black/70 to-black/50">
      <audio src="/kakaopay/cardregister/2.mp3" autoPlay />

      {/* Header */}
      <header className="z-10">
        <div className="px-5 py-3">
          <button
            onClick={() => navigate("/miryang/kakaopay/payment/card/reigster")}
            className="text-2xl text-white"
          >
            ←
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center px-6 pt-10 text-center">
        <h1 className="mb-3 text-2xl font-bold text-white">
          카드를 사각형 영역에 맞춰주세요
        </h1>
        <p className="mb-14 text-sm text-white/80">
          본인 명의의 카드를 지원해요.
        </p>

        {/* Card Frame */}
        <div className="flex w-full max-w-md flex-col items-center">
          <div className="relative aspect-[1.586] w-full">
            <div className="absolute inset-[5%] rounded-2xl border-4 border-[#FEE500] bg-white/5 backdrop-blur-md shadow-[0_0_0_3px_rgba(254,229,0,0.3)]">
              {/* corners */}
              {[
                "top-[-3px] left-[-3px] border-r-0 border-b-0 rounded-tl-2xl",
                "top-[-3px] right-[-3px] border-l-0 border-b-0 rounded-tr-2xl",
                "bottom-[-3px] left-[-3px] border-r-0 border-t-0 rounded-bl-2xl",
                "bottom-[-3px] right-[-3px] border-l-0 border-t-0 rounded-br-2xl",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute h-6 w-6 border-4 border-[#FEE500] ${pos}`}
                />
              ))}

              {/* Card preview */}
              <div className="flex h-full flex-col justify-center px-8 opacity-60">
                <div className="mb-10 text-3xl text-white">💳</div>
                <div className="flex justify-between font-mono text-lg tracking-widest text-white/80">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/90">
            카드를 프레임 안에 맞춰주세요
          </p>

          {/* Virtual register */}
          <button
            onClick={() => {
              alert("카드등록이 완료되었습니다");
              localStorage.setItem("level", "2");
              navigate("/miryang/kakaopay/payment/main");
            }}
            className="heartbeat mt-6 rounded-full bg-[#FEE500] px-10 py-4 text-lg font-bold text-[#3c1e1e]"
          >
            가상등록하기
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        onClick={() => setAlertModal(true)}
        className="z-10 flex flex-col gap-3 px-6 pb-3"
      >
        <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/20 py-4 text-base font-semibold text-white backdrop-blur-md">
          ✏️ 직접 입력하기
        </button>
        <button className="rounded-full border border-white/30 bg-white/20 py-4 text-base font-semibold text-white backdrop-blur-md">
          카드사 앱으로 등록하기
        </button>
      </footer>

      {/* Guide button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

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
          guideSteps={[
            "현재 앱은 교육용입니다.",
            "가상등록하기 버튼을 누르면 카드 등록이 완료됩니다.",
          ]}
        />
      )}

      {/* Home indicator */}
      <div className="mx-auto my-2 h-[5px] w-[134px] rounded-full bg-white/80" />
    </div>
  );
};

export default KakaoPayCardScan;
