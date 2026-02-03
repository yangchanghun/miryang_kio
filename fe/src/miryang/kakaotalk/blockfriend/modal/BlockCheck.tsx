import { useState } from "react";

interface BlockCheckProps {
  setBlockFriend: (v: boolean) => void;
  setModal: (v: boolean) => void;
  setBlockMission: (v: boolean) => void;
  setBlockCheck: (v: boolean) => void;
}

export default function BlockCheck({
  setBlockFriend,
  setModal,
  setBlockMission,
  setBlockCheck,
}: BlockCheckProps) {
  const [warningModal, setWarningModal] = useState(false);

  return (
    <>
      {/* OPTION 1 */}
      <OptionButton
        top="top-[110px]"
        label="메시지 차단"
        onClick={() => setWarningModal(true)}
      />

      {/* OPTION 2 */}
      <OptionButton
        top="top-[200px]"
        label="메시지 차단, 프로필 비공개"
        onClick={() => setWarningModal(true)}
      />

      {/* CANCEL */}
      <div className="absolute bottom-2 flex w-[100%] items-center justify-center rounded-2xl bg-gray-200 py-6">
        <button
          onClick={() => setBlockCheck(false)}
          className="text-2xl font-medium text-blue-600"
        >
          취소
        </button>
      </div>

      {/* WARNING MODAL */}
      {warningModal && (
        <WarningTextModal
          setBlockFriend={setBlockFriend}
          setModal={setModal}
          setBlockMission={setBlockMission}
          setWarningModal={setWarningModal}
        />
      )}
    </>
  );
}

/* ======================
   SUB COMPONENTS
====================== */

function OptionButton({
  label,
  onClick,
  top,
}: {
  label: string;
  onClick: () => void;
  top: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`absolute ${top} flex w-[100%] cursor-pointer items-center justify-center rounded-2xl bg-gray-200 py-6`}
    >
      <p className="text-2xl font-medium text-blue-600">{label}</p>
    </div>
  );
}

/* ======================
   WARNING MODAL
====================== */

interface WarningProps {
  setBlockFriend: (v: boolean) => void;
  setModal: (v: boolean) => void;
  setBlockMission: (v: boolean) => void;
  setWarningModal: (v: boolean) => void;
}

function WarningTextModal({
  setBlockFriend,
  setModal,
  setBlockMission,
  setWarningModal,
}: WarningProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="w-[90%] max-w-md rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-2 text-2xl font-bold">친구 차단</h1>

          <p className="mb-6 text-sm leading-relaxed text-gray-700">
            차단하면 차단한 친구가 보내는 메시지를 받을 수 없으며, 친구목록에서
            삭제됩니다.
            <br />
            차단 여부는 상대방이 알 수 없습니다.
            <br />
            또한, 차단을 해제할 때 친구로 바로 추가할 수 없습니다.
          </p>

          <div className="flex w-full border-t">
            {/* CANCEL */}
            <button
              onClick={() => setWarningModal(false)}
              className="w-1/2 border-r py-3 text-lg text-blue-600"
            >
              취소
            </button>

            {/* CONFIRM */}
            <button
              onClick={() => {
                setBlockFriend(true);
                localStorage.setItem("blockfriend", "true");

                setBlockMission(true);
                localStorage.setItem("blockmission", "true");

                setModal(false);
              }}
              className="w-1/2 py-3 text-lg font-semibold text-blue-600"
            >
              차단
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
