import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCartRices() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [showShippingFee, setShowShippingFee] = useState(false);
  const [sortBy, setSortBy] = useState("쿠팡 랭킹순");

  const products = [
    {
      id: 1,
      title: "곰곰 소중한 우리쌀, 10kg(상등급), 1개",
      price: "31,890원",
      delivery: "내일 도착 예정",
      rating: 4.5,
      reviewCount: "9,999+",
      img: "/coupang/rice1.jpg",
    },
    {
      id: 2,
      title: "곰곰 소중한 우리쌀, 4kg(상등급), 1개",
      price: "15,890원",
      delivery: "내일 도착 보장",
      rating: 4.5,
      reviewCount: "94,958",
      badge: "한매자로켓",
      img: "/coupang/rice2.jpg",
    },
  ];

  const block = () =>
    alert("곰곰 소중한 우리쌀, 10kg(상등급), 1개를 선택해보세요");

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-24">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 bg-white z-40 border-b px-4 py-3 flex gap-3 items-center">
        <button
          onClick={() => navigate("/miryang/coupang/jangcart/2")}
          className="text-2xl"
        >
          ‹
        </button>
        <input
          value="쌀"
          readOnly
          className="flex-1 border-2 rounded-full px-4 py-2 text-base"
        />
      </header>

      {/* Delivery */}
      <div onClick={block} className="bg-white px-4 py-3 flex gap-4 border-b">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          🚀 로켓
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          🚀 로켓오늘/새벽
        </label>
        <button className="ml-auto bg-blue-500 text-white px-4 py-1 rounded-full">
          필터
        </button>
      </div>

      {/* Filter Pills */}
      <div
        onClick={block}
        className="bg-white px-4 py-2 flex gap-2 overflow-x-auto border-b"
      >
        {["브랜드", "가격대", "상품 상태", "별점"].map((f) => (
          <button
            key={f}
            className="border rounded-full px-3 py-1 text-sm whitespace-nowrap"
          >
            {f} ⌄
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showShippingFee}
            onChange={(e) => setShowShippingFee(e.target.checked)}
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

      {/* Recommended */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-b">
        <span className="font-semibold">고객님을 위한 추천 상품</span>
        <button className="text-blue-500 text-sm">상품보기 ›</button>
      </div>

      {/* Product List */}
      <main className="bg-white">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate("/miryang/coupang/jangcart/rice")}
            className="flex gap-4 px-4 py-4 border-b cursor-pointer"
          >
            <img
              src={p.img}
              className="w-[100px] h-[100px] object-cover rounded"
            />

            <div className="flex-1 flex flex-col gap-1">
              <h3 className="text-sm leading-snug">{p.title}</h3>

              <span className="text-lg font-bold">{p.price}</span>

              <div className="flex items-center gap-2 text-xs">
                {p.badge && (
                  <span className="bg-orange-500 text-white px-2 rounded">
                    🚀 한매자로켓
                  </span>
                )}
                <span>{p.delivery}</span>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(p.rating))}
                  {"☆".repeat(5 - Math.floor(p.rating))}
                </span>
                <span className="text-gray-500">({p.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Nav */}
      <nav
        onClick={block}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t flex justify-around py-2"
      >
        {["🏠", "▦", "🔍", "👤", "🛒"].map((i, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-xs ${
              i === "🔍" && "text-blue-500"
            }`}
          >
            <span className="text-lg">{i}</span>
            {i === "🛒" && (
              <span className="absolute top-0 right-6 bg-red-500 text-white text-[10px] rounded-full px-1">
                4
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Explain */}
      <JangExplainBtn setModal={setModal} />

      {/* Home */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed bottom-16 right-2 bg-white border rounded px-2 py-1 text-sm z-50"
      >
        처음으로
      </button>
    </div>
  );
}
