import {
  MessageCircle,
  UserPlus,
  Mic,
  Camera,
  AlarmClock,
  House,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GalaxyMain() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-6 font-sans">
      <div className="max-w-[448px] mx-auto animate-fadeInUp">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            스마트폰
          </h1>
          <p className="text-slate-300 text-base opacity-80">
            기본 기능 가이드
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <GalaxyButton
            icon={<MessageCircle size={24} />}
            label="문자보내기"
            gradient="from-blue-500 to-blue-700"
            onClick={() => navigate("/miryang/galaxyguide/message/")}
            delay="delay-100"
          />

          <GalaxyButton
            icon={<UserPlus size={24} />}
            label="연락처 저장하기"
            gradient="from-emerald-500 to-emerald-700"
            onClick={() => navigate("/miryang/galaxyguide/contact/")}
            delay="delay-200"
          />

          <GalaxyButton
            icon={<Mic size={24} />}
            label="음성 녹음하기"
            gradient="from-red-500 to-red-700"
            onClick={() => navigate("/miryang/galaxyguide/record/")}
            delay="delay-300"
          />

          <GalaxyButton
            icon={<Camera size={24} />}
            label="사진찍기, 동영상 촬영하기"
            gradient="from-violet-500 to-violet-700"
            onClick={() => navigate("/miryang/galaxyguide/camera/")}
            delay="delay-400"
          />

          <GalaxyButton
            icon={<AlarmClock size={24} />}
            label="모닝콜, 알람맞추기"
            gradient="from-orange-500 to-orange-700"
            onClick={() => navigate("/miryang/galaxyguide/alarm/")}
            delay="delay-500"
          />

          <GalaxyButton
            icon={<House size={24} />}
            label="처음으로"
            gradient="from-neutral-200 to-black"
            textColor="text-black"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================
 * Button Component
 * ========================= */
interface GalaxyButtonProps {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  onClick: () => void;
  delay?: string;
  textColor?: string;
}

function GalaxyButton({
  icon,
  label,
  gradient,
  onClick,
  delay = "",
  textColor = "text-white",
}: GalaxyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-4 rounded-2xl font-semibold text-lg
        flex items-center justify-center gap-3
        bg-gradient-to-br ${gradient} ${textColor}
        shadow-lg
        transition-all duration-200
        hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl
        active:translate-y-0 active:scale-95
        animate-fadeInUp ${delay}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
