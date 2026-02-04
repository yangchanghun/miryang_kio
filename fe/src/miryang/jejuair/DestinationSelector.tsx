import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Country =
  | "대한민국"
  | "일본"
  | "동북아시아"
  | "베트남"
  | "필리핀"
  | "싱가포르"
  | "태국/라오스"
  | "괌/사이판"
  | "몽골";

interface Destination {
  city: string;
  code: string;
  goPrice: number;
  returnPrice: number;
  duration: string;
  departureTime: string;
  arrivalTime: string;
}

export default function DestinationSelector() {
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country>("대한민국");
  const [activeTab, setActiveTab] = useState("최근 검색");
  const [tags, setTags] = useState<string[]>([
    "서울(김포)",
    "서울(인천)",
    "하코다테",
  ]);

  const destinations: Record<Country, Destination[]> = {
    대한민국: [
      {
        city: "부산",
        code: "PUS",
        goPrice: 54000,
        returnPrice: 54000,
        duration: "1시간 5분",
        departureTime: "07:40",
        arrivalTime: "08:45",
      },
      {
        city: "제주",
        code: "CJU",
        goPrice: 47000,
        returnPrice: 47000,
        duration: "1시간 10분",
        departureTime: "09:00",
        arrivalTime: "10:10",
      },
    ],
    일본: [
      {
        city: "도쿄",
        code: "NRT",
        goPrice: 168750,
        returnPrice: 168750,
        duration: "2시간 15분",
        departureTime: "10:00",
        arrivalTime: "12:15",
      },
      {
        city: "오사카",
        code: "KIX",
        goPrice: 155250,
        returnPrice: 155250,
        duration: "1시간 50분",
        departureTime: "08:30",
        arrivalTime: "10:20",
      },
    ],
    동북아시아: [],
    베트남: [],
    필리핀: [],
    싱가포르: [],
    "태국/라오스": [],
    "괌/사이판": [],
    몽골: [],
  };

  const handleSelect = (d: Destination) => {
    localStorage.setItem("destination", d.city);
    localStorage.setItem("goPrice", String(d.goPrice));
    localStorage.setItem("returnPrice", String(d.returnPrice));
    localStorage.setItem("duration", d.duration);
    localStorage.setItem("departureTime", d.departureTime);
    localStorage.setItem("arrivalTime", d.arrivalTime);
    navigate("/miryang/jejuair/main");
  };

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b bg-white">
        <button onClick={() => navigate(-1)} className="text-2xl">
          ‹
        </button>
        <h1 className="text-lg font-medium">어디로 여행가세요?</h1>
        <div className="flex gap-3 text-xl">🔍 ✕</div>
      </header>

      {/* TABS */}
      <div className="flex border-b px-5">
        {["최근 검색", "즐겨찾기", "프로모션"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 px-5 py-4 border-b-8 border-gray-100">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
          >
            {tag}
            <button
              onClick={() => setTags(tags.filter((t) => t !== tag))}
              className="text-gray-400"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex">
        {/* LEFT REGIONS */}
        <aside className="w-[180px] bg-gray-100 border-r">
          {(Object.keys(destinations) as Country[]).map((c) => (
            <div
              key={c}
              onClick={() => setCountry(c)}
              className={`px-4 py-3 text-sm cursor-pointer border-b ${
                country === c
                  ? "bg-white font-semibold text-black"
                  : "text-gray-400"
              }`}
            >
              {c}
              {c === "싱가포르" && (
                <span className="ml-1 text-orange-500">(신규)</span>
              )}
            </div>
          ))}
        </aside>

        {/* RIGHT LIST */}
        <section className="flex-1 px-4">
          <ul>
            {destinations[country]?.map((d) => (
              <li
                key={d.code}
                onClick={() => handleSelect(d)}
                className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  ✈️
                  <span className="font-semibold">{d.city}</span>
                  <span className="text-sm text-gray-400">{d.code}</span>
                </div>
                <span className="text-gray-300">♡</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
