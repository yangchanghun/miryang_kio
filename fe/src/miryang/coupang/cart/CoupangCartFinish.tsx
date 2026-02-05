import { useNavigate } from "react-router-dom";

export default function CoupangCartFinish() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white py-4 shadow">
        <h1 className="text-center text-xl font-bold text-gray-800">
          주문완료
        </h1>
      </header>

      {/* Success */}
      <section className="flex flex-col items-center mt-12 px-6">
        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
          <span className="text-white text-5xl font-bold">✓</span>
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            주문이 완료되었습니다!
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            축하합니다! 🎉
            <br />
            쿠팡에서 상품 구매하기를
            <br />
            성공적으로 완료하셨어요.
          </p>
        </div>
      </section>

      {/* Next Mission */}
      <section className="px-6 mt-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🚀</span>
            <h3 className="text-lg font-bold text-gray-800">다음 미션 안내</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            이제 다른 앱들도 체험해보세요!
            <br />
            <strong className="text-gray-800">배달의민족</strong>,{" "}
            <strong className="text-gray-800">카카오톡</strong> 등
            <br />
            다양한 앱에서 새로운 미션이 기다리고 있어요.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>💡</span>
              <span>각 앱마다 재미있는 기능들을 배워보세요</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>🎯</span>
              <span>실제 사용법과 똑같이 연습할 수 있어요</span>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="px-6 mt-10 space-y-4">
        <button
          onClick={() => navigate("/miryang/coupang/tutorial")}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-500 text-white text-lg font-semibold active:bg-blue-600"
        >
          🏠 홈으로 가기
        </button>

        <button
          onClick={() => navigate("/miryang/coupang/jangcart/1")}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-indigo-500 text-white text-lg font-semibold active:bg-indigo-600"
        >
          ✨ 장바구니 담아서 구매하기 연습하러 가기
        </button>
      </section>

      {/* Logo */}
      <footer className="flex justify-center py-6">
        <img
          src="/icon/키오에듀-로고.png"
          alt="키오에듀 로고"
          className="h-10 object-contain"
        />
      </footer>
    </div>
  );
}
