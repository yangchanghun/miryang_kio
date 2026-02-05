import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";
const CoupangCart6 = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState("default");
  const [modal, setModal] = useState(false);

  const deliveryData =
    JSON.parse(localStorage.getItem("배송지") || "null") || {};

  const { name, address, addressDetail, phone } = deliveryData;

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white">
      {/* Header */}
      <header className="relative flex items-center border-b px-4 py-4">
        <button
          onClick={() => navigate("/miryang/coupang/cart/5")}
          className="text-2xl"
        >
          ‹
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
          주문 / 결제
        </h1>
      </header>

      {/* Sub header */}
      <div className="border-b px-4 py-5 text-center">
        <h2 className="text-lg font-semibold">배송지 선택</h2>
      </div>

      <div className="p-4 space-y-4">
        {/* 기존 배송지 */}
        {name && address && addressDetail && phone && (
          <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4">
            {/* 상단 */}
            <div className="mb-3 flex items-center gap-3">
              <input
                type="radio"
                checked={selectedAddress === "default"}
                onChange={() => setSelectedAddress("default")}
                className="h-5 w-5 accent-blue-500"
              />
              <span className="text-lg font-semibold flex-1">{name}</span>
              <span className="rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
                기본배송지
              </span>
            </div>

            {/* 주소 */}
            <div className="pl-8 text-sm space-y-1">
              <p>
                {address} {addressDetail}
              </p>
              <p>{phone}</p>
            </div>

            {/* 버튼 */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => alert("배송지 수정은 비활성화 상태입니다")}
                className="rounded border px-4 py-2 text-sm"
              >
                수정
              </button>
              <button
                onClick={() => navigate("/miryang/coupang/cart/5")}
                className="rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white"
              >
                선택
              </button>
            </div>
          </div>
        )}

        {/* 배송지 추가 */}
        <button
          onClick={() => navigate("/miryang/coupang/cart/7")}
          className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 py-4 text-blue-500 font-semibold hover:bg-blue-50"
        >
          <span className="text-xl">＋</span>
          배송지 추가
        </button>
      </div>

      {/* 설명서 */}
      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}

      {/* 홈 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed right-3 top-3 z-50 rounded bg-black px-3 py-2 text-white"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangCart6;
