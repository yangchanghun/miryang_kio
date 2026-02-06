import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernmentTimerModal from "../timer/GovermentTimerModal";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const GovernmentDocumentApplication = () => {
  const [guide, setGuide] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    province: "seoul",
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/miryang/goverment/overview/service");
  };

  const handleNext = () => {
    setModal(true);
    setTimeout(() => {
      navigate("/miryang/goverment/overview/history");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-gray-100">
      <audio src="/goverment/voice/third/3.mp3" autoPlay />

      {/* Header */}
      <header className="bg-white border-b px-6 py-5">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img
              src="/goverment/icon/goverment_icon.png"
              alt="정부24"
              className="w-[75px] h-[75px] rounded-full"
            />
            <span className="text-[26px] font-bold text-gray-800">정부24</span>
          </div>

          <button className="flex flex-col items-center text-gray-600 text-sm">
            ☰<span>전체메뉴</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h1 className="text-[26px] font-semibold">
            주민등록표 등본(초본) 발급
          </h1>
        </div>

        <p className="text-gray-600 text-[18px]">신청할 서비스를 선택하세요.</p>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 space-y-6">
        {/* Notice */}
        <section className="bg-white rounded-xl p-6 shadow flex gap-4">
          <div className="text-green-600 text-xl">✔</div>
          <div>
            <h3 className="text-[20px] font-semibold mb-3">시작하기 전에</h3>
            <ul className="text-[18px] text-gray-600 space-y-2 list-disc pl-5">
              <li>
                본 민원은 <b className="text-blue-600">전자신청</b>이
                불가능합니다.
              </li>
              <li>
                <b className="text-blue-600">전자동의서</b> 수집 민원입니다.
              </li>
            </ul>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white rounded-xl p-6 shadow space-y-6">
          <h3 className="text-[25px] font-bold border-b pb-3">신청 내용</h3>

          {/* Address */}
          <div>
            <label className="block text-[20px] font-semibold mb-3">
              주민등록표 주소 확인 (필수)
            </label>

            <select
              value={formData.province}
              onChange={(e) => setFormData({ province: e.target.value })}
              className="w-full p-4 text-[18px] border rounded-lg"
            >
              <option value="seoul">서울특별시</option>
              <option value="gyeonggi">경기도</option>
              <option value="incheon">인천광역시</option>
              <option value="busan">부산광역시</option>
            </select>

            <p className="mt-3 text-sm text-gray-500">
              ※ 주민등록지 주소가 다를 경우 발급이 제한될 수 있습니다.
            </p>
          </div>

          {/* Issue Type */}
          <div>
            <h4 className="text-[22px] font-semibold mb-4">
              발급형태 선택 (필수)
            </h4>

            <div className="space-y-3 text-[20px]">
              <label className="flex items-center gap-3">
                <input type="radio" checked />
                전체 발급
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" />
                선택 발급
              </label>
            </div>

            <p className="mt-4 text-gray-500 text-sm">
              과거 주소 변동사항을 제외한 모든 정보가 표시됩니다.
            </p>
          </div>
        </section>

        {/* Receive Method */}
        <section className="bg-white rounded-xl p-6 shadow space-y-4">
          <h3 className="text-[25px] font-bold border-b pb-3">수령 방법</h3>

          <div className="space-y-3 text-[20px]">
            <label className="flex items-center gap-3">
              <input type="radio" checked />
              전체 발급
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" />
              온라인 발급 (본인 출력)
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" />
              전자문서지갑
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" />
              우편 수령
            </label>
          </div>
        </section>
      </main>

      {/* Bottom */}
      <div className="bg-white border-t p-6">
        <button
          onClick={handleNext}
          className="w-full py-5 bg-blue-600 text-white
                     rounded-xl text-[18px] font-bold
                     hover:bg-blue-700"
        >
          다음
        </button>
      </div>

      {modal && (
        <GovernmentTimerModal
          modal={modal}
          setModal={setModal}
          initialTime={3}
          title="발급중.."
        />
      )}

      {/* Guide */}
      <button
        className="fixed right-5 bottom-[250px] bg-blue-500 text-white px-4 py-2 rounded-full shadow"
        onClick={() => setGuide(true)}
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={[
            "주소 확인 및 발급 형태를 확인한 후 다음 버튼을 선택해주세요.",
            "발급이 자동으로 진행됩니다.",
          ]}
        />
      )}
    </div>
  );
};

export default GovernmentDocumentApplication;
