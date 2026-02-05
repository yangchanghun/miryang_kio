import { useState } from "react";

interface CartExplainBtnProps {
  setModal: (value: boolean) => void;
}

const CartExplainBtn: React.FC<CartExplainBtnProps> = ({ setModal }) => {
  const [isOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <button
        onClick={() => setModal(true)}
        className={`
          relative flex h-20 w-16 items-center justify-center
          rounded-lg bg-blue-600 shadow-lg
          active:scale-95 transition
          ${isOpen ? "ring-4 ring-blue-300" : ""}
        `}
      >
        {/* 책 등(spine) */}
        <div className="absolute left-0 h-full w-2 rounded-l-lg bg-blue-800" />

        {/* 책 앞표지 */}
        <div className="flex flex-col items-center justify-center text-white">
          <span className="text-3xl mb-1">📖</span>
          <span className="text-xs font-semibold leading-tight text-center">
            사용
            <br />
            설명서
          </span>
        </div>
      </button>
    </div>
  );
};

export default CartExplainBtn;
