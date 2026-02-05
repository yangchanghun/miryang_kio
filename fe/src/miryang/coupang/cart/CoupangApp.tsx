import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

const CoupangApp: React.FC = () => {
  const [data, setData] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data === "휴지") {
      alert("휴지입니다");
    } else {
      alert("다른거 입력해주세요");
    }
  };

  const handleBlockBtn = () => {
    alert("검색창을 선택해주세요!");
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-gray-100 pb-20 font-sans">
      {/* Header */}
      <header onClick={handleBlockBtn} className="sticky top-0 z-50 bg-white">
        <audio
          src="/coupang/voice/signup/cart/검색창을 선택해주세요.mp3"
          autoPlay
        />
        <div className="flex items-center justify-between border-b px-4 py-2">
          <span className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-emerald-400 bg-clip-text">
            coupang
          </span>

          <div className="flex items-center gap-3">
            <img
              className="h-6 w-6 rounded-full"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b6b'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/%3E%3C/svg%3E"
            />
            <div className="relative text-xl">
              🔔
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                15
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="bg-white px-4 py-3">
        <div
          onClick={() => navigate("/miryang/coupang/search")}
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3"
        >
          🔍
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              value={data}
              onChange={handleChange}
              placeholder="쿠팡에서 검색하세요!"
              className="w-full bg-transparent text-base outline-none"
            />
          </form>
        </div>
      </div>

      {/* Banner */}
      <main onClick={handleBlockBtn}>
        <div className="relative h-[180px] overflow-hidden">
          <img
            src="/coupang/쿠팡배너.jpg"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Services */}
        <section className="mx-4 my-4 rounded-xl bg-white p-3">
          {[
            ["🛒", "자주산상품"],
            ["🎮", "쿠팡플레이"],
            ["🍎", "로켓프레시"],
            ["🍖", "쿠팡이츠"],
            ["👑", "골드박스"],
            ["⏰", "반짝세일"],
            ["🚀", "로켓직구"],
            ["💎", "R.LUX"],
            ["🚚", "로켓배송"],
            ["📺", "쿠팡라이브"],
          ].map((item, i) => (
            <div
              key={i}
              className="inline-flex w-1/5 flex-col items-center py-2"
            >
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                {item[0]}
              </div>
              <span className="text-xs">{item[1]}</span>
            </div>
          ))}
        </section>

        {/* Products */}
        <section className="mx-4 rounded-xl bg-white p-4">
          <div className="mb-3 flex justify-between">
            <h3 className="font-bold">🛍️ 이 상품 놓치지 마세요!</h3>
            <span className="text-blue-500">더보기 ›</span>
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {[
              "/coupang/shake1.jpg",
              "/coupang/dog3.png",
              "/coupang/shake2.jpg",
              "/coupang/tissue.jpg",
              "/coupang/headset.jpg",
            ].map((src, i) => (
              <div key={i} className="min-w-[140px] rounded-lg bg-gray-100 p-2">
                <img
                  src={src}
                  className="h-28 w-full rounded-md object-cover"
                />
                <p className="mt-1 text-xs font-medium">인기 상품 {i + 1}</p>
                <p className="text-[10px] text-gray-500">★★★★☆</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav
        onClick={handleBlockBtn}
        className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[785px] -translate-x-1/2 justify-around border-t bg-white py-2"
      >
        {["🏠", "▦", "🔍", "👤", "🛒"].map((icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-xs text-gray-400"
          >
            <span className="text-lg">{icon}</span>
            {i === 4 && (
              <span className="absolute -mt-1 ml-4 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
                0
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Explain */}
      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}

      {/* Home */}
      <button
        onClick={() => navigate("/coupang/tutorial")}
        className="fixed right-2 top-2 z-50 rounded bg-gray-200 px-3 py-2 text-sm"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangApp;
