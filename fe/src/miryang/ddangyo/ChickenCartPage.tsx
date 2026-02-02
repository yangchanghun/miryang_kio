import { useState } from "react";
import MobileLayout from "./layout/MobileLayout";
import { useNavigate } from "react-router-dom";
import HomeButton from "../../utils/HomeButton";

// src/types/cart.ts
export interface CartItem {
  name: string;
  basePrice: number;
  sideOption: string;
  sidePrice: number;
  quantity: number;
  totalPrice: number;
}

interface Props {
  cartForm: CartItem[];
  setCartForm: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onClose: () => void;
}

export default function ChickenCartPage({
  cartForm,
  setCartForm,
  onClose,
}: Props) {
  const [selectedTab, setSelectedTab] = useState("배달");
  const [showCoupon, setShowCoupon] = useState(true);
  const navigate = useNavigate();

  const orderAmount = cartForm.reduce((sum, item) => sum + item.totalPrice, 0);

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return;

    setCartForm((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity,
              totalPrice: (item.basePrice + item.sidePrice) * quantity,
            }
          : item,
      ),
    );
  };

  const removeItem = (index: number) => {
    setCartForm((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <MobileLayout>
      <div className="flex min-h-screen flex-col bg-white">
        {/* 헤더 */}
        <div className="relative flex items-center justify-between px-5 py-4">
          <button onClick={onClose} className="text-xl">
            ←
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            장바구니
          </h2>
          <button
            onClick={() => setCartForm([])}
            className="text-sm text-gray-500"
          >
            전체삭제
          </button>
        </div>

        {/* 탭 */}
        <div className="flex gap-2 px-5 py-4">
          {["배달", "포장", "매장식사"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                tab === "배달" ? setSelectedTab(tab) : alert("준비중입니다")
              }
              className={`flex-1 rounded-lg border py-2 text-sm font-semibold ${
                selectedTab === tab
                  ? "border-[#ff6b35] text-[#ff6b35]"
                  : "border-gray-200 text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 쿠폰 */}
        {showCoupon && (
          <div className="mx-5 mb-4 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3">
            <span>🎫</span>
            <span className="text-sm font-semibold text-pink-600">
              매장과 같은 가격
            </span>
            <button
              onClick={() => setShowCoupon(false)}
              className="ml-auto text-lg text-gray-500"
            >
              ×
            </button>
          </div>
        )}

        {/* 아이템 */}
        <div className="flex-1 overflow-y-auto px-5">
          {cartForm.map((item, index) => (
            <div key={index} className="border-b py-5">
              <div className="flex justify-between">
                <h3 className="font-bold">{item.name}</h3>
                <button
                  onClick={() => removeItem(index)}
                  className="text-gray-400"
                >
                  ×
                </button>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                • 단품가격 : {item.basePrice.toLocaleString()}원
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                    className="h-8 w-8 rounded border"
                  >
                    −
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                    className="h-8 w-8 rounded border"
                  >
                    +
                  </button>
                </div>

                <span className="font-bold">
                  {item.totalPrice.toLocaleString()}원
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 결제 요약 */}
        <div className="border-t px-5 py-5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">주문금액</span>
            <span className="font-bold">{orderAmount.toLocaleString()}원</span>
          </div>

          <div className="mt-2 flex justify-between text-sm">
            <span className="text-gray-500">배달비</span>
            <span className="font-bold">3,000원</span>
          </div>

          <div className="mt-4 flex justify-between text-lg font-bold">
            <span>결제금액</span>
            <span className="text-[#ff6b35]">
              {(orderAmount + 3000).toLocaleString()}원
            </span>
          </div>

          <button
            onClick={() =>
              navigate("/miryang/ddangyo/chicken/order", {
                state: {
                  cartItems: cartForm,
                  totalAmount: orderAmount + 3000,
                  orderType: selectedTab,
                },
              })
            }
            className="mt-4 w-full rounded-lg bg-[#ff6b35] py-4 text-white font-bold"
          >
            가게 배달 주문하기 | {orderAmount.toLocaleString()}원
          </button>
        </div>
      </div>

      <HomeButton />
    </MobileLayout>
  );
}
