import type { Dispatch, SetStateAction } from "react";

interface KakaoPayGuideModalProps {
  onModal: boolean;
  setOnModal: Dispatch<SetStateAction<boolean>>;
  guideSteps?: string[];
}

export const KakaoPayGuideModal = ({
  onModal,
  setOnModal,
  guideSteps = ["빈가이드"],
}: KakaoPayGuideModalProps) => {
  if (!onModal) return null;

  return (
    <div
      onClick={() => setOnModal(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl animate-slideUp"
      >
        {/* Header */}
        <div className="relative border-b-[3px] border-blue-500 bg-gradient-to-br from-blue-500/10 to-blue-500/5 px-7 pb-5 pt-7 text-center">
          <div className="mb-3 text-5xl drop-shadow">📋</div>
          <h3 className="text-[28px] font-bold tracking-tight text-gray-800">
            카카오페이 이용가이드
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            카카오페이를 쉽고 빠르게 이용하는 방법
          </p>
        </div>

        {/* Content */}
        <div className="max-h-[400px] overflow-y-auto px-7 py-6">
          {guideSteps.map((step, index) => (
            <div
              key={index}
              className="mb-5 flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:shadow-sm"
            >
              {/* Step Number */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white shadow-md">
                {index + 1}
              </div>

              {/* Step Text */}
              <div className="text-[30px] leading-relaxed text-gray-700 break-keep">
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-7 pb-7 pt-5">
          <button
            onClick={() => setOnModal(false)}
            className="w-full rounded-lg bg-blue-500 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
          >
            확인했습니다 ✓
          </button>
        </div>
      </div>
    </div>
  );
};
