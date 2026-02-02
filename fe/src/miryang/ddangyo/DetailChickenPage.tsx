import { useState } from "react";

interface SideOption {
  name: string;
  price: number;
}
interface CartItem {
  name: string;
  basePrice: number;
  sideOption: string;
  sidePrice: number;
  quantity: number;
  totalPrice: number;
}

interface Props {
  product: string;
  price: string;
  setCartForm: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onClose: () => void;
}

export default function DetailChickenPage({
  product,
  price,
  setCartForm,
  onClose,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSide, setSelectedSide] = useState("배");

  const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);

  const sideOptions: SideOption[] = [
    { name: "배", price: 0 },
    { name: "순살", price: 2000 },
    { name: "닭다리", price: 3000 },
    { name: "닭날개", price: 3000 },
  ];

  const sidePrice =
    sideOptions.find((o) => o.name === selectedSide)?.price ?? 0;

  const totalPrice = (numericPrice + sidePrice) * quantity;

  const handleAddToCart = () => {
    setCartForm((prev) => [
      ...prev,
      {
        name: product,
        basePrice: numericPrice,
        sideOption: selectedSide,
        sidePrice,
        quantity,
        totalPrice,
      },
    ]);

    alert(`${product} ${quantity}개가 장바구니에 담겼습니다.`);
    onClose();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-5 py-4">
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10"
        >
          ←
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
          ↗
        </button>
      </div>

      {/* 이미지 */}
      <div className="relative flex h-[300px] items-center justify-center bg-gray-100">
        <img
          src="/ddangyo/chicken/윙치킨.png"
          alt={product}
          className="h-4/5 w-4/5 rounded-lg object-cover"
        />

        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          <div className="h-14 w-14 rounded-full border-4 border-white bg-yellow-400 shadow" />
          <div className="h-14 w-14 rounded-full border-4 border-white bg-red-400 shadow" />
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="px-5 pb-28">
        <h1 className="mt-6 text-3xl font-bold">{product}</h1>

        <p className="mt-3 text-gray-600">
          고소한 코코넛 시즈닝에 독보적인 특제소스 2종을 더하여
          <br />
          코코넛 풍미 가득, 달달고소하게 ‘야자치킨’
        </p>

        {/* 가격 */}
        <div className="mt-8 flex items-center justify-between border-b pb-4">
          <span className="text-lg font-medium">가격</span>
          <span className="text-2xl font-bold">
            {totalPrice.toLocaleString()}원
          </span>
        </div>

        {/* 수량 */}
        <div className="mt-6 flex items-center justify-between border-b pb-4">
          <span className="text-lg font-medium">수량</span>
          <div className="flex items-center gap-4">
            <button
              disabled={quantity <= 1}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-9 w-9 rounded border text-lg disabled:text-gray-300"
            >
              −
            </button>
            <span className="min-w-[24px] text-center text-xl font-bold">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="h-9 w-9 rounded border text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* 부위 선택 */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg font-medium">부위선택 1개</span>
            <span className="text-sm text-gray-400">필수선택</span>
          </div>

          <div className="flex flex-col gap-3">
            {sideOptions.map((option) => (
              <label
                key={option.name}
                className="flex cursor-pointer items-center rounded-lg border px-4 py-3 hover:bg-gray-50"
              >
                <input
                  type="radio"
                  name="side"
                  className="hidden"
                  checked={selectedSide === option.name}
                  onChange={() => setSelectedSide(option.name)}
                />

                <div
                  className={`mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    selectedSide === option.name
                      ? "border-[#ff6b35]"
                      : "border-gray-300"
                  }`}
                >
                  {selectedSide === option.name && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff6b35]" />
                  )}
                </div>

                <span className="flex-1">{option.name}</span>
                <span className="font-medium">
                  +{option.price.toLocaleString()}원
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 담기 */}
        <button
          onClick={handleAddToCart}
          className="mt-8 w-full rounded-lg bg-[#ff6b35] py-4 text-lg font-bold text-white active:bg-[#e55a2e]"
        >
          {totalPrice.toLocaleString()}원 담기
        </button>
      </div>
    </div>
  );
}
