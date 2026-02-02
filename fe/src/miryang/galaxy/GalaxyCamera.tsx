import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Step {
  id: number;
  title: string;
  description: string;
  voiceGuide: string;
  image: string;
  isPhotoSection?: boolean;
  isVideoSection?: boolean;
}

export default function CameraGuide() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const voiceArray = [
    "/smartphone_guide/voice/camera/1.mp3",
    "/smartphone_guide/voice/camera/2.mp3",
    "/smartphone_guide/voice/camera/3.mp3",
    "/smartphone_guide/voice/camera/4.mp3",
    "/smartphone_guide/voice/camera/5.mp3",
  ];

  const steps: Step[] = [
    {
      id: 1,
      title: "카메라 앱 실행",
      description:
        "홈 화면 또는 앱 목록에서 '카메라' 앱(붉은 카메라 아이콘)을 눌러 실행합니다.",
      voiceGuide: "화면에 보이는 빨간 카메라 그림을 눌러주세요.",
      image: "/smartphone_guide/camera/1.jpg",
    },
    {
      id: 2,
      title: "사진 모드 선택 & 촬영",
      description:
        "아래 메뉴에서 사진이 선택되어 있는지 확인한 뒤, 가운데 하얀 동그라미 버튼을 눌러 사진을 찍습니다.",
      voiceGuide: "아래쪽 가운데 있는 하얀 동그라미를 눌러 사진을 찍으세요.",
      image: "/smartphone_guide/camera/2.jpg",
      isPhotoSection: true,
    },
    {
      id: 3,
      title: "촬영된 사진 확인",
      description:
        "왼쪽 아래의 작은 미리보기 이미지를 누르면 방금 찍은 사진을 볼 수 있습니다.",
      voiceGuide: "왼쪽 아래 작은 사진을 누르면 찍은 사진을 볼 수 있어요.",
      image: "/smartphone_guide/camera/3.jpg",
    },
    {
      id: 4,
      title: "동영상 모드로 전환",
      description:
        "아래 메뉴에서 '동영상'을 선택하고, 가운데 빨간 동그라미 버튼을 눌러 녹화를 시작합니다.",
      voiceGuide:
        "아래 메뉴에서 동영상을 선택하고 빨간 버튼을 눌러 녹화를 시작하세요.",
      image: "/smartphone_guide/camera/4.jpg",
      isVideoSection: true,
    },
    {
      id: 5,
      title: "녹화 중 화면",
      description:
        "화면 위에 시간이 표시되면 녹화 중입니다. 아래 버튼을 눌러 정지할 수 있습니다.",
      voiceGuide:
        "화면 위에 시간이 보이면 녹화 중입니다. 아래 정지 버튼을 눌러 종료하세요.",
      image: "/smartphone_guide/camera/5.jpg",
    },
  ];

  const step = steps[currentStep];

  return (
    <div className="max-w-[800px] mx-auto px-6 py-6 text-gray-800">
      {/* 음성 안내 */}
      <audio src={voiceArray[currentStep]} autoPlay />

      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">📷 카메라 촬영 가이드</h1>
        <button
          onClick={() => navigate("/miryang/galaxyguide/main")}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold"
        >
          처음으로
        </button>
      </div>

      {/* 섹션 헤더 */}
      {step.isPhotoSection && (
        <div className="mb-6 p-4 rounded-lg bg-sky-100 border border-sky-400 text-center">
          <h3 className="text-lg font-semibold text-sky-800">
            📸 사진 촬영 방법
          </h3>
        </div>
      )}

      {step.isVideoSection && (
        <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-center">
          <h3 className="text-lg font-semibold text-red-800">
            🎥 동영상 촬영 방법
          </h3>
        </div>
      )}

      {/* Step Card */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow mb-6">
        {/* Step Header */}
        <div className="mb-5">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-white font-semibold text-sm mb-3">
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
            <div className="bg-violet-50 border-l-4 border-violet-600 rounded-md p-4 text-[30px] leading-relaxed">
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
                : "bg-violet-600 text-white hover:translate-x-1 transition"
            }`}
        >
          다음 →
        </button>
      </div>
    </div>
  );
}
