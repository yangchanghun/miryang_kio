import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPaySettings = () => {
  const navigate = useNavigate();

  const level = localStorage.getItem("level") ?? "0";

  const [alertModal, setAlertModal] = useState<boolean>(false);
  const [guide, setGuide] = useState<boolean>(false);

  const guideText: Record<string, string[]> = {
    "0": [
      "계좌 추가를 위해 오른쪽 상단 머니관리 카테고리 충전계좌 관리를 클릭해주세요",
    ],
    "1": ["카드 등록을 위해 결제관리 카테고리 결제 수단을 클릭해주세요"],
  };

  const audioMap: Record<string, string> = {
    "0": "/kakaopay/settings/1.mp3",
    "1": "/kakaopay/settings/2.mp3",
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      {/* Header */}
      <header className="border-b bg-white">
        <audio src={audioMap[level]} autoPlay />

        <div className="relative flex items-center px-5 py-3">
          <button
            onClick={() => navigate("/miryang/kakaopay/payment/main")}
            className="text-2xl"
          >
            ←
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
            설정
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {/* Basic */}
        <SettingItem label="비밀번호" onClick={() => setAlertModal(true)} />
        <SettingItem label="알림" onClick={() => setAlertModal(true)} />

        {/* Alert Box */}
        <div className="mx-5 my-4 flex gap-3 rounded-xl bg-blue-100 p-4">
          <span className="text-xl text-blue-600">ⓘ</span>
          <div className="flex-1">
            <p className="font-bold text-blue-600">기기 알림이 꺼져있습니다.</p>
            <p className="text-sm text-gray-600">설정에서 알림을 켜주세요.</p>
            <button
              onClick={() => setAlertModal(true)}
              className="mt-1 text-sm font-bold text-black"
            >
              설정 바로가기 ›
            </button>
          </div>
        </div>

        <SettingItem
          label="화면 잠금"
          value="사용 안 함"
          onClick={() => setAlertModal(true)}
        />
        <SettingItem
          label="동영상 자동 재생"
          value="항상 사용"
          onClick={() => setAlertModal(true)}
        />

        <Divider />

        {/* Money */}
        <SectionTitle title="머니 관리" />

        <SettingItem
          label="카카오페이증권 계좌"
          onClick={() => setAlertModal(true)}
        />

        <SettingItem
          label="충전계좌 관리"
          onClick={() => navigate("/miryang/kakaopay/payment/account")}
          highlight={level === "0"}
        />

        <SettingItem label="빠른송금" onClick={() => setAlertModal(true)} />
        <SettingItem label="자동충전" onClick={() => setAlertModal(true)} />
        <SettingItem label="송금한도" onClick={() => setAlertModal(true)} />
        <SettingItem label="송금확인증" onClick={() => setAlertModal(true)} />

        <Divider />

        {/* Payment */}
        <SectionTitle title="결제 관리" />

        <SettingItem
          label="결제 수단"
          onClick={() => navigate("/miryang/kakaopay/payment/card/register")}
          highlight={level === "1"}
        />
      </main>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed bottom-[250px] right-5 w-[100px] rounded-full bg-black py-3 text-white"
      >
        가이드
      </button>

      {/* Modals */}
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

export default KakaoPaySettings;

/* ---------------- sub components ---------------- */

interface SettingItemProps {
  label: string;
  value?: string;
  onClick: () => void;
  highlight?: boolean;
}

const SettingItem = ({
  label,
  value,
  onClick,
  highlight = false,
}: SettingItemProps) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-between bg-white px-6 py-5 hover:bg-gray-50"
  >
    <span
      className={`flex-1 text-left text-base ${
        highlight ? "animate-pulse font-bold" : ""
      }`}
    >
      {label}
    </span>
    {value && <span className="mr-2 text-sm text-gray-400">{value}</span>}
    <span className="text-xl text-gray-300">›</span>
  </button>
);

const Divider = () => <div className="my-4 h-2 bg-gray-100" />;

const SectionTitle = ({ title }: { title: string }) => (
  <div className="px-6 pb-2 pt-5 text-sm font-medium text-gray-400">
    {title}
  </div>
);
