import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayTransferComplete = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const bank = localStorage.getItem("sendbank") || "송금은행";
  const accountNumber = localStorage.getItem("accountnumber") || "000";
  const amount = localStorage.getItem("amount") || "0";

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      <audio src="/kakaopay/send/6.mp3" autoPlay />

      {/* Header */}
      <header className="flex justify-end gap-4 px-5 py-4">
        <button
          onClick={() => setAlertModal(true)}
          className="text-2xl text-gray-500"
        >
          ↗
        </button>
        <button
          onClick={() => setAlertModal(true)}
          className="text-2xl text-gray-500"
        >
          ☆
        </button>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col items-center px-6 pt-16">
        {/* Success Icon */}
        <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-yellow-300 text-6xl font-bold">
          ✓
        </div>

        {/* Title */}
        <h1 className="mb-6 text-center text-3xl font-bold">
          송금을 완료했어요
        </h1>

        {/* Details */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm text-gray-400">
            {bank} {accountNumber}
          </p>
          <p className="text-base text-gray-600">
            ㅇㅇㅇ 계좌로{" "}
            <span className="font-semibold">
              {Number(amount).toLocaleString()}원
            </span>
            을 보냈어요.
          </p>
        </div>

        {/* Ad Banner */}
        <div className="mb-6 w-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="mb-1 text-xs text-gray-500">
                삼성증권 이벤트 (~10/31)
              </p>
              <h3 className="mb-2 text-lg font-bold">첫 계좌 100만원 추첨</h3>
              <p className="text-[11px] leading-relaxed text-gray-400">
                삼성증권 준법감시인 심사필 제25-B29585
                <br />
                (2025.09.24 ~ 2026.09.23)
              </p>
            </div>

            <div className="relative text-5xl">
              🎁
              <span className="absolute right-0 top-0 rounded bg-gray-400 px-1 py-[2px] text-[10px] font-bold text-white">
                AD
              </span>
            </div>
          </div>
        </div>

        {/* Memo */}
        <div className="mt-auto flex w-full items-center justify-between border-t py-5">
          <span className="text-gray-500">메모</span>
          <button className="text-gray-400">월세, 적금, 모임 등 ›</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-3 px-6 pb-4">
        <button
          onClick={() => setAlertModal(true)}
          className="w-full rounded-full bg-gray-100 py-4 text-lg font-bold text-gray-600"
        >
          예약 설정
        </button>
        <button
          onClick={() => navigate("/miryang/kakaopay/complete")}
          className="w-full rounded-full bg-yellow-300 py-4 text-lg font-bold text-brown-900 hover:bg-yellow-400"
        >
          확인
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
            "송금이 완료되었습니다",
            "확인 버튼을 누르면 교육이 종료됩니다",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayTransferComplete;
