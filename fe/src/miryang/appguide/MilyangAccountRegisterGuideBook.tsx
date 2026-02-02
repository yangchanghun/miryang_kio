// MilyangAccountRegisterGuideBook.jsx
import { useState } from "react";
import "./MilyangAccountRegisterGuideBook.css"; // CSS 파일 import
import HomeButton from "../../utils/HomeButton";
import { useNavigate } from "react-router-dom";
type PageProps = {
  onNextPage: () => void;
};

// 첫 번째 페이지 컴포넌트
function MilyangAccount1({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account">
      <div className="milyang-account-background" />

      <div className="milyang-account-title">밀양사랑카드</div>

      <div className="milyang-account-menu-icon">
        <div className="milyang-account-menu-icon-inner" />
      </div>

      <div className="milyang-account-menu-line milyang-account-menu-line-1"></div>
      <div className="milyang-account-menu-line milyang-account-menu-line-2"></div>
      <div className="milyang-account-menu-line milyang-account-menu-line-3"></div>

      <div className="milyang-account-card-section" />

      <div className="milyang-account-arrow-right"></div>
      <div className="milyang-account-arrow-left"></div>

      <img
        className="milyang-account-profile-image"
        src="/miryang/cardregister/wallet.png"
        alt="프로필"
      />

      <div className="milyang-account-welcome-text">
        자주 사용하는 계좌를 연결하고
        <br />
        합리적인 소비를 시작해 보세요 &gt;
      </div>

      <div className="milyang-account-divider milyang-account-divider-top"></div>
      <div className="milyang-account-divider milyang-account-divider-bottom"></div>

      <div
        className="milyang-account-connect-text heartbeat"
        onClick={onNextPage}
      >
        은행 계좌 연결하기 &gt;
      </div>

      <div className="milyang-account-circle-icon" />

      <img
        className="milyang-account-wallet-icon"
        src="/miryang/cardregister/pigcard.png"
        alt="지갑 아이콘"
      />

      <div className="milyang-account-amount-label">사용 가능 금액</div>

      <div className="milyang-account-amount-value">0원</div>

      <div className="milyang-account-balance-section milyang-account-balance-section-1" />
      <div className="milyang-account-balance-section milyang-account-balance-section-2" />

      <div className="milyang-account-balance-label milyang-account-balance-label-1">
        충전 잔액
      </div>

      <div className="milyang-account-balance-label milyang-account-balance-label-2">
        밀양시 추가형인센티브
      </div>

      <img
        className="milyang-account-info-icon"
        src="https://placehold.co/26x26"
        alt="정보 아이콘"
      />

      <div className="milyang-account-balance-value milyang-account-balance-value-1">
        <span className="milyang-account-balance-amount">0 원</span>
        <span className="milyang-account-balance-arrow"> &gt;</span>
      </div>

      <div className="milyang-account-balance-value milyang-account-balance-value-2">
        <span className="milyang-account-balance-amount">0 원</span>
        <span className="milyang-account-balance-arrow"> &gt;</span>
      </div>

      <div className="milyang-account-bottom-nav" />

      <img
        className="milyang-account-nav-icon milyang-account-nav-icon-1"
        src="/miryang/cardregister/plus.png"
        alt="충전 아이콘"
      />

      <div className="milyang-account-nav-text milyang-account-nav-text-1">
        충전
      </div>

      <div className="milyang-account-nav-text milyang-account-nav-text-2">
        혜택정보
      </div>

      <img
        className="milyang-account-nav-icon milyang-account-nav-icon-2"
        src="/miryang/cardregister/money.png"
        alt="혜택정보 아이콘"
      />

      <div className="milyang-account-nav-text milyang-account-nav-text-3">
        이용내역
      </div>

      <img
        className="milyang-account-nav-icon milyang-account-nav-icon-3"
        src="/miryang/cardregister/percent.png"
        alt="이용내역 아이콘"
      />

      <div className="milyang-account-incentive-container" />
      <div className="milyang-account-incentive-header" />

      <div className="milyang-account-incentive-label milyang-account-incentive-label-1">
        인센티브
      </div>

      <div className="milyang-account-incentive-value milyang-account-incentive-value-1">
        <span className="milyang-account-incentive-percent">10%</span>
        <span className="milyang-account-incentive-text"> 적립</span>
      </div>

      <div className="milyang-account-incentive-value-2">50,000원</div>

      <div className="milyang-account-incentive-label milyang-account-incentive-label-2">
        받을 수 있는 인센티브
      </div>

      <div className="milyang-account-divider-gray"></div>

      <div className="milyang-account-month-benefit">
        <span className="milyang-account-month-text">7월</span>
        <span className="milyang-account-benefit-text"> 혜택</span>
      </div>

      <div className="milyang-account-status-badge" />

      <div className="milyang-account-status-text">제공 중</div>

      <div className="milyang-account-benefit-button" />

      <div className="milyang-account-benefit-button-text">
        혜택 알아보기 &gt;
      </div>

      <img
        className="milyang-account-bottom-image"
        src="/miryang/cardregister/mywallet.png"
        alt="하단 이미지"
      />
    </div>
  );
}

