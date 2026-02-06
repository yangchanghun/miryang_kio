import { useNavigate } from "react-router-dom";

const GovernmentLearningComplete = () => {
  const completedServices = [
    "정부24 메인 서비스",
    "로그인 방식 선택",
    "민간 인증서 선택",
    "카카오톡 인증",
    "인증 완료",
    "약관 동의",
    "통신사 PASS 인증",
    "기본정보 입력",
    "비밀번호 등록",
    "모바일 신분증 완성",
    "서비스 개요 확인",
    "문서 발급 신청",
    "신청 내역 조회",
  ];

  const navigate = useNavigate();

  const handleGoToMain = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key !== "authToken") localStorage.removeItem(key);
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-center items-center gap-4 py-10 border-b border-white/20">
        <img
          src="/goverment/icon/goverment_icon.png"
          alt="정부24"
          className="w-16 h-16 rounded-full bg-white"
        />
        <span className="text-3xl font-bold">정부24</span>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <section className="space-y-8">
          {/* Trophy */}
          <div className="text-center">
            <div className="text-[96px] mb-4 animate-bounce">🏆</div>
            <h1 className="text-4xl font-extrabold mb-3">학습 완료!</h1>
            <p className="text-xl leading-relaxed text-white/90">
              정부24 서비스 전체 과정을
              <br />
              성공적으로 학습하셨습니다.
            </p>
          </div>

          {/* Progress */}
          <div className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">학습 진행률</h3>
              <span className="text-3xl font-bold text-green-300">100%</span>
            </div>

            <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden mb-3">
              <div className="h-full w-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
            </div>

            <p className="text-white/80">
              총 {completedServices.length}단계 모두 완료
            </p>
          </div>

          {/* Summary */}
          <div className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">학습 요약</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">13</div>
                <div className="text-sm text-white/80">완료 단계</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">5</div>
                <div className="text-sm text-white/80">인증 방식</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-300">3</div>
                <div className="text-sm text-white/80">서비스 유형</div>
              </div>
            </div>

            <ul className="space-y-2 text-white/90">
              <li>✨ 정부24의 다양한 인증 방식을 학습했습니다</li>
              <li>✨ 모바일 신분증 발급 과정을 완성했습니다</li>
              <li>✨ 문서 발급 및 신청 절차를 익혔습니다</li>
            </ul>
          </div>
        </section>

        {/* Right */}
        <section className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/20">
          <h3 className="text-xl font-semibold mb-6">완료한 서비스</h3>

          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
            {completedServices.map((name, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white/10 rounded-xl px-5 py-4"
              >
                <span className="text-white">{name}</span>
                <span className="w-8 h-8 rounded-full bg-green-400/20 text-green-300 flex items-center justify-center font-bold">
                  ✓
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Action */}
      <div className="flex justify-center pb-12">
        <button
          onClick={handleGoToMain}
          className="bg-white text-indigo-600 text-2xl font-bold px-16 py-5 rounded-2xl hover:scale-105 transition"
        >
          교육 마치기
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-white/80 border-t border-white/20">
        <p className="mb-2">
          수고하셨습니다! 실제 정부24 서비스를 이용해보세요.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <span className="underline cursor-pointer">정부24 바로가기</span>
          <span>|</span>
          <span className="underline cursor-pointer">학습 피드백</span>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentLearningComplete;
