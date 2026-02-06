import React from "react";

interface GovernmentGuideModalProps {
  onModal: boolean;
  setOnModal: (value: boolean) => void;
  guideSteps?: string[];
}

export const GovernmentGuideModal: React.FC<GovernmentGuideModalProps> = ({
  onModal,
  setOnModal,
  guideSteps = ["빈 가이드"],
}) => {
  if (!onModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-[90%] max-w-[520px] max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative text-center px-7 pt-7 pb-5 bg-gradient-to-br from-blue-50 to-blue-100 border-b-4 border-blue-500">
          <div className="text-5xl mb-2 drop-shadow">📋</div>
          <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
            정부24 이용 가이드
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            정부 서비스를 쉽고 빠르게 이용하는 방법
          </p>
        </div>

        {/* Content */}
        <div className="px-7 py-6 max-h-[400px] overflow-y-auto space-y-4">
          {guideSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition"
            >
              {/* Step Number */}
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                {index + 1}
              </div>

              {/* Step Text */}
              <p className="text-[30px] leading-relaxed text-gray-700 break-keep">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-7 pb-7 pt-5 border-t bg-gray-50">
          <button
            onClick={() => setOnModal(false)}
            className="w-full rounded-lg bg-blue-600 py-4 text-white text-lg font-semibold shadow-md transition
                       hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            확인했습니다 ✓
          </button>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
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
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
};
