import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

export default function JejuAirPaymentPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [onModal, setOnModal] = useState(false);

  const totalPayment =
    Number(localStorage.getItem("goPrice")) +
    Number(localStorage.getItem("returnPrice"));

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-white">
      <audio src="/jejuair/voice/6.mp3" autoPlay />

      {/* HEADER */}
      <header className="sticky top-0 z-20 flex items-center gap-4 border-b bg-white px-5 py-4">
        <button
          onClick={() => navigate("/miryang/jejuair/detail")}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          ←
        </button>

        {/* Progress */}
        <div className="flex flex-1 items-center justify-center gap-3 scale-90">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <div className="w-14 h-[2px] bg-orange-500" />
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span className="absolute mt-10 text-xs font-semibold text-orange-500">
              결제
            </span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-5 py-6 pb-32">
        {/* Fare breakdown */}
        <section className="border-b pb-4 mb-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex justify-between items-center text-lg font-semibold"
          >
            <span>항목별 운임 상세</span>
            <span className={`transition ${expanded ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {expanded && (
            <div className="mt-4 space-y-6">
              {/* 예상 결제 금액 */}
              <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                <span className="font-semibold">예상 결제금액</span>
                <span className="text-xl font-bold">
                  {totalPayment.toLocaleString()}원
                </span>
              </div>

              {/* 항공 운송료 */}
              <div>
                <h3 className="font-semibold mb-2">항공 운송료</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>항공운임</span>
                    <span>{(totalPayment - 23400).toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>유류할증료</span>
                    <span>15,400원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>공항시설 사용료</span>
                    <span>8,000원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>운임옵션</span>
                    <span>-</span>
                  </div>
                </div>
              </div>

              {/* 할인 */}
              <div>
                <h3 className="font-semibold mb-2">할인</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>개인 신분 할인</span>
                    <span>- 4,040원</span>
                  </div>
                  <div className="flex justify-between text-orange-500 font-semibold">
                    <span>회원할인적용</span>
                    <span>- 1,080원</span>
                  </div>
                </div>
              </div>

              {/* 부가서비스 */}
              <div>
                <h3 className="font-semibold mb-2">부가서비스</h3>
                <p className="text-sm text-gray-400 italic text-center py-4">
                  선택된 부가서비스가 없습니다
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Total */}
        <section className="bg-gray-100 rounded-xl p-5 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">총 결제금액</span>
            <span className="text-2xl font-bold">
              {totalPayment.toLocaleString()}원
            </span>
          </div>
        </section>

        {/* Points */}
        <p className="text-center text-sm text-blue-600 mb-10">
          결제 후 탑승 시 J 포인트 최대 2,832P 적립
        </p>

        {/* PAY */}
        <button
          onClick={() => navigate("/miryang/jejuair/ticket")}
          className="fixed bottom-5 left-1/2 -translate-x-1/2
            w-[calc(100%-40px)] max-w-[960px]
            bg-orange-500 hover:bg-orange-600
            text-white text-lg font-bold py-4 rounded-xl"
        >
          결제하기
        </button>

        {/* Help */}
        <button
          onClick={() => setOnModal(true)}
          className="fixed bottom-40 right-5 text-sm"
        >
          사용법
        </button>

        {onModal && (
          <JejuAirCommonModal
            onModal={onModal}
            setOnModal={setOnModal}
            title="제주항공 앱"
            steps={[
              "교육용 웹앱으로 실제 결제는 이루어지지 않습니다.",
              "결제하기를 누르면 교육이 완료됩니다.",
            ]}
          />
        )}
      </main>
    </div>
  );
}
