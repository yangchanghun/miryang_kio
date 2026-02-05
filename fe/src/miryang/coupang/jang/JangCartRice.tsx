import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCartRice() {
  const navigate = useNavigate();
  const [isWishListed, setIsWishListed] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCartAdd = () => {
    alert("장바구니에 추가되었습니다!");
    localStorage.setItem(
      "장바구니",
      JSON.stringify([
        { 상품: "계란", 가격: "27,500원", img: "/coupang/eggs1.jpg" },
        { 상품: "쌀", 가격: "31,890원", img: "/coupang/rice1.jpg" },
      ]),
    );
    navigate("/miryang/coupang/jangcart/1");
  };

  const block = () => alert("쌀을 장바구니에 담아주세요");

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-white pb-28">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-40">
        <button onClick={() => navigate("/miryang/coupang/jangcart/rices")}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-4">
          <button>🔍</button>
          <button className="relative">
            🛒
            <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>
        </div>
      </header>

      {/* AD Banner */}
      <div className="bg-gray-100 px-4 py-3 border-b relative">
        <div className="flex gap-3 items-center">
          <img
            src="/coupang/rice1.jpg"
            className="w-10 h-10 rounded object-cover"
          />
          <div className="flex-1">
            <p className="text-sm">곰곰 소중한 우리쌀, 10kg(상등급), 1개</p>
            <p className="font-bold text-base">31,890원</p>
          </div>
          ▶
        </div>
        <span className="absolute top-2 right-4 bg-gray-300 text-xs px-1 rounded">
          AD
        </span>
      </div>

      {/* Image */}
      <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
        <img
          src="/coupang/rice1.jpg"
          className="w-[90%] h-[90%] object-cover rounded-lg"
        />

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <button
            onClick={() => setIsWishListed(!isWishListed)}
            className={`w-12 h-12 rounded-full border flex items-center justify-center shadow ${
              isWishListed ? "bg-red-100 border-red-400" : "bg-white"
            }`}
          >
            ❤️
          </button>
          <button className="w-12 h-12 rounded-full border bg-white shadow">
            🎁
          </button>
          <button className="w-12 h-12 rounded-full border bg-white shadow">
            📤
          </button>
        </div>
      </div>

      {/* Purchase Info */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded">
          <span className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
            ✓
          </span>
          <span className="text-sm">한 달간 2만명 이상 구매했어요</span>
        </div>
      </div>

      {/* Seller */}
      <div className="px-4 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
            대왕
          </span>
          <span className="font-semibold">대왕 (주)</span>
        </div>
        <span className="text-sm text-gray-500">(95,192)</span>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h1 className="text-lg font-semibold">
          곰곰 소중한 우리쌀, 10kg(상등급), 1개
        </h1>
      </div>

      {/* Option */}
      <div className="px-4 py-4 border-y bg-gray-50">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>옵션</span>⌄
        </div>
        <div className="border rounded-lg p-4 bg-white font-semibold">
          기본 옵션
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t p-4 flex gap-2">
        <button
          onClick={handleCartAdd}
          className="flex-1 border-2 border-blue-500 text-blue-500 rounded-lg py-4 font-semibold"
        >
          장바구니 담기
        </button>
        <button
          onClick={block}
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
        className="fixed top-2 right-2 border bg-white px-2 py-1 rounded text-sm z-50"
      >
        처음으로
      </button>
    </div>
  );
}
