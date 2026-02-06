import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const GovernmentBasicInfo: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    residentNumber: "",
    residentNumberSecond: "",
    birthYear: "2025",
    birthMonth: "01",
    birthDay: "01",
  });

  const years = Array.from({ length: 100 }, (_, i) => 2025 - i);
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  const update = (key: string, value: string) =>
    setFormData((p) => ({ ...p, [key]: value }));

  const handleConfirm = () => {
    if (
      !formData.name ||
      !formData.residentNumber ||
      !formData.residentNumberSecond
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    localStorage.setItem("identityName", formData.name);
    localStorage.setItem("identityBirthDate", formData.residentNumber);
    navigate("/miryang/goverment/mobileregister/password");
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-white">
      <audio src="/goverment/voice/first/4.mp3" autoPlay />

      {/* Header */}
      <header className="border-b px-6 py-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/goverment/icon/goverment_icon.png"
            className="w-10 h-10 rounded-full"
            alt="정부 로고"
          />
          <span className="text-[26px] font-medium">
            주민등록증 모바일 확인서비스
          </span>
        </div>

        <h2 className="text-[28px] font-bold mb-2">기본정보 입력</h2>
        <p className="text-gray-600 text-[16px] leading-relaxed">
          등록을 위해 주민등록증 정보를 입력해주세요.
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-10 space-y-10">
        {/* Name */}
        <div>
          <label className="block text-[20px] font-semibold mb-3">이름</label>
          <input
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full border-b-2 border-blue-500 py-3 text-[18px] outline-none"
          />
        </div>

        {/* Resident Number */}
        <div>
          <label className="block text-[20px] font-semibold mb-3">
            주민등록번호
          </label>
          <div className="flex items-center gap-4">
            <input
              maxLength={6}
              value={formData.residentNumber}
              onChange={(e) => update("residentNumber", e.target.value)}
              className="flex-1 text-center border-b-2 border-blue-500 py-3 text-[18px] outline-none"
            />
            <span className="text-[20px] font-bold">-</span>
            <input
              type="password"
              maxLength={7}
              value={formData.residentNumberSecond}
              onChange={(e) => update("residentNumberSecond", e.target.value)}
              className="flex-1 text-center border-b-2 border-blue-500 py-3 text-[18px] outline-none"
            />
          </div>
        </div>

        {/* Issue Date */}
        <div>
          <label className="block text-[20px] font-semibold mb-3">
            발급일자
          </label>
          <div className="flex gap-4">
            {[years, months, days].map((list, idx) => (
              <select
                key={idx}
                value={
                  idx === 0
                    ? formData.birthYear
                    : idx === 1
                      ? formData.birthMonth
                      : formData.birthDay
                }
                onChange={(e) =>
                  update(
                    idx === 0
                      ? "birthYear"
                      : idx === 1
                        ? "birthMonth"
                        : "birthDay",
                    e.target.value,
                  )
                }
                className="flex-1 border-b-2 border-blue-500 py-3 text-[18px] outline-none bg-transparent"
              >
                {list.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* ID Card Preview */}
        <div className="flex justify-center pt-6">
          <div className="w-[360px] h-[220px] rounded-lg border bg-gradient-to-br from-blue-50 to-white p-4 shadow">
            <div className="flex justify-between mb-4">
              <span className="text-[22px] font-bold">주민등록증</span>
              <span className="text-[18px] text-gray-500">000 (주00)</span>
            </div>

            <div className="flex justify-between h-[140px]">
              <div className="space-y-3 text-[16px] text-gray-600">
                <div>이름 ▶</div>
                <div>주민등록번호 ▶</div>
                <div>발급일자 ▶</div>
                <div className="pt-2 text-gray-400 text-[14px]">
                  00시장 00구청장
                </div>
              </div>

              <div className="relative">
                <div className="w-[110px] h-[90px] bg-gray-200 flex items-center justify-center">
                  👤
                </div>
                <div className="absolute -bottom-3 right-0 w-8 h-8 bg-red-500 rounded-full text-white flex items-center justify-center font-bold">
                  인
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Buttons */}
      <div className="border-t px-6 py-6 flex gap-4">
        <button
          onClick={() => navigate("/miryang/goverment/mobileregister/passauth")}
          className="flex-1 py-4 rounded-lg border text-[18px]"
        >
          취소
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 py-4 rounded-lg bg-blue-600 text-white text-[18px] font-bold hover:bg-blue-700"
        >
          확인
        </button>
      </div>

      {/* Guide */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px] bg-blue-500 text-white px-4 py-2 rounded-full shadow"
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "PASS 인증이 완료되었습니다.",
            "기본정보를 입력해 주세요.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentBasicInfo;
