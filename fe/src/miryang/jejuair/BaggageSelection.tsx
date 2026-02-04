import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecurityNotice from "./SecurityNotice";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

export default function BaggageSelection() {
  const navigate = useNavigate();

  const [tab, setTab] = useState<"가는 편" | "오는 편">("가는 편");
  const [baggagePrice, setBaggagePrice] = useState(0);
  const [securityModal, setSecurityModal] = useState(false);
  const [guideModal, setGuideModal] = useState(false);

  const goPrice = Number(localStorage.getItem("goPrice") ?? 0);
  const returnPrice = Number(localStorage.getItem("returnPrice") ?? 0);

  const totalAmount = goPrice + returnPrice + baggagePrice;

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen bg-white">
      <audio src="/jejuair/voice/4.mp3" autoPlay />

      {/* HEADER */}
      <header className="sticky top-0 z-10 flex items-center gap-4 px-5 py-4 bg-white border-b">
        <button
          onClick={() => navigate("/miryang/jejuair/passengerinfo")}
          className="text-xl"
        >
          ←
        </button>

        <div className="flex items-center gap-3 flex-1">
          <Step completed />
          <Line completed />
          <Step completed />
          <Line completed />
          <Step active label="부가서비스 선택" />
          <Line />
          <Step label="수하물 구매" />
        </div>
      </header>

      <main className="px-5 py-6 pb-32">
        {/* TITLE */}
        <h1 className="text-2xl font-bold mb-2 leading-snug">
          추가 수하물로
          <br />
          마음까지 넉넉한 여행
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          미리 구매하면 공항 대비 최대 67% 할인!
        </p>

        {/* PASSENGER */}
        <div className="flex items-center gap-3 bg-orange-500 text-white rounded-lg px-4 py-3 mb-6">
          <div className="w-6 h-6 bg-white text-orange-500 rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <span className="font-semibold">
            {localStorage.getItem("lastName")}/
            {localStorage.getItem("firstName")}
          </span>
        </div>

        {/* TAB */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          {["가는 편", "오는 편"].map((t) => (
            <button
              key={t}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={() => setTab(t as any)}
              className={`flex-1 py-2 rounded-md font-medium transition
                ${tab === t ? "bg-gray-900 text-white" : "text-gray-500"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* BAGGAGE */}
        <section className="border rounded-xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🧳</span>
            <span className="font-semibold">위탁 수하물</span>
          </div>

          <BaggageOption
            label="15KG"
            desc="운임에 포함"
            price={0}
            active={baggagePrice === 0}
            onClick={() => setBaggagePrice(0)}
          />

          <BaggageOption
            label="+5KG"
            desc="20KG"
            price={10000}
            active={baggagePrice === 10000}
            onClick={() => setBaggagePrice(10000)}
          />

          <BaggageOption
            label="+10KG"
            desc="25KG"
            price={20000}
            active={baggagePrice === 20000}
            onClick={() => setBaggagePrice(20000)}
          />
        </section>

        {/* PRICE */}
        <section className="bg-gray-50 rounded-xl p-5 mb-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">총 결제 금액</span>
            <span className="text-xl font-bold">
              {totalAmount.toLocaleString()}원
            </span>
          </div>
        </section>

        <p className="text-center text-sm text-blue-600 mb-6">
          결제 후 탑승 시 J 포인트 최대 2,832P 적립
        </p>
      </main>

      {/* BOTTOM BUTTON */}
      <button
        onClick={() => setSecurityModal(true)}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[960px]
                   py-4 bg-orange-500 text-white font-bold rounded-xl text-lg"
      >
        다음
      </button>

      {/* MODALS */}
      {securityModal && <SecurityNotice setOnModal={setSecurityModal} />}

      {guideModal && (
        <JejuAirCommonModal
          onModal={guideModal}
          setOnModal={setGuideModal}
          title="제주항공 앱"
          steps={["수하물을 선택해주세요", "항공 보안 안내를 확인해주세요"]}
        />
      )}

      <button
        onClick={() => setGuideModal(true)}
        className="fixed bottom-[200px] right-5 bg-gray-800 text-white px-4 py-2 rounded"
      >
        사용법
      </button>
    </div>
  );
}

/* ---------- SUB ---------- */

function Step({
  active,
  completed,
  label,
}: {
  active?: boolean;
  completed?: boolean;
  label?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded-full ${
          active || completed ? "bg-orange-500" : "bg-gray-300"
        }`}
      />
      {label && (
        <span
          className={`text-sm font-medium ${
            active ? "text-orange-500" : "text-gray-400"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function Line({ completed }: { completed?: boolean }) {
  return (
    <div
      className={`w-6 h-[2px] ${completed ? "bg-orange-500" : "bg-gray-300"}`}
    />
  );
}

function BaggageOption({
  label,
  desc,
  price,
  active,
  onClick,
}: {
  label: string;
  desc: string;
  price: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-4 mb-3 rounded-lg cursor-pointer border-2 transition
        ${
          active ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white"
        }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">{label}</span>
        <span className="text-sm text-gray-500">{desc}</span>
      </div>
      <span className="text-lg font-bold">{price.toLocaleString()}원</span>
    </div>
  );
}
