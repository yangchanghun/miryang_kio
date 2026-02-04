import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PassengerSelectorModal from "./modal/PassengerSelectorModal";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

const today = new Date().toISOString().split("T")[0];
const addDays = (date: string, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
};

export default function JejuAir() {
  const navigate = useNavigate();

  const [adult] = useState<number>(Number(localStorage.getItem("adult")) || 1);
  const [children] = useState<number>(
    Number(localStorage.getItem("children")) || 0,
  );
  const [infant] = useState<number>(
    Number(localStorage.getItem("infant")) || 0,
  );

  const [destination] = useState(localStorage.getItem("destination") || "");
  const [tripType, setTripType] = useState<"왕복" | "편도" | "다구간">("왕복");

  const [goDate, setGoDate] = useState(today);
  const [returnDate, setReturnDate] = useState(addDays(today, 7));

  const [passengerModal, setPassengerModal] = useState(false);
  const [guideModal, setGuideModal] = useState(false);

  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!destination) {
      alert("도착지를 선택해주세요");
      return;
    }
    if (new Date(goDate) > new Date(returnDate)) {
      alert("출발일이 도착일보다 늦을 수 없습니다");
      return;
    }
    localStorage.setItem("goDate", goDate);
    localStorage.setItem("returnDate", returnDate);
    navigate("/miryang/jejuair/booking");
  };

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen bg-gray-100 relative">
      <audio src="/jejuair/voice/1.mp3" autoPlay />

      {/* HERO */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/jejuair/busan.jpg)" }}
      >
        <header className="absolute top-0 w-full px-5 py-3 flex justify-between items-center text-white">
          <h1 className="text-3xl font-extrabold italic">JEJUair</h1>
          <button className="space-y-1">
            <span className="block w-6 h-[3px] bg-white rounded" />
            <span className="block w-6 h-[3px] bg-white rounded" />
            <span className="block w-6 h-[3px] bg-white rounded" />
          </button>
        </header>

        <div className="text-center text-white z-10">
          <h2 className="text-2xl font-extrabold drop-shadow">
            부산-상하이 신규취항
          </h2>
          <p className="text-xl font-bold drop-shadow mt-2">
            7월 25일부터 주 4회 운항
          </p>
        </div>
      </section>

      {/* QUICK MENU */}
      <div className="-mt-40 px-5 relative z-20">
        <div className="grid grid-cols-3 shadow rounded-lg overflow-hidden">
          <button className="bg-white py-4 font-medium">항공권 예매</button>
          <button className="bg-black/70 text-white py-4">예약 조회</button>
          <button className="bg-black/70 text-white py-4">운항 조회</button>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl shadow p-5 mt-4">
          {/* Trip Type */}
          <div className="flex border-b mb-4">
            {["왕복", "편도", "다구간"].map((t) => (
              <button
                key={t}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick={() => setTripType(t as any)}
                className={`flex-1 py-2 text-center ${
                  tripType === t
                    ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            onClick={() => setGuideModal(true)}
            className="
    fixed bottom-[200px] right-5
    flex items-center gap-2
    px-5 py-3
    rounded-full
    bg-[#ff6b35]
    text-white text-sm font-semibold
    shadow-lg
    hover:bg-[#e55a2b]
    active:scale-95
    transition-all
    z-50
  "
          >
            ❓ 사용법
          </button>

          {/* Route */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 bg-gray-100 p-4 rounded font-bold text-gray-600">
              서울(김포)
            </div>
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white">
              ⇄
            </button>
            <div
              onClick={() => navigate("/miryang/jejuair/selector")}
              className="flex-1 bg-gray-100 p-4 rounded font-bold cursor-pointer"
            >
              {destination || "도착지"}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 relative">
            {/* 출발일 */}
            <button
              onClick={() => startRef.current?.showPicker()}
              className="flex-1 border rounded px-3 py-2 text-left"
            >
              출발일: {goDate}
            </button>

            <input
              ref={startRef}
              type="date"
              value={goDate}
              onChange={(e) => setGoDate(e.target.value)}
              className="absolute opacity-0 pointer-events-none"
            />

            <span>~</span>

            {/* 도착일 */}
            <button
              onClick={() => endRef.current?.showPicker()}
              className="flex-1 border rounded px-3 py-2 text-left"
            >
              도착일: {returnDate}
            </button>

            <input
              ref={endRef}
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="absolute opacity-0 pointer-events-none"
            />
          </div>

          {/* Passenger */}
          <div
            onClick={() => setPassengerModal(true)}
            className="flex gap-4 py-3 cursor-pointer"
          >
            <span className="text-blue-500">성인 {adult}</span>
            {children > 0 && (
              <span className="text-blue-500">소아 {children}</span>
            )}
            {infant > 0 && <span className="text-blue-500">유아 {infant}</span>}
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold"
          >
            항공권 검색
          </button>
        </div>
      </div>

      {/* MODALS */}
      {passengerModal && (
        <PassengerSelectorModal setPassengerModal={setPassengerModal} />
      )}
      {guideModal && (
        <JejuAirCommonModal
          title="제주항공 앱"
          onModal={guideModal}
          setOnModal={setGuideModal}
          steps={[
            "도착지를 선택해주세요",
            "날짜를 선택해주세요",
            "인원을 선택해주세요",
            "항공권 검색을 눌러주세요",
          ]}
        />
      )}
    </div>
  );
}
