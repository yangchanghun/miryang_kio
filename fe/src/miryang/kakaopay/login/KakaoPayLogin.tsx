import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayLogin = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState<boolean>(false);
  const [alertModal, setAlertModal] = useState<boolean>(false);

  return (
    <div className="mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      {/* Main */}
      <main className="flex-1 px-5 py-10">
        <audio src="/kakaopay/login/1.mp3" autoPlay />

        {/* Logo */}
        <div className="mb-6 flex items-center gap-1">
          <span className="text-3xl">💬</span>
          <span className="text-3xl font-bold text-black">pay</span>
        </div>

        <section className="text-center">
          <p className="mb-2 text-[15px] text-gray-500">급할 때 지름길로</p>
          <h1 className="mb-10 text-[28px] font-bold text-black">
            바로가기 추천
          </h1>

          {/* Card */}
          <div className="rounded-2xl bg-white px-6 py-8 shadow-md">
            {/* Card Header */}
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm text-gray-400">💬pay</span>
              <span className="text-sm text-gray-400">공간</span>
            </div>

            <div className="mb-5 text-[32px] font-bold text-gray-300">
              500,000원
            </div>

            {/* Card Buttons */}
            <div className="mb-8 flex justify-end gap-3">
              <button className="h-8 w-20 rounded-full bg-gray-100" />
              <button className="h-8 w-20 rounded-full bg-gray-100" />
            </div>

            {/* Icon Grid */}
            <div className="mt-5 grid grid-cols-4 gap-5">
              {[
                { icon: "☂️", bg: "bg-blue-50" },
                { icon: "📅", bg: "bg-orange-50" },
                { icon: "🏞️", bg: "bg-green-50" },
                { icon: "➡️", bg: "bg-indigo-50" },
              ].map((item, idx) => (
                <button key={idx} className="flex items-center justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform hover:scale-105 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 px-5 py-5">
        <button
          onClick={() => navigate("/miryang/kakaopay/login/auth")}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] py-4 text-base font-bold text-black transition hover:bg-yellow-400"
        >
          <span className="text-xl">💬</span>
          카카오 로그인
        </button>

        <button
          onClick={() => setAlertModal(true)}
          className="w-full py-3 text-sm text-gray-500 underline"
        >
          카카오계정 직접 입력
        </button>
      </footer>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

      {/* Modals */}
      {alertModal && (
        <KakaoPayGuideModal
          onModal={alertModal}
          setOnModal={setAlertModal}
          guideSteps={["실제 카카오페이에서 사용해보세요"]}
        />
      )}

      {guide && (
        <KakaoPayGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={["하단 카카오 로그인 버튼을 선택해주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayLogin;
