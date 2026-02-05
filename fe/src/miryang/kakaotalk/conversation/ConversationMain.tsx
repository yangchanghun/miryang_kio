import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendModal from "./modal/FriendModal";
import ConversationBlockModal from "./modal/ConversationBlockModal";

/* =====================
 utils
===================== */
const getBool = (key: string) => localStorage.getItem(key) === "true";

/* =====================
 component
===================== */
export default function ConversationMain() {
  const navigate = useNavigate();

  const [conversation, setConversation] = useState<boolean>(() =>
    getBool("conversation"),
  );
  const [messageMission, setMessageMission] = useState<boolean>(() =>
    getBool("messagemission"),
  );
  const [imageMission, setImageMission] = useState<boolean>(() =>
    getBool("imagemission"),
  );

  const phoneName = localStorage.getItem("kakao_phone_name") || "";

  const missionCount = [conversation, messageMission, imageMission].filter(
    Boolean,
  ).length;

  const [modal, setModal] = useState(false);
  const [blockModal, setBlockModal] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(missionCount === 3);
  }, [missionCount]);

  return (
    <div className="mx-auto max-w-[785px] h-screen bg-white overflow-y-auto relative pb-[90px]">
      {/* 음성 안내 */}
      {!messageMission && (
        <audio src="/kakaotalk/voice/conversation/1.mp3" autoPlay />
      )}

      {/* 성공 모달 */}
      {success && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
          <div className="w-[300px] h-[500px] rounded-2xl bg-gray-100 shadow-2xl flex flex-col items-center justify-center gap-6 text-2xl">
            <p className="font-bold">성공!!</p>

            <button
              onClick={() => {
                setConversation(false);
                setMessageMission(false);
                setImageMission(false);
                setSuccess(false);
                localStorage.clear();
              }}
              className="w-full rounded-xl bg-yellow-400 py-3"
            >
              다시하기
            </button>

            <button
              onClick={() => navigate("/miryang/kakaotalk/main")}
              className="w-full rounded-xl border bg-white py-3"
            >
              처음으로
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        onClick={() => setBlockModal(true)}
        className="flex items-center justify-between px-5 py-4 border-b"
      >
        <h1 className="text-2xl font-bold">친구</h1>

        <div className="flex gap-4 text-xl">
          <button>🔍</button>

          <button className="relative rounded-full border-4 border-red-500 animate-pulse">
            👥
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 text-sm animate-bounce">
              ➤
            </span>
          </button>

          <button>🎵</button>
          <button>⚙️</button>
        </div>
      </header>

      {/* Profile */}
      <section
        onClick={() => setBlockModal(true)}
        className="flex items-center gap-4 px-5 py-4 border-b"
      >
        <img
          src="/kakaotalk/kakaoprofile.jpg"
          className="w-14 h-14 rounded-full"
        />
        <span className="text-lg font-medium">홍xx</span>
        <button className="ml-auto rounded-full bg-gray-100 px-4 py-1 text-sm">
          멀티프로필 +
        </button>
      </section>

      {/* Ad */}
      <section
        onClick={() => setBlockModal(true)}
        className="m-5 rounded-xl border bg-gray-50 p-4"
      >
        <p className="text-xs text-gray-500 mb-1">
          📺 카카오페이지 웹에서 확인하기 ⟩
        </p>
        <h3 className="font-bold">"난 가문 최악의 수치였다"</h3>
        <p className="text-sm text-gray-600">그런 그가 괴물급 강자가 된 사연</p>
      </section>

      {/* Mission */}
      <section className="m-5 rounded-2xl bg-gradient-to-br from-yellow-300 to-red-400 p-5 text-white shadow-xl">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-lg">🎯 친구와 대화하기 미션</h3>
          <span className="font-semibold">{missionCount}/3 완료</span>
        </div>

        <div className="space-y-4">
          <MissionItem
            done={conversation}
            title="미션1: 김홍삼과의 대화창 들어가기"
            success="김홍삼과의 대화가 시작되었습니다"
            idle="프로필 또는 이름을 눌러 1:1 채팅을 선택해보세요"
            icon="📱"
          />

          <MissionItem
            done={messageMission}
            title="미션2: 김홍삼에게 메시지 보내기"
            success={`${phoneName}님에게 메시지를 보냈습니다`}
            idle="메시지를 입력해보세요"
            icon="💬"
          />

          <MissionItem
            done={imageMission}
            title="미션3: 김홍삼에게 이미지 보내기"
            success="이미지를 성공적으로 보냈습니다"
            idle="이미지를 선택해보세요"
            icon="🖼️"
          />
        </div>
      </section>

      {/* Friend List */}
      <section className="px-5">
        <h3 className="font-medium mb-2">친구 1</h3>

        <div
          onClick={() => setModal(true)}
          className="flex items-center gap-4 py-3 border-b cursor-pointer"
        >
          <img
            src="/kakaotalk/kakaoprofile.jpg"
            className="w-12 h-12 rounded-full"
          />
          <span className="font-medium">김홍삼</span>
          <button className="ml-auto text-xl">💬</button>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav
        onClick={() => setBlockModal(true)}
        className="fixed bottom-0 w-full max-w-[785px] bg-white border-t flex justify-around py-2"
      >
        <NavItem icon="👥" label="친구" active />
        <NavItem icon="💬" label="채팅" />

        <button
          onClick={() => navigate("/miryang/kakaotalk/main")}
          className="rounded-xl bg-yellow-400 px-4 py-2 text-lg font-medium text-[#3c1e1e]"
        >
          처음으로
        </button>

        <NavItem icon="🛍️" label="쇼핑" />
        <NavItem icon="⋯" label="더보기" />
      </nav>

      {/* Modals */}
      {modal && <FriendModal setModal={setModal} />}
      {blockModal && <ConversationBlockModal setBlockModal={setBlockModal} />}
    </div>
  );
}

/* =====================
 sub components
===================== */
function MissionItem({
  done,
  title,
  success,
  idle,
  icon,
}: {
  done: boolean;
  title: string;
  success: string;
  idle: string;
  icon: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl p-4 shadow ${
        done ? "bg-green-50 border-2 border-green-400" : "bg-white"
      }`}
    >
      <div className="text-2xl">{done ? "✅" : icon}</div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{done ? success : idle}</p>
      </div>
      <div className="text-xl">{done ? "🏆" : "⏳"}</div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center text-xs ${
        active ? "text-black" : "text-gray-400"
      }`}
    >
      <div className="text-xl">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
