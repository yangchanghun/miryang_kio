import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

const CoupangCart5 = () => {
  const navigate = useNavigate();
  const [couponAmount] = useState(0);
  const [modal, setModal] = useState(false);

  const card = localStorage.getItem("카드") || "";
  const 배송지Raw = localStorage.getItem("배송지");

  let address = "";
  let addressDetail = "";

  if (배송지Raw) {
    try {
      const 배송지 = JSON.parse(배송지Raw);
      address = 배송지.address || "";
      addressDetail = 배송지.addressDetail || "";
    } catch {
      console.log("ㅎㅇ");
    }
  }

  const productPrice = 35890;
  const instantDiscount = 1610;
  const deliveryFee = 0;
  const finalPrice =
    productPrice - instantDiscount + deliveryFee - couponAmount;

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white pb-32">
      <audio
        src="/coupang/voice/signup/cart/배송지결제수단을 설정해주신_.mp3"
        autoPlay
      />

      {/* Header */}
      <header className="relative flex items-center border-b px-4 py-4">
        <button
          onClick={() => navigate("/miryang/coupang/cart/4")}
          className="text-2xl"
        >
          ‹
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
          주문 / 결제
        </h1>
      </header>

      {/* 배송지 */}
      <section className="border-b-8 bg-white">
        <button
          onClick={() => navigate("/miryang/coupang/cart/6")}
          className="flex w-full items-center justify-between px-5 py-6 text-left hover:bg-gray-50"
        >
          <div>
            <h3 className="text-lg font-semibold">배송지</h3>
            {address ? (
              <p className="mt-1 text-sm">
                {address}
                <br />
                {addressDetail}
              </p>
            ) : (
              <p className="mt-1 text-sm text-blue-500">선택해 주세요.</p>
            )}
          </div>
          <span className="text-blue-500 text-xl">›</span>
        </button>
      </section>

      {/* 결제수단 */}
      <section className="border-b-8 bg-white">
        <button
          onClick={() => {
            if (!card) navigate("/miryang/coupang/cart/8");
          }}
          className="flex w-full items-center justify-between px-5 py-6 text-left hover:bg-gray-50"
        >
          <div>
            <h3 className="text-lg font-semibold">결제수단</h3>
            {card ? (
              <p className="mt-1 text-sm">{card}</p>
            ) : (
              <p className="mt-1 text-sm text-blue-500">선택해 주세요.</p>
            )}
          </div>
          <span className="text-blue-500 text-xl">›</span>
        </button>
      </section>

      {/* 현금영수증 */}
      <section className="border-b-8 bg-white">
        <button
          onClick={() =>
            alert(
              "현금영수증은 비활성화되어 있습니다.\n배송지와 결제수단을 먼저 입력해주세요.",
            )
          }
          className="flex w-full items-center justify-between px-5 py-6 text-left hover:bg-gray-50"
        >
          <div>
            <h3 className="text-lg font-semibold">현금영수증</h3>
            <p className="mt-1 text-sm text-blue-500">
              소득공제 정보를 입력해주세요.
            </p>
          </div>
          <span className="text-blue-500 text-xl">›</span>
        </button>
      </section>

      {/* 상품 정보 */}
      <section className="border-b-8 bg-white px-5 py-6">
        <h3 className="mb-3 text-lg font-semibold">판매자배송 상품</h3>
        <p className="text-sm leading-relaxed">
          롤앤롤 라벤더 화장지 30롤 3겹 고급롤화장지(3겹이상)
        </p>
        <p className="mt-1 text-sm text-gray-500">수량 1개</p>
      </section>

      {/* 결제 요약 */}
      <section className="bg-white px-5 py-6">
        <h3 className="mb-4 text-lg font-semibold">최종 결제 금액</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>총 상품 가격</span>
            <span>{productPrice.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between">
            <span>즉시할인</span>
            <span className="text-red-500">
              -{instantDiscount.toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between">
            <span>배송비</span>
            <span>{deliveryFee}원</span>
          </div>
        </div>

        {/* 총액 */}
        <div className="mt-4 border-t-2 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">총 결제 금액</span>
            <span className="text-2xl font-bold">
              {finalPrice.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* 결제 버튼 */}
        <button
          onClick={() => navigate("/miryang/coupang/cart/9")}
          className="mt-6 w-full rounded-lg bg-blue-500 py-4 text-lg font-bold text-white"
        >
          결제하기
        </button>
      </section>

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

export default CoupangCart5;
