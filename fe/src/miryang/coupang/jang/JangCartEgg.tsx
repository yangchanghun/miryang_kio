import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCartEgg() {
  const navigate = useNavigate();
  const [isWishListed, setIsWishListed] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCartAdd = () => {
    alert("장바구니에 추가되었습니다!");
    localStorage.setItem(
      "장바구니",
      JSON.stringify([
        { 상품: "계란", 가격: "27,500원", img: "/coupang/eggs1.jpg" },
      ]),
    );
    navigate("/miryang/coupang/jangcart/1");
  };

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-white pb-28 relative">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b flex justify-between items-center px-4 py-3">
        <button onClick={() => navigate("/miryang/coupang/jangcart/eggs")}>
          <span className="text-2xl">‹</span>
        </button>

        <div className="flex gap-4 items-center">
          <button>🔍</button>
          <button className="relative">
            🛒
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Ad Banner */}
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 relative">
        <img
          src="/coupang/eggs1.jpg"
          className="w-10 h-10 rounded object-cover"
        />
        <div className="flex-1">
          <p className="text-sm line-clamp-1">
            삼초마을 난각번호1번 계란 자연방사 유정란 무항생제
          </p>
          <p className="font-bold">27,500원</p>
        </div>
        <span className="absolute top-2 right-4 text-[10px] bg-gray-300 px-1 rounded">
          AD
        </span>
      </div>

      {/* Product Image */}
      <div className="relative bg-gray-100">
        <div className="aspect-square flex items-center justify-center">
          <img
            src="/coupang/eggs1.jpg"
            className="w-[90%] h-[90%] object-cover rounded-lg"
          />
        </div>

        {/* Floating Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <button
            onClick={() => setIsWishListed(!isWishListed)}
            className={`w-12 h-12 rounded-full border bg-white flex items-center justify-center shadow ${
              isWishListed && "border-red-500 bg-red-50"
            }`}
          >
            ❤️
          </button>
          <button className="w-12 h-12 rounded-full border bg-white flex items-center justify-center shadow">
            🎁
          </button>
          <button className="w-12 h-12 rounded-full border bg-white flex items-center justify-center shadow">
            📤
          </button>
        </div>
      </div>

      {/* Purchase Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded text-sm">
          <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
            ✓
          </span>
          한 달간 2만명 이상 구매했어요
        </div>
      </div>

      {/* Seller Info */}
      <div className="px-4 py-3 border-b flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
            대왕
          </span>
          <span className="font-semibold">대왕(주)</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="text-orange-500">★★★★☆</span>
          <span className="text-gray-500">(95,192)</span>
        </div>
      </div>

      {/* Product Title */}
      <div className="p-4">
        <h1 className="text-lg font-semibold leading-snug">
          삼초마을 난각번호1번 계란 자연방사 유정란 무항생제, 40구, 1개
        </h1>
      </div>

      {/* Option */}
      <div className="border-t-8 border-gray-100 px-4 py-4">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <span>옵션 선택</span>
          <span>⌄</span>
        </div>
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <span className="font-semibold">40구 × 1개</span>
          <img
            src="/coupang/eggs1.jpg"
            className="w-10 h-10 rounded object-cover"
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t shadow flex gap-2 p-4">
        <button
          onClick={handleCartAdd}
          className="flex-1 border-2 border-blue-500 text-blue-500 rounded-lg py-4 font-semibold"
        >
          장바구니 담기
        </button>
        <button
          onClick={() => alert("장바구니에 담아주세요")}
          className="flex-1 bg-blue-500 text-white rounded-lg py-4 font-semibold"
        >
          바로구매
        </button>
      </div>

      {/* Explain */}
      <JangExplainBtn setModal={setModal} />

      {/* Home */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed top-2 right-2 z-50 bg-white border px-2 py-1 rounded text-sm"
      >
        처음으로
      </button>
    </div>
  );
}