// 두 번째 페이지 컴포넌트 - 계좌연결 동의 페이지
function MilyangAccount2({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account2">
      <div className="milyang-account2-title">계좌연결</div>

      {/* 뒤로가기 화살표 */}
      <div className="milyang-account2-arrow-right"></div>
      <div className="milyang-account2-arrow-left"></div>

      <div className="milyang-account2-main-text">
        서비스를 이용하기 위해
        <br />
        필수 항목에 동의해주세요.
      </div>

      <div className="milyang-account2-sub-text">
        고객님이 이용하는 모든 계좌 서비스는
        <br />
        금융결제원의 오픈뱅킹을 사용하여 제공됩니다.
      </div>

      <div className="milyang-account2-description">
        계좌 연결 후 충전하시는 금액은 선불충전금으로 예금자 보호법상
        <br />
        보호대상에 포함되지는 않지만, '지역사랑상품권 서비스
        <br />
        제공자인 각 지방자치단체'에서 직접 고객의 선불충전금을
        <br />
        안전하게 관리하고 있습니다.
      </div>

      {/* 구분선 */}
      <div className="milyang-account2-divider"></div>

      {/* 하단 동의 버튼 */}
      <div className="milyang-account2-button-bg" />
      <div
        className="milyang-account2-button-text heartbeat"
        onClick={onNextPage}
      >
        동의하고 다음 진행하기
      </div>

      {/* 동의 항목들 */}
      <div className="milyang-account2-agreement-list">
        오픈뱅킹서비스 금융거래정보제공 동의서
        <br />
        오픈뱅킹 출금/조회 이용약관
        <br />
        오픈뱅킹서비스 개인(신용)정보 제3자 제공 동의서
        <br />
        오픈뱅킹 서비스 이용약관
      </div>

      {/* 화살표들 */}
      <div className="milyang-account2-agreement-arrows">
        &gt;
        <br />
        &gt;
        <br />
        &gt;
        <br />
        &gt;
      </div>
    </div>
  );
}

