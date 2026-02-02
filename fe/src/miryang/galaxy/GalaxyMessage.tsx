import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Step {
  id: number;
  title: string;
  description: string;
  voiceGuide: string;
  image: string;
}

export default function GalaxyMessage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const voiceArray = [
    "/smartphone_guide/voice/message/1.mp3",
    "/smartphone_guide/voice/message/2.mp3",
    "/smartphone_guide/voice/message/3.mp3",
  ];

  const steps: Step[] = [
    {
      id: 1,
      title: "메시지 앱 실행하기",
      description:
        "홈 화면 아래쪽에 있는 파란색 말풍선 아이콘(메시지 앱)을 눌러 실행합니다.",
      voiceGuide:
        "화면 아래 가운데 있는 파란 말풍선을 눌러 메시지 앱을 켜주세요.",
      image: "/smartphone_guide/message/1.png",
    },
    {
      id: 2,
      title: "새 메시지 작성 아이콘 누르기",
      description:
        "오른쪽 아래에 있는 파란 연필 모양 버튼을 눌러 새 메시지를 작성합니다.",
      voiceGuide: "오른쪽 아래에 있는 파란 연필 버튼을 눌러주세요.",
      image: "/smartphone_guide/message/2.png",
    },
    {
      id: 3,
      title: "받는 사람 입력하기",
      description:
        "받는 사람 칸을 눌러 전화번호나 이름을 입력합니다. 아래 키보드를 사용하세요.",
      voiceGuide: "위에 있는 칸을 눌러 받을 사람 번호를 입력해 주세요.",
      image: "/smartphone_guide/message/3.png",
    },
  ];

  const step = steps[currentStep];

  return (
    <div className="max-w-[800px] mx-auto px-6 py-6 text-gray-800">
      {/* 음성 안내 */}
      <audio src={voiceArray[currentStep]} autoPlay />

      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">💬 문자 발송 가이드</h1>
        <button
          onClick={() => navigate("/miryang/galaxyguide/main")}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold"
        >
          처음으로
        </button>
      </div>

      {/* Step Card */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow mb-6">
        {/* Step Header */}
        <div className="mb-5">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold text-sm mb-3">
            ✅ {step.id}단계
          </span>
          <h2 className="text-3xl font-semibold text-gray-800">{step.title}</h2>
        </div>

        {/* Content */}
        <div className="flex gap-6 md:flex-col">
          {/* Image */}
          <div className="w-[200px] shrink-0 md:w-full md:max-w-[300px] md:mx-auto">
            <img
              src={step.image}
              alt={step.title}
              className="w-full rounded-xl border shadow-md"
            />
          </div>

          {/* Description */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-md p-4 text-[30px] leading-relaxed">
              <strong className="text-gray-900">설명:</strong>{" "}
              {step.description}
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-md p-4">
              <strong className="block text-orange-700 mb-2">
                🔊 음성 안내
              </strong>
              <p className="italic text-orange-800 text-lg">
                {step.voiceGuide}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 md:flex-col">
        <button
          onClick={() => setCurrentStep((p) => p - 1)}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-lg font-semibold min-w-[120px]
            ${
              currentStep === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-gray-600 text-white hover:-translate-x-1 transition"
            }`}
        >
          ← 이전
        </button>

        <div className="px-4 py-2 rounded-full bg-gray-100 font-semibold text-gray-700">
          {currentStep + 1} / {steps.length}
        </div>

        <button
          onClick={() => setCurrentStep((p) => p + 1)}
          disabled={currentStep === steps.length - 1}
          className={`px-6 py-3 rounded-lg font-semibold min-w-[120px]
            ${
              currentStep === steps.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:translate-x-1 transition"
            }`}
        >
          다음 →
        </button>
      </div>
    </div>
  );
}
