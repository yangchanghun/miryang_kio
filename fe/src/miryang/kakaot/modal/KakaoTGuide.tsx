import React from "react";

interface KakaoTGuideProps {
  setModal: (v: boolean) => void;
}

interface Step {
  number: string;
  text: string | React.ReactNode;
  icon: string;
  isHTML?: boolean;
}

export default function KakaoTGuide({ setModal }: KakaoTGuideProps) {
  const steps: Step[] = [
    {
      number: "1",
      text: "택시 호출을 하고 싶으시면 <br/> 택시 버튼을 클릭해주세요!",
      icon: "🚕",
      isHTML: true,
    },
    {
      number: "2-1",
      text: "GPS가 잡히면 현재 위치,<br/>안 잡히면 기본 위치는<br/>서울역으로 설정됩니다.",
      icon: "📍",
      isHTML: true,
    },
    {
      number: "2-2",
      text: "'어디로 갈까요?'를 선택해주세요.",
      icon: "🎯",
      isHTML: true,
    },
    {
      number: "3-1",
      text: "'도착지를 입력하세요'를 클릭해주세요.",
      icon: "👆",
      isHTML: true,
    },
    {
      number: "3-2",
      text: "도착지를 입력한 후<br/>'도착' 버튼을 선택해주세요.",
      icon: "⌨️",
      isHTML: true,
    },
    {
      number: "4-1",
      text: (
        <>
          <img src="/kakaot/blue_car.png" className="mx-auto mb-2 w-16" />
          <span className="font-bold text-red-500">블루파트너스</span>는
          <br /> 2,000원의 추가요금으로
          <br /> 바로 배차되는 제휴 택시입니다.
          <br />
          <span className="text-gray-500">(교육용에서는 잠금)</span>
        </>
      ),
      icon: "🔵",
    },
    {
      number: "4-2",
      text: (
        <>
          <img src="/kakaot/common_car.png" className="mx-auto mb-2 w-16" />
          <span className="font-bold text-red-500">일반 호출</span>은
          <br /> 기본 택시를 호출합니다.
        </>
      ),
      icon: "🚖",
    },
    {
      number: "4-3",
      text: (
        <>
          <img src="/kakaot/benty_car.png" className="mx-auto mb-2 w-16" />
          <span className="font-bold text-red-500">벤티 예약</span>은
          <br /> 넓고 쾌적한 차량입니다.
          <br />
          <span className="text-gray-500">(예약제 / 잠금)</span>
        </>
      ),
      icon: "🚐",
    },
    {
      number: "4-4",
      text: (
        <>
          <img src="/kakaot/black_car.png" className="mx-auto mb-2 w-16" />
          <span className="font-bold text-red-500">블랙 예약</span>은
          <br /> 프리미엄 택시입니다.
          <br />
          <span className="text-gray-500">(예약제 / 잠금)</span>
        </>
      ),
      icon: "⚫",
    },
    {
      number: "4-5",
      text: "'일반 호출'을 클릭해주세요!",
      icon: "✅",
      isHTML: true,
    },
    {
      number: "5-1",
      text: "실제 카카오T는 다양한 결제수단이 있지만,<br/>교육용에서는 직접 결제만 표시됩니다.",
      icon: "💳",
      isHTML: true,
    },
    {
      number: "5-2",
      text: "'호출하기'를 누르면 차량이 배정됩니다!",
      icon: "📞",
      isHTML: true,
    },
    {
      number: "6",
      text: "택시를 호출 중입니다...",
      icon: "⏰",
      isHTML: true,
    },
    {
      number: "7",
      text: "배차되면 탑승 위치에서 대기해주세요.",
      icon: "🚏",
      isHTML: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 shadow-2xl animate-slideUp"
      >
        {/* HEADER */}
        <header className="mb-5 text-center border-b border-dashed border-yellow-400 pb-4">
          <div className="mb-2 text-4xl animate-bounce">🚕</div>
          <h1 className="text-2xl font-bold text-gray-800">
            카카오T 연습 가이드
          </h1>
          <p className="mt-1 text-gray-600 text-sm">
            아래 순서대로 따라하시면 쉽게 호출할 수 있어요!
          </p>
        </header>

        {/* STEPS */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex gap-4 rounded-xl border border-yellow-300 bg-white p-4 shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center gap-1 min-w-[56px]">
                <div className="text-2xl animate-pulse">{step.icon}</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">
                  {step.number}
                </div>
              </div>

              <div className="flex-1 text-gray-800 text-base leading-relaxed">
                {step.isHTML && typeof step.text === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: step.text }} />
                ) : (
                  step.text
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-6 border-t border-dashed border-yellow-400 pt-4 text-center">
          <button
            onClick={() => setModal(false)}
            className="mx-auto flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-lg font-bold text-white shadow-lg active:scale-95"
          >
            확인했어요! 👍
          </button>
        </div>
      </div>
    </div>
  );
}
