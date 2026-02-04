import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KorailGuide from "./guide/KorailGuide";

type TrainData = {
  departure?: string;
  arrival?: string;
  departTime?: string;
  arriveTime?: string;
};

export default function KorailTicket() {
  const [onModal, setOnModal] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const passengerCount: number = location.state?.passengerCount ?? 1;
  const trainData: TrainData = location.state?.trainData ?? {};

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
    <div
      onClick={() => navigate("/miryang/korail/complete")}
      className="mx-auto max-w-md min-h-screen flex flex-col bg-gradient-to-br from-sky-400 to-blue-600 text-gray-800"
    >
      <audio src="/korail/voice/6.mp3" autoPlay />

      {/* Header */}
      <header className="px-5 py-4 text-white flex justify-between items-center">
        <h1 className="text-lg font-semibold">승차권 확인</h1>
        <span className="text-xl">≡</span>
      </header>

      {/* Tabs */}
      <div className="flex bg-gray-100 border-b">
        <div className="flex-1 py-3 text-center font-semibold bg-white border-b-4 border-gray-800">
          승차권 (1)
        </div>
        <div className="flex-1 py-3 text-center text-gray-500">정기권·패스</div>
      </div>

      {/* Content */}
      <main className="flex-1 p-5 bg-gray-100">
        {/* Ticket Card */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-5">
          {/* Date */}
          <div className="flex justify-between items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg mb-6 text-sm font-semibold">
            <span>{formattedDate}</span>
            <span>스마트티켓 {passengerCount}매</span>
          </div>

          {/* Route */}
          <div className="flex justify-center items-center gap-10 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{trainData.departure}</div>
              <div className="text-blue-600 font-semibold text-lg">
                {trainData.departTime}
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600">→</div>
            <div className="text-center">
              <div className="text-3xl font-bold">{trainData.arrival}</div>
              <div className="text-blue-600 font-semibold text-lg">
                {trainData.arriveTime}
              </div>
            </div>
          </div>

          {/* Train */}
          <div className="bg-gray-100 rounded-lg px-4 py-3 flex justify-between items-center mb-5">
            <span className="font-semibold">KTX 101</span>
            <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm">
              열차정보
            </button>
          </div>

          {/* Seat / QR */}
          <div className="grid grid-cols-4 text-center gap-3 text-sm mb-5">
            <div className="text-gray-500">타는곳번호</div>
            <div className="text-gray-500">호차번호</div>
            <div className="text-gray-500">좌석번호</div>
            <div className="text-gray-500">운임명수</div>

            <div className="text-blue-600 font-semibold">
              <div>15분전에</div>
              <div>표시</div>
            </div>
            <div className="text-blue-600 font-bold text-lg">7호차</div>
            <div className="text-blue-600 font-bold text-lg">2A</div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-gray-800 rounded relative">
                <div className="absolute inset-1 bg-[repeating-linear-gradient(45deg,white_0px,white_2px,#333_2px,#333_4px)]" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="border-t pt-4 text-sm text-gray-600">
            <div className="mb-2">일반실 | 순방향 | 어른</div>
            <div className="flex justify-between">
              <span className="font-semibold">승차권번호</span>
              <span>82101-0823-10823-08</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-5 flex justify-around">
          {[
            ["📤", "이공유"],
            ["🍽️", "제휴식당"],
            ["🚌", "출차"],
            ["🏪", "카카오T"],
          ].map(([icon, label]) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                {icon}
              </div>
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Notice */}
        <p className="text-xs text-center text-gray-500 leading-relaxed mb-5">
          실제 승차권은 이 문구가 원목으로 출력될 수 있습니다.
        </p>
      </main>

      {/* Bottom Nav */}
      <footer className="bg-white border-t flex justify-around py-3 text-xs">
        {[
          ["🎫", "승차권예매"],
          ["📱", "정기·할인권"],
          ["📢", "관광상품"],
          ["✅", "승차권확인"],
        ].map(([icon, label], i) => (
          <div
            key={label}
            className={`flex flex-col items-center ${
              i === 3 ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </footer>

      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "승차권이 발권되었습니다",
            "화면을 터치하면 교육이 종료됩니다",
          ]}
        />
      )}
    </div>
  );
}
