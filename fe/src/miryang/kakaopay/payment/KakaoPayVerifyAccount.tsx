import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayVerifyAccount = () => {
  const navigate = useNavigate();

  const bank = localStorage.getItem("bank") ?? "한국은행";
  const accountNumber = localStorage.getItem("accountnumber") ?? "123456";

  const [activeTab, setActiveTab] = useState<"kakao" | "ars">("kakao");
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [nextModal, setNextModal] = useState(false);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="relative flex items-center px-5 py-4">
          <button
            onClick={() =>
              navigate("/miryang/kakaopay/payment/account/connect")
            }
            className="text-2xl"
          >
            ←
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            충전계좌 연결
          </h1>
        </div>
      </header>

      <audio src="/kakaopay/accountregister/verify.mp3" autoPlay />

      {/* Main */}
      <main className="flex-1 px-6 py-6">
        {/* Step 1 완료 */}
        <div className="mb-6 flex items-center gap-4 border-b pb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white">
            ✓
          </div>
          <div className="flex flex-1 items-center justify-between">
            <span className="font-bold">
              {bank} {accountNumber}
            </span>
            <button className="text-sm text-gray-400 underline">변경</button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEE500] text-lg font-bold">
            2
          </div>
          <div>
            <h2 className="mb-1 text-xl font-bold">자동이체 출금동의</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              연결이 잘 안되시나요
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs">
                ?
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("kakao")}
            className={`flex-1 rounded-full px-6 py-4 text-sm font-semibold transition ${
              activeTab === "kakao"
                ? "bg-white text-black shadow"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            카카오 인증
          </button>
          <button
            onClick={() => setAlertModal(true)}
            className="flex-1 rounded-full bg-gray-100 px-6 py-4 text-sm font-semibold text-gray-500"
          >
            ARS 인증
          </button>
        </div>

        {/* 인증 카드 */}
        <div className="rounded-2xl bg-gray-50 px-8 py-12 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            {activeTab === "kakao" ? "카카오 인증" : "ARS 인증"}
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            빠르고 안전한 인증으로
            <br />
            계좌 연결을 완료해보세요!
          </p>

          <button
            onClick={() => setTermsOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-12 py-4 text-lg font-bold text-black"
          >
            <span>{activeTab === "kakao" ? "🛡️" : "📞"}</span>
            인증하기
          </button>
        </div>
      </main>

      {/* 약관 모달 */}
      {termsOpen && (
        <TermsModal
          onClose={() => setTermsOpen(false)}
          onConfirm={() => {
            setTermsOpen(false);
            setNextModal(true);
          }}
        />
      )}

      {/* 카카오톡 열기 모달 */}
      {nextModal && (
        <NextModal
          onClose={() => setNextModal(false)}
          onOpen={() => navigate("/miryang/kakaopay/payment/account/cert")}
        />
      )}

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
          guideSteps={[
            "인증하기 버튼을 눌러주세요",
            "약관에 동의 후 확인을 눌러주세요",
            "카카오톡을 열어 인증을 진행해주세요",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayVerifyAccount;

/* -------------------- 약관 모달 -------------------- */

const TermsModal = ({
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  return (
    <div className="fixed inset-0 z-[999] flex items-end bg-black/50">
      <div className="w-full rounded-t-3xl bg-white p-6">
        <div className="mx-auto mb-6 h-1.5 w-32 rounded bg-gray-300" />
        <h3 className="mb-6 text-xl font-bold">
          계좌를 연결하려면 약관에 동의해주세요
        </h3>

        <label className="mb-4 flex items-center gap-3 text-base">
          <input type="checkbox" checked={a} onChange={() => setA(!a)} />
          (필수) 오픈뱅킹 자동이체 출금동의
        </label>

        <label className="mb-8 flex items-center gap-3 text-base">
          <input type="checkbox" checked={b} onChange={() => setB(!b)} />
          (필수) 개인정보 제공 동의
        </label>

        <button
          onClick={() => (a && b ? onConfirm() : alert("약관에 동의해주세요"))}
          className="w-full rounded-full bg-[#FEE500] py-5 text-lg font-bold"
        >
          확인
        </button>
      </div>
    </div>
  );
};

/* -------------------- 다음 단계 모달 -------------------- */

const NextModal = ({
  onClose,
  onOpen,
}: {
  onClose: () => void;
  onOpen: () => void;
}) => (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
    <div className="w-[90%] max-w-sm rounded-2xl bg-white p-6 text-center">
      <p className="mb-8 text-lg leading-relaxed">
        서비스 사용을 위해
        <br />
        카카오톡을 열까요?
      </p>

      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 rounded-xl bg-gray-200 py-4 text-lg"
        >
          취소
        </button>
        <button
          onClick={onOpen}
          className="flex-1 rounded-xl bg-[#FEE500] py-4 text-lg font-bold"
        >
          열기
        </button>
      </div>
    </div>
  </div>
);
