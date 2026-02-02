import React from "react";

interface CommonModalProps {
  onModal: boolean;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  steps?: string[];
}

export default function CommonModal({
  onModal,
  setOnModal,
  title = "사용 가이드",
  steps = ["빈 단계입니다"],
}: CommonModalProps) {
  if (!onModal) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setOnModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-[480px] max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-slideUp font-sans"
      >
        {/* 헤더 */}
        <div className="relative border-b-4 border-indigo-500 bg-indigo-500/10 px-7 pt-7 pb-5 text-center">
          <div className="mb-3 text-5xl drop-shadow">📋</div>
          <h3 className="text-[40px] font-bold tracking-tight text-gray-800">
            {title}
          </h3>
        </div>

        {/* 내용 */}
        <div className="max-h-[400px] overflow-y-auto px-7 py-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="mb-5 flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-[1px] hover:border-slate-300 hover:bg-slate-100"
            >
              {/* 번호 */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-[25px] font-bold text-white shadow-md">
                {index + 1}
              </div>

              {/* 설명 */}
              <div className="text-[25px] leading-relaxed text-gray-700 break-keep">
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* 버튼 */}
        <div className="border-t bg-slate-50 px-7 pb-7 pt-5">
          <button
            onClick={() => setOnModal(false)}
            className="w-full rounded-xl bg-indigo-500 py-4 text-[40px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-xl active:translate-y-0"
          >
            확인했습니다 ✓
          </button>
        </div>
      </div>
    </div>
  );
}