// 세 번째 페이지 컴포넌트 - 계좌번호 입력 페이지
function MilyangAccount3({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account3">
      {/* 뒤로가기 화살표 */}
      <div className="milyang-account3-arrow-right"></div>
      <div className="milyang-account3-arrow-left"></div>

      <div className="milyang-account3-title">충전 계좌 연결</div>

      <div className="milyang-account3-main-text">
        본인 명의의 계좌번호를
        <br />
        입력해 주세요
      </div>

      <div className="milyang-account3-benefit-text">
        <span className="milyang-account3-benefit-normal">
          계좌 연결 시,
          <br />
        </span>
        <span className="milyang-account3-benefit-highlight">
          카드 한도 금액이 상향돼요!
        </span>
      </div>

      {/* 은행 선택 박스 */}
      <div className="milyang-account3-bank-select-box" />
      <div className="milyang-account3-bank-button" onClick={onNextPage} />

      {/* 계좌번호 입력 박스 */}
      <div className="milyang-account3-account-input-box" />

      <div className="milyang-account3-bank-placeholder">
        은행을 선택해 주세요.
      </div>
      <div
        className="milyang-account3-bank-button-text heartbeat"
        onClick={onNextPage}
      >
        은행선택
      </div>
      <div className="milyang-account3-account-placeholder">
        계좌번호를 입력하세요.
      </div>
      <div className="milyang-account3-warning-text">
        평생계좌번호는 등록할 수 없습니다.
      </div>
    </div>
  );
}
// 네 번째 페이지 컴포넌트 - 은행 선택 페이지
function MilyangAccount4({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account4">
      {/* 뒤로가기 화살표 */}
      <div className="milyang-account4-arrow-right"></div>
      <div className="milyang-account4-arrow-left"></div>

      <div className="milyang-account4-title">은행선택</div>

      <div className="milyang-account4-tab-bank">은행</div>
      <div className="milyang-account4-tab-securities">증권사</div>

      {/* 탭 구분선 */}
      <div className="milyang-account4-divider"></div>
      <div className="milyang-account4-active-indicator"></div>

      {/* 은행 목록 - 클릭 가능한 영역 */}
      <div
        className="milyang-account4-bank-list heartbeat"
        onClick={onNextPage}
      >
        <img src="/miryang/banks.png" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
// 다섯 번째 페이지 컴포넌트 - ARS 전화 인증 페이지
function MilyangAccount5({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account5">
      {/* 뒤로가기 화살표 */}
      <div className="milyang-account5-arrow-right"></div>
      <div className="milyang-account5-arrow-left"></div>

      <div className="milyang-account5-title">충전 계좌 연결</div>

      <div className="milyang-account5-main-text">
        ARS전화 인증을 요청하세요.
      </div>

      <div className="milyang-account5-instruction-text">
        <span className="milyang-account5-instruction-highlight">
          화면과 음성으로 안내하는
          <br />
        </span>
        <span className="milyang-account5-instruction-normal">
          두 자리 숫자를 입력하고 통화를 종료하세요.
        </span>
      </div>

      {/* 은행 선택 박스 */}
      <div className="milyang-account5-bank-display-box" />
      <div className="milyang-account5-bank-change-button" />

      {/* 계좌번호 표시 박스 */}
      <div className="milyang-account5-account-display-box" />

      <div className="milyang-account5-bank-name">지역농협</div>
      <div className="milyang-account5-bank-change-text">은행선택</div>
      <div className="milyang-account5-account-number">356</div>
      <div className="milyang-account5-warning-text">
        평생계좌번호는 등록할 수 없습니다.
      </div>

      {/* 인증하기 버튼 */}
      <div className="milyang-account5-verify-button" onClick={onNextPage} />
      <div
        className="milyang-account5-verify-button-text heartbeat"
        onClick={onNextPage}
      >
        인증하기
      </div>
    </div>
  );
}
// 여섯 번째 페이지 컴포넌트 - ARS 전화 요청 모달 페이지
function MilyangAccount6({ onNextPage }: PageProps) {
  const [isCallRequested, setIsCallRequested] = useState(false);

  const handleCallRequest = () => {
    setIsCallRequested(true);
    // 2-3초 후 다음 페이지로 이동
    setTimeout(() => {
      onNextPage();
    }, 2500);
  };

  return (
    <div className="milyang-account6">
      {/* 뒤로가기 화살표 */}
      <div className="milyang-account6-arrow-right"></div>
      <div className="milyang-account6-arrow-left"></div>

      <div className="milyang-account6-title">충전 계좌 연결</div>

      <div className="milyang-account6-main-text">
        ARS전화 인증을 요청하세요.
      </div>

      <div className="milyang-account6-instruction-text">
        <span className="milyang-account6-instruction-highlight">
          화면과 음성으로 안내하는
          <br />
        </span>
        <span className="milyang-account6-instruction-normal">
          두 자리 숫자를 입력하고 통화를 종료하세요.
        </span>
      </div>

      {/* 은행 선택 박스 */}
      <div className="milyang-account6-bank-display-box" />
      <div className="milyang-account6-bank-change-button" />

      {/* 계좌번호 표시 박스 */}
      <div className="milyang-account6-account-display-box" />

      <div className="milyang-account6-bank-name">지역농협</div>
      <div className="milyang-account6-bank-change-text">은행선택</div>
      <div className="milyang-account6-account-number">356</div>
      <div className="milyang-account6-warning-text">
        평생계좌번호는 등록할 수 없습니다.
      </div>

      {/* 인증하기 버튼 */}
      <div className="milyang-account6-verify-button" />
      <div className="milyang-account6-verify-button-text">인증하기</div>

      {/* 모달 오버레이 */}
      <div className="milyang-account6-modal-overlay" />

      {/* 모달 */}
      <div className="milyang-account6-modal">
        {/* 모달 닫기 버튼 */}
        <div className="milyang-account6-close-arrow-right"></div>
        <div className="milyang-account6-close-arrow-left"></div>

        {/* 전화 이펙트 */}
        {isCallRequested && (
          <div className="milyang-account6-phone-effect">
            📞 가상 인증중 입니다...
          </div>
        )}
      </div>

      {/* 숫자 표시 - 모달 밖으로 분리 */}
      <div className="milyang-account6-number-display">
        <div className="milyang-account6-number">84</div>
      </div>

      {/* 설명 텍스트들 - 모달 밖으로 분리 */}
      <div className="milyang-account6-instruction">
        ARS본인인증 전화를 요청하고
        <br />
        음성 안내에 따라 위의 번호를 입력하세요.
      </div>

      <div className="milyang-account6-timer-warning">
        인증번호는 118초 동안 유효합니다.
      </div>

      {/* 모달 버튼 */}
      <div
        className="milyang-account6-modal-button"
        onClick={handleCallRequest}
      />
      <div
        className="milyang-account6-modal-button-text heartbeat"
        onClick={handleCallRequest}
      >
        <span className="milyang-account6-modal-ars">ARS</span>
        <span className="milyang-account6-modal-call-text">전화 요청하기</span>
      </div>
    </div>
  );
}
// 일곱 번째 페이지 컴포넌트 - 고객확인정보 등록 페이지
function MilyangAccount7({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account7">
      {/* 뒤로가기 버튼 */}
      <div className="milyang-account7-back-button">&lt;</div>

      <div className="milyang-account7-main-text">
        안전한 밀양사랑카드
        <br />
        서비스 이용을 위해
        <br />
        고객확인정보를 등록해주세요.
      </div>

      {/* 직업 섹션 */}
      <div className="milyang-account7-job-label">직업</div>
      <div className="milyang-account7-job-input-box" />
      <div className="milyang-account7-job-text">급여소득자</div>
      <div className="milyang-account7-job-arrow"></div>

      {/* 자택 주소 섹션 */}
      <div className="milyang-account7-address-label">자택 주소</div>
      <div className="milyang-account7-address-input-box" />
      <div className="milyang-account7-address-change-button" />
      <div className="milyang-account7-address-text">
        경상남도 밀양시 미리벌중앙로...
      </div>
      <div className="milyang-account7-address-change-text">주소 변경</div>

      {/* 상세 주소 섹션 */}
      <div className="milyang-account7-detail-address-box" />
      <div className="milyang-account7-detail-address-text">상세 주소</div>

      {/* 하단 회색 영역 */}
      <div className="milyang-account7-bottom-section" />

      {/* 확인 질문 */}
      <div className="milyang-account7-question">
        밀양사랑카드의
        <br />
        계정과 카드가 홍길동님 소유인가요?
      </div>

      {/* 답변 버튼들 */}
      <div className="milyang-account7-yes-button" onClick={onNextPage} />
      <div className="milyang-account7-no-button" />
      <div className="milyang-account7-yes-text" onClick={onNextPage}>
        네, 맞습니다.
      </div>
      <div className="milyang-account7-no-text">아니요</div>

      {/* 다음 버튼 */}
      <div onClick={onNextPage} className="milyang-account7-next-button" />
      <div
        onClick={onNextPage}
        className="milyang-account7-next-text heartbeat"
      >
        다음
      </div>
    </div>
  );
}
// 여덟 번째 페이지 컴포넌트 - 계좌 연결 완료 페이지
function MilyangAccount8({ onNextPage }: PageProps) {
  return (
    <div className="milyang-account8">
      {/* 완료 체크 아이콘 */}
      <div className="milyang-account8-check-circle" />
      <div className="milyang-account8-check-mark" />

      <div className="milyang-account8-title">
        충전 계좌 연결이
        <br />
        완료되었습니다.
      </div>

      {/* 한도 상향 알림 */}
      <div className="milyang-account8-limit-notification" />
      <div className="milyang-account8-info-icon" />
      <img
        className="milyang-account8-info-image"
        src="https://placehold.co/23x23"
        alt="정보 아이콘"
      />
      <div className="milyang-account8-limit-text">
        카드 보유 한도도 상향되었어요!
      </div>

      <div className="milyang-account8-subtitle">
        이 계좌로 카드를 충전할 수 있습니다.
      </div>

      {/* 계좌 정보 박스 */}
      <div className="milyang-account8-info-box" />
      <div className="milyang-account8-info-labels">
        연결은행
        <br />
        계좌번호
        <br />
        휴대폰번호
      </div>
      <div className="milyang-account8-info-values">
        <span className="milyang-account8-separator">|</span>
        <span className="milyang-account8-value">
          {" "}
          지역농협
          <br />
        </span>
        <span className="milyang-account8-separator">|</span>
        <span className="milyang-account8-value">
          {" "}
          35610834*****
          <br />
        </span>
        <span className="milyang-account8-separator">|</span>
        <span className="milyang-account8-value"> 010-****-****</span>
      </div>

      <div className="milyang-account8-warning-title">꼭 확인해주세요!</div>

      <div className="milyang-account8-warning-text">
        <span className="milyang-account8-warning-normal">
          은행에서 자동이체 관련 문자를 받을 수 있습니다.
          <br />
          자동이체가 아닌,{" "}
        </span>
        <span className="milyang-account8-warning-highlight">
          충전 시 1회성 출금 계좌를 재확인
        </span>
        <span className="milyang-account8-warning-normal">
          한 것이므로 안심
          <br />
          하세요.
          <br />
          고객님의 요청 없이 출금/이체를 하지 않습니다.
        </span>
      </div>

      {/* 확인 버튼 */}
      <div className="milyang-account8-confirm-button" onClick={onNextPage} />
      <div className="milyang-account8-confirm-text" onClick={onNextPage}>
        확인
      </div>
    </div>
  );
}
function MilyangAccountRegisterGuideBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const handleNextPage = (nextIndex: number) => {
    if (nextIndex < 8) {
      // 총 7개 페이지
      setCurrentPage(nextIndex);
    } else {
      console.log("마지막 페이지입니다.");
    }
  };

  const voiceArray = [
    "/milyangvoice/3/1.mp3",
    "/milyangvoice/3/2.mp3",
    "/milyangvoice/3/3.mp3",
    "/milyangvoice/3/4.mp3",
    "/milyangvoice/3/5.mp3",
    "/milyangvoice/3/6.mp3",
    "/milyangvoice/3/7.mp3",
    "/milyangvoice/3/8.mp3",
  ];

  const pages = [
    {
      component: <MilyangAccount1 onNextPage={() => handleNextPage(1)} />,
      ment: "은행 계좌 연결을 위해 상단의 버튼을 클릭해주세요.",
    },
    {
      component: <MilyangAccount2 onNextPage={() => handleNextPage(2)} />,
      ment: "동의서 및 약관을 확인 하신 후 아래 동의하고 다음 진행하기를 선택해주세요!",
    },
    {
      component: <MilyangAccount3 onNextPage={() => handleNextPage(3)} />,
      ment: "계좌 연결을 위해 은행선택 버튼을 선택해주세요!",
    },
    {
      component: <MilyangAccount4 onNextPage={() => handleNextPage(4)} />,
      ment: "본인 명의로 사용중인 은행을 선택해주세요!",
    },
    {
      component: <MilyangAccount5 onNextPage={() => handleNextPage(5)} />,
      ment: "은행선택과 계좌번호 입력을 다 하셨다면 인증하기 버튼을 선택해주세요!",
    },
    {
      component: <MilyangAccount6 onNextPage={() => handleNextPage(6)} />,
      ment: "ARS전화를 요청해 화면에 보이는 숫자를 입력해주세요",
    },
    {
      component: <MilyangAccount7 onNextPage={() => handleNextPage(7)} />,
      ment: "밀양사랑카드의 계정과 카드가 본인명의라면 다음을 선택해주세요!",
    },
    {
      component: <MilyangAccount8 onNextPage={() => handleNextPage(8)} />,
      ment: "계좌 연결이 잘 완료됐어요! 이제 진짜 연결을 시작해볼까요? 아래 [교육 마치기] 버튼을 누르면 교육이 끝납니다.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "20px",
        background: " linear-gradient(135deg, #f472b6, #fda4af, #e9d5ff)",
      }}
    >
      <HomeButton address={"milyang"} />
      {pages[currentPage] && pages[currentPage].component}
      <audio src={voiceArray[currentPage]} autoPlay></audio>

      <div
        style={{
          marginTop: "20px",
          padding: "15px 25px",
          backgroundColor: "#FFB5D6",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "600",
          color: "#333",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {pages[currentPage] && pages[currentPage].ment}
      </div>
      {currentPage === 7 && (
        <button
          onClick={() => navigate("/miryang/appguide/main")}
          style={{ margin: "0px" }}
        >
          교육 마치기
        </button>
      )}
    </div>
  );
}

export default MilyangAccountRegisterGuideBook;
