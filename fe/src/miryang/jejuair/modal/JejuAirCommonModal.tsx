interface JejuAirCommonModalProps {
  onModal: boolean;
  setOnModal: (value: boolean) => void;
  title?: string;
  steps?: string[];
}

export default function JejuAirCommonModal({
  onModal,
  setOnModal,
  title = "사용 가이드",
  steps = ["빈 단계입니다"],
}: JejuAirCommonModalProps) {
  if (!onModal) return null;

  return (
    <div
      onClick={() => setOnModal(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-[480px] max-h-[80vh] bg-white rounded-[20px] shadow-2xl overflow-hidden animate-slideUp"
      >
        {/* Header */}
        <div className="relative text-center px-7 pt-7 pb-5 border-b-[3px] border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5">
          <div className="text-5xl mb-3 drop-shadow">📋</div>
          <h3 className="text-[40px] font-bold text-gray-800 tracking-tight">
            {title}
          </h3>
        </div>

        {/* Steps */}
        <div className="px-7 py-6 overflow-y-auto max-h-[400px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 mb-5 p-4 rounded-xl border border-slate-200 bg-slate-50
                         transition-all duration-200
                         hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-[1px]"
            >
              <div
                className="w-8 h-8 rounded-full bg-indigo-500 text-white
                              flex items-center justify-center text-[25px] font-bold
                              shadow-lg shrink-0"
              >
                {index + 1}
              </div>

              <p className="text-[25px] leading-relaxed text-gray-700 break-keep">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="px-7 pt-5 pb-7 border-t bg-slate-50">
          <button
            onClick={() => setOnModal(false)}
            className="w-full py-4 rounded-xl bg-indigo-500 text-white
                       text-[40px] font-semibold
                       shadow-xl transition-all duration-200
                       hover:bg-indigo-600 hover:-translate-y-[2px]
                       active:translate-y-0"
          >
            확인했습니다 ✓
          </button>
        </div>
      </div>
    </div>
  );
}
