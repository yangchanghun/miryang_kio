import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayAmountInput = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [guide, setGuide] = useState(false);

  const bank = localStorage.getItem("sendbank");
  const account = localStorage.getItem("accountnumber");

  const addNumber = (num: string) => {
    if (amount.length >= 9) return;
    setAmount((prev) => (prev + num).replace(/^0+/, ""));
  };

  const deleteNumber = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const addQuick = (value: number) => {
    setAmount((prev) => String(Number(prev || 0) + value));
  };

  const handleConfirm = () => {
    localStorage.setItem("sendamount", amount);
    navigate("/miryang/kakaopay/confirm");
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4">
        <button onClick={() => navigate(-1)} className="text-2xl">
          ←
        </button>
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>💬</span>
          <span>pay</span>
        </div>
        <button className="text-2xl">ⓘ</button>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col px-6">
        {/* Account Info */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-900 text-white font-bold">
            {bank?.slice(0, 2)}
          </div>
          <p className="text-sm text-gray-400">
            {bank} {account}
          </p>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-center text-3xl font-bold">
          얼마를 보낼까요?
        </h1>

        {/* Amount */}
        <div className="mb-2 flex min-h-[60px] items-center justify-center">
          {amount ? (
            <span className="text-5xl font-bold">
              {Number(amount).toLocaleString()}원
            </span>
          ) : (
            <span className="text-2xl text-gray-300">금액 입력</span>
          )}
        </div>

        <p className="mb-8 text-center text-sm text-gray-400">잔액 39,400원</p>

        {/* Quick Buttons */}
        <div className="mb-10 flex justify-center gap-3">
          {[10000, 50000, 100000].map((v) => (
            <button
              key={v}
              onClick={() => addQuick(v)}
              className="rounded-full bg-gray-100 px-6 py-3 font-semibold text-gray-600"
            >
              +{v.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Number Pad */}
        <div className="mt-auto grid grid-cols-3 gap-4 pb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button
              key={n}
              onClick={() => addNumber(String(n))}
              className="rounded-xl py-6 text-3xl hover:bg-gray-100"
            >
              {n}
            </button>
          ))}
          <div />
          <button
            onClick={() => addNumber("0")}
            className="rounded-xl py-6 text-3xl hover:bg-gray-100"
          >
            0
          </button>
          <button
            onClick={deleteNumber}
            className="rounded-xl py-6 text-2xl hover:bg-gray-100"
          >
            ⌫
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-4">
        <button
          disabled={!amount}
          onClick={handleConfirm}
          className={`w-full rounded-xl py-4 text-lg font-bold transition ${
            amount
              ? "bg-yellow-300 text-brown-900 hover:bg-yellow-400"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
        >
          확인
        </button>
      </footer>

      {/* Guide */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

      {guide && (
        <KakaoPayGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "보낼 금액을 입력해주세요",
            "확인 버튼을 누르면 송금이 진행됩니다",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayAmountInput;
