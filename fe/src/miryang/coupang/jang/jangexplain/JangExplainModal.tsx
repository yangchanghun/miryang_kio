interface Props {
  setModal: (v: boolean) => void;
}

export default function JangExplainModal({ setModal }: Props) {
  const steps = [
    { number: "1", text: "쿠팡에서 검색하세요를 클릭하세요!", icon: "🔍" },
    { number: "2", text: '검색창에 <b>"계란"</b> 을 입력해주세요', icon: "🥚" },
    {
      number: "3",
      text: "삼초마을 난각번호1번 계란<br/>자연방사 유정란 무항생제, 40구를<br/>선택해주세요",
      icon: "📦",
    },
    {
      number: "4",
      text: "장바구니 담기를 눌러<br/>장바구니에 담아주세요!",
      icon: "🛒",
    },
    {
      number: "5",
      text: "계란을 담았다면<br/>다시 검색창을 눌러주세요",
      icon: "🔍",
    },
    { number: "6", text: '검색창에 <b>"쌀"</b> 을 입력해주세요', icon: "🌾" },
    {
      number: "7",
      text: "곰곰 소중한 우리쌀 10kg을<br/>선택해주세요",
      icon: "🍚",
    },
    {
      number: "8",
      text: "장바구니 담기를 눌러<br/>장바구니에 담아주세요!",
      icon: "🛒",
    },
    {
      number: "9",
      text: "아래의 장바구니 버튼을<br/>눌러주세요!",
      icon: "👆",
    },
    { number: "10", text: "상품 구매하기를 선택해주세요", icon: "💳" },
    {
      number: "11",
      text: "이전에 구매한 적이 있다면<br/>바로 결제하기를 누르면 끝!",
      icon: "✅",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => setModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[92%] max-w-md max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b text-center">
          <h1 className="text-xl font-bold flex items-center justify-center gap-2">
            📚 장바구니 구매 가이드
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            아래 순서대로 따라 해보세요 🙂
          </p>
        </div>

        {/* Steps */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-3 items-start bg-gray-50 rounded-xl p-3"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-sm">
                <span className="text-lg">{step.icon}</span>
                {step.number}
              </div>

              <div
                className="text-sm text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.text }}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            onClick={() => setModal(false)}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg active:scale-95 transition"
          >
            👍 확인했어요!
          </button>
        </div>
      </div>
    </div>
  );
}
