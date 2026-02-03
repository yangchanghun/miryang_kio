import type { ReactNode } from "react";

interface KakaoSignUpModalProps {
  text: ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const KakaoSignUpModal = ({ text, setModal }: KakaoSignUpModalProps) => {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 font-['Gmarket_Sans','Noto_Sans_KR',sans-serif]"
      onClick={() => setModal(false)}
    >
      <div
        className="w-[80%] max-w-[550px] rounded-2xl bg-[#FFFBE6] p-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 메시지 */}
        <div className="mb-4 text-[28px] leading-relaxed text-gray-700">
          {text}
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={() => setModal(false)}
          className="mt-4 rounded-xl bg-[#FEE500] px-8 py-3 text-xl font-semibold text-[#3c1e1e] shadow
                     hover:bg-[#fdd835] active:bg-[#f9a825]"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default KakaoSignUpModal;
