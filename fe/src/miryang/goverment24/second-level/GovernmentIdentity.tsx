import { useLocation, useNavigate } from "react-router-dom";

const GovernmentIdentity: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const status = location.state?.status || false;

  const name = localStorage.getItem("identityName") || "";
  const birthDate = localStorage.getItem("identityBirthDate") || "";

  const realBirthDate =
    birthDate.length === 6
      ? `${birthDate.slice(0, 2)}.${birthDate.slice(2, 4)}.${birthDate.slice(4, 6)}`
      : "";

  const handleComplete = () => {
    localStorage.setItem("level", status ? "3-level" : "2-level");
    navigate("/miryang/goverment/main");
  };

  return (
    <div
      className="mx-auto max-w-[1000px] min-h-screen flex flex-col
                    bg-gradient-to-b from-blue-100 to-white"
    >
      {/* Header */}
      <header className="px-6 py-4">
        <div
          className="flex items-center justify-center gap-3
                        bg-white/90 rounded-full px-6 py-3 border"
        >
          <img
            src="/goverment/icon/goverment_icon.png"
            alt="정부 로고"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-[26px] font-medium">
            주민등록증 모바일 확인서비스
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex justify-center items-center px-6">
        <div
          className="w-full max-w-[800px] bg-white rounded-2xl
                        shadow-xl p-10"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-10">
            <div
              className="w-[300px] h-[300px] rounded-xl overflow-hidden
                            bg-gray-100 flex items-center justify-center"
            >
              <img
                src="/goverment/img/profile.png"
                alt="프로필"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info + QR */}
          <div className="flex justify-between items-center">
            {/* Info */}
            <div className="space-y-4">
              <h2 className="text-[44px] font-bold">{name}</h2>

              <p className="text-[34px] font-semibold text-gray-800">
                {realBirthDate}
              </p>

              <p className="text-[34px] text-gray-500">서울시 중구</p>
            </div>

            {/* QR */}
            <div className="flex items-center justify-center">
              <img
                src="/goverment/img/barcode.png"
                alt="QR 코드"
                className="w-[140px] h-[140px]"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Button */}
      <div className="px-6 py-6 bg-white border-t">
        <button
          onClick={handleComplete}
          className="w-full py-5 rounded-xl
                     bg-blue-600 text-white
                     text-[20px] font-bold
                     hover:bg-blue-700"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GovernmentIdentity;
