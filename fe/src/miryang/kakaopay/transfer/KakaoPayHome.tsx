import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPayGuideModal } from "../guide/KakaoPayGuideModal";

const KakaoPayHome = () => {
  const navigate = useNavigate();
  const [alertModal, setAlertModal] = useState(false);
  const [guide, setGuide] = useState(false);

  const menuItems = [
    { id: 1, icon: "📊", label: "결제", bg: "bg-gray-100" },
    { id: 2, icon: "📈", label: "주식모으기", bg: "bg-red-50" },
    { id: 3, icon: "💬", label: "대출비교", bg: "bg-green-50" },
    { id: 4, icon: "💬", label: "비상금대출", bg: "bg-green-50" },
    { id: 5, icon: "💸", label: "긋딜", bg: "bg-blue-50" },
    { id: 6, icon: "🌀", label: "소비쿠폰", bg: "bg-gray-100" },
    { id: 7, icon: "💳", label: "손해보험", bg: "bg-yellow-50" },
    { id: 8, icon: "⌄", label: "더보기", bg: "bg-gray-100" },
  ];

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1000px] flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white pb-4">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">할일</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
              1
            </span>
          </div>
          <audio src="/kakaopay/send/1.mp3" autoPlay />
          <div className="flex gap-4">
            <button
              onClick={() => setAlertModal(true)}
              className="relative text-xl"
            >
              🔔
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button onClick={() => setAlertModal(true)} className="text-xl">
              ☰
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mx-5 flex items-center gap-2 rounded-full bg-gray-100 px-4 py-3">
          <span>🔍</span>
          <span className="text-sm text-purple-400">
            온전자보험 추천 키워드를 확인하세요.
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto px-5 py-4">
        {/* Promo */}
        <div className="mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6">
          <div className="mb-10 flex justify-between">
            <h3 className="text-lg font-bold leading-snug">
              트래블로그 체크카드
              <br />
              3가지 미션 보러가기
            </h3>
            <button
              onClick={() => setAlertModal(true)}
              className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-bold"
            >
              바로보기
            </button>
          </div>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 1 ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Money */}
        <div className="mb-4 rounded-2xl bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              페이머니 <span className="cursor-pointer">ⓘ</span>
            </div>
            <button className="text-xl font-bold">39,400원 ›</button>
          </div>

          <div className="mb-4 flex justify-between gap-3">
            <button
              onClick={() => setAlertModal(true)}
              className="rounded-full bg-blue-500 px-6 py-4 text-white font-semibold"
            >
              이자 혜택 받기
            </button>
            <button
              onClick={() => setAlertModal(true)}
              className="rounded-full bg-gray-100 px-6 py-4 font-semibold"
            >
              충전
            </button>
            <button
              onClick={() => navigate("/miryang/kakaopay/transfer")}
              className="rounded-full bg-yellow-300 px-6 py-4 font-bold heartbeat"
            >
              송금
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 1 ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Menu */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setAlertModal(true)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.bg}`}
              >
                {item.icon}
              </div>
              <span className="text-xs text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Ad */}
        <div
          onClick={() => setAlertModal(true)}
          className="mb-6 rounded-2xl bg-white p-6"
        >
          <div className="mb-4 flex justify-between items-center">
            <div>
              <div className="text-sm font-bold">현대캐피탈 신차리스</div>
              <div className="text-lg font-bold">2년만 타고 자유반납!</div>
              <div className="text-xs text-gray-400">
                조합감사실9월 250925-001호
              </div>
            </div>
            <div className="text-5xl">🚗</div>
          </div>
          <div className="flex justify-center gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 0 ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="flex border-t border-gray-200 bg-white py-2">
        {[
          { icon: "🏠", label: "홈", active: true },
          { icon: "🎁", label: "혜택" },
          {
            icon: "💳",
            label: "결제",
            onClick: () => navigate("/miryang/kakaopay/payment/main"),
          },
          { icon: "📊", label: "자산" },
          { icon: "📂", label: "증권" },
        ].map((item, i) => (
          <button
            key={i}
            onClick={item.onClick ?? (() => setAlertModal(true))}
            className={`flex flex-1 flex-col items-center text-xs ${
              item.active ? "font-bold text-black" : "text-gray-400"
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            {item.label}
          </button>
        ))}
      </nav>

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
          guideSteps={["상대방에게 송금을 위해 송금 버튼을 눌러주세요"]}
        />
      )}
    </div>
  );
};

export default KakaoPayHome;
