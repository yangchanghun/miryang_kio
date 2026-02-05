import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

const CoupangCart4 = () => {
  const navigate = useNavigate();
  const [isWishListed, setIsWishListed] = useState(false);
  const [modal, setModal] = useState(false);

  const handleBuyNow = () => {
    navigate("/miryang/coupang/cart/5");
  };

  const handleBlockBtn = () => {
    alert("바로구매를 클릭해주세요");
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white pb-32">
      <audio
        src="/coupang/voice/signup/cart/바로 구매를 선택해주세요.mp3"
        autoPlay
      />

      {/* Header */}
      <header className="flex items-center justify-between border-b px-4 py-3">
        <button
          onClick={() => navigate("/miryang/coupang/result/tissue")}
          className="text-2xl"
        >
          ‹
        </button>

        <div onClick={handleBlockBtn} className="flex items-center gap-4">
          <button className="text-xl">🔍</button>
          <button className="relative text-xl">
            🛒
            <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
              6
            </span>
          </button>
        </div>
      </header>

      {/* Ad Banner */}
      <section className="relative flex items-center gap-3 bg-gray-100 px-4 py-3">
        <img src="/coupang/tissue.jpg" className="h-10 w-10 rounded" />
        <div className="flex-1">
          <p className="text-sm">프리미엄골드 3겹 데코 화장지</p>
          <div className="flex items-center gap-2">
            <span className="rounded bg-red-500 px-2 py-0.5 text-xs text-white">
              52%
            </span>
            <span className="font-bold">25,600원</span>
          </div>
        </div>
        <span className="absolute right-2 top-2 rounded bg-gray-300 px-1 text-[10px]">
          AD
        </span>
      </section>

      {/* Product Image */}
      <section className="relative bg-gray-100">
        <div className="flex aspect-square items-center justify-center">
          <img
            src="/coupang/tissue.jpg"
            className="h-[90%] w-[90%] rounded-lg object-cover"
          />
        </div>

        {/* Side Actions */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          <button
            onClick={() => setIsWishListed(!isWishListed)}
            className={`h-12 w-12 rounded-full border bg-white shadow ${
              isWishListed ? "border-red-500 bg-red-50" : ""
            }`}
          >
            ❤️
          </button>
          <button className="h-12 w-12 rounded-full border bg-white shadow">
            🎁
          </button>
          <button className="h-12 w-12 rounded-full border bg-white shadow">
            📤
          </button>
        </div>
      </section>

      {/* Purchase Info */}
      <section className="px-4 py-4">
        <div className="flex items-center gap-2 rounded bg-blue-50 px-3 py-2 text-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs">
            ✓
          </span>
          한 달간 2만 명 이상 구매했어요
        </div>
      </section>

      {/* Seller */}
      <section className="flex items-center justify-between border-b px-4 py-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-500 px-2 py-0.5 text-xs text-white">
              대왕
            </span>
            <span className="font-semibold">대왕(주)</span>
          </div>
          <p className="text-xs text-gray-500">판매자</p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="text-gray-500">(95,192)</span>
        </div>
      </section>

      {/* Title */}
      <section className="px-4 py-4">
        <h1 className="text-lg font-semibold leading-snug">
          대왕롤앤롤 라벤더 3겹 고급롤화장지
        </h1>
      </section>

      {/* Option */}
      <section className="border-y bg-gray-50 px-4 py-4">
        <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
          길이 × 개당 수량 × 수량
          <span>⌄</span>
        </div>
        <div className="flex items-center justify-between rounded border bg-white p-4">
          <span className="font-semibold">30m × 30개입 × 2개</span>
          <img src="/coupang/tissue.jpg" className="h-10 w-10 rounded" />
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[785px] -translate-x-1/2 gap-3 border-t bg-white p-4">
        <button
          onClick={handleBlockBtn}
          className="flex-1 rounded-lg border-2 border-blue-500 py-4 text-lg font-bold text-blue-500"
        >
          장바구니 담기
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 rounded-lg bg-blue-500 py-4 text-lg font-bold text-white"
        >
          바로구매
        </button>
      </div>

      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}

      <button
        onClick={() => navigate("/coupang/tutorial")}
        className="fixed right-3 top-3 z-50 rounded bg-black px-3 py-2 text-white"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangCart4;
