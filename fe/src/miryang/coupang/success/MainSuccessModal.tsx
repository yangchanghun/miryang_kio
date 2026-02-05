import { useEffect } from "react";

interface MainSuccessModalProps {
  setSuccessModal: (value: boolean) => void;
  onComplete?: () => void;
}

const MainSuccessModal: React.FC<MainSuccessModalProps> = ({
  setSuccessModal,
  onComplete,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessModal(false);
      onComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [setSuccessModal, onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-[420px] rounded-2xl bg-white px-8 py-10 text-center shadow-2xl">
        {/* 아이콘 */}
        <div className="mb-6 text-[90px] animate-bounce">🏆</div>

        {/* 텍스트 */}
        <h1 className="mb-3 text-5xl font-extrabold text-gray-800">성공!</h1>
        <p className="text-xl text-gray-600">축하합니다 🎉</p>

        {/* 보조 메시지 */}
        <p className="mt-4 text-lg text-gray-500">다음 단계로 이동합니다</p>
      </div>
    </div>
  );
};

export default MainSuccessModal;
