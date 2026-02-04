import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

type Bank = {
  id: string;
  name: string;
};

const banks: Bank[] = [
  { id: "bok", name: "한국은행" },
  { id: "kdb", name: "KDB산업은행" },
  { id: "ibk", name: "IBK기업은행" },
  { id: "kb", name: "KB국민은행" },
  { id: "nh", name: "NH농협은행" },
  { id: "woori", name: "우리은행" },
  { id: "shinhan", name: "신한은행" },
  { id: "hana", name: "하나은행" },
  { id: "sc", name: "SC제일은행" },
  { id: "citi", name: "한국씨티은행" },
  { id: "daegu", name: "대구은행" },
  { id: "busan", name: "부산은행" },
  { id: "gwangju", name: "광주은행" },
  { id: "jeju", name: "제주은행" },
  { id: "jeonbuk", name: "전북은행" },
  { id: "kakao", name: "카카오뱅크" },
  { id: "kbank", name: "케이뱅크" },
  { id: "toss", name: "토스뱅크" },
  { id: "mirae", name: "미래에셋증권" },
  { id: "samsung", name: "삼성증권" },
  { id: "kiwoom", name: "키움증권" },
  { id: "nh-invest", name: "NH투자증권" },
  { id: "toss-sec", name: "토스증권" },
];

const KakaoPayConnectAccount = () => {
  const navigate = useNavigate();

  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [showBankList, setShowBankList] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const handleNext = () => {
    if (!selectedBank) return;
    localStorage.setItem("bank", selectedBank.name);
    localStorage.setItem("accountnumber", accountNumber);
    navigate("/miryang/kakaopay/payment/account/verify");
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <audio src="/kakaopay/accountregister/connect.mp3" autoPlay />
        <div className="relative flex items-center px-5 py-4">
          <button
            onClick={() => navigate("/miryang/kakaopay/payment/account")}
            className="text-2xl"
          >
            ←
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            충전계좌 연결
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        {/* Step */}
        <div className="mb-8 flex items-start gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEE500] text-lg font-bold">
            1
          </div>
          <div>
            <h2 className="mb-1 text-2xl font-bold">계좌번호 입력</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              연결이 잘 안되시나요
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs">
                ?
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Bank Select */}
          <button
            onClick={() => setShowBankList(true)}
            className="flex w-full items-center justify-between rounded-xl border bg-gray-100 px-5 py-5 text-left text-base"
          >
            <span
              className={
                selectedBank ? "font-medium text-black" : "text-gray-400"
              }
            >
              {selectedBank?.name ?? "은행/증권사"}
            </span>
            <span className="text-xs text-gray-400">▼</span>
          </button>

          {/* Account Number */}
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="계좌번호"
            className="w-full rounded-xl border bg-gray-100 px-5 py-5 text-base outline-none focus:border-[#FEE500] focus:bg-white"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 pb-4 pt-5">
        <button
          onClick={handleNext}
          disabled={!selectedBank || !accountNumber}
          className={`w-full rounded-xl py-5 text-lg font-bold transition ${
            selectedBank && accountNumber
              ? "bg-[#FEE500] text-[#3c1e1e]"
              : "cursor-not-allowed bg-gray-100 text-gray-300"
          }`}
        >
          다음
        </button>
      </footer>

      {/* Bank List Bottom Sheet */}
      {showBankList && (
        <>
          <div
            onClick={() => setShowBankList(false)}
            className="fixed inset-0 z-[999] bg-black/50"
          />
          <div className="fixed bottom-0 left-1/2 z-[1000] w-full max-w-[1000px] -translate-x-1/2 rounded-t-2xl bg-white">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <h3 className="text-lg font-bold">은행/증권사 선택</h3>
              <button
                onClick={() => setShowBankList(false)}
                className="text-2xl text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              {banks.map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => {
                    setSelectedBank(bank);
                    setShowBankList(false);
                  }}
                  className="w-full px-6 py-5 text-left text-base hover:bg-gray-50"
                >
                  {bank.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

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
            "은행 또는 증권사를 선택한 후",
            "계좌번호를 입력해주세요",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayConnectAccount;
