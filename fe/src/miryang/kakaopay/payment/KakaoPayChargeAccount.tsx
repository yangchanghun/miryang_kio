import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

type Account = {
  bank: string;
  number: string | null;
  type?: string;
};

const KakaoPayChargeAccount = () => {
  const navigate = useNavigate();
  const level = localStorage.getItem("level") ?? "0";

  const [guide, setGuide] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"money" | "all">("money");
  const [connect, setConnect] = useState(false);

  const bank = localStorage.getItem("bank") ?? "";
  const accountNumber = localStorage.getItem("accountnumber");

  const accounts: Account[] = bank
    ? [{ bank, number: accountNumber, type: "주계좌" }]
    : [];

  const guideText: Record<string, string[]> = {
    "0": [
      "계좌연결을 위해 계좌 연결하기 버튼을 클릭해주세요",
      "지금 필요한 하나만 버튼을 클릭해주세요",
    ],
    "1": ["계좌 연결 확인 후 이전 버튼을 클릭 해 다음 교육을 진행합니다."],
  };

  const audioMap: Record<string, string> = {
    "0": "/kakaopay/accountregister/1.mp3",
    "1": "/kakaopay/accountregister/2.mp3",
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      {/* Header */}
      <header className="border-b bg-white">
        <audio src={audioMap[level]} autoPlay />

        <div className="flex items-center justify-between px-5 py-4">
          <button
            onClick={() => navigate("/miryang/kakaopay/payment/main")}
            className={`text-2xl ${
              level === "1"
                ? "animate-pulse text-red-500 text-4xl font-bold"
                : ""
            }`}
          >
            ←
          </button>

          <h1 className="text-lg font-bold">충전계좌</h1>
          <button className="text-2xl">🏠</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <TabButton
            active={activeTab === "money"}
            onClick={() => setActiveTab("money")}
            label="머니 충전계좌"
          />
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            label="내 모든 계좌"
            disabled
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {accounts.length > 0 ? (
          <div className="px-5 py-4">
            <div className="mb-3 flex justify-between text-sm text-gray-500">
              <p>
                충전계좌 <b>8</b>
              </p>
              <span>최근 사용한 순 ↓</span>
            </div>

            {accounts.map((acc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/kakaopay/emoticon/bank.png"
                    alt="bank"
                    className="h-9 w-9 rounded-full bg-gray-200"
                  />
                  <div>
                    <div className="flex items-center gap-2 font-bold">
                      {acc.bank} {acc.number}
                      {acc.type && (
                        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-600">
                          {acc.type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button className="rounded-full border px-4 py-1 text-sm font-semibold">
                  송금
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <img
              src="/kakaopay/emoticon/account.png"
              alt="account"
              className="mb-8 w-1/3"
            />
            <h2 className="mb-4 text-xl font-bold">
              연결된 내 계좌끼리는
              <br /> 송금 수수료가 무료!
            </h2>
            <p className="text-gray-600">
              계좌를 연결하면 더 간편해진
              <br />
              송금, 결제를 경험할 수 있어요.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 px-5 py-4">
        <button
          onClick={() => setConnect(true)}
          className="mb-3 w-full rounded-xl bg-[#FEE500] py-4 text-lg font-bold text-[#3c1e1e]"
        >
          계좌 연결하기
        </button>

        <button
          onClick={() => setAlertModal(true)}
          className="w-full text-sm text-gray-500 underline"
        >
          계좌 순서 변경하기
        </button>
      </footer>

      {/* Bottom Sheet */}
      {connect && <ConnectSheet onClose={() => setConnect(false)} />}

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
          guideSteps={guideText[level]}
        />
      )}
    </div>
  );
};

export default KakaoPayChargeAccount;

/* ---------------- sub components ---------------- */

const TabButton = ({
  label,
  active,
  onClick,
  disabled,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex-1 py-4 text-center font-medium ${
      active ? "border-b-2 border-black text-black" : "text-gray-400"
    }`}
  >
    {label}
  </button>
);

/* ---------------- bottom sheet ---------------- */

const ConnectSheet = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-end justify-center bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1000px] rounded-t-[30px] bg-white pb-8"
      >
        <div
          onClick={onClose}
          className="mx-auto my-4 h-[5px] w-[134px] rounded-full bg-gray-400"
        />

        <div className="px-6">
          <h2 className="mb-8 text-[40px] font-semibold">어떻게 연결할까요?</h2>

          <OptionRow
            icon="/kakaopay/emoticon/thunder.png"
            label="여러개를 한 번에"
          />

          <OptionRow
            icon="/kakaopay/emoticon/check.png"
            label="지금 필요한 하나만"
            onClick={() =>
              navigate("/miryang/kakaopay/payment/account/connect")
            }
          />
        </div>
      </div>
    </div>
  );
};

const OptionRow = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className="mb-6 flex cursor-pointer items-center justify-between px-6 text-2xl font-bold"
  >
    <div className="flex items-center gap-3">
      <img src={icon} alt="" className="h-10" />
      {label}
    </div>
    <span>›</span>
  </div>
);
