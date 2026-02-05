import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

const CARD_TYPES = [
  "KB국민카드",
  "삼성카드",
  "롯데카드",
  "신한카드",
  "하나카드",
  "BC카드",
  "현대카드",
  "우리카드",
  "NH농협카드",
  "씨티카드",
  "카카오뱅크카드",
  "토스뱅크카드",
];

const CoupangCart8 = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [selectedCard, setSelectedCard] = useState("");

  const blockAlert = () => {
    alert("신용카드를 선택 후 카드를 선택해주세요");
  };

  const handleConfirm = () => {
    if (!selectedCard) {
      alert("카드를 선택해주세요");
      return;
    }
    localStorage.setItem("카드", selectedCard);
    navigate("/miryang/coupang/cart/5");
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="relative flex items-center px-4 py-4">
          <button
            onClick={() => navigate("/miryang/coupang/cart/5")}
            className="text-2xl"
          >
            ‹
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
            결제수단
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="p-4 space-y-4">
        {/* 쿠페이 머니 */}
        <button
          onClick={blockAlert}
          className="flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left"
        >
          <span className="text-base font-medium">쿠페이 머니</span>
          <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs text-white">
            현금영수증
          </span>
        </button>

        {/* 계좌 */}
        <button
          onClick={blockAlert}
          className="flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left"
        >
          <span className="text-base font-medium">계좌</span>
        </button>

        {/* 신용카드 */}
        <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4">
          <div className="mb-4 text-base font-semibold text-blue-600">
            신용카드
          </div>

          {/* 카드 선택 */}
          <select
            value={selectedCard}
            onChange={(e) => setSelectedCard(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-base focus:border-blue-500 focus:outline-none"
          >
            <option value="">카드 선택 ⌄</option>
            {CARD_TYPES.map((card) => (
              <option key={card} value={card}>
                {card}
              </option>
            ))}
          </select>

          {/* 할부 정보 (고정) */}
          {selectedCard && (
            <input
              readOnly
              value="일시불 (할부개월수 선택)"
              className="mt-3 w-full rounded-lg border bg-gray-100 px-4 py-3 text-base text-gray-600"
            />
          )}

          {/* 기본 결제수단 */}
          <label className="mt-4 flex items-center gap-3 text-base">
            <input type="checkbox" className="h-5 w-5 accent-blue-500" />
            기본 결제수단으로 저장
          </label>

          {/* 선택 버튼 */}
          <button
            onClick={handleConfirm}
            className={`mt-6 w-full rounded-lg py-4 text-lg font-semibold text-white ${
              selectedCard ? "bg-blue-500 active:bg-blue-600" : "bg-gray-300"
            }`}
          >
            선택하기
          </button>
        </div>

        {/* 휴대폰 */}
        <button
          onClick={blockAlert}
          className="flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left"
        >
          <span className="text-base font-medium">휴대폰</span>
        </button>
      </main>

      {/* 홈 버튼 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed right-3 top-3 z-50 rounded bg-black px-3 py-2 text-white"
      >
        처음으로
      </button>

      {/* 설명서 */}
      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}
    </div>
  );
};

export default CoupangCart8;
