import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayTransferConfirm = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const amount = localStorage.getItem("sendamount") || "0";
  const bank = localStorage.getItem("sendbank") || "송금은행";
  const accountNumber = localStorage.getItem("accountnumber") || "000";

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      <audio src="/kakaopay/send/5.mp3" autoPlay />

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <button
          onClick={() => navigate("/miryang/kakaopay/amount/input")}
          className="text-2xl"
        >
          ←
        </button>

        <div className="flex items-center gap-1 text-xl font-bold">
          <span>💬</span>
          <span>pay</span>
        </div>

        <button className="text-2xl">ⓘ</button>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col px-6 py-8">
        {/* Account */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-900 text-xl font-bold text-white">
            {bank.slice(0, 2)}
          </div>
          <p className="text-sm text-gray-400">
            {bank} {accountNumber}
          </p>
        </div>

        {/* Transfer Info */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-3xl font-bold">ㅇㅇㅇ에게로</h1>
          <p className="mb-2 text-5xl font-bold">
            {Number(amount).toLocaleString()}원
          </p>
          <p className="text-2xl text-gray-300">보낼까요?</p>
        </div>

        {/* Details */}
        <div className="mt-auto border-t pt-6">
          <div className="flex items-center justify-between py-4">
            <span className="text-gray-500">수수료</span>
            <span className="font-semibold">무료</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-gray-500">받는 분 내역 표시</span>
            <button className="font-semibold">
              홍길동 <span className="ml-1">›</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-3 px-6 pb-4">
        <button
          onClick={() => navigate("/miryang/kakaopay/home")}
          className="w-full rounded-full bg-gray-100 py-4 text-lg font-bold text-gray-600"
        >
          취소
        </button>

        <button
          onClick={() => navigate("/miryang/kakaopay/transfer/complete")}
          className="w-full rounded-full bg-yellow-300 py-4 text-lg font-bold text-brown-900 hover:bg-yellow-400"
        >
          보내기
        </button>

        <button
          onClick={() => setAlertModal(true)}
          className="py-3 text-sm text-blue-600 underline"
        >
          수수료 500원 계속 아끼려면?
        </button>
      </footer>

      {/* Guide Button */}
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
            "송금 금액과 계좌 정보를 확인해주세요",
            "보내기 버튼을 누르면 송금이 완료됩니다",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayTransferConfirm;
