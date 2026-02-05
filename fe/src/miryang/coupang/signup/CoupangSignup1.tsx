import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainSuccessModal from "../success/MainSuccessModal";
import SignExplainBtn from "./signexplain/SignExplainBtn";
import SignExplainModal from "./signexplain/SignExplainModal";

const CoupangSignup1: React.FC = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberLogin, setRememberLogin] = useState(true);
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleClick = () => {
    setSuccessModal(true);
    setTimeout(() => {
      navigate("/miryang/coupang/signup/2");
    }, 2000);
  };

  const handleBlockBtn = () => {
    alert("회원가입 버튼을 클릭해주세요");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5 font-sans">
      <audio src="/coupang/voice/1.mp3" autoPlay />

      <div className="w-full max-w-[400px] rounded-xl bg-white px-8 py-10 shadow-lg">
        {/* 로고 */}
        <div className="mb-8 text-center">
          <span className="text-[32px] font-bold tracking-tight text-orange-500">
            coupang
          </span>
        </div>

        {/* 탭 */}
        <div className="mb-6 flex border-b border-gray-200">
          <button
            onClick={handleBlockBtn}
            className={`relative flex-1 py-3 text-sm ${
              activeTab === "email"
                ? "font-medium text-blue-500"
                : "text-gray-500"
            }`}
          >
            이메일 로그인
            {activeTab === "email" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("phone")}
            className={`relative flex-1 py-3 text-sm ${
              activeTab === "phone"
                ? "font-medium text-blue-500"
                : "text-gray-500"
            }`}
          >
            휴대폰번호 로그인
            <span className="ml-1 rounded-sm bg-red-500 px-1 text-[10px] text-white">
              N
            </span>
            {activeTab === "phone" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500" />
            )}
          </button>
        </div>

        {/* 입력 폼 */}
        <form onClick={handleBlockBtn} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="핸드폰번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5 flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberLogin}
                onChange={(e) => setRememberLogin(e.target.checked)}
              />
              간편 로그인 등록
            </label>

            <div className="flex items-center gap-2">
              <span>아이디 찾기</span>
              <span className="text-gray-300">|</span>
              <span>비밀번호 찾기</span>
            </div>
          </div>

          <button
            type="submit"
            className="mb-3 w-full rounded-md bg-blue-500 py-3 text-base font-medium text-white active:bg-blue-600"
          >
            로그인
          </button>
        </form>

        {/* 회원가입 */}
        <button
          onClick={handleClick}
          className="mb-6 w-full rounded-md border border-gray-300 py-3 text-base text-gray-600 active:bg-gray-100"
        >
          회원가입
        </button>

        {/* 프로모션 */}
        <div
          onClick={handleBlockBtn}
          className="mb-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 p-4 text-white"
        >
          <div>
            <p className="text-sm font-medium">신규 고객님께</p>
            <p className="text-base font-bold">최대 2만 5천원 쿠폰을 드려요!</p>
          </div>

          <div className="rounded-md bg-white/20 px-3 py-2 text-center">
            <p className="mb-1 rounded bg-white px-2 text-xs font-bold text-orange-500">
              COUPON
            </p>
            <p className="text-[10px] font-medium">LOGIN</p>
          </div>
        </div>

        {/* 도움말 */}
        <div className="border-t pt-4 text-center">
          <p className="text-sm font-medium text-gray-800">
            법인 고객이신가요?
          </p>
          <p className="text-xs text-gray-500">
            사업자 회원으로 전용 특가 혜택을 누려보세요.
          </p>
        </div>
      </div>

      {/* 모달들 */}
      {successModal && <MainSuccessModal setSuccessModal={setSuccessModal} />}
      <SignExplainBtn setModal={setModal} />
      {modal && <SignExplainModal setModal={setModal} />}

      {/* 처음으로 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed bottom-0 rounded-t-lg bg-black px-6 py-3 text-white"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangSignup1;
