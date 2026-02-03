import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoFriendPhone() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+82");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [profile, setProfile] = useState<boolean>(false);

  const handleClose = () => {
    navigate("/miryang/kakaotalk/friendadd/1");
  };

  const handleConfirm = () => {
    if (!name || !phoneNumber) {
      alert("이름과 번호를 입력해주세요!");
      return;
    }
    setProfile(true);
  };

  const handleAddFriend = () => {
    localStorage.setItem("kakao_phone_name", name);
    localStorage.setItem("phonemission", "true");
    alert(`친구추가가 완료되었습니다! (${name})`);
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
          연락처로 추가
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
        {/* Name Input */}
        <div className="mb-10">
          <label className="mb-2 block text-sm text-gray-400">친구 이름</label>

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-blue-500">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              className="w-full bg-transparent py-2 text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              {name.length}/20
            </span>
          </div>
        </div>

        {/* Phone Input */}
        <div className="mb-10">
          <div className="flex items-center border-b border-gray-200 pb-2 focus-within:border-blue-500">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="mr-4 cursor-pointer bg-transparent text-lg outline-none"
            >
              <option value="+82">+82</option>
              <option value="+1">+1</option>
              <option value="+86">+86</option>
              <option value="+81">+81</option>
              <option value="+44">+44</option>
            </select>

            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="전화번호"
              className="flex-1 bg-transparent py-2 text-lg outline-none"
            />
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

            <p className="mb-4 text-lg font-medium">{name}</p>

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
