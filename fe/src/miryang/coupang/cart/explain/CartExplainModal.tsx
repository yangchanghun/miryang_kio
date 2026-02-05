interface CartExplainModalProps {
  setModal: (value: boolean) => void;
}

const CartExplainModal: React.FC<CartExplainModalProps> = ({ setModal }) => {
  const steps = [
    { number: "1", text: "검색창을 눌러주세요!", icon: "🔍" },
    { number: "2", text: "검색창에 `휴지` 라고 입력해주세요!", icon: "⌨️" },
    {
      number: "3",
      text: "제일 위 상품<br/>`롤앤롤 라벤더 화장지 30롤 3겹 고급롤화장지`를 클릭해주세요!",
      icon: "📦",
    },
    { number: "4", text: "바로구매를 선택해주세요", icon: "🛒" },
    { number: "5", text: "먼저 배송지를 선택해주세요!", icon: "📍" },
    { number: "6", text: "배송지 추가를 선택해주세요!", icon: "➕" },
    {
      number: "7",
      text: "받는 분 성함 → 주소 🔍 선택 → 상세주소 → 전화번호 입력 후 저장해주세요!",
      icon: "🏠",
    },
    { number: "8", text: "선택 또는 < 버튼을 눌러주세요", icon: "⬅️" },
    { number: "9", text: "결제수단을 선택해주세요", icon: "💳" },
    {
      number: "10",
      text: "신용카드 선택 후 은행사를 선택해주세요!",
      icon: "🏦",
    },
    {
      number: "11",
      text: "정보 입력 후 `결제하기`를 선택해주세요",
      icon: "✅",
    },
    {
      number: "12",
      text: "카드 정보는 자동 입력됩니다.<br/>등록하고 결제하기를 누르면 완료!",
      icon: "🎉",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => setModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
            📚 쿠팡 상품구매 가이드
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            아래 단계를 따라하시면 쉽게 구매하실 수 있어요
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-3 rounded-xl border p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">
                {step.icon}
              </div>
              <div>
                <p className="font-semibold text-blue-600">{step.number}단계</p>
                <p
                  className="text-gray-800 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.text }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6">
          <button
            onClick={() => setModal(false)}
            className="w-full rounded-xl bg-blue-600 py-4 text-white text-lg font-semibold active:scale-95 transition"
          >
            👍 확인했어요!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartExplainModal;
