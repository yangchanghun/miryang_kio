import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Step {
  id: number;
  title: string;
  description: string;
  voiceGuide: string;
  image: string;
  isFileSection?: boolean;
}

export default function RecordGuide() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const voiceArray = [
    "/smartphone_guide/voice/record/1.mp3",
    "/smartphone_guide/voice/record/2.mp3",
    "/smartphone_guide/voice/record/3.mp3",
    "/smartphone_guide/voice/record/4.mp3",
    "/smartphone_guide/voice/record/5.mp3",
    "/smartphone_guide/voice/record/6.mp3",
    "/smartphone_guide/voice/record/7.mp3",
    "/smartphone_guide/voice/record/8.mp3",
    "/smartphone_guide/voice/record/9.mp3",
    "/smartphone_guide/voice/record/10.mp3",
  ];

  const steps: Step[] = [
    {
      id: 1,
      title: "'음성 녹음' 앱 실행",
      description:
        "홈 화면이나 앱 서랍에서 빨간색 마이크 모양의 '음성 녹음' 앱을 눌러 실행합니다.",
      voiceGuide: "화면에서 빨간색 마이크 모양의 음성 녹음 앱을 눌러주세요.",
      image: "/smartphone_guide/record/1.png",
    },
    {
      id: 2,
      title: "녹음 시작 버튼 누르기",
      description:
        "화면 아래 가운데에 있는 빨간 마이크 버튼을 눌러 녹음을 시작합니다.",
      voiceGuide:
        "아래 가운데에 있는 빨간 마이크 버튼을 눌러 녹음을 시작하세요.",
      image: "/smartphone_guide/record/2.png",
    },
    {
      id: 3,
      title: "녹음 중지 버튼 누르기",
      description:
        "녹음을 마치면 네모 모양의 정지 버튼을 눌러 녹음을 중지합니다.",
      voiceGuide: "녹음을 다 하셨다면 네모 모양의 정지 버튼을 눌러주세요.",
      image: "/smartphone_guide/record/3.png",
    },
    {
      id: 4,
      title: "녹음 파일 저장",
      description: "녹음한 파일의 이름을 확인한 뒤 저장 버튼을 누릅니다.",
      voiceGuide: "화면 오른쪽 아래에 있는 저장 버튼을 눌러주세요.",
      image: "/smartphone_guide/record/4.png",
    },
    {
      id: 5,
      title: "녹음 파일 목록 확인",
      description:
        "저장한 녹음 파일이 목록에 나타나며 눌러서 재생할 수 있습니다.",
      voiceGuide: "녹음이 완료되었습니다. 목록에서 파일을 확인할 수 있어요.",
      image: "/smartphone_guide/record/5.png",
    },
    {
      id: 6,
      title: "'내 파일' 앱 실행",
      description: "홈 화면에서 노란 폴더 모양의 '내 파일' 앱을 실행합니다.",
      voiceGuide: "홈 화면에서 노란색 폴더 모양의 내 파일 앱을 눌러주세요.",
      image: "/smartphone_guide/record/6.png",
      isFileSection: true,
    },
    {
      id: 7,
      title: "'내장 저장공간' 선택",
      description: "'내장 저장공간'을 눌러 내부 파일을 확인합니다.",
      voiceGuide: "내장 저장공간을 선택해주세요.",
      image: "/smartphone_guide/record/7.png",
    },
    {
      id: 8,
      title: "Recordings 폴더 선택",
      description: "Recordings 폴더를 찾아서 눌러주세요.",
      voiceGuide: "Recordings 폴더를 눌러주세요.",
      image: "/smartphone_guide/record/8.png",
    },
    {
      id: 9,
      title: "Voice Recorder 폴더 선택",
      description: "Voice Recorder 폴더로 들어갑니다.",
      voiceGuide: "Voice Recorder 폴더를 선택해주세요.",
      image: "/smartphone_guide/record/9.png",
    },
    {
      id: 10,
      title: "녹음 파일 재확인",
      description: "저장된 녹음 파일을 눌러 재생하거나 공유할 수 있습니다.",
      voiceGuide: "여기에 녹음 파일이 저장되어 있습니다.",
      image: "/smartphone_guide/record/10.png",
    },
  ];

  const step = steps[currentStep];

  return (
    <div className="max-w-[800px] mx-auto px-6 py-6 text-gray-800">
      {/* 음성 안내 */}
      <audio src={voiceArray[currentStep]} autoPlay />

      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">🎙️ 음성 녹음 가이드</h1>
        <button
          onClick={() => navigate("/miryang/galaxyguide/main")}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold"
        >
          처음으로
        </button>
      </div>

      {/* 파일 섹션 헤더 */}
      {step.isFileSection && (
        <div className="mb-6 p-4 rounded-lg bg-yellow-100 border border-yellow-400 text-center">
          <h3 className="text-lg font-semibold text-yellow-800">
            📂 파일 앱에서 저장된 녹음 파일 확인
          </h3>
        </div>
      )}

      {/* Step Card */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow mb-6">
        {/* Step Header */}
        <div className="mb-5">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white font-semibold text-sm mb-3">
            ✅ {step.id}단계
          </span>
          <h2 className="text-3xl font-semibold">{step.title}</h2>
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
            <div className="bg-red-50 border-l-4 border-red-500 rounded-md p-4 text-[30px] leading-relaxed">
              <strong>설명:</strong> {step.description}
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

        <div className="px-4 py-2 rounded-full bg-gray-100 font-semibold">
          {currentStep + 1} / {steps.length}
        </div>

        <button
          onClick={() => setCurrentStep((p) => p + 1)}
          disabled={currentStep === steps.length - 1}
          className={`px-6 py-3 rounded-lg font-semibold min-w-[120px]
            ${
              currentStep === steps.length - 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-red-600 text-white hover:translate-x-1 transition"
            }`}
        >
          다음 →
        </button>
      </div>
    </div>
  );
}
