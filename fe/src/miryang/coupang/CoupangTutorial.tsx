import { useNavigate } from "react-router-dom";

const CoupangTutorial: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key !== "authToken") {
        localStorage.removeItem(key);
      }
    });

    alert("정보가 초기화 되었습니다");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="flex flex-col">
        {/* 쿠팡 회원가입 */}
        <button
          onClick={() => navigate("/miryang/coupang/signup/1")}
          className="mb-10 rounded-lg bg-yellow-400 px-10 py-5 text-[30px] font-semibold text-[#3c1e1e] active:scale-95"
        >
          쿠팡 회원가입
        </button>

        {/* 쿠팡 구매하기 */}
        <button
          onClick={() => navigate("/miryang/coupang/main")}
          className="mb-10 rounded-lg bg-yellow-400 px-10 py-5 text-[30px] font-semibold text-[#3c1e1e] active:scale-95"
        >
          쿠팡 구매하기
        </button>

        {/* 장바구니 구매 */}
        <button
          onClick={() => navigate("/miryang/coupang/jangcart/1")}
          className="mb-10 rounded-lg bg-yellow-400 px-10 py-5 text-[30px] font-semibold text-[#3c1e1e] active:scale-95"
        >
          쿠팡 장바구니 담아서 구매하기
        </button>

        {/* 홈으로 */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 rounded-lg bg-white px-10 py-5 text-[30px] font-semibold text-black shadow active:scale-95"
        >
          홈으로
        </button>

        {/* 정보 초기화 */}
        <button
          onClick={handleReset}
          className="rounded-lg bg-white px-10 py-5 text-[30px] font-semibold text-black shadow active:scale-95"
        >
          정보초기화
        </button>
      </div>
    </div>
  );
};

export default CoupangTutorial;
