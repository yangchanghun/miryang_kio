import { useState } from "react";
import MobileLayout from "./layout/MobileLayout";
import DetailChickenPage from "./DetailChickenPage";
import ChickenCartPage from "./ChickenCartPage";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";
interface CartItem {
  name: string;
  basePrice: number;
  sideOption: string;
  sidePrice: number;
  quantity: number;
  totalPrice: number;
}
interface MenuDetail {
  name: string;
  price: string;
}
export default function ChickenMainPage() {
  const [onModal, setOnModal] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [detail, setDetail] = useState(false);
  const [cartForm, setCartForm] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("대표메뉴");
  const [coupon, setCoupon] = useState(
    localStorage.getItem("coupon") === "true",
  );
  const [currentDetail, setCurrentDetail] = useState<MenuDetail>({
    name: "",
    price: "",
  });

  const categories = [
    "대표메뉴",
    "네네 신메뉴",
    "네네 시그니처시리즈",
    "네네 양념",
  ];

  const menuItems = [
    {
      id: 1,
      name: "야자치킨",
      price: "23,000원",
      image: "/ddangyo/chicken/윙치킨.png",
    },
    {
      id: 2,
      name: "치즈스노윙",
      price: "23,000원",
      image: "/ddangyo/chicken/윙치킨.png",
    },
  ];

  if (showCart) {
    return (
      <ChickenCartPage
        cartForm={cartForm}
        setCartForm={setCartForm}
        onClose={() => setShowCart(false)}
      />
    );
  }

  return (
    <MobileLayout>
      <audio src="/ddangyo/voice/8.mp3" autoPlay />

      {onModal && (
        <CommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="땡겨요 이용하기"
          steps={[
            "3,000원 할인 쿠폰을 받아보세요",
            "치킨을 선택해 장바구니에 담아주세요",
            "오른쪽 상단 장바구니를 눌러주세요",
          ]}
        />
      )}

      {!detail ? (
        <div className="min-h-screen bg-[#f8f8f8]">
          {/* 상단 아이콘 */}
          <div className="flex justify-end gap-2 px-4 py-3">
            <button className="rounded-full p-2 hover:bg-gray-100">🏠</button>
            <button
              onClick={() => setShowCart(true)}
              className="relative rounded-full p-2 hover:bg-gray-100"
            >
              🛒
              {cartForm.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white">
                  {cartForm.length > 99 ? "99+" : cartForm.length}
                </span>
              )}
            </button>
          </div>

          {/* 히어로 이미지 */}
          <div className="h-[300px] overflow-hidden">
            <img
              src="/ddangyo/chicken/윙치킨.png"
              className="h-full w-full object-cover"
            />
          </div>

          {/* 가게 정보 */}
          <div className="-mt-6 rounded-t-[32px] bg-white px-4 pt-5">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">밀양치킨 밀양점</h1>
              <button className="text-2xl">🤍</button>
            </div>

            <div className="mt-2 flex items-center gap-4 text-sm">
              <span className="font-semibold text-[#ff6b35]">⭐ 88</span>
              <span className="text-gray-500">리뷰 97</span>
              <span className="ml-auto text-gray-500">가게정보 · 원산지</span>
            </div>
          </div>
          <div className="ddang-discount-banner">
            <span className="ddang-discount-icon">🏷️</span>
            <span className="ddang-discount-text">
              최대 3,000원 할인혜택 모아보기
            </span>
          </div>
          {/* 쿠폰 섹션 */}
          <div className="bg-white px-4 py-4 border-b-8 border-[#f8f8f8]">
            {/* 헤더 */}
            <div className="mb-3">
              <span className="inline-block rounded-full bg-[#ff6b35] px-3 py-1 text-xs font-semibold text-white">
                쿠폰혜택
              </span>
              <span className="mt-2 block text-sm text-gray-600">
                지금 바로 할인 쿠폰 받으세요
              </span>
            </div>

            {/* 쿠폰 카드 */}
            <div className="flex items-center justify-between rounded-xl border-2 border-[#ff6b35] bg-white p-4">
              {/* 왼쪽 정보 */}
              <div className="flex-1">
                <div className="mb-1 text-xs font-semibold text-[#ff6b35]">
                  밀양치킨
                </div>
                <div className="mb-1 text-xl font-bold text-gray-800">
                  3,000원 할인
                </div>
                <div className="text-xs text-gray-600">~25.08.31 사용가능</div>
                <div className="text-[11px] text-gray-400">
                  최소주문금액 18,000원
                </div>
              </div>

              {/* 오른쪽 버튼 */}
              {coupon ? (
                <div className="flex min-w-[64px] flex-col items-center gap-1 rounded-lg bg-[#ff6b35] px-3 py-2 text-white">
                  <span className="text-base font-bold">O</span>
                  <span className="text-[11px] font-semibold">발급완료</span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setCoupon(true);
                    localStorage.setItem("coupon", "true");
                    alert("쿠폰 발급완료");
                  }}
                  className="flex min-w-[64px] flex-col items-center gap-1 rounded-lg bg-[#ff6b35] px-3 py-2 text-white active:scale-95"
                >
                  <span className="text-base">⬇</span>
                  <span className="text-[11px] font-semibold">쿠폰받기</span>
                </button>
              )}
            </div>
          </div>

          {/* 카테고리 */}
          <div className="flex gap-2 overflow-x-auto bg-white px-4 py-4 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
                  selectedCategory === c
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* 메뉴 */}
          <div className="bg-white px-4 pb-[200px]">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentDetail(item);
                  setDetail(true);
                }}
                className="flex items-center justify-between border-b py-5"
              >
                <div>
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-base font-semibold">{item.price}</p>
                </div>

                <div className="h-[90px] w-[90px] overflow-hidden rounded-full border">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 사용법 버튼 */}
          <button
            onClick={() => setOnModal(true)}
            className="fixed bottom-[200px] right-[20px] rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#e55a2e]"
          >
            사용법 다시보기
          </button>
        </div>
      ) : (
        <DetailChickenPage
          product={currentDetail.name}
          price={currentDetail.price}
          setCartForm={setCartForm}
          onClose={() => setDetail(false)}
        />
      )}

      <HomeButton />
    </MobileLayout>
  );
}
