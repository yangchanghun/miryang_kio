import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaopayCardRegister = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const cards = [
    {
      id: 1,
      name: "IBK비씨체크",
      bank: "IBK기업은행",
      number: "415*",
      type: "추카드",
      benefit: "혜택",
      color: "#1e3a8a",
    },
    {
      id: 2,
      name: "현대카드M",
      bank: "현대카드",
      number: "950*",
      type: "",
      benefit: "혜택",
      color: "#0ea5e9",
    },
    {
      id: 3,
      name: "일상의 기쁨(체크)",
      bank: "IBK기업은행",
      number: "551*",
      type: "",
      benefit: "혜택",
      color: "#86efac",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      <audio src="/kakaopay/cardregister/1.mp3" autoPlay />

      {/* Header */}
      <header className="border-b bg-white">
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => navigate("/miryang/kakaopay/payment/settings")}
            className="text-2xl"
          >
            ←
          </button>
          <h1 className="text-lg font-bold">결제수단 관리</h1>
          <span className="text-2xl">🏠</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 space-y-6 p-5 overflow-y-auto">
        {/* KakaoPay Section */}
        <section>
          <h2 className="mb-4 text-xl font-bold">카카오페이</h2>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow">
            <div className="flex flex-1 justify-between text-base">
              <span className="text-gray-500">머니</span>
              <span className="font-bold">39,400원</span>
            </div>
            <button className="rounded-full bg-[#FEE500] px-4 py-2 text-sm font-bold">
              계좌개설
            </button>
            <button className="text-xl text-gray-400">⋮</button>
          </div>

          <div className="mt-3 rounded-lg bg-gray-50 py-3 text-center text-sm text-gray-600">
            카카오페이증권 계좌개설하고 이자 받으세요!
          </div>
        </section>

        {/* Voucher / Point */}
        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <ItemRow label="상품권" value="0원" />
          <ItemRow label="포인트" value="1,823P" />
        </div>

        {/* Cards */}
        <section className="rounded-2xl bg-white p-5 shadow">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              카드 <span className="text-blue-500">4</span>
            </h2>
            <button
              onClick={() => navigate("/miryang/kakaopay/payment/card/scan")}
              className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white heartbeat"
            >
              등록하기
            </button>
          </div>

          <div className="space-y-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex items-center gap-4 rounded-xl bg-gray-50 p-4"
              >
                <div
                  className="flex h-[50px] w-[80px] items-center justify-center rounded-lg text-xl"
                  style={{ backgroundColor: card.color }}
                >
                  💳
                </div>

                <div className="flex-1">
                  <div className="mb-1 font-bold">{card.name}</div>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <span>
                      {card.bank} ({card.number})
                    </span>
                    {card.type && (
                      <span className="rounded bg-gray-200 px-2 py-0.5">
                        {card.type}
                      </span>
                    )}
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-600">
                      {card.benefit}
                    </span>
                  </div>
                  <button className="text-sm text-blue-500">
                    이번 달 이용금액은?? ›
                  </button>
                </div>

                <button className="text-xl text-gray-400">⋮</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Guide */}
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
          guideSteps={["카드 등록을 위해 등록하기 버튼을 눌러주세요"]}
        />
      )}
    </div>
  );
};

export default KakaopayCardRegister;

/* ----------------- Sub Components ----------------- */

const ItemRow = ({ label, value }: { label: string; value: string }) => (
  <button className="flex w-full items-center justify-between border-b px-5 py-5 last:border-none">
    <span className="text-base">{label}</span>
    <div className="flex items-center gap-2">
      <span className="font-semibold">{value}</span>
      <span className="text-xl text-gray-300">›</span>
    </div>
  </button>
);
