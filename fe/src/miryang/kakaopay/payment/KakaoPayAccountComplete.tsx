import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayAccountComplete = () => {
  const navigate = useNavigate();

  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const bank = localStorage.getItem("bank") ?? "";
  const accountNumber = localStorage.getItem("accountnumber") ?? "";

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      <audio src="/kakaopay/accountregister/complete.mp3" autoPlay />

      {/* Main */}
      <main className="flex flex-1 flex-col items-center px-6 pb-10 pt-16 text-center">
        {/* Success Icon */}
        <div className="mb-8 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#FEE500] text-6xl font-bold">
          ✓
        </div>

        {/* Title */}
        <h1 className="mb-4 text-[28px] font-bold leading-snug">
          계좌 연결이
          <br />
          완료되었어요
        </h1>

        {/* Description */}
        <p className="mb-10 text-sm leading-relaxed text-gray-500">
          은행에서 계좌 연결이 되었다는 안내 문자가
          <br />올 거예요. 최대 2개까지 받을 수 있어요.
        </p>

        {/* Account Info */}
        <div className="w-full border-t pt-6">
          <InfoRow label="충전계좌" value={`${bank} ${accountNumber}`} />
          <InfoRow label="계좌별명" linkText="예) 티끌모아잔산 ›" />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-3 bg-white px-6 pb-4 pt-3">
        <button
          onClick={() => setAlertModal(true)}
          className="flex-1 rounded-xl bg-gray-100 py-5 text-lg font-bold text-gray-600 hover:bg-gray-200"
        >
          계좌추가
        </button>

        <button
          onClick={() => {
            localStorage.setItem("level", "1");
            navigate("/miryang/kakaopay/payment/account");
          }}
          className="flex-[2] rounded-xl bg-[#FEE500] py-5 text-lg font-bold text-[#3c1e1e] hover:bg-[#FDD835]"
        >
          확인
        </button>
      </footer>

      {/* Guide Button */}
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
          guideSteps={[
            "계좌 연결이 완료되었습니다.",
            "확인 버튼을 눌러 다음 단계로 이동하세요.",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayAccountComplete;

/* ---------------- Sub Component ---------------- */

const InfoRow = ({
  label,
  value,
  linkText,
}: {
  label: string;
  value?: string;
  linkText?: string;
}) => (
  <div className="flex items-center justify-between border-b py-4 text-sm">
    <span className="text-gray-600">{label}</span>
    {value ? (
      <span className="font-semibold text-black">{value}</span>
    ) : (
      <button className="text-gray-400">{linkText}</button>
    )}
  </div>
);
