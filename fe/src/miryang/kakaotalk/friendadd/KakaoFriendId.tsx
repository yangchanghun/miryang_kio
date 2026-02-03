import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoFriendId() {
  const navigate = useNavigate();

  const [friendId, setFriendId] = useState<string>("");
  const [profile, setProfile] = useState<boolean>(false);

  const handleClose = () => {
    navigate("/miryang/kakaotalk/friendadd/1");
  };

  const handleConfirm = () => {
    if (!friendId) {
      alert("친구의 카카오톡 ID를 입력해주세요!");
      return;
    }
    setProfile(true);
  };

  const handleAddFriend = () => {
    localStorage.setItem("idmission", "true");
    alert(`친구추가가 완료되었습니다! (안영숙 ${friendId})`);
    navigate("/miryang/kakaotalk/friendadd/1");
  };

  return (
    <div className="mx-auto max-w-[785px] h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-5 py-4">
        <button
          onClick={handleClose}
          className="w-10 text-left text-xl font-light"
        >
          ✕
        </button>

        <h1 className="flex-1 text-center text-lg font-semibold">
          카카오톡 ID로 추가
        </h1>

        <button
          onClick={handleConfirm}
          className="w-10 text-right text-sm font-semibold text-blue-500"
        >
          확인
        </button>
      </header>

      {/* Content */}
      <main className="px-5 py-8">
        {/* ID Input */}
        <div className="mb-10">
          <label className="mb-2 block text-sm text-gray-400">
            친구 카카오톡 ID
          </label>

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-blue-500">
            <input
              type="text"
              value={friendId}
              onChange={(e) => setFriendId(e.target.value)}
              maxLength={20}
              className="w-full bg-transparent py-2 text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              {friendId.length}/20
            </span>
          </div>
        </div>

        {/* Profile Preview */}
        {profile && (
          <div className="rounded-xl bg-gray-100 py-8 text-center">
            <div className="mx-auto mb-4 h-[100px] w-[100px] overflow-hidden rounded-3xl">
              <img
                src="/kakaotalk/kakaoprofile.jpg"
                alt="프로필"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mb-4 text-lg font-medium">안영숙 ({friendId})</p>

            <button
              onClick={handleAddFriend}
              className="rounded-xl bg-[#FEE500] px-8 py-3 text-lg font-semibold text-[#3c1e1e] transition active:scale-95"
            >
              친구추가
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
