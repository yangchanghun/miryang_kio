import { useNavigate } from "react-router-dom";

const KakaoTalkTutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="flex flex-col">
        <button
          onClick={() => navigate("/miryang/kakaotalk/signup/1")}
          className="bg-[#FEE500] text-[#3c1e1e] px-9 py-5 rounded-lg mb-10 text-3xl font-semibold"
        >
          카카오톡 회원가입
        </button>

        <button
          onClick={() => {
            navigate("/miryang/kakaotalk/friendadd/1");
          }}
          className="bg-[#FEE500] text-[#3c1e1e] px-9 py-5 rounded-lg mb-10 text-3xl font-semibold"
        >
          카카오톡 친구추가하기
        </button>

        <button
          onClick={() => {
            navigate("/miryang/kakaotalk/conversation/1");
          }}
          className="bg-[#FEE500] text-[#3c1e1e] px-9 py-5 rounded-lg mb-10 text-3xl font-semibold"
        >
          카카오톡 친구랑 대화하기
        </button>

        <button
          onClick={() => {
            navigate("/miryang/kakaotalk/friendblock/1");
          }}
          className="bg-[#FEE500] text-[#3c1e1e] px-9 py-5 rounded-lg mb-10 text-3xl font-semibold"
        >
          카카오톡 상대방 차단하기
        </button>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-white text-black border px-9 py-5 rounded-lg text-3xl font-semibold"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};

export default KakaoTalkTutorial;
