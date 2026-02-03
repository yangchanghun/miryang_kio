interface KakaoFriendModalProps {
  setFirstModal: (open: boolean) => void;
}

export default function KakaoFriendModal({
  setFirstModal,
}: KakaoFriendModalProps) {
  const closeModal = () => {
    setFirstModal(false);
    localStorage.setItem("firstmodal", "false");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl"
      >
        <div className="mb-6 space-y-3 text-[22px] leading-relaxed text-gray-800">
          <p>본 앱은 친구추가하기 교육용 앱으로</p>

          <p>
            친구추가하기 버튼 외의 기능은 <br />
            <span className="font-semibold text-red-500">비활성화</span> 되어
            있습니다.
          </p>

          <p>하단의 미션을 해결해보세요!</p>
        </div>

        <button
          onClick={closeModal}
          className="mt-2 w-full rounded-xl bg-yellow-400 py-3 text-xl font-semibold text-[#3c1e1e] shadow-md transition active:scale-95"
        >
          확인
        </button>
      </div>
    </div>
  );
}
