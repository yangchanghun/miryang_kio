import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainSuccessModal from "../success/MainSuccessModal";
import SignExplainBtn from "../signup/signexplain/SignExplainBtn";
import SignExplainModal from "../signup/signexplain/SignExplainModal";

const CoupangLogin: React.FC = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberLogin, setRememberLogin] = useState(true);
  const [successModal, setSuccessModal] = useState(false);
  const [modal, setModal] = useState(false);

  const cleanPhone = (num: string) => num.replace(/[^0-9]/g, "");

  const localAccountStr = localStorage.getItem("계정");
  let savedPhone = "";

  if (localAccountStr) {
    try {
      const parsed = JSON.parse(localAccountStr);
      savedPhone = parsed.phone || "";
    } catch (err) {
      console.error("🚨 JSON 파싱 오류", err);
    }
  }

  const handleBlockBtn = () => {
    alert("휴대폰 번호 입력 후 로그인하세요!");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (cleanPhone(savedPhone) === cleanPhone(phoneNumber)) {
      setSuccessModal(true);
      setTimeout(() => {
        navigate("/miryang/coupang/signup/complete");
      }, 2000);
    } else {
      alert("❌ 일치하는 휴대폰번호가 없습니다");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 font-sans">
      <audio src="/coupang/voice/7.mp3" autoPlay />

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <div className="mb-8 text-center">
          <span className="text-3xl font-bold tracking-tight text-orange-500">
            coupang
          </span>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex border-b">
          <button
            onClick={handleBlockBtn}
            className="flex-1 py-3 text-sm text-gray-400"
          >
            이메일 로그인
          </button>
          <button className="relative flex-1 py-3 text-sm font-semibold text-blue-600">
            휴대폰번호 로그인
            <span className="ml-1 rounded bg-red-500 px-1 text-[10px] text-white">
              N
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="휴대폰번호"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full rounded-md border px-4 py-3 text-base outline-none focus:border-blue-500"
          />

          <div
            onClick={handleBlockBtn}
            className="flex items-center justify-between text-sm text-gray-600"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberLogin}
                onChange={(e) => setRememberLogin(e.target.checked)}
              />
              간편 로그인 등록
            </label>

            <div className="flex gap-2 text-gray-400">
              <span>아이디 찾기</span>|<span>비밀번호 찾기</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-3 text-lg font-semibold text-white active:bg-blue-700"
          >
            로그인
          </button>
        </form>

        <button
          onClick={handleBlockBtn}
          className="mt-3 w-full rounded-md border py-3 text-base text-gray-600"
        >
          회원가입
        </button>

        {/* Promotion */}
        <div className="mt-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white">
          <div>
            <div className="text-sm">신규 고객님께</div>
            <div className="text-base font-bold">최대 2만 5천원 쿠폰!</div>
          </div>
          <div className="rounded bg-white/20 px-3 py-2 text-xs text-center">
            <div className="rounded bg-white px-1 text-orange-500 font-bold">
              COUPON
            </div>
            LOGIN
          </div>
        </div>

        {/* Help */}
        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-sm font-semibold text-gray-700">
            법인 고객이신가요?
          </p>
          <p className="text-xs text-gray-500">
            사업자 회원으로 전용 특가 혜택을 누려보세요.
          </p>
        </div>
      </div>

      {/* Explain */}
      <SignExplainBtn setModal={setModal} />
      {modal && <SignExplainModal setModal={setModal} />}

      {/* Success */}
      {successModal && <MainSuccessModal setSuccessModal={setSuccessModal} />}

      {/* Home */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed left-2 top-2 rounded bg-gray-200 px-3 py-2 text-sm"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangLogin;
