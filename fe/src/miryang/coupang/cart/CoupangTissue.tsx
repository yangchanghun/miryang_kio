import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

export default function CoupangTissue() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [sortBy, setSortBy] = useState("쿠팡 랭킹순");
  const [showShippingFee, setShowShippingFee] = useState(false);

  const handleBlockBtn = () => {
    alert("대왕롤앤롤 라벤더 3겹 고급롤화장지를 선택해보세요 😊");
  };

  const products = [
    {
      id: 1,
      title: "롤앤롤 라벤더 화장지 30롤 3겹 고급롤화장지(3겹이상) 30m, 30개",
      price: "37,100원",
      delivery: "내일(토) 도착 예정",
      rating: 4.5,
      review: "9,999+",
      badge: "최대 371원 적립",
      img: "/coupang/3roll.jpg",
    },
    {
      id: 2,
      title: "대왕롤앤롤 라벤더 3겹 고급롤화장지, 30m, 30개입, 2개",
      price: "24,900원",
      delivery: "내일(토) 도착 보장",
      rating: 4.5,
      review: "94,958",
      badge: "🚀 한매자로켓",
      img: "/coupang/tissue.jpg",
    },
  ];

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-24">
      <audio
        src="/coupang/voice/signup/cart/3컵 데코 화장지를 선택해주.mp3"
        autoPlay
      />

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 border-b">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate("/miryang/coupang/search")}
            className="text-2xl"
          >
            ‹
          </button>
          <input
            readOnly
            value="휴지"
            className="flex-1 px-4 py-2 border-2 rounded-full text-base"
          />
        </div>
      </header>

      {/* Delivery Options */}
      <div
        onClick={handleBlockBtn}
        className="flex items-center gap-4 px-4 py-3 bg-white border-b"
      >
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          🚀 로켓
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          🚀 오늘/새벽
        </label>
        <button className="ml-auto bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
          필터
        </button>
      </div>

      {/* Count */}
      <div onClick={handleBlockBtn} className="px-4 py-3 bg-white border-b">
        <div className="flex gap-2 flex-wrap">
          {["1겹", "2겹", "3겹", "4겹 이상"].map((v) => (
            <span
              key={v}
              className={`px-3 py-1 rounded-full text-sm border ${
                v === "4겹 이상" ? "bg-blue-500 text-white" : "text-gray-600"
              }`}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-4 py-3 bg-white border-b">
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

      {/* Products */}
      <main className="bg-white">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate("/miryang/coupang/cart/4")}
            className="flex gap-4 p-4 border-b cursor-pointer"
          >
            <img src={p.img} className="w-24 h-24 rounded-lg object-cover" />

            <div className="flex-1 space-y-1">
              <p className="text-sm text-gray-800 leading-snug">{p.title}</p>

              <p className="text-lg font-bold">{p.price}</p>

              <div className="text-xs text-gray-600">{p.delivery}</div>

              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-400">
                  {"★".repeat(Math.floor(p.rating))}
                </span>
                <span className="text-gray-500">({p.review})</span>
              </div>

              <div className="text-xs text-green-600 font-medium">
                {p.badge}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Nav */}
      <nav
        onClick={handleBlockBtn}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t flex justify-around py-2"
      >
        {["홈", "카테고리", "검색", "MY", "장바구니"].map((t) => (
          <div
            key={t}
            className={`text-xs ${
              t === "검색" ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {t}
          </div>
        ))}
      </nav>

      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}
    </div>
  );
}
