import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCartEggs() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [showShippingFee, setShowShippingFee] = useState(false);
  const [sortBy, setSortBy] = useState("쿠팡 랭킹순");

  const products = [
    {
      id: 1,
      title: "삼초마을 난각번호1번 계란 자연방사 유정란 무항생제, 40구, 1개",
      price: "27,500원",
      delivery: "내일(토) 도착 예정",
      rating: 4.5,
      reviewCount: "9,999+",
      badge: "최대 371원 적립",
      img: "/coupang/eggs1.jpg",
    },
    {
      id: 2,
      title: "곰곰 무항생제 신선한 특란, 30구, 1개",
      price: "24,900원",
      delivery: "내일(토) 도착 보장",
      rating: 4.5,
      reviewCount: "94,958",
      badge: "한매자로켓",
      img: "/coupang/eggs2.jpg",
    },
  ];

  const block = () => alert("첫 번째 계란 상품을 선택해보세요!");

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-20 relative">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="flex items-center gap-3 p-3">
          <button
            onClick={() => navigate("/miryang/coupang/jangcart/2")}
            className="text-2xl"
          >
            ‹
          </button>
          <input
            value="계란"
            readOnly
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 text-lg bg-gray-50"
          />
        </div>
      </header>

      {/* Filter Row */}
      <div
        onClick={block}
        className="flex items-center gap-4 px-4 py-3 bg-white border-b"
      >
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="w-5 h-5" /> 🚀 로켓
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="w-5 h-5" /> 🚀 오늘/새벽
        </label>

        <button className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
          🔽 필터
        </button>
      </div>

      {/* Filter Pills */}
      <div
        onClick={block}
        className="flex gap-2 px-4 py-3 bg-white overflow-x-auto border-b"
      >
        {["브랜드", "가격대", "상품상태", "별점"].map((v, i) => (
          <button
            key={i}
            className="px-3 py-2 border rounded-full text-xs whitespace-nowrap"
          >
            {v} ⌄
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-4 py-3 bg-white border-b">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showShippingFee}
            onChange={(e) => setShowShippingFee(e.target.checked)}
            className="w-10 h-5 accent-blue-500"
          />
          배송비 포함
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm"
        >
          <option>쿠팡 랭킹순</option>
          <option>낮은 가격순</option>
          <option>높은 가격순</option>
          <option>리뷰 많은순</option>
        </select>
      </div>

      {/* Product List */}
      <main className="bg-white">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate("/miryang/coupang/jangcart/egg")}
            className="flex gap-4 p-4 border-b cursor-pointer"
          >
            <img
              src={p.img}
              className="w-[100px] h-[100px] rounded-lg object-cover"
            />

            <div className="flex-1 space-y-1">
              <h3 className="text-sm leading-snug">{p.title}</h3>

              <div className="text-lg font-bold">{p.price}</div>

              <div className="flex items-center gap-2 text-xs">
                {p.badge === "한매자로켓" && (
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded">
                    🚀 한매자로켓
                  </span>
                )}
                <span>{p.delivery}</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(p.rating))}
                </span>
                <span className="text-gray-500">({p.reviewCount})</span>
              </div>

              {p.badge !== "한매자로켓" && (
                <div className="inline-block bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
                  💰 {p.badge}
                </div>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
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
