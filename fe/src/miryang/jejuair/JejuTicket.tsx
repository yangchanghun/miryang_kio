import { useNavigate } from "react-router-dom";

export default function JejuTicket() {
  const navigate = useNavigate();

  const goDate = localStorage.getItem("goDate") || "";
  const returnDate = localStorage.getItem("returnDate") || "";
  const destination = localStorage.getItem("destination") || "";
  const lastName = localStorage.getItem("lastName") || "";
  const firstName = localStorage.getItem("firstName") || "";
  const departureTime = localStorage.getItem("departureTime") || "";
  const arrivalTime = localStorage.getItem("arrivalTime") || "";

  const totalAmount =
    Number(localStorage.getItem("goPrice")) +
    Number(localStorage.getItem("returnPrice"));

  const handleFinish = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key !== "authToken") localStorage.removeItem(key);
    });
    navigate("/miryang/jejuair/finish");
  };

  return (
    <div
      onClick={handleFinish}
      className="min-h-screen bg-gray-100 flex justify-center"
    >
      <audio src="/jejuair/voice/7.mp3" autoPlay />

      <div className="w-full max-w-[1000px] bg-gray-100">
        {/* HEADER */}
        <header className="sticky top-0 z-10 bg-white border-b px-5 py-4 flex items-center justify-between">
          <button className="p-2 rounded-lg hover:bg-gray-100">←</button>
          <h1 className="text-lg font-semibold text-gray-800">
            티켓 발권 완료
          </h1>
          <div className="w-8" />
        </header>

        <main className="p-5 space-y-6">
          {/* SUCCESS */}
          <section className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-3xl">✓</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              결제가 완료되었습니다!
            </h2>
            <p className="text-gray-600">항공권이 성공적으로 발권되었습니다.</p>
            <p className="text-lg font-semibold text-orange-500">
              화면을 터치해주세요
            </p>
          </section>

          {/* TICKET CARD */}
          <section className="bg-white rounded-2xl shadow border overflow-hidden">
            {/* TOP */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <div className="font-semibold">제주항공</div>
                  <div className="text-xs opacity-90">전자티켓</div>
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="opacity-90">예약번호</div>
                <div className="font-bold">[예약번호]</div>
              </div>
            </div>

            {/* PASSENGER */}
            <div className="p-5 border-b">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                탑승객
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">
                  {lastName} / {firstName}
                </span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  성인 1
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <img src="/jejuair/qr.png" className="w-14" />
              </div>
            </div>

            {/* FLIGHT - GO */}
            <div className="p-5 border-b space-y-3">
              <h3 className="text-xs font-semibold text-gray-500">가는 편</h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="font-bold">서울(김포)</div>
                  <div className="text-lg">{departureTime}</div>
                  <div className="text-xs text-gray-500">{goDate}</div>
                </div>
                <span className="text-xl">→</span>
                <div className="text-center">
                  <div className="font-bold">{destination}</div>
                  <div className="text-lg">{arrivalTime}</div>
                  <div className="text-xs text-gray-500">{goDate}</div>
                </div>
              </div>
            </div>

            {/* FLIGHT - RETURN */}
            <div className="p-5 border-b space-y-3">
              <h3 className="text-xs font-semibold text-gray-500">오는 편</h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="font-bold">{destination}</div>
                  <div className="text-lg">{departureTime}</div>
                  <div className="text-xs text-gray-500">{returnDate}</div>
                </div>
                <span className="text-xl">→</span>
                <div className="text-center">
                  <div className="font-bold">서울(김포)</div>
                  <div className="text-lg">{arrivalTime}</div>
                  <div className="text-xs text-gray-500">{returnDate}</div>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="p-5">
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                결제정보
              </h3>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">총 결제금액</span>
                <span className="font-bold text-orange-500">
                  {totalAmount.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">결제수단</span>
                <span className="font-medium">신용카드</span>
              </div>
            </div>

            {/* BARCODE */}
            <div className="bg-gray-100 p-5 text-center">
              <div className="flex justify-center gap-1 h-10 mb-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`bg-gray-800 ${
                      i % 3 === 0 ? "w-1 h-10" : "w-[2px] h-6"
                    }`}
                  />
                ))}
              </div>
              <div className="text-xs font-mono text-gray-500">
                [바코드번호]
              </div>
            </div>
          </section>

          {/* NOTICE */}
          <section className="bg-white border-l-4 border-orange-500 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">📋 중요 안내사항</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>항공기 탑승 시 신분증을 반드시 지참해주세요.</li>
              <li>출발 2시간 전까지 공항에 도착해주세요.</li>
              <li>수하물 초과 시 추가 요금이 발생할 수 있습니다.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
