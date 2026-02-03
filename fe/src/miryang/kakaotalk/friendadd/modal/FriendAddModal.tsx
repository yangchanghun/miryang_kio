import { useNavigate } from "react-router-dom";

interface FriendAddModalProps {
  setModal: (open: boolean) => void;
}

export default function FriendAddModal({ setModal }: FriendAddModalProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    setModal(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const go = (path: string) => {
    setModal(false);
    navigate(path);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] max-w-[90vw] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="relative border-b px-5 py-4 text-center">
          <button
            onClick={handleClose}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
          <h2 className="text-lg font-semibold text-gray-800">친구 추가</h2>
        </div>

        {/* Content */}
        <div className="px-5 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* QR */}
            <OptionItem
              label="QR코드"
              onClick={() => go("/miryang/kakaotalk/friendadd/qr")}
            >
              <div className="grid grid-cols-2 gap-1 w-6 h-6">
                <div className="rounded-sm bg-gray-800" />
                <div className="rounded-sm bg-gray-300" />
                <div className="rounded-sm bg-gray-300" />
                <div className="rounded-sm bg-gray-800" />
              </div>
            </OptionItem>

            {/* Phone */}
            <OptionItem
              label="연락처"
              onClick={() => go("/miryang/kakaotalk/friendadd/phone")}
            >
              <div className="flex flex-col items-center">
                <div className="mb-1 h-3 w-3 rounded-full bg-gray-600" />
                <div className="h-3 w-5 rounded-t-md bg-gray-600" />
              </div>
            </OptionItem>

            {/* ID */}
            <OptionItem
              label="카카오톡 ID"
              onClick={() => go("/miryang/kakaotalk/friendadd/id")}
            >
              <span className="text-lg font-bold text-gray-700">ID</span>
            </OptionItem>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================
  Sub Component
===================== */
function OptionItem({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center transition hover:-translate-y-1"
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-gray-200 bg-gray-50">
        {children}
      </div>
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </div>
  );
}
