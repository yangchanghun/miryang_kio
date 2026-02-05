import { useNavigate } from "react-router-dom";

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/miryang/coupang/tutorial");
  };

  const handleNextMission = () => {
    navigate("/miryang/coupang/main");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[780px] flex-col bg-white font-sans">
      <audio src="/coupang/voice/8.mp3" autoPlay />

      {/* Header */}
      <header className="border-b px-5 py-4 text-center">
        <h1 className="text-lg font-semibold text-gray-800">
          회원가입 완료 및 로그인 완료
        </h1>
      </header>

      {/* Success Section */}
      <section className="flex flex-col items-center px-5 py-10 text-center">
        {/* Check Animation */}
        <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-blue-600">
          <span className="text-5xl font-bold text-white">✓</span>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-gray-800 leading-snug">
          성공적으로 회원가입과 로그인이
          <br />
          완료되었습니다
        </h2>

        <p className="text-base leading-relaxed text-gray-600">
          축하합니다! 🎉
          <br />
          이제 쿠팡을 자유롭게 이용하실 수 있습니다.
        </p>
      </section>

      {/* Next Mission Info */}
      <section className="px-5">
        <div className="rounded-xl border bg-gray-50 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">🚀</span>
            <h3 className="text-lg font-semibold text-gray-800">
              다음 미션 안내
            </h3>
          </div>

          <p className="mb-5 text-base leading-relaxed text-gray-700">
            이제 다른 앱들도 체험해보세요!
            <br />
            <strong>배달의민족</strong>, <strong>카카오톡</strong> 등
            <br />
            다양한 앱에서 새로운 미션이 기다리고 있어요.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span>💡</span>
              <span className="text-sm text-gray-700">
                앱마다 재미있는 기능을 배워볼 수 있어요
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <span className="text-sm text-gray-700">
                실제 사용법 그대로 연습할 수 있어요
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="mt-auto flex flex-col gap-4 px-5 py-6">
        <button
          onClick={handleGoHome}
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 py-4 text-lg font-semibold text-gray-800 active:bg-gray-300"
        >
          <span>🏠</span>
          홈으로 가기
        </button>

        <button
          onClick={handleNextMission}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white active:bg-blue-700"
        >
          <span>✨</span>
          상품 구매 연습하러 가기
        </button>
      </div>

      {/* Logo */}
      <div className="pb-6 text-center">
        <img
          src="/icon/키오에듀-로고.png"
          alt="키오에듀 로고"
          className="mx-auto h-10"
        />
      </div>
    </div>
  );
};

export default SignupSuccess;
