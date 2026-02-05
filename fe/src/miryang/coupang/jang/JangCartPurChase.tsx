import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";

export default function JangCartPurChase() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [items] = useState([
    {
      id: 1,
      selected: true,
      store: "대왕 (주)",
      title: "삼초마을 난각번호1번 계란 자연방사 유정란 무항생제, 40구, 1개",
      options: "옵션: 30구, 1개",
      price: 27500,
      image: "/coupang/eggs1.jpg",
    },
    {
      id: 2,
      selected: true,
      store: "대왕 (주)",
      title: "곰곰 소중한 우리쌀, 10kg(상등급), 1개",
      options: "옵션: 10kg, 1개",
      price: 31890,
      image: "/coupang/rice1.jpg",
    },
  ]);

  const handleBlock = () => {
    alert("구매를 진행해주세요!");
  };

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-24">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate("/miryang/coupang/jangcart/1")}>
          ←
        </button>
        <h1 className="text-lg font-bold">장바구니</h1>
        <div className="w-6" />
      </header>

      {/* Select All */}
      <div
        onClick={handleBlock}
        className="bg-white px-4 py-3 flex justify-between items-center border-b"
      >
        <label className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 border rounded bg-blue-500 flex items-center justify-center text-white text-xs">
            ✓
          </div>
          전체선택
        </label>
        <button className="text-xs border px-2 py-1 rounded text-gray-500">
          선택삭제
        </button>
      </div>

      {/* Items */}
      <div onClick={handleBlock} className="mt-2 bg-white">
        {items.map((item) => (
          <div key={item.id} className="border-b-8 border-gray-100 p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="w-4 h-4 border rounded bg-blue-500 text-white text-xs flex items-center justify-center">
                ✓
              </div>
              <button className="text-gray-400">✕</button>
            </div>

            <div className="flex gap-3">
              <img
                src={item.image}
                className="w-20 h-20 rounded object-cover"
              />

              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">{item.store}</p>
                <p className="text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-400 mb-2">{item.options}</p>

                <p className="font-bold text-base">
                  {item.price.toLocaleString()}원
                </p>

                <div className="mt-3 inline-flex border rounded">
                  <button className="px-3 py-1 text-gray-500">−</button>
                  <span className="px-4 py-1 border-x">1</span>
                  <button className="px-3 py-1 text-gray-500">+</button>
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs text-center text-gray-500 border-t pt-2">
              상품가격 {item.price.toLocaleString()}원 + 배송비 0원 =
              <strong className="text-gray-800">
                {" "}
                {item.price.toLocaleString()}원
              </strong>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Benefit */}
      <div
        onClick={handleBlock}
        className="bg-white mt-2 px-4 py-4 flex items-center gap-2"
      >
        <span>🚀</span>
        <span className="flex-1 text-sm">무료배송 혜택 적용됨</span>
        <span className="font-bold text-red-500">59,390원</span>
        <span className="text-gray-400">^</span>
      </div>

      {/* Purchase */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white shadow border-t">
        <button
          onClick={() => navigate("/miryang/coupang/jangcart/final")}
          className="w-full bg-blue-500 text-white py-4 text-lg font-bold"
        >
          총 2개 상품 구매하기
        </button>
      </div>

      {/* Explain */}
      <JangExplainBtn setModal={setModal} />
    </div>
  );
}
