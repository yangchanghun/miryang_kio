import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

/* =====================
   타입 정의
===================== */
interface Coupon {
  id: string;
  name: string;
  description?: string;
  minOrder?: string;
  category?: string;
  expiry?: string;
  discount: number | null;
}

interface CouponLocationState {
  orderAmount: number;
  deliveryFee: number;
}

/* =====================
   컴포넌트
===================== */
const CouponPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CouponLocationState;

  const [onModal, setOnModal] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [selectedCouponId, setSelectedCouponId] = useState<string>("사용안함");
  const [applyMaxDiscount, setApplyMaxDiscount] = useState(false);

  const hasCoupon = Boolean(localStorage.getItem("coupon"));

  const { orderAmount, deliveryFee } = state;

  /* =====================
     쿠폰 데이터
  ===================== */
  const coupons: Coupon[] = [
    {
      id: "사용안함",
      name: "사용안함",
      discount: null,
    },
    {
      id: "3000won1",
      name: "3,000원",
      description: "(only 첫 고객) 밀양치킨 전용 쿠폰",
      minOrder: "최소주문금액 18,000원",
      category: "배달/포장/매장식사",
      expiry: "~2025.11.25",
      discount: 3000,
    },
  ];

  /* =====================
     핸들러
  ===================== */
  const handleApplyCoupon = () => {
    const selected = coupons.find((c) => c.id === selectedCouponId);

    navigate("/miryang/ddangyo/chicken/order", {
      state: {
        orderAmount,
        deliveryFee,
        selectedCoupon: selected,
        discount: selected?.discount ?? 0,
      },
    });
  };

  return (
    <MobileLayout>
      <audio src="/ddangyo/voice/10.mp3" autoPlay />

      <div className="min-h-screen bg-gray-100 pb-24">
        {/* 헤더 */}
        <header className="relative flex items-center px-4 py-4 bg-white border-b">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-gray-700"
          >
            ×
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
            할인쿠폰
          </h1>
        </header>

        {/* 쿠폰 등록 */}
        <section className="bg-white px-4 py-5 mb-2">
          <h2 className="text-base font-semibold mb-4">쿠폰등록</h2>

          <div className="flex gap-2">
            <input
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="쿠폰코드를 입력해주세요"
              className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 text-sm"
            />
            <button className="px-5 py-3 bg-orange-500 text-white rounded-lg text-sm font-semibold">
              등록
            </button>
          </div>
        </section>

        {/* 최대 할인 적용 */}
        <section className="bg-white px-4 py-4 mb-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={applyMaxDiscount}
              onChange={() => setApplyMaxDiscount(!applyMaxDiscount)}
              className="w-5 h-5 accent-orange-500"
            />
            <span className="text-sm font-medium">최대 할인 적용</span>
          </label>
        </section>

        {/* 쿠폰 리스트 */}
        <section className="bg-white">
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h3 className="text-base font-semibold">땡겨요 쿠폰</h3>
            <span className="text-gray-500">⌃</span>
          </div>

          {hasCoupon ? (
            <div>
              {coupons.map((coupon) => (
                <label
                  key={coupon.id}
                  className="flex gap-3 px-4 py-5 border-b cursor-pointer"
                >
                  <input
                    type="radio"
                    name="coupon"
                    value={coupon.id}
                    checked={selectedCouponId === coupon.id}
                    onChange={() => setSelectedCouponId(coupon.id)}
                    className="mt-1 accent-orange-500"
                  />

                  <div className="flex-1">
                    {coupon.id === "사용안함" ? (
                      <span className="text-base font-medium">
                        {coupon.name}
                      </span>
                    ) : (
                      <>
                        <span className="block text-lg font-bold text-orange-500 mb-1">
                          {coupon.name}
                        </span>
                        <span className="block text-sm mb-1">
                          {coupon.description}
                        </span>
                        <span className="block text-xs text-gray-500 mb-2">
                          {coupon.minOrder}
                        </span>

                        <div className="flex justify-between text-xs">
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded">
                            {coupon.category}
                          </span>
                          <span className="text-gray-500">{coupon.expiry}</span>
                        </div>
                      </>
                    )}
                  </div>
                </label>
              ))}
            </div>
          ) : (
            <p className="px-4 py-6 text-sm text-gray-500">
              사용 가능한 쿠폰이 없습니다
            </p>
          )}
        </section>

        {/* 하단 적용 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-4">
          <button
            onClick={handleApplyCoupon}
            className="w-full py-4 rounded-lg bg-gray-900 text-white text-base font-semibold"
          >
            {selectedCouponId !== "사용안함"
              ? "3,000원 할인적용"
              : "쿠폰 사용안함"}
          </button>
        </div>
      </div>

      {onModal && (
        <CommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="땡겨요 이용하기"
          steps={["아래 쿠폰을 선택해주세요", "할인 적용 버튼을 눌러주세요"]}
        />
      )}

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-52 right-5 px-3 py-2 bg-gray-800 text-white rounded-md text-sm"
      >
        사용법 다시보기
      </button>

      <HomeButton />
    </MobileLayout>
  );
};

export default CouponPage;
