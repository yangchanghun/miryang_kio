import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FriendsSettings() {
  const navigate = useNavigate();

  const [autoAddFriends, setAutoAddFriends] = useState(false);
  const [showContactNames, setShowContactNames] = useState(false);
  const [allowPhoneNumberAdd, setAllowPhoneNumberAdd] = useState(true);
  const [allowRecommendation, setAllowRecommendation] = useState(true);

  const Toggle = ({
    value,
    onClick,
  }: {
    value: boolean;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className={`relative h-7 w-12 cursor-pointer rounded-full transition-colors ${
        value ? "bg-[#fee500]" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          value ? "translate-x-5" : ""
        }`}
      />
    </div>
  );

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-gray-100">
      {/* HEADER */}
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b bg-white px-4 py-3">
        <button
          onClick={() => navigate("/miryang/kakaotalk/friendblock/1")}
          className="text-lg"
        >
          ＜
        </button>
        <h1 className="text-lg font-semibold">친구</h1>
      </header>

      {/* CONTENT */}
      <main className="mt-2 bg-white">
        {/* 친구 추가 */}
        <section className="border-b-8 border-gray-100">
          <h2 className="bg-gray-50 px-4 py-2 text-sm text-gray-500">
            친구 추가
          </h2>

          <SettingItem
            title="자동 친구 추가"
            desc="내 연락처에서 카카오톡을 사용하는 친구를 자동으로 친구목록에 추가합니다."
            right={
              <Toggle
                value={autoAddFriends}
                onClick={() => setAutoAddFriends(!autoAddFriends)}
              />
            }
          />

          <SettingItem
            title="친구 목록 새로고침"
            desc="내 연락처에 있는 친구를 친구목록에 즉시 추가하고 정보를 업데이트합니다."
            right={
              <button className="text-xl text-gray-500 hover:text-gray-700">
                ⟲
              </button>
            }
          />
        </section>

        {/* 친구 이름 표시 */}
        <section className="border-b-8 border-gray-100">
          <h2 className="bg-gray-50 px-4 py-2 text-sm text-gray-500">
            친구 이름 표시
          </h2>

          <SettingItem
            title="연락처 이름 가져오기"
            desc="내 연락처에 저장된 이름으로 친구 이름을 표시합니다."
            right={
              <Toggle
                value={showContactNames}
                onClick={() => setShowContactNames(!showContactNames)}
              />
            }
          />
        </section>

        {/* 친구 등록 관리 */}
        <section className="border-b-8 border-gray-100">
          <h2 className="bg-gray-50 px-4 py-2 text-sm text-gray-500">
            친구 등록 관리
          </h2>

          <audio src="/kakaotalk/voice/block/2.mp3" autoPlay />

          <SettingItem
            title="전화번호로 친구 추가 허용"
            desc="내 전화번호를 알고 있는 사용자가 나를 친구 추가하는 것을 허용합니다."
            right={
              <Toggle
                value={allowPhoneNumberAdd}
                onClick={() => setAllowPhoneNumberAdd(!allowPhoneNumberAdd)}
              />
            }
          />

          <SettingItem
            title="친구 추천 허용"
            desc="알 수도 있는 친구를 추천받고 나를 다른 친구에게 추천합니다."
            right={
              <Toggle
                value={allowRecommendation}
                onClick={() => setAllowRecommendation(!allowRecommendation)}
              />
            }
          />
        </section>

        {/* 친구 관리 */}
        <section>
          <h2 className="bg-gray-50 px-4 py-2 text-sm text-gray-500">
            친구 관리
          </h2>

          <SettingItem title="숨김친구 관리" />

          <div
            onClick={() => navigate("/miryang/kakaotalk/friendblock/3")}
            className="cursor-pointer"
          >
            <SettingItem title="차단친구 관리" highlight />
          </div>
        </section>
      </main>
    </div>
  );
}

/* =======================
   재사용 컴포넌트
======================= */

function SettingItem({
  title,
  desc,
  right,
  highlight,
}: {
  title: string;
  desc?: string;
  right?: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-4 border px-4 py-4 ${
        highlight ? "border-red-500" : "border-gray-100"
      }`}
    >
      <div>
        <p className="text-base text-gray-800">{title}</p>
        {desc && (
          <p className="mt-1 text-sm text-gray-500 leading-snug">{desc}</p>
        )}
      </div>
      {right}
    </div>
  );
}
