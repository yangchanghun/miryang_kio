import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type PassengerForm = {
  adult: number;
  child: number;
  youth: number;
  senior: number;
  disabledPerson: number;
};

type TrainData = {
  id: string;
  departure: string;
  arrival: string;
  departTime: string;
  arriveTime: string;
};

export default function KorailSelectSeat() {
  const navigate = useNavigate();
  const location = useLocation();

  const totalCount: number = location.state?.passengerCount ?? 1;
  const selectedTrain: TrainData = location.state?.selectedTrain;
  const passengerForm: PassengerForm = location.state?.passengerForm;
  const currentDate: string = location.state?.currentDate;

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedCar] = useState("7호차");

  const unavailableSeats = ["1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C"];

  const toggleSeat = (seat: string) => {
    if (selectedSeats.length >= totalCount && !selectedSeats.includes(seat))
      return;

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  const handleComplete = () => {
    if (selectedSeats.length !== totalCount) {
      alert(`좌석 선택 인원은 ${totalCount}명입니다.`);
      return;
    }

    navigate("/miryang/korail/reservation", {
      state: {
        selectedTrain,
        passengerForm,
        selectedSeats,
        passengerCount: totalCount,
        currentDate,
      },
    });
  };

  const renderSeat = (seat: string) => {
    const isUnavailable = unavailableSeats.includes(seat);
    const isSelected = selectedSeats.includes(seat);

    return (
      <button
        key={seat}
        disabled={isUnavailable}
        onClick={() => toggleSeat(seat)}
        className={`w-10 h-10 sm:w-16 sm:h-16 rounded-lg border text-sm sm:text-lg font-semibold
          ${
            isUnavailable
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : isSelected
                ? "bg-[#2b5a8b] text-white border-[#2b5a8b]"
                : "bg-white hover:bg-blue-50 border-gray-300"
          }`}
      >
        {seat}
      </button>
    );
  };

  const rows = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 flex flex-col">
      <audio src="/korail/voice/10.mp3" autoPlay />

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1e3a5f] to-[#2b5a8b] text-white px-4 py-4 flex items-center">
        <button onClick={() => navigate(-1)} className="text-xl">
          ←
        </button>
        <h1 className="flex-1 text-center font-semibold">
          {selectedCar} 좌석 선택
        </h1>
        <div className="flex gap-3 text-lg">
          <span>🕐</span>
          <span>≡</span>
        </div>
      </header>

      {/* Car Select */}
      <div className="bg-white px-4 py-3 border-b">
        <select
          value={selectedCar}
          className="w-full border rounded-lg px-3 py-2 text-base"
        >
          <option>7호차 (24석)</option>
        </select>
      </div>

      {/* Train Info */}
      <div className="bg-white px-4 py-4 border-b text-right">
        <div className="font-semibold">ITX-청춘 2016 (일반실)</div>
        <div className="text-sm text-gray-500">잔여 24석 / 전체 32석</div>
      </div>

      {/* Legend */}
      <div className="bg-white px-4 py-3 flex justify-between text-xs text-gray-600 border-b">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          선택 불가
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border border-gray-600" />
          선택 가능
        </div>
        <div>🔄 순방향</div>
        <div>🪑 역방향</div>
      </div>

      {/* Seat Map */}
      <main className="flex-1 bg-white px-4 py-6 space-y-4">
        {rows.map((row) => (
          <div key={row} className="flex justify-center items-center gap-4">
            <div className="flex gap-2">
              {renderSeat(`${row}D`)}
              {renderSeat(`${row}C`)}
            </div>

            <div className="w-8 text-center text-gray-500">▲</div>

            <div className="flex gap-2">
              {renderSeat(`${row}B`)}
              {renderSeat(`${row}A`)}
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Info */}
      <div className="bg-slate-700 text-white px-4 py-4 text-center">
        <div className="text-lg font-semibold mb-1">선택 좌석</div>
        <div className="text-lg">
          {selectedSeats.length}명 선택 / 총 {totalCount}명
        </div>
      </div>

      {/* Confirm Button */}
      {selectedSeats.length > 0 && (
        <button
          onClick={handleComplete}
          className="bg-[#2b5a8b] text-white text-2xl font-semibold py-6"
        >
          선택완료
        </button>
      )}
    </div>
  );
}
