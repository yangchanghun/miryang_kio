import { useNavigate } from "react-router-dom";

export default function JangCartComplete() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow px-4 py-3 text-center">
        <h1 className="text-lg font-bold">주문완료</h1>
      </header>

      {/* Success Animation */}
      <section className="flex flex-col items-center mt-12">
        <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-6 animate-bounce">
          <span className="text-white text-5xl font-bold">✓</span>
        </div>

        <h2 className="text-xl font-bold mb-2">주문이 완료되었습니다!</h2>
        <p className="text-sm text-gray-600 text-center leading-relaxed px-6">
          축하합니다! 쿠팡에서 장바구니를 이용한 구매를
          <br />
          성공적으로 완료하였습니다.
        </p>
      </section>

      {/* Next Mission */}
      <section className="w-full px-4 mt-10">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🚀</span>
            <h3 className="font-bold text-base">다음 미션 안내</h3>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            이제 다른 앱들도 체험해보세요!
            <br />
            <strong>배달의민족</strong>, <strong>카카오톡</strong> 등
            <br />
            다양한 앱에서 새로운 미션들이 기다리고 있어요.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span>💡</span>
              <span>각 앱마다 재미있는 기능들을 배워보세요</span>
            </div>
            <div className="flex items-start gap-2">
              <span>🎯</span>
              <span>실제 사용법과 똑같이 연습할 수 있어요</span>
            </div>
          </div>
        </div>
      </section>

      {/* Action Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/miryang/coupang/tutorial")}
          className="flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow active:scale-95 transition"
        >
          <span className="text-xl">🏠</span>
          홈으로 가기
        </button>
      </div>

      {/* Logo */}
      <div className="mt-10 mb-6">
        <img
          src="/icon/키오에듀-로고.png"
          alt="키오에듀 로고"
          className="h-12 mx-auto"
        />
      </div>
    </div>
  );
}
