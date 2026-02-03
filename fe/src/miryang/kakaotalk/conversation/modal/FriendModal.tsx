import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import ConversationBlockModal from "./ConversationBlockModal";

interface FriendModalProps {
  setModal: (open: boolean) => void;
}

export default function FriendModal({ setModal }: FriendModalProps) {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(false);
  const [blockModal, setBlockModal] = useState(false);

  const handleSuccessComplete = () => {
    navigate("/miryang/kakaotalk/conversation/3");
  };

  const handleChatClick = () => {
    if (localStorage.getItem("conversation")) {
      handleSuccessComplete();
    } else {
      localStorage.setItem("conversation", "true");
      setSuccessModal(true);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60">
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] max-w-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#8B9DC3] to-[#6B7FA3] shadow-2xl"
        >
          {/* Header */}
          <div className="flex justify-between px-6 pt-6">
            <button
              onClick={() => setModal(false)}
              className="text-2xl text-white opacity-90 transition hover:opacity-70"
            >
              ✕
            </button>
            <button
              onClick={() => setModal(false)}
              className="text-2xl text-white opacity-90 transition hover:opacity-70"
            >
              ⚙️
            </button>
          </div>

          {/* Body */}
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6">
            <div className="mb-5 h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white/30">
              <img
                src="/kakaotalk/kakaoprofile.jpg"
                alt="프로필"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-lg font-bold text-white">김홍삼</p>
          </div>

          {/* Footer */}
          <div className="flex justify-around gap-2 bg-white/10 px-4 py-4">
            <button
              onClick={handleChatClick}
              className="flex w-[80px] flex-col items-center rounded-lg p-2 text-white transition hover:bg-white/10"
            >
              <span className="text-2xl">💬</span>
              <span className="mt-1 text-xs">1:1 채팅</span>
            </button>

            <button
              onClick={() => setBlockModal(true)}
              className="flex w-[80px] flex-col items-center rounded-lg p-2 text-white transition hover:bg-white/10"
            >
              <span className="text-2xl">📞</span>
              <span className="mt-1 text-xs">보이스톡</span>
            </button>

            <button
              onClick={() => setBlockModal(true)}
              className="flex w-[80px] flex-col items-center rounded-lg p-2 text-white transition hover:bg-white/10"
            >
              <span className="text-2xl">📹</span>
              <span className="mt-1 text-xs">페이스톡</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <SuccessModal
          setSuccessModal={setSuccessModal}
          onComplete={handleSuccessComplete}
        />
      )}

      {/* Block Modal */}
      {blockModal && <ConversationBlockModal setBlockModal={setBlockModal} />}
    </>
  );
}
