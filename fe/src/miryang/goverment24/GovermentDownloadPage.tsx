import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernmentTimerModal from "./timer/GovermentTimerModal";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

const GovermentDownloadPage: React.FC = () => {
  const navigate = useNavigate();

  const [complete, setComplete] = useState(false);
  const [modal, setModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const startDownload = () => {
    setModal(true);
    setTimeout(() => {
      setComplete(true);
    }, 4000);
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white font-sans">
      <audio src="/goverment/voice/zero/1.mp3" autoPlay />

      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b px-4 py-3 bg-white">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h1 className="flex-1 text-center text-lg font-medium text-gray-800">
          정부24
        </h1>

        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
          <button className="p-2 rounded-full hover:bg-gray-100">🎤</button>
        </div>
      </header>

      {/* App Info */}
      <section className="border-b px-4 py-5">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow">
            <img
              src="/goverment/icon/goverment_icon.png"
              alt="정부24"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">
              정부24(구 민원24)
            </h2>
            <p className="text-sm text-blue-600 mt-1">행정안전부</p>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <span className="font-medium text-gray-800">4.3★</span>
              <span>평점 2만개</span>
            </div>
          </div>

          {complete ? (
            <button
              onClick={() => navigate("/miryang/goverment/main")}
              className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-medium animate-pulse"
            >
              열기
            </button>
          ) : (
            <button
              onClick={startDownload}
              className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
            >
              <img
                src="/goverment/img/downloadimg.png"
                alt="download"
                className="w-8"
              />
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-around text-center">
          <div>
            <div className="text-lg font-semibold">4.3★</div>
            <div className="text-gray-500 text-sm">리뷰</div>
          </div>
          <div>
            <div className="text-lg">🏛️</div>
            <div className="text-gray-500 text-sm">정부 기관</div>
          </div>
          <div>
            <div className="text-lg">ℹ️</div>
            <div className="text-gray-500 text-sm">3세 이상</div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-b px-4 py-5">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {["1", "2", "3", "4"].map((n) => (
            <div
              key={n}
              className="min-w-[160px] rounded-xl border bg-gray-100 overflow-hidden"
            >
              <img
                src={`/goverment/image/${n}.png`}
                alt={`screenshot-${n}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="border-b px-4 py-4 text-sm text-gray-700 leading-relaxed">
        정부24는 민원신청, 서류발급, 본인확인, 온라인 업무처리 등을 지원하는
        대한민국 정부 통합민원포털입니다.
      </section>

      {/* Developer */}
      <section className="border-b px-4 py-4 flex items-center gap-3">
        <div className="text-3xl">🇰🇷</div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">대한민국 정부의 신뢰를</h3>
          <p className="text-xs text-gray-500">
            행정안전부 • 라이프스타일 • 무료
          </p>
        </div>
        <button className="border px-4 py-1 rounded-full text-sm text-blue-600">
          보기
        </button>
      </section>

      {/* Bottom Nav */}
      <nav className="mt-auto flex border-t bg-white">
        {[
          { label: "게임", icon: "🎮" },
          { label: "앱", icon: "📱" },
          { label: "검색", icon: "🔍", active: true },
          { label: "도서", icon: "📚" },
        ].map((item) => (
          <button
            key={item.label}
            className={`flex-1 py-2 flex flex-col items-center text-xs ${
              item.active ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Modals */}
      {modal && <GovernmentTimerModal modal={modal} setModal={setModal} />}

      <button
        className="fixed right-5 bottom-[250px] bg-blue-500 text-white px-4 py-2 rounded-full shadow"
        onClick={() => setGuide(true)}
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "다운로드를 진행한 후 열기 버튼을 눌러 앱을 실행해 주세요",
          ]}
        />
      )}
    </div>
  );
};

export default GovermentDownloadPage;
