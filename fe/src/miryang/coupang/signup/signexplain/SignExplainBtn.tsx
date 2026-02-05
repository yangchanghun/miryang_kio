import { useState } from "react";

interface SignExplainBtnProps {
  setModal: (value: boolean) => void;
}

const SignExplainBtn: React.FC<SignExplainBtnProps> = ({ setModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setModal(true);
  };

  return (
    <div className="fixed right-5 top-1/2 z-[1000] -translate-y-1/2">
      <button
        onClick={handleClick}
        className={`relative h-[150px] w-[100px] transition-transform duration-300 ${
          isOpen ? "scale-95" : "hover:scale-105"
        }`}
      >
        {/* 책 커버 */}
        <div className="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-[#8b4513] to-[#d2691e] shadow-lg">
          {/* 책 스파인 */}
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-[#654321] to-[#8b4513]" />

          {/* 책 앞표지 */}
          <div className="absolute left-2 top-0 flex h-full w-[calc(100%-8px)] flex-col items-center justify-center text-white">
            <span className="mb-2 text-[40px]">📖</span>
            <span className="text-center text-lg font-bold leading-tight drop-shadow">
              사용
              <br />
              설명서
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SignExplainBtn;
