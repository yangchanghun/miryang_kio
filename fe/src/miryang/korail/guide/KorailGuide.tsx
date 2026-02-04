interface KorailGuideProps {
  onModal: boolean;
  setOnModal: (v: boolean) => void;
  title?: string;
  steps?: string[];
}

export default function KorailGuide({
  onModal,
  setOnModal,
  title = "사용 가이드",
  steps = ["빈 단계입니다"],
}: KorailGuideProps) {
  if (!onModal) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={() => setOnModal(false)}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-md max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-slideUp"
      >
        {/* Header */}
        <div className="relative text-center px-7 pt-7 pb-5 border-b-4 border-indigo-500 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5">
          <div className="text-5xl mb-3 drop-shadow">📋</div>
          <h3 className="text-4xl font-bold text-gray-800 tracking-tight">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="px-7 py-6 overflow-y-auto max-h-[400px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 mb-5 p-4 rounded-xl border border-slate-200 bg-slate-50
                         transition-all hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-[1px]"
            >
              {/* Number */}
              <div
                className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center
                              text-xl font-bold shadow-md shrink-0"
              >
                {index + 1}
              </div>

              {/* Text */}
              <p className="text-[25px] leading-relaxed text-gray-700 break-keep">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-7 pt-5 pb-7 border-t bg-slate-50">
          <button
            onClick={() => setOnModal(false)}
            className="w-full rounded-xl bg-indigo-500 text-white text-[40px] font-semibold py-4
                       shadow-lg transition-all
                       hover:bg-indigo-600 hover:-translate-y-1 hover:shadow-2xl"
          >
            확인했습니다 ✓
          </button>
        </div>
      </div>
    </div>
  );
}
