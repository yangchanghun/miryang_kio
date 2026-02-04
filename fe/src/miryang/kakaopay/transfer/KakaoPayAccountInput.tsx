import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayAccountInput = () => {
  const navigate = useNavigate();

  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [showBankList, setShowBankList] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const banks = [
    "한국은행",
    "KDB산업은행",
    "IBK기업은행",
    "KB국민은행",
    "NH농협은행",
    "우리은행",
    "신한은행",
    "하나은행",
    "SC제일은행",
    "한국씨티은행",
    "카카오뱅크",
    "케이뱅크",
    "토스뱅크",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return;
    setAccountNumber(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleConfirm = () => {
    localStorage.setItem("sendbank", selectedBank);
    localStorage.setItem("accountnumber", accountNumber);
    navigate("/miryang/kakaopay/amount/input");
  };

  const isFormValid = selectedBank && accountNumber.length > 0;

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      <audio src="/kakaopay/send/3.mp3" autoPlay />

      {/* Header */}
      <header className="px-5 py-4">
        <button onClick={() => navigate(-1)} className="text-2xl font-medium">
          ←
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <label className="mb-6 block text-base text-gray-400">계좌번호</label>

          {/* Account Number */}
          <input
            type="text"
            placeholder="계좌번호"
            value={accountNumber}
            onChange={handleChange}
            className="mb-6 w-full border-b-2 border-gray-200 bg-transparent py-4 text-xl outline-none focus:border-yellow-300"
          />

          {/* Bank Select */}
          <button
            onClick={() => setShowBankList(true)}
            className="mb-4 flex w-full items-center justify-between border-b-2 border-gray-200 py-4 text-left text-xl hover:border-yellow-300"
          >
            <span className={selectedBank ? "text-black" : "text-gray-300"}>
              {selectedBank || "은행/증권사"}
            </span>
            <span className="text-sm text-gray-400">▼</span>
          </button>

          <p className="text-sm text-gray-400">
            계좌번호만 입력해도 은행을 찾아드려요.
          </p>
        </div>
      </main>

      {/* Bank List Bottom Sheet */}
      {showBankList && (
        <>
          <div
            onClick={() => setShowBankList(false)}
            className="fixed inset-0 z-40 bg-black/50"
          />
          <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[1000px] -translate-x-1/2 rounded-t-2xl bg-white">
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
                  key={bank}
                  onClick={() => {
                    setSelectedBank(bank);
                    setShowBankList(false);
                  }}
                  className="w-full px-6 py-5 text-left text-base hover:bg-gray-100"
                >
                  {bank}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 px-6 py-4">
        <button
          onClick={handleConfirm}
          disabled={!isFormValid}
          className={`w-full rounded-xl py-4 text-lg font-bold transition ${
            isFormValid
              ? "bg-yellow-300 text-brown-900 hover:bg-yellow-400"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
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
            "계좌번호를 입력해주세요",
            "은행을 선택한 뒤 확인 버튼을 눌러주세요",
          ]}
        />
      )}
    </div>
  );
};

export default KakaoPayAccountInput;
