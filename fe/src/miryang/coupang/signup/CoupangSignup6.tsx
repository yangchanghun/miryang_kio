import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignExplainBtn from "../signup/signexplain/SignExplainBtn";
import SignExplainModal from "../signup/signexplain/SignExplainModal";

const CoupangSignup6: React.FC = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleShopping = () => {
    navigate("/miryang/coupang/login");
  };

  const handleBackButton = () => {
    // 키오스크 기준에서는 뒤로가기 비활성 or 무시
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[780px] flex-col bg-white font-sans">
      <audio src="/coupang/voice/6.mp3" autoPlay />

      {/* 헤더 */}
      <div className="relative flex items-center border-b px-5 py-4">
        <button
          onClick={handleBackButton}
          className="rounded p-2 active:bg-gray-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-gray-800">
          회원가입 완료
        </h1>
      </div>

      {/* 본문 */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center animate-[fadeInUp_0.6s_ease-out]">
        {/* 아이콘 */}
        <div className="mb-10">
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gray-100 shadow-lg animate-[scaleIn_0.5s_ease-out_0.2s_both]">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="40" fill="#f0f0f0" />
              <circle cx="40" cy="30" r="12" fill="#ccc" />
              <path
                d="M20 65C20 55 28 50 40 50C52 50 60 55 60 65"
                fill="#ccc"
              />
            </svg>
          </div>
        </div>

        {/* 메시지 */}
        <div className="mb-14">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 leading-snug">
            쿠팡 회원이 되신 것을 환영합니다!
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            ‘마이쿠팡 &gt; 내정보관리’에서
            <br />
            비밀번호를 설정할 수 있습니다.
          </p>
        </div>

        {/* 액션 */}
        <div className="w-full max-w-[320px]">
          <button
            onClick={handleShopping}
            className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white active:bg-blue-700"
          >
            쇼핑 계속하기
          </button>
        </div>
      </div>

      {/* 설명 버튼 */}
      <SignExplainBtn setModal={setModal} />
      {modal && <SignExplainModal setModal={setModal} />}
    </div>
  );
};

export default CoupangSignup6;
