import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayAuthStart = () => {
  const navigate = useNavigate();
  const [termOpen, setTermOpen] = useState<boolean>(false);
  const [guide, setGuide] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useState<boolean>(false);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="relative bg-white">
        <button
          onClick={() => navigate("/miryang/kakaopay/login/auth")}
          className="absolute right-5 top-[50px] text-sm text-gray-400"
        >
          취소
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <audio src="/kakaopay/login/3.mp3" autoPlay />
        <section className="w-full text-center">
          {/* Shield */}
          <div className="mb-14 flex justify-center">
            <div className="flex h-[140px] w-[140px] rotate-45 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-500 to-blue-400 shadow-2xl shadow-blue-500/40">
              <div className="flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full bg-[#FEE500]">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#3c1e1e]">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[28px] font-bold leading-relaxed text-black">
            카카오톡 인증으로
            <br />
            간편하게 진행할게요
          </h1>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 pb-4 pt-5">
        <button
          onClick={() => setTermOpen(true)}
          className="mb-4 w-full rounded-full bg-[#FEE500] py-[18px] text-[17px] font-bold text-[#3c1e1e] transition hover:bg-yellow-400"
        >
          인증하기
        </button>

        <button
          onClick={() => setAlertModal(true)}
          className="w-full py-3 text-[15px] text-gray-400 underline hover:text-gray-600"
        >
          다른 방법으로 인증하기
        </button>
      </footer>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

      {/* Terms Bottom Sheet */}
      {termOpen && <KakaoPayTerms onClose={() => setTermOpen(false)} />}

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
          guideSteps={["인증하기 버튼을 클릭해주세요", "약관을 동의해주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayAuthStart;

interface KakaoPayTermsProps {
  onClose: () => void;
}

const KakaoPayTerms = ({ onClose }: KakaoPayTermsProps) => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!agreed) {
      alert("약관에 동의해주세요");
      return;
    }
    navigate("/miryang/kakaopay/login/auth/terms");
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-end justify-center bg-black/40">
      <div className="w-full max-w-[1000px] rounded-t-[30px] bg-white pb-6">
        {/* Drag Indicator */}
        <div
          onClick={onClose}
          className="mx-auto my-4 h-[5px] w-[134px] rounded-full bg-gray-400"
        />

        <div className="px-6">
          <p className="mb-8 text-[40px] font-semibold leading-tight">
            카카오톡 인증을 위해
            <br />
            약관에 동의해주세요
          </p>

          <label className="mb-8 flex items-center gap-3 text-[23px]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-6 w-6"
            />
            카카오톡 인증 약관
          </label>

          <button
            onClick={handleConfirm}
            className="mx-auto block h-[100px] w-full rounded-full bg-yellow-400 text-xl font-bold"
          >
            동의하기
          </button>
        </div>
      </div>
    </div>
  );
};
