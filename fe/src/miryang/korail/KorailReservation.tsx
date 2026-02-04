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

export default function KorailReservation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [warningModal, setWarningModal] = useState(false);
  const [onModal, setOnModal] = useState(true);

  const passengerForm: PassengerForm = location.state?.passengerForm ?? {
    adult: 1,
    child: 0,
    youth: 0,
    senior: 0,
    disabledPerson: 0,
  };

  const trainData: TrainData = location.state?.selectedTrain;
  const seatsArray: string[] = location.state?.selectedSeats ?? ["A1"];
  const seatsString = seatsArray.join(", ");

  const passengerCount = Object.values(passengerForm).reduce(
    (sum, v) => sum + v,
    0,
  );

  const currentDate: string =
    location.state?.currentDate ?? "2026년 9월 17일 (수)";

  const dueDate = `${currentDate} 23:59`;

  const now = new Date();
  const formattedNow = `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일 (${
    ["일", "월", "화", "수", "목", "금", "토"][now.getDay()]
  }) ${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 text-gray-800 pb-[120px]">
      <audio src="/korail/voice/3.mp3" autoPlay />

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1e3a5f] to-[#2b5a8b] text-white px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-xl">
          ←
        </button>
        <h1 className="flex-1 text-center font-semibold">승차권 정보 확인</h1>
        <button className="text-xl">≡</button>
      </header>

      {/* Content */}
      <main className="bg-white p-5 min-h-[calc(100vh-70px)]">
        {/* Date / Count */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-500 font-semibold">{formattedNow}</span>
          <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
            {passengerCount}매
          </span>
        </div>

        {/* Train Info */}
        <section className="mb-6">
          <div className="font-semibold mb-2">
            [{trainData.id}] {trainData.departure} {trainData.departTime} →{" "}
            {trainData.arrival} {trainData.arriveTime}
          </div>
          <div className="text-sm text-gray-500">
            일반실 7호차 {seatsString}
          </div>
        </section>

        {/* Status */}
        <section className="mb-6">
          <div className="text-red-500 font-semibold text-sm mb-1">
            결제기한
          </div>
          <div className="text-red-500 font-semibold mb-2">{dueDate}</div>
          <div className="text-sm">
            기한 내 미결제시 승차권이 자동 취소됩니다.
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => navigate("/miryang/korail/main")}
            className="flex-1 py-3 rounded-full border text-gray-600 font-semibold hover:bg-gray-50"
          >
            예약취소
          </button>
          <button
            onClick={() => setWarningModal(true)}
            className="flex-1 py-3 rounded-full border text-gray-600 font-semibold hover:bg-gray-50"
          >
            장바구니
          </button>
        </div>

        {/* Notice */}
        <section className="mb-8">
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 결제하지 않으면 예약이 취소됩니다.</li>
            <li>• 승차권을 발권받은 스마트폰에서만 확인할 수 있습니다.</li>
            <li>• 할인승차권 이용 시 관련 신분증을 소지하셔야 합니다.</li>
          </ul>
        </section>

        {/* Important */}
        <section className="mb-20">
          <h3 className="font-semibold mb-4">꼭 알아두세요!</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="text-red-500 font-semibold">
              • 승차권 환불(반환) 위약금 확인하기
            </li>
            <li className="text-red-500 font-semibold">
              • 휴대폰 세로 승차기준
            </li>
            <li>
              • 코레일톡에서 구매한 승차권은 역창구 변경 시 할인 취소될 수
              있습니다.
            </li>
            <li>• 할인율은 별도 공지 없이 변경될 수 있습니다.</li>
            <li>
              • 할인은 운임에만 적용 (
              <span className="text-red-500 font-semibold">
                특실/우등은 운임+요금
              </span>
              )
            </li>
            <li>
              •{" "}
              <span className="text-red-500 font-semibold">
                사전/사후 구입 승차권으로 승차 불가
              </span>
            </li>
          </ul>
        </section>
      </main>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t px-4 py-4">
        <button
          onClick={() =>
            navigate("/miryang/korail/payment", {
              state: {
                passengerForm,
                trainData,
                seatsString,
              },
            })
          }
          className="w-full py-4 rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#2b5a8b]
                     text-white font-semibold hover:opacity-90"
        >
          결제하기
        </button>
      </div>

      {/* Guides */}
      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "승차권 정보를 확인해주세요",
            "결제하기 버튼을 눌러 결제 화면으로 이동해주세요",
          ]}
        />
      )}

      {warningModal && (
        <KorailGuide
          onModal={warningModal}
          setOnModal={setWarningModal}
          steps={["비활성화된 기능입니다", "실제 앱에서 이용해보세요"]}
        />
      )}
    </div>
  );
}
