import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayBarcodePay = () => {
  const navigate = useNavigate();
  const [usePoints, setUsePoints] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-1 text-xl font-bold">
            💬 <span>pay</span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setAlertModal(true)}>🌐</button>
            <button onClick={() => setAlertModal(true)}>⚙️</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between px-5 pb-3">
          <button className="rounded-full bg-black px-6 py-2 text-sm font-bold text-white">
            바코드
          </button>
          <div className="flex items-center gap-1 text-sm font-bold">
            <span className="italic">zero</span>
            <span className="rounded bg-black px-1 text-white">PAY</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center px-6 py-8">
        {/* Barcode */}
        <div className="mb-6 w-full max-w-sm">
          <div
            onClick={() => {
              alert("가상 결제가 완료되었습니다");
              localStorage.setItem("level", "3");
              navigate("/miryang/kakaopay/payment/main");
            }}
            className="cursor-pointer rounded-xl bg-white p-4 shadow"
          >
            <img
              src="/kakaopay/emoticon/fake-barcode.png"
              alt="barcode"
              className="mb-3 w-full"
            />
            <img
              src="/kakaopay/emoticon/fake-qr.png"
              alt="qr"
              className="w-full"
            />
          </div>
        </div>

        {/* Payment Card */}
        <div className="w-full max-w-sm rounded-xl bg-gray-100 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">페이머니</div>
              <button className="text-sm font-semibold">IBK기업 1015 ▼</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">39,400원</span>
              <button>⋮</button>
            </div>
          </div>

          {/* Points */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm">페이포인트 사용</div>
              <div className="text-sm text-gray-500">1,823원</div>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={usePoints}
                onChange={(e) => setUsePoints(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:bg-yellow-400 peer-checked:after:translate-x-5" />
            </label>
          </div>

          <button
            onClick={() => setAlertModal(true)}
            className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold"
          >
            <span>내 쿠폰 및 주변 혜택</span>
            <span className="flex items-center gap-1">
              <span className="rounded-full bg-red-500 px-1 text-xs text-white">
                N
              </span>
              보기 ›
            </span>
          </button>
        </div>

        {/* Tip */}
        <div className="mt-6 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
          머니로 결제하면 포인트 3번 적립 ›
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="flex border-t border-gray-200 bg-white">
        {[
          {
            icon: "🏠",
            label: "홈",
            action: () => navigate("/miryang/kakaopay/home"),
          },
          { icon: "🎁", label: "혜택", action: () => setAlertModal(true) },
          {
            icon: "💳",
            label: "결제",
            active: true,
            action: () => navigate("/miryang/kakaopay/payment/main"),
          },
          { icon: "📊", label: "자산", action: () => setAlertModal(true) },
          { icon: "📂", label: "증권", action: () => setAlertModal(true) },
        ].map((item, i) => (
          <button
            key={i}
            onClick={item.action}
            className={`flex flex-1 flex-col items-center py-3 text-xs ${
              item.active ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            {item.label}
          </button>
        ))}
      </nav>

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
            "실제 결제 시 바코드를 제시해주세요.",
            "바코드를 누르면 결제 교육이 완료됩니다.",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayBarcodePay;
