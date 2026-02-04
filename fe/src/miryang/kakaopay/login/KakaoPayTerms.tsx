import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayTerms = () => {
  const navigate = useNavigate();

  const [guide, setGuide] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useState<boolean>(false);
  const [requiredOption, setRequiredOption] = useState<boolean>(false);
  const [ciOption, setCiOption] = useState<boolean>(false);

  const handleConfirm = () => {
    if (!requiredOption) {
      alert("필수항목에 동의하세요");
      return;
    }
    navigate("/miryang/kakaopay/login/auth/complete");
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      <audio src="/kakaopay/login/4.mp3" autoPlay />

      {/* Main */}
      <main className="flex-1 overflow-y-auto px-5 py-6">
        {/* Close */}
        <button
          onClick={() => navigate("/miryang/kakaopay/login/auth/start")}
          className="mb-4 text-2xl font-light text-black"
        >
          ✕
        </button>

        <h1 className="mb-6 text-center text-2xl font-bold text-black">
          카카오 인증서로 인증합니다
        </h1>

        {/* Info Card */}
        <div className="mb-5 rounded-2xl bg-white p-6 shadow-sm">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3 border-b pb-5">
            <div className="flex h-14 w-14 items-center justify-center gap-1 rounded-lg border">
              <span className="text-lg">💬</span>
              <span className="text-base font-bold">pay</span>
            </div>
            <span className="text-base font-semibold text-black">
              주식회사 카카오페이
            </span>
          </div>

          {/* Info rows */}
          <div className="mb-6 flex flex-col gap-4 text-sm">
            <div className="flex gap-4">
              <span className="w-[70px] shrink-0 text-gray-400">요청구분</span>
              <span className="text-black">
                카카오페이 이용을 위한 본인 확인
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-[70px] shrink-0 text-gray-400">받는이</span>
              <span className="text-black">홍길동</span>
            </div>
            <div className="flex gap-4">
              <span className="w-[70px] shrink-0 text-gray-400">유효일시</span>
              <span className="text-black">2025.09.30 10:04:02</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-between border-t pt-5 text-sm">
            <span className="text-gray-500">주식회사 카카오페이 고객센터</span>
            <a href="tel:1644-7405" className="font-medium text-blue-600">
              1644-7405
            </a>
          </div>
        </div>

        {/* Agreement */}
        <div className="flex flex-col gap-3">
          {/* Required */}
          <button
            onClick={() => setRequiredOption((v) => !v)}
            className={`flex items-center gap-3 rounded-xl px-5 py-4 shadow-sm transition ${
              requiredOption ? "bg-yellow-50 shadow-yellow-200/50" : "bg-white"
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                requiredOption ? "border-yellow-400" : "border-gray-300"
              }`}
            >
              {requiredOption && (
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
              )}
            </div>

            <span className="flex-1 text-left text-sm text-black">
              [필수] 개인정보 제3자 제공 동의
            </span>
            <span className="text-2xl font-light text-gray-300">›</span>
          </button>

          {/* CI */}
          <button
            onClick={() => setCiOption((v) => !v)}
            className={`flex items-center gap-3 rounded-xl px-5 py-4 shadow-sm transition ${
              ciOption ? "bg-yellow-50 shadow-yellow-200/50" : "bg-white"
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                ciOption ? "border-yellow-400" : "border-gray-300"
              }`}
            >
              {ciOption && (
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
              )}
            </div>

            <span className="flex-1 text-left text-sm text-black">
              암호화된 이용자 확인값(CI)
            </span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 px-5 pb-6 pt-4">
        <button
          disabled={!requiredOption}
          onClick={handleConfirm}
          className={`w-full rounded-xl py-[18px] text-[17px] font-bold transition ${
            requiredOption
              ? "bg-[#FEE500] text-[#3c1e1e] hover:bg-yellow-400"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
        >
          인증하기
        </button>
      </footer>

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
          guideSteps={["약관 동의 후 인증하기 버튼을 클릭해주세요."]}
        />
      )}
    </div>
  );
};

export default KakaoPayTerms;
