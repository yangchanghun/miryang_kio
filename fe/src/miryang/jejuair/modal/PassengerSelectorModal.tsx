import { useState } from "react";

interface PassengerSelectorModalProps {
  setPassengerModal: (value: boolean) => void;
}

export default function PassengerSelectorModal({
  setPassengerModal,
}: PassengerSelectorModalProps) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const inc = (type: "adults" | "children" | "infants") => {
    if (type === "adults") setAdults((v) => v + 1);
    if (type === "children") setChildren((v) => v + 1);
    if (type === "infants") setInfants((v) => v + 1);
  };

  const dec = (type: "adults" | "children" | "infants") => {
    if (type === "adults") setAdults((v) => Math.max(1, v - 1));
    if (type === "children") setChildren((v) => Math.max(0, v - 1));
    if (type === "infants") setInfants((v) => Math.max(0, v - 1));
  };

  const handleConfirm = () => {
    localStorage.setItem("adult", String(adults));
    localStorage.setItem("children", String(children));
    localStorage.setItem("infant", String(infants));
    window.location.href = "/miryang/jejuair/main";
  };

  return (
    <div
      onClick={() => setPassengerModal(false)}
      className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-[1000px] h-screen flex flex-col"
      >
        {/* HEADER */}
        <header className="relative flex items-center justify-between px-5 py-4 border-b">
          <button
            onClick={() => setPassengerModal(false)}
            className="p-2 text-gray-700"
          >
            ←
          </button>

          <h2 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
            누구와 함께 떠나세요?
          </h2>

          <button
            onClick={() => setPassengerModal(false)}
            className="p-2 text-gray-700"
          >
            ✕
          </button>
        </header>

        {/* ROUTE INFO */}
        <div className="flex items-center justify-between px-5 py-5 bg-gray-100">
          <RouteItem city="서울(김포)" date="2025.09.05(금)" />
          <span className="text-xl text-gray-500">⇄</span>
          <RouteItem city="제주" date="2025.09.12(금)" />
        </div>

        {/* PASSENGERS */}
        <div className="flex-1 overflow-y-auto px-5">
          <PassengerRow
            title="성인"
            desc="13세 이상"
            value={adults}
            onInc={() => inc("adults")}
            onDec={() => dec("adults")}
            disabledMinus={adults <= 1}
          />

          <PassengerRow
            title="소아"
            desc="국내선 기준 만 2세~13세 미만"
            value={children}
            onInc={() => inc("children")}
            onDec={() => dec("children")}
            disabledMinus={children <= 0}
          />

          <PassengerRow
            title="유아"
            desc={
              <>
                생후 7일 이상~만 2세 미만
                <br />
                <span className="text-orange-500">
                  유아의 여정은 동반 성인과 동일해야 합니다
                </span>
              </>
            }
            value={infants}
            onInc={() => inc("infants")}
            onDec={() => dec("infants")}
            disabledMinus={infants <= 0}
          />
        </div>

        {/* AGE CALCULATOR */}
        <div className="px-5 py-4 border-t text-gray-700 flex justify-between items-center">
          <span>나이 계산기</span>
          <span>›</span>
        </div>

        {/* CONFIRM */}
        <button
          onClick={handleConfirm}
          className="m-5 py-4 rounded-lg bg-orange-500 text-white text-lg font-semibold
                     hover:bg-orange-600 transition"
        >
          선택 완료
        </button>
      </div>
    </div>
  );
}

/* =====================
   SUB COMPONENTS
===================== */

function RouteItem({ city, date }: { city: string; date: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base font-semibold">{city}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
}

interface PassengerRowProps {
  title: string;
  desc: React.ReactNode;
  value: number;
  onInc: () => void;
  onDec: () => void;
  disabledMinus: boolean;
}

function PassengerRow({
  title,
  desc,
  value,
  onInc,
  onDec,
  disabledMinus,
}: PassengerRowProps) {
  return (
    <div className="flex items-center justify-between py-6 border-b">
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-snug">{desc}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          disabled={disabledMinus}
          onClick={onDec}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center
                     disabled:opacity-30 disabled:cursor-not-allowed
                     hover:border-orange-500 hover:text-orange-500"
        >
          −
        </button>

        <span className="w-6 text-center text-lg font-semibold">{value}</span>

        <button
          onClick={onInc}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center
                     hover:border-orange-500 hover:text-orange-500"
        >
          +
        </button>
      </div>
    </div>
  );
}
