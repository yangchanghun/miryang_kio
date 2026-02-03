import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

interface FormData {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

const KakaoSignUp_1 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [modalMessage, setModalMessage] =
    useState("회원가입버튼을 선택해주세요!");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    keepLoggedIn: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleError = () => {
    setModalMessage("회원가입 버튼을 클릭해주세요!!");
    setModal(true);
  };

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalMessage("성공입니다!");
    setModal(true);

    setTimeout(() => {
      navigate("/miryang/kakaotalk/signup/2");
    }, 1500);
  };

  const goNext = () => {
    navigate("/miryang/kakaotalk/main");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[785px] bg-white rounded-xl shadow-lg px-12 py-16 text-center">
        {/* 가이드 */}
        <div className="bg-[#FEE500] rounded-xl px-2 py-1 mb-6">
          <audio src="/kakaotalk/voice/signup/1.mp3" autoPlay />
          <p className="text-base">
            카카오톡 회원가입 따라하기{" "}
            <span className="font-medium text-lg">1 / 8단계</span>
          </p>
        </div>

        {/* 타이틀 */}
        <h1 className="text-5xl font-light text-gray-800 mb-14 tracking-tight">
          kakao
        </h1>

        {/* 입력 폼 */}
        <div className="flex flex-col gap-5 mb-8">
          <input
            onClick={handleError}
            type="email"
            name="email"
            placeholder="카카오메일 아이디, 이메일, 전화번호"
            value={formData.email}
            onChange={handleInputChange}
            className="px-6 py-5 text-lg border-2 border-gray-300 rounded-lg outline-none focus:border-[#FEE500]"
          />

          <input
            onClick={handleError}
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange}
            className="px-6 py-5 text-lg border-2 border-gray-300 rounded-lg outline-none focus:border-[#FEE500]"
          />

          <label className="flex items-center text-gray-600 text-lg cursor-pointer">
            <input
              onClick={handleError}
              type="checkbox"
              name="keepLoggedIn"
              checked={formData.keepLoggedIn}
              onChange={handleInputChange}
              className="w-5 h-5 mr-3"
            />
            간편로그인 정보 저장
            <span className="ml-2 w-5 h-5 flex items-center justify-center bg-gray-400 text-white rounded-full text-sm">
              ?
            </span>
          </label>

          <button
            onClick={handleError}
            className="bg-[#FEE500] text-[#3c1e1e] py-5 rounded-lg text-xl font-semibold hover:bg-[#fdd835] active:bg-[#f9a825]"
          >
            로그인
          </button>
        </div>

        {/* 구분선 */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <span className="relative bg-white px-5 text-gray-400 text-base">
            또는
          </span>
        </div>

        <button
          onClick={handleError}
          className="w-full py-5 border-2 border-gray-300 rounded-lg text-lg text-gray-600 bg-gray-50 hover:bg-gray-100"
        >
          QR코드 로그인
        </button>

        {/* 하단 링크 */}
        <div className="flex justify-center gap-8 my-12 text-lg">
          <a
            onClick={handleSignupClick}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            회원가입
          </a>
          <a onClick={handleError} className="text-blue-600 cursor-pointer">
            계정 찾기
          </a>
          <a onClick={handleError} className="text-blue-600 cursor-pointer">
            비밀번호 찾기
          </a>
        </div>

        {/* 푸터 */}
        <div className="border-t pt-8 space-y-5 text-gray-500">
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <span>한국어</span>
            <span>이용약관</span>
            <span>개인정보 처리방침</span>
            <span>고객센터</span>
          </div>
          <div className="text-base">© Kakao Corp.</div>
        </div>

        {/* 하단 고정 버튼 */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px]">
          <div className="flex justify-between">
            <button
              onClick={goNext}
              className="bg-[#FEE500] text-[#3c1e1e] px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-[#fdd835] active:bg-[#f9a825]"
            >
              처음으로
            </button>
          </div>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_1;
