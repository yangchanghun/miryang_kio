import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

interface Flight {
  id: number;
  flightNumber: string;
  isLowestPrice: boolean;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  fareType: string;
  price: number;
  seat: string;
  services: string[];
}

export default function FlightBookingPage() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(false);
  const [goSelected, setGoSelected] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const destination = localStorage.getItem("destination") ?? "";
  const goPrice = Number(localStorage.getItem("goPrice") ?? 0);
  const returnPrice = Number(localStorage.getItem("returnPrice") ?? 0);

  const goDate = new Date(localStorage.getItem("goDate") ?? "");
  const returnDate = new Date(localStorage.getItem("returnDate") ?? "");

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const flights: Flight[] = [
    {
      id: 1,
      flightNumber: "7C907",
      isLowestPrice: true,
      departureTime: localStorage.getItem("departureTime") ?? "",
      arrivalTime: localStorage.getItem("arrivalTime") ?? "",
      duration: localStorage.getItem("duration") ?? "",
      fareType: "스탠다드",
      price: goPrice,
      seat: "7석",
      services: ["운임 내 제공 서비스", "유의사항"],
    },
  ];

  const returnFlights: Flight[] = [
    {
      id: 1,
      flightNumber: "3D007",
      isLowestPrice: true,
      departureTime: localStorage.getItem("departureTime") ?? "",
      arrivalTime: localStorage.getItem("arrivalTime") ?? "",
      duration: localStorage.getItem("duration") ?? "",
      fareType: "스탠다드",
      price: returnPrice,
      seat: "7석",
      services: ["운임 내 제공 서비스", "유의사항"],
    },
  ];

  const handleNext = () => {
    if (!selected && !goSelected) {
      alert("가는 편을 선택해주세요");
      return;
    }
    if (selected && !goSelected) {
      setGoSelected(true);
      setSelected(false);
      return;
    }
    if (selected && goSelected) {
      navigate("/miryang/jejuair/passengerinfo");
    }
  };

  const currentFlights = goSelected ? returnFlights : flights;

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen bg-gray-100">
      <audio src="/jejuair/voice/2.mp3" autoPlay />

      {/* HEADER */}
      <header className="flex items-center gap-4 px-5 py-4 bg-white border-b">
        <button
          onClick={() => navigate("/miryang/jejuair/main")}
          className="text-xl"
        >
          ←
        </button>

        <div className="flex items-center gap-3 flex-1">
          <Step active label="항공권 예매" />
          <Line />
          <Step />
          <Line />
          <Step />
          <Line />
          <Step />
        </div>
      </header>

      {/* ROUTE */}
      <section className="bg-white px-5 py-4 mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span>서울(김포)</span>
            <span className="text-gray-400">›</span>
            <span>{destination}</span>
          </div>
          <button className="text-gray-400">⌃</button>
        </div>

        <div className="mt-2 font-semibold">
          {goSelected ? "오는 편" : "가는 편"}
        </div>
      </section>

      {/* DATE */}
      <div className="bg-white flex border-b">
        {[goSelected ? returnDate : goDate].map((d, i) => (
          <button
            key={i}
            className="flex-1 py-5 border-b-4 border-orange-500 text-center"
          >
            <div className="text-[22px] font-medium">
              {d.getMonth() + 1}.{d.getDate()}({week[d.getDay()]})
            </div>
            <div className="text-lg font-semibold text-orange-500">
              {Number(goSelected ? returnPrice : goPrice).toLocaleString()}원~
            </div>
          </button>
        ))}
      </div>

      {/* FILTER */}
      <div className="bg-white px-5 py-4 flex gap-3">
        <FilterBtn label="출발시간순" />
        <FilterBtn label="모든경로" />
      </div>

      {/* FLIGHTS */}
      <div className="px-5 py-4">
        {currentFlights.map((f) => (
          <div key={f.id} className="bg-white rounded-xl p-5 mb-4 shadow">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2 font-semibold">
                {f.flightNumber}
                {f.isLowestPrice && (
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
                    최저가
                  </span>
                )}
              </div>
              <div className="flex gap-2 text-gray-400">⤴ ♡</div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <TimeBox time={f.departureTime} />
              <div className="flex-1 text-center text-sm text-gray-500">
                ─ {f.duration} ─
              </div>
              <TimeBox time={f.arrivalTime} />
            </div>

            <div
              onClick={() => setSelected(!selected)}
              className={`rounded-lg p-4 text-center cursor-pointer transition
                ${
                  selected
                    ? "bg-orange-500 text-white"
                    : "border border-orange-500 text-orange-500"
                }`}
            >
              <div className="text-sm font-medium mb-1">{f.fareType}</div>
              <div className="text-2xl font-bold">
                {f.price.toLocaleString()}원
              </div>
              <div className="text-sm">{f.seat}</div>
            </div>

            <div className="flex gap-2 mt-4 flex-wrap">
              {f.services.map((s) => (
                <button
                  key={s}
                  className="px-3 py-1 text-xs border rounded bg-gray-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
        <div className="px-5 py-3 flex justify-between text-lg font-semibold">
          <span>총 결제 금액</span>
          <span>{(goSelected ? returnPrice : goPrice).toLocaleString()}원</span>
        </div>
        <div className="px-5 pb-3 text-orange-500 font-semibold">
          할인 적용 시 {(goSelected ? returnPrice : goPrice) - 10000}원
        </div>
        <button
          onClick={handleNext}
          className="w-full py-4 bg-orange-500 text-white text-lg font-bold"
        >
          {goSelected ? "오는 편 선택하기" : "가는 편 선택하기"}
        </button>
      </div>

      {/* GUIDE */}
      {onModal && (
        <JejuAirCommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="제주항공 앱"
          steps={["가는 편을 선택해주세요", "오는 편을 선택해주세요"]}
        />
      )}

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-[200px] right-5 bg-gray-800 text-white px-4 py-2 rounded"
      >
        사용법
      </button>
    </div>
  );
}

/* ------------------ SUB ------------------ */

function Step({ active, label }: { active?: boolean; label?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded-full ${
          active ? "bg-orange-500" : "bg-gray-300"
        }`}
      />
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}

function Line() {
  return <div className="w-5 h-[2px] bg-gray-300" />;
}

function TimeBox({ time }: { time: string }) {
  return <div className="text-2xl font-semibold">{time}</div>;
}

function FilterBtn({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 px-3 py-2 border rounded bg-gray-50 text-sm">
      {label} ▾
    </button>
  );
}
