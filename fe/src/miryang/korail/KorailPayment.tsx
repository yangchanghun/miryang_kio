import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KorailGuide from "./guide/KorailGuide";

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

export default function KorailPayment() {
  const [onModal, setOnModal] = useState(true);
  const [discountExpanded, setDiscountExpanded] = useState(false);
  const [identityExpanded, setIdentityExpanded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const passengerForm: PassengerForm = location.state?.passengerForm ?? {
    adult: 1,
    child: 0,
    youth: 0,
    senior: 0,
    disabledPerson: 0,
  };

  const trainData: TrainData = location.state?.trainData ?? {};
  const payPerPerson = 6800;

  const passengerCount = Object.values(passengerForm).reduce(
    (sum, v) => sum + v,
    0,
  );

  const totalPay = payPerPerson * passengerCount;

  const now = new Date();
  const formattedDate = `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일 (${
    ["일", "월", "화", "수", "목", "금", "토"][now.getDay()]
  }) ${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 flex flex-col text-gray-800">
      <audio src="/korail/voice/4.mp3" autoPlay />

      {/* Header */}
      <header className="bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white px-4 py-4 text-center font-semibold">
        결제
      </header>

      {/* Content */}
      <main className="flex-1 bg-white p-5">
        {/* Date / Train */}
        <section className="text-center mb-8">
          <div className="text-purple-500 font-semibold mb-2">
            {formattedDate}
          </div>
          <div className="text-purple-500 font-semibold mb-6">
            {trainData.id}
          </div>

          <div className="flex justify-center items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">
                {trainData.departure}
              </div>
              <div className="text-gray-500">{trainData.departTime}</div>
            </div>
            <span className="text-purple-500 font-bold">→</span>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">
                {trainData.arrival}
              </div>
              <div className="text-gray-500">{trainData.arriveTime}</div>
            </div>
          </div>
        </section>

        {/* Seat Info */}
        <section className="grid grid-cols-3 items-center border-b pb-4 mb-6">
          <div />
          <div className="text-center text-lg font-bold">
            7호차 2A {passengerCount > 1 && `외 ${passengerCount - 1}석`}
          </div>
          <div className="text-right">
            <button className="text-purple-500 text-sm bg-purple-50 px-4 py-1 rounded-full">
              상세
            </button>
          </div>
        </section>

        {/* Price */}
        <section className="mb-8 text-sm">
          {[
            ["운임", totalPay],
            ["요금", 0],
            ["운임할인", 0],
            ["요금할인", 0],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between py-1 text-gray-600"
            >
              <span>{label}</span>
              <span>{Number(value).toLocaleString()}원</span>
            </div>
          ))}

          <div className="flex justify-between border-t pt-4 mt-3">
            <span className="font-semibold text-base">결제금액</span>
            <span className="font-bold text-lg">
              {totalPay.toLocaleString()}원
            </span>
          </div>

          <p className="text-xs text-red-500 mt-3 leading-relaxed">
            * 특(우등)실은 운임과 요금으로 구성되며 운임만 할인됩니다.
          </p>
        </section>

        {/* Expandables */}
        <section className="border-b">
          <button
            onClick={() => setDiscountExpanded(!discountExpanded)}
            className="w-full flex justify-between py-4 text-sm"
          >
            <span>할인쿠폰 적용</span>
            <span>{discountExpanded ? "↓" : "→"}</span>
          </button>
        </section>

        <section className="border-b">
          <button
            onClick={() => setIdentityExpanded(!identityExpanded)}
            className="w-full flex justify-between py-4 text-sm"
          >
            <span>국가유공자 본인 할인</span>
            <span>{identityExpanded ? "↓" : "→"}</span>
          </button>
        </section>
      </main>

      {/* Bottom */}
      <footer className="bg-slate-700 text-white">
        <div className="flex justify-between px-4 py-4 text-lg font-semibold">
          <span>총 {passengerCount}개</span>
          <span>{totalPay.toLocaleString()}원</span>
        </div>

        <div className="flex">
          <button
            onClick={() => navigate("/miryang/korail/reservation")}
            className="flex-1 bg-white text-gray-600 py-4 font-semibold border"
          >
            예약취소
          </button>
          <button
            onClick={() =>
              navigate("/miryang/korail/paymethod", {
                state: {
                  totalPay,
                  passengerForm,
                  trainData,
                  formattedDate,
                  passengerCount,
                },
              })
            }
            className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 py-4 font-semibold"
          >
            다음
          </button>
        </div>
      </footer>

      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "좌석과 결제금액을 확인해주세요",
            "다음 버튼을 눌러 결제수단 선택 화면으로 이동해주세요",
          ]}
        />
      )}
    </div>
  );
}
