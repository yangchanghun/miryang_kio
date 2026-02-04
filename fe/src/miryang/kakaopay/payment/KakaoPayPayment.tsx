import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayPayment = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState<boolean>(false);
  const [guide, setGuide] = useState<boolean>(false);

  const level = localStorage.getItem("level") ?? "0";

  const guideText: Record<string, string[]> = {
    "0": ["계좌 추가를 위해 오른쪽 상단 ☰를 클릭해주세요"],
    "1": ["카드 등록을 위해 오른쪽 상단 ☰를 클릭해주세요"],
    "2": ["결제하기 버튼을 눌러 결제를 시작해보세요"],
    "3": ["상대방에게 송금을 위해 왼쪽 하단 홈버튼을 클릭해주세요"],
  };

  const audioMap: Record<string, string> = {
    "0": "/kakaopay/main/1.mp3",
    "1": "/kakaopay/main/2.mp3",
    "2": "/kakaopay/main/3.mp3",
    "3": "/kakaopay/main/4.mp3",
  };

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 pb-4">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">할일</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
              1
            </span>
          </div>

          <audio src={audioMap[level]} autoPlay />

          <div className="flex items-center gap-4 text-2xl">
            <button onClick={() => setAlertModal(true)}>🔍</button>

            <button onClick={() => setAlertModal(true)} className="relative">
              🔔
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button
              onClick={() => navigate("/miryang/kakaopay/payment/settings")}
              className={level === "0" || level === "1" ? "animate-pulse" : ""}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 space-y-4 overflow-y-auto px-5">
        {/* Money Card */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">머니결제</span>
            <span className="text-lg font-bold">39,310원 ▼</span>
          </div>
        </div>

        {/* Alert Card */}
        <div className="rounded-2xl bg-white p-5">
          <div className="mb-3 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? "bg-pink-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-bold text-pink-500">3일 남음</span>
              <h3 className="my-3 text-xl font-bold leading-snug">
                매장 결제 포인트가
                <br />곧 사라져요
              </h3>
              <button className="rounded-full bg-[#FEE500] px-6 py-2 font-bold">
                포인트 받기
              </button>
            </div>

            <div className="relative h-20 w-20 text-4xl">
              <span className="absolute left-0 top-0">🅿️</span>
              <span className="absolute bottom-0 right-0">⏰</span>
            </div>
          </div>
        </div>

        {/* Quick Menu */}
        <div
          onClick={() => setAlertModal(true)}
          className="flex justify-between gap-2"
        >
          {[
            { icon: "📋", label: "결제내역", bg: "bg-green-100" },
            { icon: "🎫", label: "쿠폰함", bg: "bg-red-100" },
            { icon: "💌", label: "멤버십", bg: "bg-yellow-100" },
            { icon: "💸", label: "긋딜", bg: "bg-blue-100" },
            { icon: "🌀", label: "소비쿠폰", bg: "bg-indigo-100" },
          ].map((item, idx) => (
            <button
              key={idx}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.bg}`}
              >
                {item.icon}
              </div>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Points */}
        <div
          onClick={() => setAlertModal(true)}
          className="rounded-2xl bg-white p-5 shadow"
        >
          <div className="mb-4 flex justify-between">
            <span className="font-bold">매장결제 포인트</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
              최근 3개월 823원 적립
            </span>
          </div>

          <div className="h-12 overflow-hidden rounded-full bg-gray-200">
            <div className="flex h-full items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 px-5 font-bold text-white">
              68원 받기
            </div>
          </div>
        </div>

        {/* Practice */}
        <div className="flex items-center gap-3">
          <button className="relative rounded-full border px-4 py-2 text-sm">
            실시간 인기혜택 ▼
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
        </div>

        {/* Pay Button */}
        <button
          onClick={() => navigate("/miryang/kakaopay/payment/barcode")}
          className={`mb-4 w-full rounded-xl bg-[#FEE500] py-5 text-lg font-bold ${
            level === "2" ? "animate-pulse" : ""
          }`}
        >
          결제하기
        </button>
      </main>

      {/* Bottom Nav */}
      <nav className="flex justify-around border-t bg-white py-2">
        {[
          {
            icon: "🏠",
            label: "홈",
            path: "/miryang/kakaopay/home",
            pulse: level === "3",
          },
          { icon: "🎁", label: "혜택" },
          { icon: "💳", label: "결제", active: true },
          { icon: "📊", label: "자산" },
          { icon: "📂", label: "증권" },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => item.path && navigate(item.path)}
            className={`flex flex-col items-center gap-1 ${
              item.pulse ? "animate-pulse" : ""
            }`}
          >
            <span className="text-2xl opacity-70">{item.icon}</span>
            <span
              className={`text-xs ${
                item.active ? "font-bold text-black" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>

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
          guideSteps={guideText[level]}
        />
      )}
    </div>
  );
};

export default KakaoPayPayment;
