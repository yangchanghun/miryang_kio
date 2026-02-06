import { useEffect, useState } from "react";
import { Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

const GovermentMain: React.FC = () => {
  const navigate = useNavigate();

  const [guide, setGuide] = useState(false);
  const [voice, setVoice] = useState("");
  const [guideText, setGuideText] = useState<string[]>([]);
  const [modal, setModal] = useState(false);

  const show = localStorage.getItem("name");
  const level = localStorage.getItem("level") || "0-level";
  const secondLevel = Boolean(localStorage.getItem("identityName"));

  const handleClick = () => {
    if (secondLevel) {
      navigate("/miryang/goverment/mobileregister/identity", {
        state: { status: true },
      });
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    if (level === "0-level") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGuideText(["하단의 로그인 버튼을 선택해주세요"]);
      setVoice("/goverment/voice/zero/2.mp3");
    }
    if (level === "1-level") {
      setGuideText([
        "모바일 신분증등록을 연습해보겠습니다.",
        "아래 서비스 바로가기의 주민등록 모바일 확인 서비스를 선택해주세요",
      ]);
      setVoice("/goverment/voice/first/1.mp3");
    }
    if (level === "2-level") {
      setGuideText([
        "주민등록 모바일 확인 서비스를 선택해 등록된 모바일 신분증을 확인해보세요",
      ]);
      setVoice("/goverment/voice/second/1.mp3");
    }
    if (level === "3-level") {
      setGuideText(["주민등록초본을 선택해 발급을 진행해주세요."]);
      setVoice("/goverment/voice/third/1.mp3");
    }
  }, [level]);

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen bg-gray-100">
      <audio src={voice} autoPlay />

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <img
            src="/goverment/icon/goverment_icon.png"
            className="w-12 h-12 rounded-full"
          />
          <span className="font-semibold text-gray-800">정부24</span>
        </div>

        <div className="flex gap-4 text-sm text-gray-600">
          {!show && <button>로그인</button>}
          <button>전체메뉴</button>
        </div>
      </header>

      {/* Search */}
      <div className="p-4 bg-white">
        <div className="flex items-center gap-3 px-4 py-3 rounded-full border-4 border-blue-600 bg-gray-100">
          <img
            src="/goverment/icon/goverment_icon.png"
            className="w-9 h-9 rounded-full"
          />
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            placeholder="모든 정부 서비스, 이제 한 곳에서 찾아보세요"
          />
          <button>🔍</button>
        </div>
      </div>

      {/* Popular Services */}
      <section className="m-6 p-4 bg-cyan-50 rounded-[40px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">자주 찾는 서비스</h2>
          <span className="text-sm text-gray-500">전체보기 〉</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "민원증명서",
            "토지(임야)대장",
            "주민등록등본(초본)",
            "자동차등록원부",
            "건축물대장",
            "가족관계증명서",
            "여권 재발급",
            "지방세 납세증명",
          ].map((text, i) => (
            <div
              key={i}
              onClick={() => {
                if (text.includes("주민등록")) {
                  navigate("/miryang/goverment/overview/service");
                }
              }}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white
                ${
                  level === "3-level" && text.includes("주민등록")
                    ? "text-red-500 text-2xl animate-pulse"
                    : ""
                }`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100">
                📋
              </div>
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Login / Service */}
      <section className="bg-white p-6">
        <h3 className="text-2xl font-semibold text-left mb-6">
          회원가입하고 여러 서비스를 <br /> 편리하게 이용하세요.
        </h3>

        <div className="space-y-4 mb-6">
          {["민원신청", "전자증명", "복합민원 혜택", "세무정보"].map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 text-xl text-gray-600"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                📄
              </div>
              {t}
            </div>
          ))}
        </div>

        {show ? (
          <div>
            <div className="text-xl font-bold mb-3">서비스 바로가기</div>
            <div
              onClick={handleClick}
              className="flex justify-between items-center px-6 py-5 mx-10 border rounded-lg shadow cursor-pointer"
            >
              <span className="text-xl font-bold">
                주민등록증 모바일 확인 서비스
              </span>
              <Smartphone />
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/miryang/goverment/login")}
            className="w-full py-4 bg-blue-500 text-white rounded-lg font-semibold"
          >
            로그인
          </button>
        )}
      </section>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px] bg-blue-500 text-white px-4 py-2 rounded-full shadow"
      >
        가이드
      </button>

      {modal && <MobileRegisterModal onClose={() => setModal(false)} />}
      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={guideText}
        />
      )}
    </div>
  );
};

export default GovermentMain;

interface MobileRegisterModalProps {
  onClose?: () => void;
}

const MobileRegisterModal: React.FC<MobileRegisterModalProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-[400px] h-[400px] bg-white rounded-3xl
                   flex flex-col items-center justify-between
                   p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mt-10">
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부24"
            className="w-[60px] h-[60px]"
          />
          <h2 className="text-xl font-bold text-gray-800">
            주민등록증 확인서비스
          </h2>
        </div>

        {/* Content */}
        <div className="text-center text-lg leading-relaxed text-gray-700 px-4">
          주민등록증 모바일 확인서비스를 <br />
          등록 하시겠습니까?
          <br />
          <span className="block mt-3">* 주민등록증을 준비해 주세요</span>
          <span className="block">
            * 본인명의 개인 핸드폰만 등록 가능합니다
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-24 mb-6 text-lg">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            나중에
          </button>

          <button
            onClick={() => {
              navigate("/miryang/goverment/mobileregister/term");
            }}
            className="font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
