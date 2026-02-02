import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeButton from "../../utils/HomeButton";

export default function SignUpGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const voiceArray = [
    "/miryang/voice/1/1.mp3",
    "/miryang/voice/1/2.mp3",
    "/miryang/voice/1/3.mp3",
    "/miryang/voice/1/4.mp3",
    "/miryang/voice/1/5.mp3",
    "/miryang/voice/1/6.mp3",
  ];

  const guideSteps = [
    "위 사이트를 접속하신 후 회원가입을 위해 오른쪽 상단 '회원가입' 버튼을 클릭해주세요!",
    "말양사랑카드를 처음 이용하시나요? 첫 번째 옵션을 선택해 회원가입을 진행해주세요.",
    "약관의 정보를 읽어보시고 체크 버튼을 클릭해주시기 바랍니다.",
    "회원정보 입력 단계입니다. 이름, 성별, 생년월일을 정확히 입력해주세요.",
    "회원가입에 사용된 아이디와 비밀번호를 입력하시면 로그인이 완료됩니다!",
    "로그인을 완료하셨다면 카드신청을 눌러 카드신청을 진행해주세요!",
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                    bg-gradient-to-br from-pink-400 via-rose-300 to-purple-200
                    px-6"
    >
      {/* 제목 */}
      <p className="text-[30px] font-semibold mb-4">회원가입 및 카드신청</p>

      <HomeButton address="milyang" />

      {/* 이미지 */}
      <div className="w-full max-w-[900px] rounded-2xl shadow-xl overflow-hidden mt-6">
        <img
          src={`/miryang/signup/signup_${currentStep + 1}.png`}
          alt="회원가입 가이드"
          className="w-full object-contain"
        />
      </div>

      {/* 음성 */}
      <audio src={voiceArray[currentStep]} autoPlay />

      {/* 설명 텍스트 */}
      <div className="w-full max-w-[900px] mt-6 flex flex-col items-center gap-4">
        {currentStep === 0 && (
          <div
            className="px-6 py-4 bg-pink-300 rounded-xl text-center
                          text-[30px] font-semibold text-gray-800 shadow"
          >
            ❗ https://miryang.usersite.co.kr/
          </div>
        )}

        <div
          className="px-6 py-4 bg-pink-300 rounded-xl text-center
                        text-[30px] font-semibold text-gray-800 shadow"
        >
          {guideSteps[currentStep]}
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="mt-8 flex items-center gap-12">
        <button
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          className="
            px-10 py-4 rounded-xl text-[24px] font-semibold
            bg-gray-500 text-white
            disabled:opacity-40
          "
        >
          이전
        </button>

        {currentStep < guideSteps.length - 1 && (
          <button
            onClick={() =>
              setCurrentStep((s) => Math.min(guideSteps.length - 1, s + 1))
            }
            className="
              px-10 py-4 rounded-xl text-[24px] font-semibold
              bg-indigo-600 text-white
            "
          >
            다음
          </button>
        )}

        {currentStep === guideSteps.length - 1 && (
          <button
            onClick={() => navigate("/miryang/appguide/main")}
            className="
              px-10 py-4 rounded-xl text-[24px] font-semibold
              bg-green-600 text-white
            "
          >
            교육마치기
          </button>
        )}
      </div>
    </div>
  );
}
