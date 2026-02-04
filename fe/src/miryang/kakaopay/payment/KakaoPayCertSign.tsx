import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

type AgreeKey = "privacy" | "signature";

const KakaoPayCertSign = () => {
  const navigate = useNavigate();

  const bank = localStorage.getItem("bank") ?? "";
  const accountNumber = localStorage.getItem("accountnumber") ?? "";

  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);
  const [agree, setAgree] = useState<Record<AgreeKey, boolean>>({
    privacy: false,
    signature: false,
  });

  const allChecked = agree.privacy && agree.signature;

  const toggle = (key: AgreeKey) => {
    setAgree((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    if (!allChecked) {
      alert("모든 항목에 동의해주세요");
      return;
    }
    navigate("/miryang/kakaopay/payment/account/complete");
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      <audio src="/kakaopay/accountregister/cert.mp3" autoPlay />

      {/* Header */}
      <header className="relative bg-white">
        <button
          onClick={() => navigate("/kakaopay/payment/account/verify")}
          className="absolute left-5 top-12 text-3xl"
        >
          ✕
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <h1 className="mb-8 text-center text-2xl font-bold leading-snug">
          카카오 인증서로
          <br />
          전자서명을 진행합니다
        </h1>

        {/* Info Card */}
        <div className="mb-6 rounded-2xl bg-gray-50 p-6">
          {/* Header */}
          <div className="mb-5 flex items-center gap-4 border-b pb-5">
            <div className="flex h-14 w-14 items-center justify-center gap-1 rounded-lg border bg-white">
              <span className="text-lg">💬</span>
              <span className="font-bold">pay</span>
            </div>
            <span className="text-base font-semibold">주식회사 카카오페이</span>
          </div>

          {/* Rows */}
          <div className="mb-6 space-y-4 text-sm">
            <Row label="요청구분" value="자동이체 출금동의" />
            <Row label="받는이" value="양창훈" />
            <Row label="유효일시" value="2025.10.02 11:34:54" />
            <Row label="서명요청" value={`${bank} ${accountNumber}`} link />
          </div>

          <div className="border-t pt-5 text-sm text-gray-500">
            주식회사 카카오페이 고객센터
          </div>
        </div>

        {/* Agreements */}
        <div className="space-y-3">
          <AgreeItem
            checked={agree.privacy}
            onClick={() => toggle("privacy")}
            text="[필수] 개인정보 제3자 제공 동의"
            arrow
          />
          <AgreeItem
            checked={agree.signature}
            onClick={() => toggle("signature")}
            text="전자서명값"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 pb-4 pt-3">
        <button
          onClick={handleSubmit}
          disabled={!allChecked}
          className={`w-full rounded-xl py-5 text-lg font-bold transition ${
            allChecked
              ? "bg-[#FEE500] text-[#3c1e1e] hover:bg-[#FDD835]"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
        >
          서명하기
        </button>
      </footer>

      {/* Guide */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

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
          guideSteps={["약관에 동의한 뒤 서명하기를 눌러주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayCertSign;

/* -------------------- Sub Components -------------------- */

const Row = ({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) => (
  <div className="flex gap-4">
    <span className="min-w-[72px] text-gray-500">{label}</span>
    {link ? (
      <span className="font-medium text-blue-600">{value}</span>
    ) : (
      <span>{value}</span>
    )}
  </div>
);

const AgreeItem = ({
  checked,
  onClick,
  text,
  arrow,
}: {
  checked: boolean;
  onClick: () => void;
  text: string;
  arrow?: boolean;
}) => (
  <button
    onClick={onClick}
    className="flex w-full items-center gap-4 rounded-xl border bg-white px-5 py-5 text-left"
  >
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm transition ${
        checked ? "border-[#FEE500] bg-[#FEE500] text-black" : "border-gray-300"
      }`}
    >
      {checked && "✓"}
    </div>
    <span className="flex-1 text-base">{text}</span>
    {arrow && <span className="text-2xl text-gray-300">›</span>}
  </button>
);
