import { useNavigate } from "react-router-dom";

export default function MiryangAppMain() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-300 to-purple-200 flex justify-center items-center px-6">
      <div className="w-full max-w-[600px]">
        {/* Header */}
        <div className="text-center mb-10 pt-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-pink-500 to-rose-700 shadow-xl flex items-center justify-center mb-4">
              <img
                src="/icon/milyang_icon.png"
                alt="밀양카드"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 drop-shadow">
              밀양 카드
            </h1>
            <p className="text-lg font-medium text-gray-600">가이드 센터</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5">
          <GuideButton
            icon="👤"
            label="회원가입 & 카드신청 가이드"
            onClick={() => navigate("/miryang/appguide/signupguide")}
            className="from-blue-500 to-blue-700"
          />

          <GuideButton
            icon="💳"
            label="카드 등록 가이드"
            onClick={() => navigate("/miryang/appguide/cardregister")}
            className="from-emerald-500 to-emerald-700"
          />

          <GuideButton
            icon="🔗"
            label="계좌 연결 가이드"
            onClick={() => navigate("/miryang/appguide/accountregister")}
            className="from-violet-500 to-violet-700"
          />

          <GuideButton
            icon="💰"
            label="카드 충전 가이드"
            onClick={() => navigate("/miryang/appguide/recharge")}
            className="from-amber-400 to-amber-600"
          />

          <button
            onClick={() => navigate("/")}
            className="mt-4 py-3 rounded-xl bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition"
          >
            처음으로
          </button>
        </div>
      </div>
    </div>
  );
}
/* =========================
 * 공통 버튼 컴포넌트
 * ========================= */
interface GuideButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  className: string;
}

function GuideButton({ icon, label, onClick, className }: GuideButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-5 rounded-2xl bg-gradient-to-br ${className}
      text-white text-xl font-semibold flex items-center justify-between
      shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all`}
    >
      <span className="text-2xl bg-white/20 rounded-xl px-3 py-2">{icon}</span>
      <span className="flex-1 text-left ml-4">{label}</span>
      <span className="text-2xl opacity-80 group-hover:translate-x-1 transition">
        →
      </span>
    </button>
  );
}
