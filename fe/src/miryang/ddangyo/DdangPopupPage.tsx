import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

interface Permission {
  name: string;
  status: string;
  description: string;
}

export default function DdangPopupPage() {
  const [onModal, setOnModal] = useState(true);
  const navigate = useNavigate();

  const permissions: Permission[] = [
    {
      name: "알림",
      status: "(선택)",
      description: "주문상태 등 서비스 알림 전송",
    },
    {
      name: "위치설정",
      status: "(선택)",
      description: "현재 위치 자동 수신 안내 및 주변 매장 추천",
    },
    {
      name: "사진",
      status: "(선택)",
      description: "리뷰 작성 / 프로필 이미지 등록 및 업데이트",
    },
    {
      name: "카메라",
      status: "(선택)",
      description:
        "사진/동영상 리뷰 및 프로필 설정 시 사진촬영, 주문 시 QR코드 스캔",
    },
    {
      name: "마이크",
      status: "(선택)",
      description: "리뷰 작성 시 영상 업로드를 위한 촬영",
    },
  ];

  return (
    <MobileLayout>
      {/* container */}
      <div className="flex h-full items-center justify-center bg-[#f5f5f5] p-5 max-[480px]:p-4">
        {/* content */}
        <div className="w-full max-w-[320px] rounded-[20px] bg-white px-6 pt-8 pb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-[480px]:max-w-none max-[480px]:rounded-[16px] max-[480px]:px-5 max-[480px]:pt-7 max-[480px]:pb-5">
          {/* header */}
          <div className="mb-8 text-center text-[16px] font-normal leading-[1.4] text-[#333] max-[480px]:mb-7 max-[480px]:text-[15px]">
            <span className="font-semibold text-[#ff6b35]">땡겨요</span> 서비스
            이용을 위해
            <br />
            접근 권한의 허용이 필요합니다.
          </div>

          <audio src="/ddangyo/voice/1.mp3" autoPlay />

          {/* permissions */}
          <div className="mb-7">
            {permissions.map((p, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <div className="mb-1 flex items-baseline">
                  <span className="mr-1.5 text-[15px] font-semibold text-[#333] max-[480px]:text-[14px]">
                    {p.name}
                  </span>
                  <span className="text-[13px] font-normal text-[#999]">
                    {p.status}
                  </span>
                </div>
                <div className="text-[13px] leading-[1.35] text-[#666] max-[480px]:text-[12px]">
                  {p.description}
                </div>
              </div>
            ))}
          </div>

          {/* notice */}
          <div className="mb-7 text-left text-[11px] leading-[1.4] text-[#888] max-[480px]:mb-6 max-[480px]:text-[10px]">
            * 위 항목은 접근권한에 동의하지 않아도 땡겨요 서비스를 이용할 수
            있으나, 일부 기능 사용에 제한이 있을 수 있습니다.
            <br />* 단말기 설정 &gt; 땡겨요 메뉴에서도 설정하실 수 있습니다.
          </div>

          {/* confirm button */}
          <button
            onClick={() => navigate("/miryang/ddangyo/locationconsent")}
            className="w-full rounded-[25px] bg-[#ff6b35] py-4 text-[16px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#e55a2e] active:translate-y-0 active:bg-[#d14e26] max-[480px]:rounded-[22px] max-[480px]:py-3.5 max-[480px]:text-[15px]"
          >
            확인
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setOnModal(true);
        }}
        className="
    fixed
    bottom-[200px]
    right-[20px]
    rounded-full
    bg-[#ff6b35]
    px-4
    py-2.5
    text-[14px]
    font-semibold
    text-white
    shadow-[0_4px_12px_rgba(0,0,0,0.15)]
    transition-all
    hover:bg-[#e55a2e]
    hover:-translate-y-[1px]
    active:translate-y-0
    active:bg-[#d14e26]
  "
      >
        사용법 다시보기
      </button>

      <CommonModal
        onModal={onModal}
        setOnModal={setOnModal}
        title="땡겨요 이용하기"
        steps={[
          "서비스 이용을 위한 권한을 확인해주세요",
          "확인을 선택해주세요",
        ]}
      />

      <HomeButton />
    </MobileLayout>
  );
}
