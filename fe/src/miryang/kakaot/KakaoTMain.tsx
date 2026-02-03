import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoTGuideBtn from "./modal/KakaoTGuideBtn";
import KakaoTGuide from "./modal/KakaoTGuide";
import HomeButton from "../../utils/HomeButton";

export default function KakaoTMain() {
  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const transportOptions = [
    { icon: "🚕", label: "택시", color: "bg-yellow-400" },
    { icon: "🚙", label: "택시예약", color: "bg-blue-400" },
    { icon: "🚲", label: "바이크", color: "bg-green-500" },
    { icon: "🅿️", label: "주차", color: "bg-purple-500" },
    { icon: "🧭", label: "대리", color: "bg-sky-500" },
  ];

  const serviceOptions = [
    { icon: "📦", label: "퀵/배송", color: "bg-orange-400" },
    { icon: "🚗", label: "렌터카", color: "bg-blue-500" },
    { icon: "✈️", label: "항공", color: "bg-cyan-400" },
    { icon: "⚡", label: "전기차충전", color: "bg-green-500" },
    { icon: "🏖️", label: "여름해변", color: "bg-orange-500" },
  ];

  const additionalOptions = [
    { icon: "🐕", label: "펫", color: "bg-lime-500" },
    { icon: "🚌", label: "기차/버스", color: "bg-slate-500" },
    { icon: "🎈", label: "레저/티켓", color: "bg-purple-600" },
    { icon: "🚗", label: "해외렌터카", color: "bg-red-500" },
    { icon: "⋮⋮", label: "전체보기", color: "bg-gray-400" },
  ];

  const bottomTabs = [
    { icon: "🏠", label: "홈", active: true },
    { icon: "💼", label: "비즈니스" },
    { icon: "🕒", label: "이용/일정" },
    { icon: "👤", label: "내 정보" },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-gradient-to-b from-blue-500 to-sky-300 pb-24">
      <audio src="/kakaot/audio/kakaot1.m4a" autoPlay />

      {/* HEADER */}
      <header className="pt-6 text-white">
        <div className="flex justify-center gap-14 text-lg font-medium">
          {["마이카", "홈", "여행"].map((tab) => (
            <button
              key={tab}
              onClick={() => alert("택시버튼을 눌러주세요!")}
              className={
                tab === "홈" ? "font-semibold opacity-100" : "opacity-70"
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-4 h-1 w-10 rounded bg-white" />
      </header>

      {/* SEARCH */}
      <div
        onClick={() => alert("택시버튼을 눌러주세요!")}
        className="px-5 py-6"
      >
        <div className="flex items-center justify-between rounded-xl bg-white px-4 py-4 shadow">
          <input
            className="flex-1 text-gray-600 outline-none"
            placeholder="어디로 갈까요?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="text-sm font-medium text-gray-700">지금 출발 ▼</span>
        </div>
      </div>

      {/* QUICK */}
      <div className="flex gap-2 overflow-x-auto px-5 pb-5">
        {["+ 집", "+ 회사", "≫"].map((txt) => (
          <button
            key={txt}
            onClick={() => alert("택시버튼을 눌러주세요!")}
            className="rounded-full bg-white/90 px-4 py-2 text-sm text-gray-700"
          >
            {txt}
          </button>
        ))}
      </div>

      {/* AD */}
      <div className="px-5 pb-5">
        <img src="/kakaot/kakaot_ad.png" className="w-full rounded-xl" />
      </div>

      {/* SERVICES */}
      <div className="mx-5 rounded-2xl bg-white p-5 shadow">
        {[transportOptions, serviceOptions, additionalOptions].map(
          (row, idx) => (
            <div key={idx} className="mb-6 flex justify-between last:mb-0">
              {row.map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    item.label === "택시"
                      ? navigate("/miryang/kakaot/taxi/")
                      : alert("택시버튼을 눌러주세요!")
                  }
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl shadow ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          ),
        )}
      </div>

      {/* TIP */}
      <div className="mx-5 mt-5 rounded-xl bg-white/90 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span>▶️</span>
          <span className="text-sm font-semibold">
            숨은 꿀팁, 1분 안에 알아봐요!
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {["#여행", "#주차", "#전기차충전"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-500 px-2 py-1 text-white"
            >
              {tag}
            </span>
          ))}
          <span className="text-gray-500">숨겨진 팁 대방출</span>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[785px] -translate-x-1/2 border-t bg-white py-2">
        <div className="flex justify-around">
          {bottomTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => alert("택시 버튼을 클릭해주세요!")}
              className={`flex flex-col items-center gap-1 text-xs ${
                tab.active ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <KakaoTGuideBtn setModal={setModal} />
      {modal && <KakaoTGuide setModal={setModal} />}
      <HomeButton />
    </div>
  );
}
