import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectPassengerModal from "./SelectPassengerModal";
import KorailGuide from "./guide/KorailGuide";

type PassengerForm = {
  adult: number;
  child: number;
  youth: number;
  senior: number;
  disabledPerson: number;
};

type StationField = "departure" | "arrival" | "";

const KorailMain = () => {
  const navigate = useNavigate();

  const [warningModal, setWarningModal] = useState(false);
  const [showStationSelector, setShowStationSelector] = useState(false);
  const [activeField, setActiveField] = useState<StationField>("");

  const [departure, setDeparture] = useState("가평");
  const [arrival, setArrival] = useState("용산");

  const [onModal, setOnModal] = useState(true);
  const [modalPassenger, setModalPassenger] = useState(false);

  const [passengerForm, setPassengerForm] = useState<PassengerForm>({
    adult: 1,
    child: 0,
    youth: 0,
    senior: 0,
    disabledPerson: 0,
  });

  const now = new Date();
  const formattedDate = `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일 (${
    ["일", "월", "화", "수", "목", "금", "토"][now.getDay()]
  }) ${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const stations = [
    "서울",
    "용산",
    "광명",
    "영등포",
    "수원",
    "평택",
    "천안",
    "천안아산",
    "오송",
    "조치원",
    "대전",
    "밀양",
  ];

  const handleStationSelect = (name: string) => {
    if (activeField === "departure") setDeparture(name);
    if (activeField === "arrival") setArrival(name);
    setShowStationSelector(false);
  };

  const swapStation = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-[#1e4a6b] text-white grid grid-cols-3 items-center px-4 py-3">
        <div />
        <h1 className="text-center font-bold text-lg">KORAIL</h1>
        <div className="flex justify-end gap-3">
          <button>Aa</button>
          <button>☰</button>
        </div>
      </header>

      {/* Title */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b">
        <h2 className="font-semibold text-lg">승차권 예매</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          <span>왕복</span>
          <button>⋮</button>
        </div>
      </div>

      {/* Main */}
      {!showStationSelector ? (
        <main className="p-4 space-y-4 flex-1">
          {/* 출발 / 도착 */}
          <div className="flex items-center justify-between">
            <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2">
              출발
            </button>

            <button
              onClick={swapStation}
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              ⇄
            </button>

            <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2">
              도착
            </button>
          </div>

          {/* 역 선택 */}
          <div className="bg-white rounded-xl p-4 flex items-center justify-between">
            <button
              className="text-xl font-semibold text-blue-900"
              onClick={() => {
                setActiveField("departure");
                setShowStationSelector(true);
              }}
            >
              {departure}
            </button>
            <span>→</span>
            <button
              className="text-xl font-semibold text-blue-900"
              onClick={() => {
                setActiveField("arrival");
                setShowStationSelector(true);
              }}
            >
              {arrival}
            </button>
          </div>

          {/* 날짜 */}
          <div className="bg-white rounded-lg p-4">
            <p className="text-xs text-blue-500 mb-1">가는날</p>
            <div className="flex justify-between items-center">
              <span>{formattedDate}</span>
              <span>›</span>
            </div>
          </div>

          {/* 인원 */}
          <div className="bg-white rounded-lg p-4">
            <p className="text-xs text-blue-500 mb-1">인원선택</p>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setModalPassenger(true)}
            >
              <span>
                어른 {passengerForm.adult} · 어린이 {passengerForm.child}
              </span>
              <span>›</span>
            </div>
          </div>

          {/* 버튼 */}
          <div className="bg-blue-50 rounded-lg p-4 flex justify-center gap-6">
            <button
              className="text-blue-600"
              onClick={() => setWarningModal(true)}
            >
              간편구매
            </button>
            <span>|</span>
            <button
              className="text-blue-600"
              onClick={() =>
                navigate("/korail/list", {
                  state: { departure, arrival, passengerForm },
                })
              }
            >
              열차조회
            </button>
          </div>
        </main>
      ) : (
        /* 역 선택 화면 */
        <div className="bg-white flex-1 p-4">
          <button
            className="w-full bg-gray-400 text-white py-2 mb-4"
            onClick={() => setShowStationSelector(false)}
          >
            접기
          </button>

          <div className="grid grid-cols-2 gap-3">
            {stations.map((s) => (
              <button
                key={s}
                onClick={() => handleStationSelect(s)}
                className="border rounded-lg py-3"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <nav className="bg-white border-t flex">
        {["홈", "혜택", "여행", "나의티켓"].map((t) => (
          <button
            key={t}
            className="flex-1 py-2 text-xs text-gray-500"
            onClick={() => setWarningModal(true)}
          >
            {t}
          </button>
        ))}
      </nav>

      {modalPassenger && (
        <SelectPassengerModal
          passengerForm={passengerForm}
          setPassengerForm={setPassengerForm}
          setModalPassenger={setModalPassenger}
        />
      )}

      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "출발지와 도착지를 설정해주세요!",
            "인원을 선택해주세요!",
            "열차조회 버튼을 눌러주세요!",
          ]}
        />
      )}

      {warningModal && (
        <KorailGuide
          onModal={warningModal}
          setOnModal={setWarningModal}
          steps={["비활성화 기능입니다", "실제 앱에서 이용해보세요"]}
        />
      )}
    </div>
  );
};

export default KorailMain;
