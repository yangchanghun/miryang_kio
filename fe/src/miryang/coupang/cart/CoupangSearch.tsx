import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

export default function CoupangSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery === "휴지") {
      navigate("/miryang/coupang/result/tissue");
    } else {
      alert("휴지를 입력해주세요!");
    }
  };

  const handleBlock = () => {
    alert("검색창에 휴지를 입력해주세요!");
  };

  const recentSearches = [
    "신타6 엣지 딸기",
    "휴지",
    "aux to 8핀",
    "강아지 목줄",
  ];
  const freshCategories = [
    "샐러드",
    "오뎅",
    "키위",
    "아인팜",
    "파인애플",
    "케일",
  ];
  const recommendedSearches = [
    "신타6엣지",
    "신타6",
    "신타6딸기",
    "신타6아이솔레이트",
    "신타6아이솔레이트딸기",
  ];

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-20 relative">
      <audio
        src="/coupang/voice/signup/cart/휴지 라고 입력 후 돋보기를.mp3"
        autoPlay
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate("/miryang/coupang/main")}
            className="text-2xl"
          >
            ‹
          </button>

          <form
            onSubmit={handleSubmit}
            className="flex-1 flex items-center gap-2"
          >
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 outline-none text-base"
            />
            <button className="text-xl">🔍</button>
          </form>
        </div>
      </header>

      {/* Main */}
      <main onClick={handleBlock} className="px-4 py-5 space-y-8">
        {/* Recent */}
        <section>
          <h2 className="text-lg font-bold mb-3">최근 검색어</h2>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white border rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Repurchase */}
        <section>
          <h2 className="text-lg font-bold mb-3">다시 구매하세요</h2>
          <div className="flex gap-3 overflow-x-auto">
            {["headset.jpg", "dog3.png", "tissue.jpg", "shake1.jpg"].map(
              (img) => (
                <div
                  key={img}
                  className="min-w-[120px] bg-white rounded-xl shadow"
                >
                  <div className="relative h-[120px]">
                    <img
                      src={`/coupang/${img}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 right-2 text-xs bg-red-500 text-white rounded px-2 py-1 text-center">
                      ⚡ 지금 할인 중
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Fresh */}
        <section>
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-3 rounded-xl mb-3">
            🚀 당일배송·새벽배송되는 로켓프레시 상품
          </div>
          <div className="flex flex-wrap gap-2">
            {freshCategories.map((c) => (
              <span
                key={c}
                className="px-4 py-2 border border-green-500 text-green-600 rounded-full text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section>
          <h2 className="text-lg font-bold mb-3">쿠팡 추천 검색어</h2>
          <div className="flex flex-wrap gap-2">
            {recommendedSearches.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white border rounded-full text-sm text-gray-600"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav
        onClick={handleBlock}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t flex justify-around py-2"
      >
        {["🏠", "▦", "🔍", "👤", "🛒"].map((icon, i) => (
          <div key={i} className="flex flex-col items-center text-gray-400">
            <span className="text-lg">{icon}</span>
            <span className="text-[10px]">
              {["홈", "카테고리", "검색", "MY", "장바구니"][i]}
            </span>
          </div>
        ))}
      </nav>

      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}
    </div>
  );
}
