import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

/* =====================
   타입 정의
===================== */
interface Coupon {
  id: string;
  name: string;
  discount: number;
}

interface OrderLocationState {
  orderAmount?: number;
  deliveryFee?: number;
  selectedCoupon?: Coupon;
  discount?: number;
}

const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as OrderLocationState | null;

  /* =====================
     주문 금액
  ===================== */
  const orderAmount = state?.orderAmount ?? 23000;
  const deliveryFee = state?.deliveryFee ?? 3000;

  const selectedCoupon = state?.selectedCoupon ?? null;
  const couponDiscount = state?.discount ?? 0;

  const totalAmount = orderAmount + deliveryFee - couponDiscount;

  /* =====================
     UI 상태
  ===================== */
  const [onModal, setOnModal] = useState(true);
  const [warnModal, setWarnModal] = useState(false);

  /* =====================
     사용자 입력
  ===================== */
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phonenumber") || "",
  );

  const [address] = useState(localStorage.getItem("address") || "서울시청");

  const [detailAddress, setDetailAddress] = useState(
    localStorage.getItem("detailaddress") || "",
  );

  return (
    <MobileLayout>
      <audio src="/ddangyo/voice/9.mp3" autoPlay />

      <div className="min-h-screen bg-gray-100 pb-24">
        {/* 헤더 */}
        <header className="relative flex items-center justify-center bg-white border-b px-5 py-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-5 text-xl font-bold"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold">주문하기</h1>
        </header>

        {/* 가게 정보 */}
        <section className="bg-white px-5 py-4 border-b-8 border-gray-100">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
            배달
          </span>
          <h2 className="text-xl font-bold text-gray-800">밀양치킨 밀양점</h2>
        </section>

        {/* 배달주소 */}
        <section className="bg-white px-5 py-5 mb-2">
          <div className="flex justify-between mb-3">
            <span className="font-semibold">배달주소</span>
            <button className="text-sm text-gray-500">
              장간! 배달주소를 꼭 확인해주세요!
            </button>
          </div>

          <input
            value={address}
            readOnly
            className="w-full mb-2 px-4 py-3 rounded-lg border bg-gray-100 text-sm"
          />

          <input
            value={detailAddress}
            onChange={(e) => {
              localStorage.setItem("detailaddress", e.target.value);
              setDetailAddress(e.target.value);
            }}
            placeholder="상세주소를 입력해주세요"
            className="w-full px-4 py-3 rounded-lg border text-sm"
          />
        </section>

        {/* 연락처 */}
        <section className="bg-white px-5 py-5 mb-2">
          <div className="flex justify-between mb-3">
            <span className="font-semibold">연락처</span>
            <button className="text-sm text-gray-500">변경</button>
          </div>

          <div className="flex gap-2">
            <input
              value={phoneNumber}
              onChange={(e) => {
                localStorage.setItem("phonenumber", e.target.value);
                setPhoneNumber(e.target.value);
              }}
              className="flex-1 px-4 py-3 rounded-lg border bg-gray-100 text-sm"
            />
            <button className="px-3 py-2 bg-blue-500 text-white text-xs rounded-md">
              인증번호 사용
            </button>
          </div>
        </section>

        {/* 쿠폰 */}
        <section
          onClick={() =>
            navigate("/miryang/ddangyo/chicken/coupon", {
              state: { orderAmount, deliveryFee, selectedCoupon },
            })
          }
          className="bg-white px-5 py-5 mb-2 cursor-pointer"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-orange-500 text-white text-xs font-bold flex items-center justify-center rounded-full">
                %
              </span>
              <span className="font-semibold">쿠폰</span>
            </div>

            <span className="text-sm text-gray-500">
              {couponDiscount > 0
                ? `${couponDiscount.toLocaleString()}원 할인`
                : "최대할인"}{" "}
              →
            </span>
          </div>

          <div className="text-sm">
            사용가능한 쿠폰이{" "}
            <span className="text-orange-500 font-bold">1장</span> 있어요
          </div>

          <div className="mt-3 flex items-center gap-2 bg-blue-50 p-3 rounded-lg text-blue-700 text-sm">
            😊 너만 몰라서 역습했던 혜택받기
          </div>
        </section>

        {/* 주문 요약 */}
        <section className="bg-white px-5 py-5 mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-500">주문금액</span>
            <span className="font-semibold">
              {orderAmount.toLocaleString()}원
            </span>
          </div>

          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-500">배달비</span>
            <span className="font-semibold">
              {deliveryFee.toLocaleString()}원
            </span>
          </div>

          {couponDiscount > 0 && (
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-500">쿠폰할인</span>
              <span className="font-semibold text-red-500">
                -{couponDiscount.toLocaleString()}원
              </span>
            </div>
          )}

          <div className="flex items-center pt-3 border-t gap-2">
            <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">
              ₩
            </span>
            <span className="flex-1 font-semibold">총 결제금액</span>
            <span className="text-lg font-bold text-orange-500">
              {totalAmount.toLocaleString()}원
            </span>
          </div>
        </section>

        {/* 결제 버튼 */}
        <button
          onClick={() => navigate("/ddangyo/finish")}
          className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white py-4 text-lg font-bold"
        >
          {totalAmount.toLocaleString()}원 결제하기
        </button>
      </div>

      {onModal && (
        <CommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="땡겨요 이용하기"
          steps={[
            "배달 주소를 확인해주세요",
            "상세주소를 확인해주세요",
            "연락처를 입력해주세요",
            "쿠폰을 선택해주세요",
            "쿠폰 할인 적용을 확인해주세요",
          ]}
        />
      )}

      {warnModal && (
        <CommonModal
          onModal={warnModal}
          setOnModal={setWarnModal}
          title="교육용 앱입니다"
          steps={["실제 땡겨요 앱을 이용해보세요"]}
        />
      )}

      <HomeButton />
    </MobileLayout>
  );
};

export default OrderPage;
