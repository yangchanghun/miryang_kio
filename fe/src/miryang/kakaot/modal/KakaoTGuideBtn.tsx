interface KakaoTGuideBtnProps {
  setModal: (v: boolean) => void;
}

export default function KakaoTGuideBtn({ setModal }: KakaoTGuideBtnProps) {
  return (
    <button
      onClick={() => setModal(true)}
      aria-label="사용 가이드"
      className="
        fixed bottom-30 right-4 z-[1000]
        flex h-20 w-20 flex-col items-center justify-center
        rounded-full
        bg-gradient-to-br from-blue-500 to-green-500
        text-white
        shadow-lg
        transition-all
        hover:-translate-y-1 hover:shadow-2xl
        active:translate-y-0 active:shadow-md
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
        animate-pulse
      "
    >
      <span className="text-3xl font-bold leading-none">?</span>
      <span className="mt-1 text-sm font-medium opacity-90">사용가이드</span>
    </button>
  );
}
