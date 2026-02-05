import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn.tsx";
import JangExplainModal from "./jangexplain/JangExplainModal.tsx";

export default function JangCart1() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);

  const handleBlockBtn = () => {
    alert("검색창을 선택해주세요!");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let jangcart: any[] = [];
  try {
    const stored = localStorage.getItem("장바구니");
    if (stored) jangcart = JSON.parse(stored);
  } catch (e) {
    console.error("장바구니 파싱 실패", e);
  }

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-24">
      {modal && <JangExplainModal setModal={setModal} />}

      {/* Header */}
      <header
        onClick={handleBlockBtn}
        className="sticky top-0 bg-white z-50 border-b"
      >
        <div className="flex justify-between items-center px-4 py-2">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-red-400 to-teal-400 bg-clip-text text-transparent">
            coupang
          </h1>

          <div className="flex items-center gap-3">
            <img
              className="w-6 h-6 rounded-full"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b6b'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/%3E%3C/svg%3E"
            />
            <div className="relative">
              🔔
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                15
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="bg-white px-4 py-3">
        <div
          onClick={() => navigate("/miryang/coupang/jangcart/2")}
          className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg cursor-pointer"
        >
          🔍
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="쿠팡에서 검색하세요!"
            className="bg-transparent outline-none flex-1 text-base"
          />
        </div>
      </div>

      {/* Banner */}
      <main onClick={handleBlockBtn}>
        <img
          src="/coupang/쿠팡배너.jpg"
          className="w-full h-[200px] object-cover"
        />

        {/* Services */}
        <div className="bg-white m-4 rounded-xl p-3 space-y-4">
          {[
            ["🛒", "자주산상품"],
            ["🎮", "쿠팡플레이"],
            ["🍎", "로켓프레시"],
            ["🍖", "쿠팡이츠"],
            ["👑", "골드박스"],
          ].map(([icon, text]) => (
            <div
              key={text}
              className="inline-flex w-1/5 flex-col items-center text-xs"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-400 text-white">
                {icon}
              </div>
              <span className="mt-1">{text}</span>
            </div>
          ))}
        </div>

        {/* Product Section */}
        <div className="bg-white mx-4 rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">🛍️ 이 상품 놓치지 마세요!</h3>
            <span className="text-blue-500 text-sm">더보기 ›</span>
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {[
              { img: "/coupang/shake1.jpg", name: "쉐이크베이비 컬러 키트" },
              { img: "/coupang/dog3.png", name: "강아지 사료" },
              { img: "/coupang/tissue.jpg", name: "대왕롤앤롤 휴지" },
            ].map((p) => (
              <div
                key={p.name}
                className="min-w-[140px] bg-gray-100 rounded-lg p-2"
              >
                <img
                  src={p.img}
                  className="w-full h-[120px] object-cover rounded-md"
                />
                <p className="text-xs mt-2 leading-snug">{p.name}</p>
                <p className="text-[10px] text-gray-500">★★★★☆</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Home Button */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed top-2 right-2 bg-white border px-3 py-1 rounded shadow text-sm"
      >
        처음으로
      </button>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white border-t flex justify-around py-2">
        {["홈", "카테고리", "검색", "MY"].map((t) => (
          <div
            key={t}
            onClick={handleBlockBtn}
            className="flex flex-col items-center text-xs text-gray-400"
          >
            {t}
          </div>
        ))}

        <div
          onClick={() =>
            jangcart.length === 2
              ? navigate("/miryang/coupang/jangcart/purchase")
              : alert("계란과 쌀을 모두 장바구니에 담아주세요")
          }
          className="relative flex flex-col items-center text-xs text-gray-600"
        >
          🛒
          <span className="absolute -top-1 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {jangcart.length}
          </span>
          장바구니
        </div>
      </nav>

      <JangExplainBtn setModal={setModal} />
    </div>
  );
}
