import { useState } from "react";

interface Props {
  setModal: (v: boolean) => void;
}

export default function JangExplainBtn({ setModal }: Props) {
  const [isOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <button
        onClick={() => setModal(true)}
        className={`
          relative w-24 h-28 rounded-lg 
          bg-gradient-to-br from-blue-500 to-blue-700
          shadow-xl active:scale-95 transition
        `}
      >
        {/* 책 등 */}
        <div className="absolute left-0 top-0 h-full w-2 bg-blue-900 rounded-l-lg" />

        {/* 책 앞면 */}
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <span className="text-4xl mb-1">📖</span>
          <span className="text-sm font-bold leading-tight text-center">
            사용
            <br />
            설명서
          </span>
        </div>

        {/* 살짝 열림 효과 (장식용) */}
        {isOpen && <div className="absolute inset-0 bg-white/10 rounded-lg" />}
      </button>
    </div>
  );
}
