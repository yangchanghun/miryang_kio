import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

interface CertService {
  id: string;
  name: string;
  img: string;
}

const GovernmentPrivateCert: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);

  const certServices: CertService[] = [
    { id: "kakao", name: "카카오뱅크", img: "/goverment/icon/kakaobank.png" },
    { id: "kb", name: "국민인증서", img: "/goverment/icon/kb.png" },
    { id: "pass", name: "통신사PASS", img: "/goverment/icon/okpass.png" },
    { id: "naver", name: "네이버", img: "/goverment/icon/naver.jpg" },
    { id: "kakaotalk", name: "카카오톡", img: "/goverment/icon/kakaotalk.png" },
    { id: "woori", name: "우리인증서", img: "/goverment/icon/won.png" },
    { id: "nh", name: "NH인증서", img: "/goverment/icon/nh.jpg" },
    { id: "samsung", name: "삼성패스", img: "/goverment/icon/sp.jpg" },
    { id: "bwell", name: "뱅크월렛", img: "/goverment/icon/banksalad.png" },
    { id: "toss", name: "토스", img: "/goverment/icon/toss.jpg" },
    { id: "payco", name: "드림인증", img: "/goverment/icon/dream.jpg" },
    { id: "hana", name: "하나인증서", img: "/goverment/icon/hana.jpg" },
    { id: "shinhan", name: "신한인증서", img: "/goverment/icon/sinhan.jpg" },
  ];

  const handleClick = (id: string) => {
    if (id === "kakaotalk") {
      navigate("/miryang/goverment/kakaoauth");
    }
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-white">
      <audio src="/goverment/voice/zero/4.mp3" autoPlay />

      {/* Header */}
      <header className="px-4 py-5 border-b">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
                stroke="#4A90E2"
                strokeWidth="2"
              />
              <rect x="7" y="9" width="10" height="2" fill="#4A90E2" />
              <rect x="7" y="12" width="6" height="1" fill="#4A90E2" />
            </svg>
          </div>
          <h1 className="text-[35px] font-bold text-gray-800">민간 인증서</h1>
        </div>
      </header>

      {/* Grid */}
      <main className="px-4 py-6">
        <div className="grid grid-cols-4 gap-y-6">
          {certServices.map((service) => (
            <button
              key={service.id}
              onClick={() => handleClick(service.id)}
              className="flex flex-col items-center
                         transition
                         hover:-translate-y-1
                         hover:shadow-lg
                         active:translate-y-0"
            >
              <div
                className="w-[100px] h-[100px] rounded-xl
                           flex items-center justify-center
                           overflow-hidden mb-2"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-[25px] font-medium text-gray-800 text-center leading-tight">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </main>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px]
                   bg-blue-500 text-white px-4 py-2
                   rounded-full shadow"
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "간편 인증 시스템입니다",
            "카카오톡을 눌러 인증을 진행해주세요.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentPrivateCert;
