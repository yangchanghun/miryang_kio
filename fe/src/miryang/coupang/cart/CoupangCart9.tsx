import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

import MainSuccessModal from "../success/MainSuccessModal";

const CoupangCart9 = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [agree, setAgree] = useState(false);

  const name = JSON.parse(localStorage.getItem("배송지") || "{}")?.name || "";
  const card = localStorage.getItem("카드") || "신용카드";

  const handlePay = () => {
    if (!agree) {
      alert("필수 약관에 동의해주세요");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      navigate("/miryang/coupang/cart/finish");
    }, 2000);
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-gray-100">
      {/* 음성 안내 */}
      <audio
        src="/coupang/voice/signup/cart/등록하고 결제하기를 하시면_.mp3"
        autoPlay
      />

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
            주문 / 결제
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="space-y-3 p-4">
        {/* 카드 정보 요약 */}
        <section className="rounded-lg bg-white p-4">
          <h2 className="mb-3 text-lg font-semibold">
            카드 정보 확인
            <span className="ml-2 text-sm text-gray-500">(최초 1회)</span>
          </h2>

          <div className="space-y-2 text-base">
            <div className="flex justify-between">
              <span className="text-gray-500">카드사</span>
              <span className="font-medium">{card}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">카드번호</span>
              <span className="font-mono">•••• •••• •••• 1234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">카드 소유자</span>
              <span className="font-medium">{name}</span>
            </div>
          </div>
        </section>

        {/* 카드 미리보기 */}
        <section className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white shadow-lg">
          <div className="mb-4 text-sm opacity-80">{card}</div>
          <div className="mb-6 font-mono text-lg tracking-widest">
            •••• •••• •••• 1234
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <div className="opacity-70">CARD HOLDER</div>
              <div className="font-semibold">{name || "USER"}</div>
            </div>
            <div>
              <div className="opacity-70">VALID THRU</div>
              <div className="font-semibold">10/29</div>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="rounded-lg bg-white p-4">
          <label className="flex items-center gap-3 text-base">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="h-5 w-5 accent-blue-500"
            />
            필수 약관 모두 동의
          </label>

          {agree && (
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• 쿠팡페이 서비스 이용약관</li>
              <li>• 전자금융거래 이용약관</li>
              <li>• 개인정보 수집 및 이용</li>
            </ul>
          )}
        </section>

        {/* 결제 버튼 */}
        <button
          onClick={handlePay}
          className={`w-full rounded-lg py-4 text-lg font-semibold text-white ${
            agree ? "bg-blue-500 active:bg-blue-600" : "bg-gray-300"
          }`}
        >
          등록하고 결제하기
        </button>
      </main>

      {/* 홈 버튼 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed right-3 top-3 z-50 rounded bg-black px-3 py-2 text-white"
      >
        처음으로
      </button>

      {success && <MainSuccessModal setSuccessModal={setSuccess} />}
      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}
    </div>
  );
};

export default CoupangCart9;
