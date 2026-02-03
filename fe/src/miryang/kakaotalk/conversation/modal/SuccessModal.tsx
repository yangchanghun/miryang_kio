import { useEffect, useState } from "react";

interface SuccessModalProps {
  setSuccessModal: (open: boolean) => void;
  onComplete?: () => void;
}

export default function SuccessModal({
  setSuccessModal,
  onComplete,
}: SuccessModalProps) {
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    const fireTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 1000);

    return () => clearTimeout(fireTimer);
  }, []);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setSuccessModal(false);
      onComplete?.();
    }, 1500);

    return () => clearTimeout(closeTimer);
  }, [setSuccessModal, onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40">
      <div className="relative flex h-[80vh] w-[90%] max-w-md items-center justify-center">
        {/* 🎆 Fireworks */}
        {showFireworks && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-3 w-3 animate-ping rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${30 + i * 20}%`,
                  backgroundColor: ["#ff6b6b", "#74b9ff", "#55efc4"][i],
                  animationDuration: "1.2s",
                }}
              />
            ))}

            {/* 🎉 Confetti */}
            <div className="absolute inset-0">
              {["🎉", "🎊", "✨", "🎈"].map((emoji, i) => (
                <span
                  key={i}
                  className="absolute animate-bounce text-2xl"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${10 + i * 10}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 🏆 Content */}
        <div className="relative z-10 rounded-2xl bg-white/90 px-8 py-10 text-center shadow-2xl backdrop-blur">
          <div className="mb-4 animate-bounce text-7xl">🏆</div>

          <h1 className="mb-2 text-4xl font-bold text-gray-800">성공!</h1>

          <p className="text-lg font-medium text-gray-600">축하합니다! 🎉</p>
        </div>
      </div>
    </div>
  );
}
