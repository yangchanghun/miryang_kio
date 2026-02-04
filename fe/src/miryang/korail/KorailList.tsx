import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import KorailGuide from "./guide/KorailGuide";

type PassengerForm = {
  adult: number;
  child: number;
  youth: number;
  senior: number;
  disabledPerson: number;
};

type Train = {
  id: string;
  departure: string;
  arrival: string;
  departTime: string;
  arriveTime: string;
  price: string;
  click: boolean;
  noData?: boolean;
};

export default function KorailList() {
  const navigate = useNavigate();
  const location = useLocation();

  const passengerForm: PassengerForm = location.state?.passengerForm;
  const departure = location.state?.departure;
  const arrival = location.state?.arrival;

  const [warningModal, setWarningModal] = useState(false);
  const [onModal, setOnModal] = useState(true);

  const BASE_TRAIN_DATA: Train[] = [
    "10:57",
    "13:33",
    "15:33",
    "17:33",
    "18:33",
    "19:15",
    "19:59",
    "21:34",
    "22:33",
  ].map((time, i) => ({
    id: `ITX-청춘 ${2028 + i * 2}`,
    departure,
    arrival,
    departTime: time,
    arriveTime: time,
    price: "6,900원",
    click: false,
  }));

  const [trainData, setTrainData] = useState<Train[]>(BASE_TRAIN_DATA);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = () => {
    const d = currentDate;
    const day = ["일", "월", "화", "수", "목", "금", "토"][d.getDay()];
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${day})`;
  };

  const hhmmToMin = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const updateNoData = () => {
    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();

    setTrainData((prev) =>
      prev.map((t) => ({
        ...t,
        noData: hhmmToMin(t.departTime) <= nowMin,
      })),
    );
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateNoData();
    const timer = setInterval(updateNoData, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (index: number) => {
    if (trainData[index].noData) {
      alert("예매가 종료되었습니다.");
      return;
    }

    setTrainData((prev) => prev.map((t, i) => ({ ...t, click: i === index })));
  };

  const passengerCount = Object.values(passengerForm).reduce(
    (s, v) => s + v,
    0,
  );

  const selectedTrain = trainData.find((t) => t.click);

  return (
    <div className="mx-auto max-w-md min-h-screen bg-gray-100 pb-[180px]">
      <audio src="/korail/voice/2.mp3" autoPlay />

      {/* Header */}
      <header className="bg-[#1e3a5f] text-white flex items-center px-4 py-3">
        <button
          onClick={() => navigate("/miryang/korail/main")}
          className="text-2xl"
        >
          ‹
        </button>
        <h1 className="flex-1 text-center font-semibold">열차 조회</h1>
        <div className="flex gap-3">
          <button>⟲</button>
          <button>≡</button>
        </div>
      </header>

      {/* Route */}
      <div className="bg-blue-200 text-blue-900 text-center py-4 font-semibold">
        {departure} → {arrival}
      </div>

      {/* Date */}
      <div className="flex justify-between items-center bg-blue-50 px-4 py-3">
        <button
          onClick={() => setCurrentDate(new Date(+currentDate - 86400000))}
          className="bg-white border rounded-full px-4 py-1 text-sm"
        >
          이전날
        </button>
        <span className="font-semibold">{formattedDate()}</span>
        <button
          onClick={() => setCurrentDate(new Date(+currentDate + 86400000))}
          className="bg-white border rounded-full px-4 py-1 text-sm"
        >
          다음날
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 bg-gray-50 text-center text-sm font-semibold py-3 border-b">
        <div>열차</div>
        <div>출발</div>
        <div>도착</div>
        <div>일반실</div>
        <div>특실</div>
      </div>

      {/* Train List */}
      {trainData.map((t, i) => (
        <div
          key={i}
          className={`grid grid-cols-5 text-center py-4 border-b ${
            t.noData ? "opacity-30" : ""
          }`}
        >
          <div className="font-semibold">{t.id}</div>
          <div>
            <div className="font-semibold">{t.departTime}</div>
            <div className="text-xs text-gray-500">{t.departure}</div>
          </div>
          <div>
            <div className="font-semibold">{t.arriveTime}</div>
            <div className="text-xs text-gray-500">{t.arrival}</div>
          </div>
          <button
            onClick={() => handleSelect(i)}
            className={`border px-2 py-1 text-blue-600 font-semibold ${
              t.click ? "bg-blue-100" : ""
            }`}
          >
            {t.price}
          </button>
          <div className="text-gray-400">—</div>
        </div>
      ))}

      {/* Bottom */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md">
        {selectedTrain ? (
          <div className="bg-slate-700 text-white rounded-t-xl overflow-hidden">
            <div className="flex text-sm">
              {["열차시각", "운임요금", "좌석선택"].map((t) => (
                <button
                  key={t}
                  onClick={() =>
                    t === "좌석선택"
                      ? navigate("/miryang/korail/seat", {
                          state: {
                            selectedTrain,
                            passengerForm,
                            passengerCount,
                            currentDate: formattedDate(),
                          },
                        })
                      : setWarningModal(true)
                  }
                  className="flex-1 py-3 border-r last:border-r-0"
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                navigate("/miryang/korail/reservation", {
                  state: {
                    selectedTrain,
                    passengerForm,
                    passengerCount,
                    currentDate: formattedDate(),
                  },
                })
              }
              className="bg-blue-100 text-blue-700 font-bold py-4 w-full"
            >
              예매
            </button>
          </div>
        ) : (
          <div className="flex bg-white border-t">
            {["홈", "혜택", "여행", "나의티켓"].map((t) => (
              <button
                key={t}
                onClick={() => setWarningModal(true)}
                className="flex-1 py-3 text-xs text-gray-500"
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {onModal && (
        <KorailGuide
          onModal={onModal}
          setOnModal={setOnModal}
          steps={[
            "시간대를 확인 후 운임을 선택하세요",
            "예매 버튼을 눌러주세요",
            "그 외 기능은 비활성화입니다",
          ]}
        />
      )}

      {warningModal && (
        <KorailGuide
          onModal={warningModal}
          setOnModal={setWarningModal}
          steps={["비활성화 기능입니다", "실제 앱에서 이용해주세요"]}
        />
      )}
    </div>
  );
}
