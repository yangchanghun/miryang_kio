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

export default function KorailPaymentMethod() {
  const navigate = useNavigate();
  const location = useLocation();

  const [onModal, setOnModal] = useState(true);
  const [clickModal, setClickModal] = useState(false);
  const [activeTab] = useState<"카드결제" | "간편결제">("간편결제");
  const [pointsExpanded, setPointsExpanded] = useState(false);
  const [simplePayExpanded, setSimplePayExpanded] = useState(true);
  const [selectedPay, setSelectedPay] = useState(false);

  const totalPay: number = location.state?.totalPay ?? 13800;
  const passengerCount: number = location.state?.passengerCount ?? 1;
  const passengerForm: PassengerForm = location.state?.passengerForm ?? {};
  const trainData: TrainData = location.state?.trainData ?? {};

  const handlePay = () => {
    if (!selectedPay) {
      setClickModal(true);
      return;
    }

    navigate("/miryang/korail/ticket", {
      state: {
        totalPay,
        passengerForm,
        trainData,
        passengerCount,
      },
    });
  };

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 flex flex-col text-gray-800">
      <audio src="/korail/voice/5.mp3" autoPlay />

      {/* Header */}
      <header className="bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white py-4 text-center font-semibold">
        결제
      </header>

      {/* Tabs */}
      <div className="flex bg-white border-b">
        {["카드결제", "간편결제"].map((tab) => (
          <div
            key={tab}
            className={`flex-1 py-4 text-center font-medium cursor-pointer
              ${
                activeTab === tab
                  ? "text-purple-500 border-b-4 border-purple-500"
                  : "text-gray-500"
              }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content */}
      <main className="flex-1 bg-white p-5">
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

          <p className="text-xs text-red-500 mt-3">
            * 특(우등)실은 운임과 요금으로 구성되며 운임만 할인됨
          </p>
        </section>

        {/* Points */}
        <section className="border-b mb-4">
          <button
            onClick={() => setPointsExpanded(!pointsExpanded)}
            className="w-full flex justify-between py-4 text-sm font-medium"
          >
            <span className="text-purple-500">포인트 사용</span>
            <span>⌄</span>
          </button>

          {pointsExpanded && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">KTX 마일리지</span>
                <span>⌄</span>
              </div>
            </div>
          )}
        </section>

        {/* Simple Pay */}
        <section className="border-b">
          <button
            onClick={() => setSimplePayExpanded(!simplePayExpanded)}
            className="w-full flex justify-between py-4 text-sm font-medium"
          >
            <span>간편결제</span>
            <span>⌄</span>
          </button>

          {simplePayExpanded && (
            <div className="space-y-3 pb-6">
              {/* Toss Pay */}
              <div
                onClick={() => setSelectedPay(true)}
                className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer
                  ${
                    selectedPay
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
              >
                <div>
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="text-slate-700">KORAIL</span>
                    <span className="text-gray-400">X</span>
                    <span className="text-blue-500 text-lg">토스Pay</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    레아은행 973********015
                  </div>
                </div>
                <span className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs px-3 py-1 rounded-full">
                  EVENT
                </span>
              </div>

              {/* Naver Pay */}
              <div className="flex justify-between items-center p-4 rounded-xl border border-gray-200">
                <div className="font-medium">네이버페이(머니)</div>
                <span className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs px-3 py-1 rounded-full">
                  EVENT
                </span>
              </div>

              {/* Kakao Pay */}
              <div className="flex justify-between items-center p-4 rounded-xl border border-gray-200">
                <div className="font-medium">카카오페이</div>
                <span className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs px-3 py-1 rounded-full">
                  EVENT
                </span>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Bottom */}
      <footer className="bg-slate-700 text-white p-4">
        <div className="flex justify-between mb-4 font-semibold">
          <span>총 {passengerCount}개</span>
          <span>{totalPay.toLocaleString()}원</span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white text-gray-600 py-3 rounded-lg font-semibold"
          >
            결제취소
          </button>
          <button
            onClick={handlePay}
            className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 py-3 rounded-lg font-semibold"
          >
            결제/발권
          </button>
        </div>
      </footer>

      {/* Guides */}
      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "최종 결제 단계입니다",
            "결제수단은 교육용 카드로 연결되어 있습니다",
            "결제/발권 버튼 클릭 시 결제가 완료됩니다",
          ]}
        />
      )}

      {clickModal && (
        <KorailGuide
          onModal={clickModal}
          setOnModal={setClickModal}
          steps={[
            "결제수단을 선택해주세요",
            "KORAIL X 토스Pay를 선택한 후 결제/발권을 눌러주세요",
          ]}
        />
      )}
    </div>
  );
}
