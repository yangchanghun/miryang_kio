import { useNavigate } from "react-router-dom";

export const KakaoPayAuthComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <audio src="/kakaopay/login/5.mp3" autoPlay />

        <section className="w-full text-center">
          {/* Text */}
          <div className="mb-14">
            <h1 className="mb-6 text-[50px] font-bold text-black">
              인증이 완료 되었습니다.
            </h1>
            <p className="text-lg leading-relaxed text-green-600">
              요청한 서비스로 돌아가 인증결과를 확인하거나
              <br />
              다음 단계를 진행하세요
            </p>
          </div>

          {/* Shield Icon */}
          <div className="flex justify-center">
            <div className="flex h-[140px] w-[140px] rotate-45 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-500 to-blue-400 shadow-2xl shadow-blue-500/40">
              <div className="flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full bg-[#FEE500]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-[#3c1e1e]"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 pb-4 pt-5">
        <button
          onClick={() => navigate("/miryang/kakaopay/payment/main")}
          className="w-full rounded-full bg-[#FEE500] py-[18px] text-[17px] font-bold text-[#3c1e1e] transition hover:bg-yellow-400"
        >
          확인
        </button>
      </footer>
    </div>
  );
};
