import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: "milyangGuide",
      title: "밀양카드앱관련가이드",
      image: "/icon/milyang_icon.png",
      route: "/miryang/appguide/main",
      color: "#f771c3ff",
      type: "internal",
    },
    {
      id: "ddangyo",
      title: "땡겨요",
      image: "/icon/ddangyo.png",
      route: "/miryang/ddangyo/popup/",
      color: "#f771c3ff",
      type: "internal",
    },
    {
      id: "jejuair",
      title: "스마트폰 기본",
      image: "/icon/smartphone_icon.png",
      route: "/miryang/galaxyguide/main",
      color: "#ff9100ff",
      type: "internal",
    },
    {
      id: "kakaotalk",
      title: "카카오톡",
      image: "./icon/newkakaoicon.png",
      route: "/miryang/kakaotalk/main",
      color: "#2ac1bc",
      type: "internal",
      isPremium: false,
    },
    {
      id: "kakaot",
      title: "카카오T",
      image: "./icon/kakaot_icon.png",
      route: "/miryang/kakaot/main",
      color: "#2ac1bc",
      type: "internal",
      isPremium: false,
    },
    {
      id: "jejuairport",
      title: "제주항공앱",
      image: "./icon/jejuairport.png",
      route: "/miryang/jejuair/main",
      color: "#2ac1bc",
      type: "internal",
      isPremium: false,
    },
  ];
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans"
      style={{ backgroundImage: "url(/main_background.png)" }}
    >
      <div className="min-h-screen bg-black/30 flex flex-col items-center justify-center p-5">
        {/* HEADER */}
        <header className="w-full max-w-[1600px] flex items-center justify-between mb-8">
          <div className="flex-1 flex justify-center">
            <img
              src="/icon/miryangicon.png"
              alt="키오에듀 로고"
              className="w-full max-w-[800px]"
            />
          </div>
        </header>

        {/* GRID */}
        <section
          className="
    grid gap-5 w-full max-w-[1400px] mb-10
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  "
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.route);
              }}
              className="
                relative aspect-square rounded-2xl cursor-pointer overflow-hidden
                border-2 border-white/20
                shadow-lg transition
                hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] h-[120px] object-contain mb-4 drop-shadow-lg"
                />

                <h3 className="text-[25px] font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="text-white/80 text-sm text-center">
          © 2025 키오에듀 All rights reserved.
        </footer>
      </div>
    </div>
  );
}
