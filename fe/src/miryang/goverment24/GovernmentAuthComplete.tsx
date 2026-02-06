import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GovernmentGuideModal } from "./guidemodal/GovernmentGuideModal";

const GovernmentAuthComplete: React.FC = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState(false);

  const handleConfirm = () => {
    localStorage.setItem("level", "1-level");
    navigate("/miryang/goverment/main");
  };

  const handleCancel = () => {
    navigate("/miryang/goverment/kakaosuccess");
  };

  return (
    <div className="relative mx-auto max-w-[1000px] min-h-screen bg-white px-6 py-8">
      <audio src="/goverment/voice/zero/7.mp3" autoPlay />

      {/* Close Button */}
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      {/* Content */}
      <div className="pt-10">
        {/* Title */}
        <h1 className="text-[32px] font-bold text-gray-800 text-center mb-6">
          인증을 진행해 주세요.
        </h1>

        {/* Description */}
        <div className="text-center text-[18px] text-gray-600 leading-relaxed mb-10 space-y-2">
          <p>인증되신 휴대폰으로 인증 요청 메시지를 보냈습니다.</p>
          <p>
            메시지를 받지 못했다면 사용하지 않거나 전파가 약한 곳에서는 수신이
            어려울 수 있습니다.
          </p>
          <p>전파가 좋은 장소에서 다시 시도해 주세요.</p>
        </div>

        {/* Phone Illustration */}
        <div className="flex justify-center mb-10">
          <div className="w-[180px] h-[320px] rounded-[30px] border-4 border-gray-300 flex items-center justify-center bg-gray-50">
            <div className="w-[120px] h-[120px] bg-yellow-300 rounded-2xl flex items-center justify-center shadow">
              <span className="font-extrabold text-[20px] text-gray-800">
                TALK
              </span>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="border-t pt-6">
          <h3 className="text-[20px] font-bold text-gray-800 mb-4">
            문의 시 주의사항
          </h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 font-bold">
                1
              </span>
              <p className="text-gray-700 text-[16px]">
                카카오 인증서 이용에 문제가 있는 경우,
                <br />
                [고객센터 도움말]을 통해 해당 업체에 문의해 주세요.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 font-bold">
                2
              </span>
              <p className="text-gray-700 text-[16px]">
                문제가 지속되면 [고객센터 문의하기] 또는
                <br />
                [생활불편 신고] 게시판을 이용해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[1000px] mx-auto bg-white border-t px-6 py-4 flex gap-4">
        <button
          onClick={handleCancel}
          className="flex-1 py-4 rounded-lg text-lg font-bold
                     bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          닫기
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 py-4 rounded-lg text-lg font-bold
                     bg-blue-600 text-white hover:bg-blue-700"
        >
          인증 완료
        </button>
      </div>

      {/* Guide Button */}
      <button
        onClick={() => setGuide(true)}
        className="fixed right-5 bottom-[250px]
                   bg-blue-500 text-white px-4 py-2
                   rounded-full shadow"
      >
        가이드
      </button>

      {guide && (
        <GovernmentGuideModal
          onModal={guide}
          setOnModal={setGuide}
          guideSteps={["인증 완료 버튼을 누르면 인증이 마무리됩니다."]}
        />
      )}
    </div>
  );
};

export default GovernmentAuthComplete;
