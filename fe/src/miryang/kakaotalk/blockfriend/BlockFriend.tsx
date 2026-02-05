import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockFriendModal from "./modal/BlockFriendModal";

const BlockFriend = () => {
  const navigate = useNavigate();

  const [conversation, setConversation] = useState<boolean>(
    localStorage.getItem("conversation") === "true",
  );
  const [blockMission, setBlockMission] = useState<boolean>(
    localStorage.getItem("blockmission") === "true",
  );
  const [blockCancleMission, setBlockCancleMission] = useState<boolean>(
    localStorage.getItem("blockcanclemission") === "true",
  );

  const missionCount = [conversation, blockMission, blockCancleMission].filter(
    Boolean,
  ).length;

  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [success, setSuccess] = useState(false);

  const [blockFriend, setBlockFriend] = useState<boolean>(
    localStorage.getItem("blockfriend") === "true",
  );

  useEffect(() => {
    setSuccess(missionCount === 2);
  }, [missionCount]);

  const handleBlock = () => {
    alert("비활성화 되어있습니다");
  };

  return (
    <div className="mx-auto max-w-[785px] h-screen overflow-y-auto bg-white font-sans relative pb-[90px]">
      {/* 🎉 성공 모달 */}
      {success && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30">
          <div className="w-[300px] h-[500px] bg-gray-100 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6">
            <p className="text-3xl font-bold">성공!!</p>
            <button
              onClick={() => {
                setConversation(false);
                setBlockMission(false);
                setBlockCancleMission(false);
                setSuccess(false);
              }}
              className="text-xl bg-white px-6 py-2 rounded-lg shadow"
            >
              다시하기
            </button>
            <button
              onClick={() => navigate("/miryang/kakaotalk/main")}
              className="text-xl bg-yellow-400 px-6 py-2 rounded-lg"
            >
              처음으로
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 border-b">
        <h1 className="text-2xl font-bold">친구</h1>
        <div className="flex gap-4 items-center relative">
          <button onClick={handleBlock}>🔍</button>
          <button className="relative">👥</button>
          <button onClick={handleBlock}>🎵</button>
          <button onClick={() => setMenu(!menu)}>⚙️</button>

          {menu && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg overflow-hidden z-50">
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                편집
              </button>
              <button
                onClick={() => navigate("/miryang/kakaotalk/friendblock/2")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                친구 관리
              </button>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                전체 설정
              </button>
            </div>
          )}
        </div>
      </header>

      {/* 내 프로필 */}
      <div
        onClick={handleBlock}
        className="flex items-center px-5 py-4 border-b"
      >
        <img
          src="/kakaotalk/kakaoprofile.jpg"
          className="w-14 h-14 rounded-full mr-4"
        />
        <span className="text-lg font-medium flex-1">홍xx</span>
        <button className="text-sm px-4 py-1 border rounded-full bg-gray-100">
          멀티프로필 +
        </button>
      </div>

      {/* 🎯 미션 */}
      <section className="m-5 p-5 rounded-2xl bg-gradient-to-br from-yellow-300 to-red-400 text-white shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">🎯 친구 미션</h3>
          <span className="text-sm font-semibold">{missionCount}/2 완료</span>
        </div>

        <div className="w-full h-2 bg-white/40 rounded-full mb-4">
          <div
            className="h-2 bg-green-400 rounded-full transition-all"
            style={{ width: `${(missionCount / 2) * 100}%` }}
          />
        </div>

        <div className="space-y-3">
          <MissionItem
            done={blockMission}
            title="미션1: 김홍삼 차단하기"
            desc={
              blockMission
                ? "✨ 완료! 차단되었습니다"
                : "친구 김홍삼을 클릭한 후 차단해보세요"
            }
          />
          <MissionItem
            done={blockCancleMission}
            title="미션2: 김홍삼 차단 해제"
            desc={
              blockCancleMission
                ? "✨ 완료! 차단 해제됨"
                : "오른쪽상단 톱니바퀴 친구관리에 들어가 친구 김홍삼의차단을 해제해보세요"
            }
          />
        </div>
      </section>

      {/* 친구 리스트 */}
      <section className="px-5">
        <div className="flex justify-between items-center py-2">
          <span className="font-medium">친구 {blockFriend ? 0 : 1}</span>
          <span>⌃</span>
        </div>

        {!blockFriend && (
          <div
            onClick={() => setModal(true)}
            className="flex items-center py-3 border-b"
          >
            <img
              src="/kakaotalk/kakaoprofile.jpg"
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="flex-1 font-medium">김홍삼</span>
            <button>💬</button>
          </div>
        )}
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full max-w-[785px] bg-white border-t flex justify-around py-2">
        {["👥 친구", "💬 채팅", "🛍️ 쇼핑", "⋯ 더보기"].map((item) => (
          <button key={item} onClick={handleBlock} className="text-xs">
            {item}
          </button>
        ))}
        <button
          onClick={() => navigate("/miryang/kakaotalk/main")}
          className="bg-yellow-400 px-4 py-1 rounded font-medium"
        >
          처음으로
        </button>
      </nav>

      {modal && (
        <BlockFriendModal
          setModal={setModal}
          setBlockMission={setBlockMission}
          setBlockFriend={setBlockFriend}
        />
      )}
    </div>
  );
};

export default BlockFriend;

/* ---------- Sub Component ---------- */

interface MissionItemProps {
  done: boolean;
  title: string;
  desc: string;
}

const MissionItem = ({ done, title, desc }: MissionItemProps) => {
  return (
    <div
      className={`flex items-center p-4 rounded-xl shadow ${
        done ? "bg-green-100 border-2 border-green-500" : "bg-white text-black"
      }`}
    >
      <span className="text-2xl mr-3">{done ? "✅" : "📱"}</span>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm opacity-80">{desc}</p>
      </div>
      <span>{done ? "🏆" : "⏳"}</span>
    </div>
  );
};
