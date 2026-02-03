import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* =====================
 Utils
===================== */
const getBool = (key: string): boolean => localStorage.getItem(key) === "true";

/* =====================
 Page
===================== */
export default function KakaoFriendQr() {
  const navigate = useNavigate();

  const [qrMission, setQrMission] = useState<boolean>(() =>
    getBool("qrmission"),
  );

  const handleQR = () => {
    if (qrMission) {
      alert("이미 추가된 친구입니다");
      navigate("/miryang/kakaotalk/friendadd/1");
    } else {
      alert("친구추가가 완료되었습니다 (김홍삼)");
      localStorage.setItem("qrmission", "true");
      setQrMission(true);
      navigate("/miryang/kakaotalk/friendadd/1");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Header */}
      <header className="flex items-center px-4 py-4 text-white">
        <button
          onClick={() => navigate("/miryang/kakaotalk/friendadd/1")}
          className="mr-4 flex items-center justify-center text-xl"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold">QR코드 스캔</h2>
      </header>

      {/* Content */}
      <main className="flex flex-1 items-center justify-center px-5">
        <div className="relative h-64 w-64 rounded-lg border-2 border-white sm:h-[200px] sm:w-[200px]">
          {/* Demo Label */}
          <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
            이름: 김홍삼 (테스트용 QR)
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center text-white">
              <img
                src="/kakaotalk/qrimage.png"
                alt="QR 코드"
                className="mx-auto mb-4 h-[150px] w-[150px] sm:h-[120px] sm:w-[120px]"
              />
              <p className="text-sm">QR코드를 스캔하세요</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center">
        <button
          onClick={handleQR}
          className="w-full rounded-lg bg-yellow-400 py-3 text-lg font-semibold text-white transition active:scale-95 active:bg-yellow-600"
        >
          스캔 완료 (데모)
        </button>
      </footer>
    </div>
  );
}
