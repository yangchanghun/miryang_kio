import { useNavigate } from "react-router-dom";

const KakaoPayEducationComplete = () => {
  const navigate = useNavigate();

  const handleGoToMain = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key !== "authToken") {
        localStorage.removeItem(key);
      }
    });
    navigate("/");
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gradient-to-br from-indigo-500 to-purple-600">
      {/* Main */}
      <main className="flex flex-1 flex-col items-center px-6 py-12 text-center">
        {/* Trophy */}
        <div className="mb-10 flex h-36 w-36 animate-bounce items-center justify-center rounded-full bg-white shadow-2xl">
          <span className="text-7xl">🏆</span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold leading-relaxed text-white">
          축하합니다!
          <br />
          카카오페이 교육을 완료했어요
        </h1>

        {/* Description */}
        <p className="mb-10 text-base leading-relaxed text-white/90">
          모든 과정을 성공적으로 마쳤습니다.
          <br />
          정말 수고하셨어요!
        </p>

        {/* Stats Card */}
        <div className="mb-6 flex w-full items-center justify-center rounded-2xl bg-white px-6 py-6 shadow-xl">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400">학습 진도</span>
            <span className="text-xl font-bold text-indigo-500">100%</span>
          </div>
        </div>

        {/* Badge */}
        <div className="w-full rounded-2xl border border-white/20 bg-white/20 p-5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <span className="text-4xl">⭐</span>
            <div className="text-left">
              <p className="text-lg font-bold text-white">우수 학습자</p>
              <p className="text-sm text-white/80">배지를 획득했어요</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-10">
        <button
          onClick={handleGoToMain}
          className="w-full rounded-full bg-white py-5 text-lg font-bold text-indigo-600 transition hover:bg-gray-100"
        >
          교육 마치기
        </button>
      </footer>
    </div>
  );
};

export default KakaoPayEducationComplete;
