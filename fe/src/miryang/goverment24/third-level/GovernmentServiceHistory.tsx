import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernmentTimerModal from "../timer/GovermentTimerModal";
import { GovernmentGuideModal } from "../guidemodal/GovernmentGuideModal";

const GovernmentServiceHistory = () => {
  const [guide, setGuide] = useState(false);
  const [modal, setModal] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const [dateRange] = useState({
    startDate: `${year}.${month}.${day}`,
    endDate: `${year}.${month}.${day}`,
  });

  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const serviceData = {
    applicationNumber: "20250923-319364423",
    submissionDate: `${year}.${month}.${day}`,
    serviceName: "주민등록표 등본 발급",
    quantity: 1,
    status: "처리완료",
    additionalInfo: "-",
  };

  const handleBack = () => {
    navigate("/miryang/goverment/overview/document");
  };

  const handleStatusClick = () => {
    setModal(true);
    setTimeout(() => {
      navigate("/miryang/goverment/complete");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-[1000px] min-h-screen flex flex-col bg-gray-50">
      <audio src="/goverment/voice/third/4.mp3" autoPlay />

      {/* Header */}
      <header className="bg-white border-b px-6 py-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              src="/goverment/icon/goverment_icon.png"
              className="w-[75px] h-[75px] rounded-full"
              alt="정부24"
            />
            <span className="text-[28px] font-bold">정부24</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
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

          <h1 className="text-[26px] font-semibold flex-1">서비스 신청 내역</h1>
        </div>
      </header>

      {/* Search */}
      <section className="bg-white px-6 py-6 space-y-4">
        <input
          value={dateRange.startDate}
          className="w-full border rounded-lg px-4 py-4 text-lg"
          readOnly
        />
        <input
          value={dateRange.endDate}
          className="w-full border rounded-lg px-4 py-4 text-lg"
          readOnly
        />
        <input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="민원 사유명"
          className="w-full border rounded-lg px-4 py-4 text-lg"
        />
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold">
          조회
        </button>
      </section>

      {/* Detail Card */}
      <main className="flex-1 px-6 py-6">
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {[
            ["접수번호", serviceData.applicationNumber],
            ["접수일", serviceData.submissionDate],
            ["민원 사유명", serviceData.serviceName],
            ["부수", serviceData.quantity],
            ["추가사항", serviceData.additionalInfo],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between px-6 py-5 border-b last:border-b-0"
            >
              <span className="text-gray-600 text-lg">{label}</span>
              <span className="text-gray-900 text-lg font-medium">{value}</span>
            </div>
          ))}

          {/* Status */}
          <div className="flex justify-between items-center px-6 py-5">
            <span className="text-gray-600 text-lg">처리상태</span>
            <div className="flex items-center gap-4">
              <span className="text-green-600 font-bold text-lg">처리완료</span>
              <button
                onClick={handleStatusClick}
                className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-bold"
              >
                문서출력
              </button>
            </div>
          </div>
        </div>
      </main>

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
            "발급이 완료되었습니다.",
            "문서출력을 선택하면 출력 시뮬레이션 후 교육이 완료됩니다.",
          ]}
        />
      )}

      {modal && (
        <GovernmentTimerModal
          modal={modal}
          setModal={setModal}
          title="문서 출력중.."
          initialTime={3}
        />
      )}
    </div>
  );
};

export default GovernmentServiceHistory;
