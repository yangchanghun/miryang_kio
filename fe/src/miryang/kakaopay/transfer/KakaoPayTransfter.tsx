import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayTransfer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"account" | "friend" | "near">(
    "account",
  );
  const [expandMyAccounts, setExpandMyAccounts] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const myAccounts = [
    {
      id: 1,
      name: "기업은행",
      bank: "IBK기업",
      number: "123456789",
      icon: "🏦",
      color: "bg-blue-900",
    },
  ];

  const recentAccounts = [
    {
      id: 1,
      name: "홍길동",
      bank: "신한",
      number: "110123456789",
      icon: "💲",
      color: "bg-blue-400",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <audio src="/kakaopay/send/2.mp3" autoPlay />

        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={() => navigate("/miryang/kakaopay/home")}
            className="text-2xl"
          >
            ←
          </button>
          <h1 className="text-xl font-bold">어디로 보낼까요?</h1>
          <button className="text-2xl">⋮</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {[
            { key: "account", label: "계좌" },
            { key: "friend", label: "친구" },
            { key: "near", label: "내 주변" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                if (tab.key === "account") {
                  setActiveTab("account");
                } else {
                  setAlertModal(true);
                }
              }}
              className={`flex-1 py-4 text-base font-medium ${
                activeTab === tab.key
                  ? "border-b-4 border-black font-bold text-black"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-5">
        {/* Direct Transfer */}
        <div className="mb-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
          <span className="text-sm font-medium">계좌에서 바로 보내기</span>
          <button className="rounded-full border bg-white px-4 py-1 text-sm font-semibold">
            송금
          </button>
        </div>

        {/* My Accounts */}
        <section className="mb-4 rounded-2xl bg-white p-5">
          <button
            onClick={() => setExpandMyAccounts((prev) => !prev)}
            className="mb-4 flex w-full items-center justify-between text-left"
          >
            <span className="text-base font-bold">내 계좌</span>
            <span className="text-sm text-gray-500">
              +9개 {expandMyAccounts ? "∧" : "∨"}
            </span>
          </button>

          <div className="mb-4 flex flex-col gap-3">
            {myAccounts
              .slice(0, expandMyAccounts ? myAccounts.length : 3)
              .map((account) => (
                <button
                  key={account.id}
                  onClick={() => setAlertModal(true)}
                  className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white ${account.color}`}
                  >
                    {account.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-base font-bold">{account.name}</div>
                    <div className="text-sm text-gray-500">
                      {account.bank} {account.number}
                    </div>
                  </div>
                  <button className="text-2xl text-gray-300 hover:text-yellow-400">
                    ☆
                  </button>
                </button>
              ))}
          </div>

          <button
            onClick={() => setAlertModal(true)}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border text-2xl text-gray-400">
              +
            </div>
            <span className="text-base">내 계좌 불러오기</span>
          </button>
        </section>

        {/* Recent Accounts */}
        <section className="rounded-2xl bg-white p-5">
          <div className="mb-4 text-base font-bold">최근 보낸 계좌</div>

          <div className="flex flex-col gap-3">
            {recentAccounts.map((account) => (
              <button
                key={account.id}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-gray-50"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white ${account.color}`}
                >
                  {account.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-base font-bold">{account.name}</div>
                  <div className="text-sm text-gray-500">
                    {account.bank} {account.number}
                  </div>
                </div>
                <button className="text-2xl text-gray-300 hover:text-yellow-400">
                  ☆
                </button>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex gap-3 border-t bg-white px-5 py-4">
        <button
          onClick={() => setAlertModal(true)}
          className="flex h-14 w-14 items-center justify-center rounded-xl border text-2xl"
        >
          📷
        </button>
        <button
          onClick={() => navigate("/miryang/kakaopay/input")}
          className="flex-1 rounded-xl bg-yellow-300 py-4 text-lg font-bold text-brown-900"
        >
          계좌번호 입력
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
          guideSteps={["송금을 위해 계좌번호 입력 버튼을 클릭해주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayTransfer;
