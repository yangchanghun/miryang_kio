import { useState, useEffect } from "react";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import { useNavigate } from "react-router-dom";
import HomeButton from "../../utils/HomeButton";

export default function MainHomePage() {
  const navigate = useNavigate();

  const imageSrcArray = [
    "/ddangyo/mainpage/pizza.png",
    "/ddangyo/mainpage/burger.png",
    "/ddangyo/mainpage/cake.png",
    "/ddangyo/mainpage/pizza.png",
  ];

  const [currentLocation] = useState(
    localStorage.getItem("address") || "은평구 불광동",
  );
  const [searchValue, setSearchValue] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [onModal, setOnModal] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % imageSrcArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 1, name: "치킨", icon: "/ddangyo/mainpage/chicken.png" },
    { id: 2, name: "카페/디저트", icon: "/ddangyo/mainpage/cake.png" },
    { id: 3, name: "피자", icon: "/ddangyo/mainpage/pizza.png" },
    { id: 4, name: "한식", icon: "/ddangyo/mainpage/hansik.png" },
    { id: 5, name: "버거", icon: "/ddangyo/mainpage/burger.png" },
    { id: 6, name: "중식", icon: "/ddangyo/mainpage/jjang.png" },
    { id: 7, name: "분식", icon: "/ddangyo/mainpage/bunsik.png" },
    { id: 8, name: "온누리상품권", icon: "/ddangyo/mainpage/sang.png" },
    { id: 9, name: "회/일식/돈까스", icon: "/ddangyo/mainpage/chobap.png" },
    { id: 10, name: "더보기", icon: "/ddangyo/mainpage/down.png" },
  ];

  return (
    <MobileLayout>
      <div className="flex h-full flex-col bg-[#f8f9fa]">
        {/* 헤더 */}
        <div
          onClick={() => setOnModal(true)}
          className="flex items-center justify-between border-b bg-white px-5 py-4 max-[480px]:px-4 max-[480px]:py-3"
        >
          <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-[#f5f5f5]">
            <span className="text-[#ff6b35]">📍</span>
            <span className="font-semibold text-[#333]">{currentLocation}</span>
            <span className="text-xs text-[#666]">⬇️</span>
          </div>

          <audio src="/ddangyo/voice/6.mp3" autoPlay />

          <div className="flex gap-3">
            <button className="h-14 w-14 rounded-full p-2 hover:bg-[#f5f5f5]">
              <img src="/ddangyo/mainpage/bell.png" />
            </button>
            <button className="h-14 w-14 rounded-full p-2 hover:bg-[#f5f5f5]">
              <img src="/ddangyo/mainpage/cart.png" />
            </button>
          </div>
        </div>

        {/* 검색 */}
        <div
          onClick={() => setOnModal(true)}
          className="border-b bg-white px-5 py-4 max-[480px]:px-4 max-[480px]:py-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center rounded-full bg-[#f5f5f5] px-4">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="눈으로 즐기는 미식 바로가기"
                className="flex-1 bg-transparent py-3 text-[15px] outline-none placeholder:text-[#999]"
              />
              <button className="ml-2 h-9 w-9 rounded-full bg-[#e0e0e0]">
                ⊞
              </button>
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold">
              P
            </button>
          </div>
        </div>

        {/* 카테고리 */}
        <div className="bg-white px-5 py-5">
          <div className="grid grid-cols-5 gap-5 text-center">
            {categories.map((c) => (
              <div
                key={c.id}
                className="cursor-pointer transition hover:scale-105"
                onClick={() =>
                  c.name === "치킨"
                    ? navigate("/miryang/ddangyo/chicken/list")
                    : setOnModal(true)
                }
              >
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                  <img src={c.icon} className="w-[90%]" />
                </div>
                <span className="text-[12px] font-medium text-[#333]">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 캐러셀 */}
        <div className="h-[200px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {imageSrcArray.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-full w-full shrink-0 object-cover"
              />
            ))}
          </div>
        </div>

        {/* 하단 네비 */}
        <div className="sticky bottom-0 z-50 grid grid-cols-5 border-t bg-white py-2">
          {["홈", "찜", "혜택", "주문내역", "마이"].map((t, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-[10px] ${
                i === 0 ? "text-[#ff6b35]" : "text-[#333]"
              }`}
            >
              <span className="text-lg">🏠</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      {onModal && (
        <CommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="땡겨요 이용하기"
          steps={[
            "배달 주소가 정확한지 확인해주세요",
            "치킨을 클릭해주세요",
            "다른 버튼은 비활성화 상태입니다",
          ]}
        />
      )}

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-[200px] right-[20px] rounded-full bg-[#ff6b35] px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#e55a2e]"
      >
        사용법 다시보기
      </button>

      <HomeButton />
    </MobileLayout>
  );
}
