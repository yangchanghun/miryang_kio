import { useNavigate } from "react-router-dom";

export default function KorailEducationComplete() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 text-gray-800"
    >
      <audio src="/jejuair/voice/8.mp3" autoPlay />

      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 80 80" fill="none">
              <path
                d="M24 40L35 51L56 29"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-3">🎉 교육이 완료되었습니다!</h1>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          코레일 KTX 예약 프로세스 교육을
          <br />
          성공적으로 완료하셨습니다.
        </p>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-lg mb-4">학습 완료 내용</h2>

          <ul className="space-y-3 text-sm">
            {[
              "출발지 도착지 입력",
              "인원 수 선택",
              "열차조회 확인",
              "결제 프로세스 완료",
            ].map((text) => (
              <li key={text} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full py-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold text-lg shadow-md active:scale-95 transition"
        >
          교육 마치기
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          실제 코레일 앱에서는 결제가 진행됩니다.
          <br />이 교육은 시뮬레이션 목적으로 제작되었습니다.
        </p>
      </div>
    </div>
  );
}
