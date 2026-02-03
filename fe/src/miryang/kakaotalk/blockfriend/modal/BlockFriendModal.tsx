import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BlockCheck from "./BlockCheck";

interface Props {
  setModal: (v: boolean) => void;
  setBlockFriend: (v: boolean) => void;
  setBlockMission: (v: boolean) => void;
}

export default function BlockFriendModal({
  setModal,
  setBlockFriend,
  setBlockMission,
}: Props) {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [blockCheck, setBlockCheck] = useState(false);

  const handleSuccessComplete = () => {
    alert("비활성화 되어있습니다");
  };

  const handleHideFriend = () => {
    alert("비활성화 되어있습니다");
    setShowSettingsDropdown(false);
  };

  const handleDeleteFriend = () => {
    alert("비활성화 되어있습니다");
    setShowSettingsDropdown(false);
  };

  const handleBlockFriend = () => {
    setShowSettingsDropdown(false);
    setBlockCheck(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* MODAL */}
      <div
        className="relative w-[90%] max-w-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#8B9DC3] to-[#6B7FA3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 text-white">
          <button onClick={() => setModal(false)} className="text-2xl">
            ✕
          </button>

          <div className="relative">
            <button
              onClick={() => setShowSettingsDropdown((prev) => !prev)}
              className="text-2xl"
            >
              ⚙️
            </button>

            {showSettingsDropdown && (
              <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border bg-white shadow-lg">
                <DropdownItem
                  icon="👁️‍🗨️"
                  label="친구 숨김"
                  onClick={handleHideFriend}
                />
                <DropdownItem
                  icon="🗑️"
                  label="친구 삭제"
                  onClick={handleDeleteFriend}
                />
                <DropdownItem
                  icon="🚫"
                  label="친구 차단"
                  onClick={handleBlockFriend}
                />
              </div>
            )}
          </div>
        </div>

        {/* BODY */}
        <div className="flex flex-col items-center justify-center px-6 py-10">
          <div className="mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white/30">
            <img
              src="/kakaotalk/kakaoprofile.jpg"
              alt="프로필"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-lg font-bold text-white">김홍삼</p>
        </div>

        {/* FOOTER */}
        <div className="flex justify-around gap-2 bg-white/10 px-4 py-3">
          <ActionButton
            icon="💬"
            label="1:1 채팅"
            onClick={() => {
              if (localStorage.getItem("conversation")) {
                handleSuccessComplete();
              } else {
                localStorage.setItem("conversation", "true");
                handleSuccessComplete();
              }
            }}
          />
          <ActionButton
            icon="📞"
            label="보이스톡"
            onClick={() => alert("비활성화")}
          />
          <ActionButton
            icon="📹"
            label="페이스톡"
            onClick={() => alert("비활성화")}
          />
        </div>

        {/* BLOCK CHECK */}
        {blockCheck && (
          <BlockCheck
            setBlockCheck={setBlockCheck}
            setBlockMission={setBlockMission}
            setBlockFriend={setBlockFriend}
            setModal={setModal}
          />
        )}
      </div>

      {/* DROPDOWN OVERLAY */}
      {showSettingsDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowSettingsDropdown(false)}
        />
      )}
    </div>
  );
}

/* =====================
   SUB COMPONENTS
===================== */

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-1 flex-col items-center rounded-lg px-2 py-2 text-white transition hover:bg-white/10"
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs">{label}</span>
    </button>
  );
}

function DropdownItem({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
