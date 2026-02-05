interface SignExplainModalProps {
  setModal: (value: boolean) => void;
}

const steps = [
  { number: "1", icon: "🔍", text: "회원가입을 선택하세요!" },
  {
    number: "2",
    icon: "🥚",
    text: "모두동의 혹은 필수항목을\n체크해주세요!",
  },
  { number: "3", icon: "📦", text: "이름을 입력해주세요!" },
  { number: "4", icon: "🛒", text: "이메일을 입력해주세요!" },
  {
    number: "5",
    icon: "🔍",
    text: "휴대폰번호를 입력하시고\n위에 나오는 인증번호를\n정확하게 입력한 후\n다음 버튼을 눌러주세요",
  },
  {
    number: "6",
    icon: "🌾",
    text: "회원가입이 완료되었습니다\n휴대폰번호로 로그인을\n진행해주세요!",
  },
];

const SignExplainModal: React.FC<SignExplainModalProps> = ({ setModal }) => {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
      onClick={() => setModal(false)}
    >
      <div
        className="w-[90%] max-w-[420px] rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="border-b px-6 py-5 text-center">
          <h1 className="mb-2 flex items-center justify-center gap-2 text-xl font-bold">
            <span>📚</span>
            쿠팡 회원가입 가이드
          </h1>
          <p className="text-sm text-gray-600">
            아래 단계를 따라하시면 쉽게 회원가입 할 수 있어요!
          </p>
        </div>

        {/* 단계 */}
        <div className="max-h-[60vh] space-y-5 overflow-y-auto px-6 py-5">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white text-lg font-bold">
                {step.number}
              </div>

              <div>
                <div className="mb-1 text-xl">{step.icon}</div>
                <p className="whitespace-pre-line text-lg leading-relaxed text-gray-700">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 푸터 */}
        <div className="border-t px-6 py-5">
          <button
            onClick={() => setModal(false)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white active:bg-blue-700"
          >
            확인했어요!
            <span>👍</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignExplainModal;
