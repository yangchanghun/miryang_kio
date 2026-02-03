import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Friend {
  id: number;
  name: string;
}

export default function BlockedFriends() {
  const navigate = useNavigate();

  const [friends] = useState<Friend[]>([{ id: 1, name: "김홍삼" }]);

  const [blockFriend, setBlockFriend] = useState<boolean>(
    localStorage.getItem("blockfriend") === "true",
  );

  const [showSheet, setShowSheet] = useState(false);

  return (
    <div className="mx-auto max-w-[785px] min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b bg-white px-4 py-3">
        <button
          onClick={() => navigate("/miryang/kakaotalk/friendblock/2")}
          className="text-xl"
        >
          ＜
        </button>
        <h1 className="text-lg font-semibold">차단친구 관리</h1>
      </header>

      <audio src="/kakaotalk/voice/block/4.mp3" autoPlay />

      {/* LIST */}
      <section className="mt-2 bg-white">
        <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
          <span>친구 {blockFriend ? 1 : 0}</span>
          <span className="rotate-180">⌃</span>
        </div>

        {blockFriend && (
          <div className="border-t">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/kakaotalk/kakaoprofile.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <span className="text-base">{friend.name}</span>
                </div>

                <button
                  onClick={() => setShowSheet(true)}
                  className="rounded-full border px-4 py-1 text-sm text-gray-600"
                >
                  관리
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ACTION SHEET */}
      {showSheet && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowSheet(false)}
          />

          {/* SHEET */}
          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
            <div className="w-full max-w-[785px] rounded-t-3xl bg-white px-4 pb-6 pt-4 animate-slideUp">
              <ActionButton
                label="메시지 차단"
                onClick={() => alert("비활성화 되어있습니다")}
              />
              <ActionButton
                label="메시지 차단, 프로필 비공개"
                onClick={() => alert("비활성화 되어있습니다")}
              />
              <ActionButton
                label="차단 해제"
                danger
                onClick={() => {
                  setBlockFriend(false);
                  localStorage.removeItem("blockfriend");
                  localStorage.setItem("blockcanclemission", "true");
                  setShowSheet(false);
                }}
              />
              <ActionButton label="취소" onClick={() => setShowSheet(false)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ======================
   SUB COMPONENT
====================== */

function ActionButton({
  label,
  onClick,
  danger = false,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`mt-2 w-full rounded-2xl py-4 text-xl font-medium ${
        danger ? "bg-red-100 text-red-600" : "bg-gray-100 text-blue-600"
      } active:opacity-70`}
    >
      {label}
    </button>
  );
}
