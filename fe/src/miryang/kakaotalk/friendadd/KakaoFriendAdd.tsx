import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendAddModal from "./modal/FriendAddModal";
import KakaoFriendModal from "./modal/KakaoFriendModal";
import FriendBlockModal from "./modal/FriendBlockModal";

/* =====================
 Utils
===================== */
const getBool = (key: string): boolean => localStorage.getItem(key) === "true";

/* =====================
 Page
===================== */
export default function KakaoFriendAdd() {
  const navigate = useNavigate();

  const [qrMission, setQrMission] = useState<boolean>(() =>
    getBool("qrmission"),
  );
  const [phoneMission, setPhoneMission] = useState<boolean>(() =>
    getBool("phonemission"),
  );
  const [idMission, setIdMission] = useState<boolean>(() =>
    getBool("idmission"),
  );

  const phoneName = localStorage.getItem("kakao_phone_name") || "";

  const missionCount = [qrMission, phoneMission, idMission].filter(
    Boolean,
  ).length;

  const [modal, setModal] = useState(false);
  const [firstModal, setFirstModal] = useState(true);
  const [blockModal, setBlockModal] = useState(false);
  const [success, setSuccess] = useState(false);

  /* =====================
   Effects
  ===================== */
  useEffect(() => {
    if (missionCount >= 1) setFirstModal(false);
  }, [missionCount]);

  useEffect(() => {
    setSuccess(missionCount === 3);
  }, [missionCount]);

  /* =====================
   Handlers
  ===================== */
  const handleBlock = () => setBlockModal(true);

  /* =====================
   Render
  ===================== */
  return (
    <div className="mx-auto max-w-[785px] h-screen bg-white overflow-y-auto relative pb-[90px]">
      {/* 음성 안내 */}
      {!qrMission && <audio src="/kakaotalk/voice/friend_add/1.mp3" autoPlay />}

      {/* 성공 모달 */}
      {success && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
          <div className="w-[300px] h-[500px] rounded-2xl bg-gray-100 shadow-2xl flex flex-col items-center justify-center gap-6 text-2xl">
            <p className="font-bold">성공!!</p>
            <button
              className="w-full rounded-xl bg-yellow-400 py-3"
              onClick={() => {
                setQrMission(false);
                setPhoneMission(false);
                setIdMission(false);
                setSuccess(false);
                localStorage.clear();
              }}
            >
              다시하기
            </button>
            <button
              className="w-full rounded-xl bg-white py-3 border"
              onClick={() => navigate("/miryang/kakaotalk/main")}
            >
              처음으로
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 border-b">
        <h1 className="text-2xl font-bold">친구</h1>

        <div className="flex gap-4 text-xl">
          <button onClick={handleBlock}>🔍</button>

          <button
            onClick={() => setModal(true)}
            className="relative rounded-full border-4 border-red-500 animate-pulse"
          >
            👥
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 text-sm animate-bounce">
              ➤
            </span>
          </button>

          <button onClick={handleBlock}>🎵</button>
          <button onClick={handleBlock}>⚙️</button>
        </div>
      </header>

      {/* My Profile */}
      <section
        onClick={handleBlock}
        className="flex items-center gap-4 px-5 py-4 border-b"
      >
        <img
          src="/kakaotalk/kakaoprofile.jpg"
          className="w-14 h-14 rounded-full"
        />
        <span className="text-lg font-medium">홍xx</span>
        <button className="ml-auto px-4 py-1 rounded-full bg-gray-100 text-sm">
          멀티프로필 +
        </button>
      </section>

      {/* Ad */}
      <section
        onClick={handleBlock}
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
          <h3 className="font-bold text-lg">🎯 친구 추가 미션</h3>
          <span className="font-semibold">{missionCount}/3 완료</span>
        </div>

        <div className="space-y-4">
          <MissionItem
            done={qrMission}
            title="미션1: QR로 친구추가하기"
            success="김홍삼님과 친구가 되었습니다"
            idle="QR코드를 스캔해보세요"
            icon="📱"
          />
          <MissionItem
            done={phoneMission}
            title="미션2: 휴대폰번호로 친구추가하기"
            success={`${phoneName}님과 친구가 되었습니다`}
            idle="전화번호를 입력해보세요"
            icon="📞"
          />
          <MissionItem
            done={idMission}
            title="미션3: ID로 친구추가하기"
            success="안영숙님과 친구가 되었습니다"
            idle="카카오톡 ID를 입력해보세요"
            icon="🆔"
          />
        </div>
      </section>

      {/* Friends */}
      <section onClick={handleBlock} className="px-5">
        <h3 className="font-medium mb-2">친구 {missionCount}</h3>

        {qrMission && <FriendItem name="김홍삼" desc="QR코드로 추가됨" />}
        {phoneMission && phoneName && (
          <FriendItem name={phoneName} desc="전화번호로 추가됨" />
        )}
        {idMission && <FriendItem name="안영숙" desc="ID로 추가됨" />}
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full max-w-[785px] bg-white border-t flex justify-around py-2">
        <NavItem icon="👥" label="친구" active />
        <NavItem icon="💬" label="채팅" />
        <button
          onClick={() => navigate("/miryang/kakaotalk/main")}
          className="px-4 py-2 bg-yellow-400 rounded-xl text-lg font-medium"
        >
          처음으로
        </button>
        <NavItem icon="🛍️" label="쇼핑" />
        <NavItem icon="⋯" label="더보기" />
      </nav>

      {/* Modals */}
      {modal && <FriendAddModal setModal={setModal} />}
      {firstModal && <KakaoFriendModal setFirstModal={setFirstModal} />}
      {blockModal && <FriendBlockModal setBlockModal={setBlockModal} />}
    </div>
  );
}

/* =====================
 Sub Components
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
      className={`flex items-center gap-4 rounded-xl p-4 shadow transition ${
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

function FriendItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b">
      <img
        src="/kakaotalk/kakaoprofile.jpg"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <button className="text-xl">💬</button>
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
