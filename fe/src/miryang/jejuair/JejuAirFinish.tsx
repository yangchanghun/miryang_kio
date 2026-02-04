import { useNavigate } from "react-router-dom";

export default function JejuAirFinish() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center p-5">
      <audio src="/jejuair/voice/8.mp3" autoPlay />

      <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-2xl p-10 text-center animate-[slideUp_0.6s_ease-out]">
        {/* SUCCESS ICON */}
        <div className="flex justify-center mb-6 animate-[bounceIn_0.8s_ease-out_0.2s_both]">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">✓</span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 교육이 완료되었습니다!
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          제주항공 모바일 앱 예약 프로세스 교육을
          <br />
          성공적으로 완료하셨습니다.
        </p>

        {/* SUMMARY */}
        <section className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            학습 완료 내용
          </h2>

          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "탑승객 정보 입력",
              "부가서비스 선택",
              "항공보안법 개정 안내 확인",
              "여행 상세 및 약관 동의",
              "결제 프로세스 완료",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </section>

        {/* ACTION */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-lg font-semibold py-4 rounded-xl transition"
        >
          교육 마치기
        </button>

        {/* FOOTER */}
        <div className="border-t mt-6 pt-4 text-xs text-gray-400 leading-relaxed">
          실제 제주항공 앱에서는 결제가 진행됩니다.
          <br />이 교육은 시뮬레이션 목적으로 제작되었습니다.
        </div>
      </div>

      {/* animations */}
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
