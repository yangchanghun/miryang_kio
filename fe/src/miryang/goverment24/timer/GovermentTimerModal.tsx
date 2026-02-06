import { useEffect, useRef, useState } from "react";

interface GovernmentTimerModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  title?: string;
  initialTime?: number;
  onTimeUp?: () => void;
}

const GovernmentTimerModal: React.FC<GovernmentTimerModalProps> = ({
  modal,
  setModal,
  title = "다운로드",
  initialTime = 5,
  onTimeUp,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [progress, setProgress] = useState<number>(100);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!modal) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(initialTime);
    setProgress(100);

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        setProgress(Math.max(0, (next / initialTime) * 100));

        if (next <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setModal(false);
          onTimeUp?.();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [modal, initialTime, onTimeUp, setModal]);

  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl animate-[modalIn_0.3s_ease-out]">
        {/* Progress bar */}
        <div className="h-1 w-full bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b">
          <h2 className="flex-1 text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <span
            className={`min-w-[42px] rounded-md px-2 py-1 text-center text-sm font-medium transition
              ${
                timeLeft <= 5
                  ? "bg-red-100 text-red-600 animate-pulse"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            {timeLeft}초
          </span>
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GovernmentTimerModal;
