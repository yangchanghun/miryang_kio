import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

export default function TravelDetailsPage() {
  const navigate = useNavigate();

  const destination = localStorage.getItem("destination");
  const departureTime = localStorage.getItem("departureTime");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const duration = localStorage.getItem("duration");
  const goDate = localStorage.getItem("goDate");
  const returnDate = localStorage.getItem("returnDate");

  const adult = localStorage.getItem("adult");
  const children = localStorage.getItem("children");
  const infant = localStorage.getItem("infant");

  const [expanded, setExpanded] = useState<string | null>(null);
  const [onModal, setOnModal] = useState(false);
  const [agreements, setAgreements] = useState({
    all: false,
    airline: false,
    domestic: false,
  });

  const toggleAgreement = (key: "all" | "airline" | "domestic") => {
    if (key === "all") {
      const v = !agreements.all;
      setAgreements({ all: v, airline: v, domestic: v });
    } else {
      const next = { ...agreements, [key]: !agreements[key] };
      next.all = next.airline && next.domestic;
      setAgreements(next);
    }
  };

  const canNext = agreements.airline && agreements.domestic;

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-white">
      <audio src="/jejuair/voice/5.mp3" autoPlay />

      {/* HEADER */}
      <header className="sticky top-0 z-20 flex items-center gap-4 border-b bg-white px-5 py-4">
        <button
          onClick={() => navigate("/miryang/jejuair/baggage")}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          ←
        </button>

        {/* Progress */}
        <div className="flex flex-1 items-center justify-center gap-3 scale-90">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <div className="w-14 h-[2px] bg-orange-500" />
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span className="absolute mt-10 text-xs font-semibold text-orange-500">
              확인 및 동의
            </span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-5 py-6 pb-32">
        <h1 className="text-2xl font-bold mb-6">여행 상세</h1>

        {/* FLIGHT CARD */}
        {[
          {
            title: "가는 편",
            from: "서울(김포)",
            to: destination,
            date: goDate,
          },
          {
            title: "오는 편",
            from: destination,
            to: "서울(김포)",
            date: returnDate,
          },
        ].map((f, idx) => (
          <section key={idx} className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">{f.title}</span>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>성인 {adult}</span>
                <span>소아 {children}</span>
                <span>유아 {infant}</span>
              </div>
            </div>

            <div className="border rounded-xl p-5">
              <div className="flex justify-between items-center pb-4 border-b mb-4">
                <span className="text-lg font-bold">7C10{idx + 1}</span>
                <span className="text-sm text-orange-500 font-semibold">
                  스탠다드
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-xs text-gray-500">{f.date}</div>
                  <div className="text-lg font-bold">{departureTime}</div>
                  <div className="font-semibold">{f.from}</div>
                </div>

                <div className="flex flex-col items-center text-sm text-gray-500">
                  <span>{duration}</span>
                  <span>→</span>
                </div>

                <div className="text-center">
                  <div className="text-xs text-gray-500">{f.date}</div>
                  <div className="text-lg font-bold">{arrivalTime}</div>
                  <div className="font-semibold">{f.to}</div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* EXPAND */}
        <div className="border rounded-xl mb-6">
          <button
            onClick={() => setExpanded(expanded === "fare" ? null : "fare")}
            className="w-full px-5 py-4 flex justify-between items-center"
          >
            <span className="font-medium">항목별 운임 상세</span>
            <span className={`transition ${expanded ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          {expanded && (
            <div className="px-5 pb-4 text-sm text-gray-600">
              본 웹앱은 교육용으로 실제 항공사 앱과 차이가 있습니다.
            </div>
          )}
        </div>

        {/* AGREEMENTS */}
        <div className="bg-gray-100 rounded-xl p-5 mb-8">
          <h3 className="font-semibold mb-4">약관 및 규정 동의</h3>

          {[
            { key: "all", label: "전체 동의" },
            { key: "airline", label: "항공권 운임 규정 동의" },
            { key: "domestic", label: "국내선 여객운송 약관 동의" },
          ].map((a) => (
            <label
              key={a.key}
              className="flex items-center justify-between py-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={agreements[a.key as keyof typeof agreements]}
                  onChange={() =>
                    toggleAgreement(a.key as "all" | "airline" | "domestic")
                  }
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center ${
                    agreements[a.key as keyof typeof agreements]
                      ? "bg-orange-500 border-orange-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  ✓
                </div>
                <span className="text-sm">{a.label}</span>
              </div>
              {a.key !== "all" && <span className="text-gray-400">›</span>}
            </label>
          ))}
        </div>

        {/* NEXT */}
        <button
          disabled={!canNext}
          onClick={() => navigate("/miryang/jejuair/payment")}
          className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[960px]
            py-4 rounded-xl text-lg font-bold text-white
            ${
              canNext
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          다음
        </button>

        <button
          onClick={() => setOnModal(true)}
          className="fixed bottom-40 right-5 text-sm"
        >
          사용법
        </button>

        {onModal && (
          <JejuAirCommonModal
            onModal={onModal}
            setOnModal={setOnModal}
            title="제주항공 앱"
            steps={["약관을 모두 동의한 후 다음 버튼을 눌러주세요"]}
          />
        )}
      </main>
    </div>
  );
}
