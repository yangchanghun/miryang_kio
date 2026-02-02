import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import HomeButton from "../../utils/HomeButton";

/* =====================
   타입
===================== */
interface FinishLocationState {
  orderAmount?: number;
  deliveryFee?: number;
  couponDiscount?: number;
}

const DdangyoFinishPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as FinishLocationState | null;

  const [showConfetti, setShowConfetti] = useState(true);

  /* =====================
     결제 정보 (derived)
  ===================== */
  const orderAmount = state?.orderAmount ?? 23000;
  const deliveryFee = state?.deliveryFee ?? 3000;
  const couponDiscount = state?.couponDiscount ?? 0;
  const totalAmount = orderAmount + deliveryFee - couponDiscount;

  /* =====================
     Confetti 3초
  ===================== */
  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(t);
  }, []);

  /* =====================
     핸들러
  ===================== */
  const handleFinishEducation = () => {
    const preserve = new Set(["authToken"]);
    const keys = Object.keys(localStorage);
    keys.forEach((k) => !preserve.has(k) && localStorage.removeItem(k));
    navigate("/");
  };

  const handleRealApp = () => {
    window.open(
      "https://play.google.com/store/search?q=%EB%95%A1%EA%B2%A8%EC%9A%94&c=apps",
      "_blank",
    );
  };

  return (
    <MobileLayout>
      <audio src="/ddangyo/voice/11.mp3" autoPlay />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 pb-24 relative overflow-x-hidden">
        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center text-5xl animate-[confetti_3s_ease-out] pointer-events-none">
            🎉✨🎊✨🎉
          </div>
        )}

        {/* 교육 마치기 */}
        <button
          onClick={handleFinishEducation}
          className="w-full py-4 bg-gray-900 text-white font-semibold"
        >
          교육 마치기
        </button>

        {/* 완료 섹션 */}
        <section className="mx-4 my-5 rounded-b-3xl bg-gradient-to-br from-green-500 to-green-600 text-white p-8 text-center shadow-lg">
          <div className="text-5xl mb-4 animate-bounce">🎓</div>
          <h2 className="text-2xl font-bold mb-2">교육이 완료되었습니다!</h2>
          <p className="text-sm text-white/90 mb-6">
            땡겨요 앱 사용법을 성공적으로 학습하셨어요
          </p>

          <div className="flex gap-4 items-center bg-white/20 border border-white/30 backdrop-blur rounded-2xl p-5 text-left">
            <span className="text-3xl">✅</span>
            <div>
              <h3 className="font-semibold">
                결제가 성공적으로 완료되었습니다
              </h3>
              <p className="text-sm text-white/80">
                모든 주문 과정을 체험해보셨습니다
              </p>
            </div>
          </div>
        </section>

        {/* 학습 요약 */}
        <section className="bg-white mx-4 mb-5 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold text-center mb-5">🌟 학습한 내용</h3>

          <ul className="space-y-4">
            {[
              ["📍", "배달 주소 설정하기"],
              ["📞", "연락처 입력하기"],
              ["🎫", "쿠폰 선택 및 할인 적용"],
              ["💳", "결제 수단 선택하기"],
              ["✅", "주문 완료 과정"],
            ].map(([icon, text]) => (
              <li
                key={text}
                className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 transition-transform hover:translate-x-1"
              >
                <span className="text-2xl w-10 text-center">{icon}</span>
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 결제 요약 */}
        <section className="bg-white mx-4 mb-5 p-6 rounded-2xl shadow">
          <h4 className="text-center font-semibold mb-4">결제 정보</h4>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">주문금액</span>
              <span>{orderAmount.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">배달비</span>
              <span>{deliveryFee.toLocaleString()}원</span>
            </div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-orange-500 font-semibold">
                <span>쿠폰 할인</span>
                <span>-{couponDiscount.toLocaleString()}원</span>
              </div>
            )}
            <div className="flex justify-between pt-3 border-t">
              <span className="font-semibold">총 결제금액</span>
              <span className="font-bold text-orange-500">
                {totalAmount.toLocaleString()}원
              </span>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-3 italic">
            * 실제 결제는 이루어지지 않았습니다
          </p>
        </section>

        {/* 액션 버튼 */}
        <section className="mx-4 mb-6 space-y-3">
          <button
            onClick={handleRealApp}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow hover:-translate-y-0.5 transition"
          >
            실제 땡겨요 앱 사용해보기
          </button>

          <button
            onClick={() => navigate("/ddangyo")}
            className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition"
          >
            홈으로 돌아가기
          </button>
        </section>

        <HomeButton />
      </div>

      {/* confetti keyframes */}
      <style>
        {`
          @keyframes confetti {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
        `}
      </style>
    </MobileLayout>
  );
};

export default DdangyoFinishPage;
