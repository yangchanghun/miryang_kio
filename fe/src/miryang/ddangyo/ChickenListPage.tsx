import { useState } from "react";
import MobileLayout from "./layout/MobileLayout";
import { useNavigate } from "react-router-dom";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

export default function ChickenListPage() {
  const [selectedTab, setSelectedTab] = useState("치킨");
  const [sortBy, setSortBy] = useState("정렬");
  const [onModal, setOnModal] = useState(true);
  const navigate = useNavigate();

  const tabs = ["무료배달", "신규맛집", "치킨", "카페/디저트"];

  const restaurants = [
    {
      id: 1,
      name: "밀양치킨 밀양점",
      rating: 4.7,
      reviewCount: 78,
      starCount: 74,
      deliveryTime: "16~30분",
      deliveryFee: "포장 2,000",
      image: "/ddangyo/chicken/윙치킨.png",
      free: true,
    },
    {
      id: 2,
      name: "댕댕치킨 밀양점",
      rating: 4.8,
      reviewCount: 199,
      starCount: 179,
      deliveryTime: "19~37분",
      deliveryFee: "무료~2,000원",
      image: "/ddangyo/chicken/윙치킨.png",
      promotion: "서울Pay+ 결제시 최대 30% 혜택",
    },
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-[#f8f9fa]">
        {/* 헤더 */}
        <div className="sticky top-0 z-50 flex items-center justify-center bg-white px-4 py-5 shadow-sm">
          <h1 className="text-[18px] font-semibold text-[#212529]">치킨</h1>

          <div className="absolute right-4 flex gap-2">
            <button className="rounded-full p-2 hover:bg-[#f8f9fa]">
              <audio src="/ddangyo/voice/7.mp3" autoPlay />
              🏠
            </button>
            <button className="rounded-full p-2 hover:bg-[#f8f9fa]">🛒</button>
          </div>
        </div>

        {/* 탭 */}
        <div
          onClick={() => setOnModal(true)}
          className="border-b bg-white px-4 py-4"
        >
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative pb-2 text-[16px] font-medium ${
                  selectedTab === tab
                    ? "font-semibold text-[#212529]"
                    : "text-[#6c757d]"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
                {selectedTab === tab && (
                  <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#212529]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 정렬 */}
        <div className="flex gap-3 bg-white px-4 py-4">
          <button
            onClick={() => setSortBy(sortBy === "정렬" ? "거리순" : "정렬")}
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa]"
          >
            {sortBy} ⌄
          </button>
          <button className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa]">
            필터 ⚙️
          </button>
        </div>

        {/* 리스트 */}
        <div className="px-4 py-5 space-y-4">
          {restaurants.map((r) => (
            <div
              key={r.id}
              onClick={() =>
                r.name === "밀양치킨 밀양점"
                  ? navigate("/miryang/ddangyo/chicken/main")
                  : alert("준비중입니다")
              }
              className="cursor-pointer overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative h-[160px]">
                <img src={r.image} className="h-full w-full object-cover" />
                {r.free && (
                  <span className="absolute left-2 top-2 rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                    무료배달
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="mb-1 text-[18px] font-semibold text-[#212529]">
                  {r.name}
                </h3>

                <div className="mb-1 flex items-center gap-2 text-sm">
                  <span className="text-[#ffc107]">★</span>
                  <span className="font-semibold">{r.rating}</span>
                  <span className="text-[#6c757d]">리뷰 {r.reviewCount}</span>
                  <span className="text-[#6c757d]">★{r.starCount}</span>
                </div>

                <div className="mb-1 flex gap-3 text-sm text-[#6c757d]">
                  <span>🚛 {r.deliveryTime}</span>
                  <span>{r.deliveryFee}</span>
                </div>

                {r.promotion && (
                  <div className="mt-2 inline-block rounded-lg bg-[#e7e3ff] px-3 py-2 text-[13px] font-semibold text-[#6f42c1]">
                    {r.promotion}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* 배너 */}
          <div className="mt-6 rounded-xl bg-gradient-to-br from-[#ff9a56] to-[#ffad73] p-5 text-white">
            <h3 className="text-lg font-bold">서울배달+ 가격제 치킨 할인</h3>
            <p className="mt-1 text-sm opacity-90">오리지널윙 외 교촌치킨</p>
            <button className="mt-2 text-sm underline">
              할인중인 브랜드 보기 &gt;
            </button>
          </div>
        </div>
      </div>

      {onModal && (
        <CommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="땡겨요 이용하기"
          steps={["밀양치킨 밀양점을 선택해주세요"]}
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
