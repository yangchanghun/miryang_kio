import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

const KakaoSignUp_5 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] = useState(
    "이메일로 사용할 아이디를 입력해주세요!!  아이디는 영문과 숫자로 이루어져야합니다*3자리 이상*",
  );

  const [emailId, setEmailId] = useState("");

  /** ✅ 파생 상태 (state ❌) */
  const isValid = emailId.length >= 3 && /^[a-z]/.test(emailId);

  const handleEmailIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filtered = value.replace(/[^a-z0-9\-_]/g, "");
    setEmailId(filtered);
  };

  const handleNext = () => {
    if (!emailId.trim()) {
      setModalMessage("카카오메일 아이디를 입력해주세요!");
      setModal(true);
      return;
    }

    if (!isValid) {
      setModalMessage(
        "올바른 카카오메일 아이디를 입력해주세요! (3자 이상, 영문으로 시작)",
      );
      setModal(true);
      return;
    }

    localStorage.setItem("email", emailId);
    setModalMessage("성공입니다!");
    setModal(true);

    setTimeout(() => {
      navigate("/miryang/kakaotalk/signup/6");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] rounded-xl bg-white px-12 py-16 text-center shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">5 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/5.mp3" autoPlay />

        <h1 className="mb-10 text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 본문 */}
        <div className="mb-20 text-left">
          <h2 className="mb-2 text-[28px] font-semibold text-gray-800">
            카카오계정으로 사용할
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            카카오메일을 만들어 주세요.
          </p>

          {/* 이메일 입력 */}
          <div
            className={`
              mx-auto mb-8 flex max-w-[500px] items-center gap-2 rounded-lg border-2
              px-5 py-4 transition
              ${
                emailId
                  ? isValid
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-gray-300 focus-within:border-[#FEE500]"
              }
            `}
          >
            <input
              type="text"
              placeholder="test"
              value={emailId}
              onChange={handleEmailIdChange}
              maxLength={30}
              className="flex-1 bg-transparent text-lg outline-none"
            />

            <span className="text-lg text-gray-500">@</span>
            <span className="rounded bg-gray-100 px-2 py-1 text-lg text-gray-600">
              kakao.com
            </span>

            {emailId && (
              <span
                className={`ml-2 text-xl font-bold ${
                  isValid ? "text-green-500" : "text-red-500"
                }`}
              >
                {isValid ? "✓" : "✗"}
              </span>
            )}
          </div>

          {/* 규칙 */}
          <div className="mx-auto max-w-[600px] space-y-3 text-sm text-gray-600">
            <p className="flex gap-2">
              <span>•</span>
              입력한 카카오메일로 카카오계정에 로그인할 수 있습니다.
            </p>
            <p className="flex gap-2">
              <span>•</span>
              한번 만든 카카오메일은 변경할 수 없으니 신중히 확인해 주세요.
            </p>
            <p className="flex gap-2">
              <span>•</span>
              생성한 카카오메일로 카카오계정 관련 알림을 받아볼 수 있습니다.
            </p>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/miryang/kakaotalk/signup/4")}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e] shadow hover:bg-[#fdd835]"
            >
              이전
            </button>

            <button
              onClick={() => navigate("/miryang/kakaotalk/main")}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e] shadow hover:bg-[#fdd835]"
            >
              처음으로
            </button>

            <button
              onClick={handleNext}
              className={`rounded-lg px-8 py-4 text-lg font-semibold shadow
                ${
                  isValid
                    ? "bg-[#FEE500] text-[#3c1e1e] hover:bg-[#fdd835]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              다음
            </button>
          </div>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_5;
