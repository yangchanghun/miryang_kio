import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCart2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery === "계란") {
      navigate("/miryang/coupang/jangcart/eggs");
    } else if (searchQuery === "쌀") {
      navigate("/miryang/coupang/jangcart/rices");
    } else {
      alert("검색창에 계란 또는 쌀을 입력해주세요!");
    }
  };

  const block = () => alert("검색창에 계란이나 쌀을 입력해보세요!");

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-20 relative">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="flex items-center gap-3 p-3">
          <button
            onClick={() => navigate("/miryang/coupang/jangcart/1")}
            className="text-2xl"
          >
            ‹
          </button>

          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="계란 또는 쌀을 입력하세요"
              className="w-full px-4 py-3 rounded-full border-2 border-gray-300 text-lg focus:border-blue-500 outline-none"
            />
            <button className="text-xl px-3">🔍</button>
          </form>
        </div>
      </header>

      {/* Main */}
      <main onClick={block} className="p-4 space-y-8">
        {/* Recent */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">최근 검색어</h2>
            <button className="text-xl">⋯</button>
          </div>

          <div className="flex flex-wrap gap-2">
            {["신타6", "휴지", "강아지 목줄"].map((v, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border rounded-full text-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* Repurchase */}
        <section>
          <h2 className="font-bold text-lg mb-3">다시 구매하세요</h2>
          <div className="flex gap-3 overflow-x-auto">
            {["headset.jpg", "dog3.png", "tissue.jpg"].map((img, i) => (
              <div
                key={i}
                className="min-w-[120px] bg-white rounded-xl shadow relative"
              >
                <img
                  src={`/coupang/${img}`}
                  className="w-full h-[120px] object-cover rounded-xl"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-red-500 text-white text-xs text-center py-1 rounded">
                  ⚡ 지금 할인 중
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Fresh */}
        <section>
          <div className="flex items-center gap-2 bg-green-100 p-3 rounded-xl mb-3">
            🚀 <span className="font-semibold text-green-800">로켓프레시</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {["샐러드", "오뎅", "키위"].map((v, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-green-500 text-green-700 text-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* Recommend */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">쿠팡 추천 검색어</h2>
            <span className="text-xs bg-gray-300 text-white w-4 h-4 flex items-center justify-center rounded-full">
              i
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {["신타6", "신타딸기", "신타초코"].map((v, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border rounded-full text-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav
        onClick={block}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t flex justify-around py-2"
      >
        {[
          ["🏠", "홈"],
          ["▦", "카테고리"],
          ["🔍", "검색", true],
          ["👤", "MY"],
          ["🛒", "장바구니"],
        ].map(([icon, label, active], i) => (
          <div key={i} className="flex flex-col items-center text-xs">
            <span className={`text-xl ${active && "text-blue-500"}`}>
              {icon}
            </span>
            <span className={active ? "text-blue-500" : "text-gray-500"}>
              {label}
            </span>
          </div>
        ))}
      </nav>

      <JangExplainBtn setModal={setModal} />
    </div>
  );
}
