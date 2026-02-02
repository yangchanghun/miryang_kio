import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MilyangRecharge.css";
import HomeButton from "../../utils/HomeButton";
type NextPageProps = {
  onNextPage: (page?: number) => void;
};

type Recharge5Props = {
  chargeAmount?: number;
  onCancel?: () => void;
  onConfirm?: () => void;
  onNextPage: () => void;
};

type Recharge6Props = {
  chargedAmount?: number;
  incentiveAmount?: number;
  onNavigate?: (target: string) => void;
};

const MilyangRecharge1 = ({ onNextPage }: NextPageProps) => {
  return (
    <div className="milyang-recharge1-container">
      <div className="milyang-recharge1-main-background" />
      <div className="milyang-recharge1-header-title">밀양사랑카드</div>

      {/* Menu icon */}
      <div className="milyang-recharge1-menu-icon">
        <div className="milyang-recharge1-menu-icon-bg" />
      </div>

      {/* Menu lines */}
      <div className="milyang-recharge1-menu-line milyang-recharge1-menu-line-1"></div>
      <div className="milyang-recharge1-menu-line milyang-recharge1-menu-line-2"></div>
      <div className="milyang-recharge1-menu-line milyang-recharge1-menu-line-3"></div>

      {/* Main divider */}
      <div className="milyang-recharge1-main-divider"></div>

      {/* Profile circle */}
      <div className="milyang-recharge1-profile-circle" />
      <img
        className="milyang-recharge1-profile-image"
        src="/miryang/cardregister/pigcard.png"
        alt="profile"
      />

      {/* Available amount section */}
      <div className="milyang-recharge1-available-amount-label">
        사용 가능 금액
      </div>
      <div className="milyang-recharge1-available-amount-value">0원</div>

      {/* Balance sections */}
      <div className="milyang-recharge1-balance-section milyang-recharge1-balance-section-1" />
      <div className="milyang-recharge1-balance-section milyang-recharge1-balance-section-2" />

      <div className="milyang-recharge1-balance-label milyang-recharge1-balance-label-1">
        충전 잔액
      </div>
      <div className="milyang-recharge1-balance-label milyang-recharge1-balance-label-2">
        밀양시 추가형인센티브
      </div>

      <div className="milyang-recharge1-balance-amount milyang-recharge1-balance-amount-1">
        <span className="milyang-recharge1-amount-value">0 원</span>
        <span className="milyang-recharge1-arrow"> &gt;</span>
      </div>
      <div className="milyang-recharge1-balance-amount milyang-recharge1-balance-amount-2">
        <span className="milyang-recharge1-amount-value">0 원</span>
        <span className="milyang-recharge1-arrow"> &gt;</span>
      </div>

      {/* Bottom navigation */}
      <div className="milyang-recharge1-bottom-nav" />
      <div>
        <img
          className="milyang-recharge1-nav-icon milyang-recharge1-nav-icon-1 heartbeat"
          src="/miryang/cardregister/plus.png"
          alt="충전"
        />
        <div
          className="milyang-recharge1-nav-label milyang-recharge1-nav-label-1 heartbeat"
          onClick={() => {
            onNextPage(1);
          }}
        >
          충전
        </div>
      </div>
      <div className="milyang-recharge1-nav-label milyang-recharge1-nav-label-2">
        혜택정보
      </div>
      <img
        className="milyang-recharge1-nav-icon milyang-recharge1-nav-icon-2"
        src="/miryang/cardregister/money.png"
        alt="혜택정보"
      />

      <div className="milyang-recharge1-nav-label milyang-recharge1-nav-label-3">
        이용내역
      </div>
      <img
        className="milyang-recharge1-nav-icon milyang-recharge1-nav-icon-3"
        src="/miryang/cardregister/percent.png"
        alt="이용내역"
      />

      {/* Benefits section */}
      <div className="milyang-recharge1-benefits-container">
        <div className="milyang-recharge1-benefits-header" />

        <div className="milyang-recharge1-benefits-title">
          <span className="milyang-recharge1-month">7월</span>
          <span className="milyang-recharge1-benefits-text"> 혜택</span>
        </div>

        <div className="milyang-recharge1-status-badge">
          <div className="milyang-recharge1-status-text">제공 중</div>
        </div>

        <div className="milyang-recharge1-incentive-label">인센티브</div>
        <div className="milyang-recharge1-incentive-value">
          <span className="milyang-recharge1-percentage">10%</span>
          <span className="milyang-recharge1-earn-text"> 적립</span>
        </div>

        <div className="milyang-recharge1-max-incentive-value">50,000원</div>
        <div className="milyang-recharge1-max-incentive-label">
          받을 수 있는 인센티브
        </div>

        <div className="milyang-recharge1-divider-line" />

        <div className="milyang-recharge1-benefits-footer">
          <div className="milyang-recharge1-benefits-more">
            혜택 알아보기 &gt;
          </div>
        </div>
      </div>

      {/* Coupon section */}
      <div className="milyang-recharge1-coupon-container">
        <div className="milyang-recharge1-coupon-label">내 쿠폰</div>
        <div className="milyang-recharge1-coupon-count">0개</div>

        <div className="milyang-recharge1-total-benefits-value">0원</div>
        <div className="milyang-recharge1-total-benefits-label">
          총 받은 혜택
        </div>

        <div className="milyang-recharge1-coupon-divider" />

        <div className="milyang-recharge1-monthly-benefits">
          <div className="milyang-recharge1-monthly-benefits-label">
            7월 받은 혜택
          </div>
          <div className="milyang-recharge1-monthly-benefits-value">0원</div>
        </div>
      </div>

      {/* Bottom image */}
      <img
        className="milyang-recharge1-bottom-image"
        src="/miryang/cardregister/banner.png"
        alt="bottom"
      />
    </div>
  );
};

const MilyangRecharge2 = ({ onNextPage }: NextPageProps) => {
  const [password, setPassword] = useState("");

  const handleNumberClick = (num: string) => {
    if (password.length < 6) {
      setPassword(password + num);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handleClear = () => {
    setPassword("");
  };

  if (password.length === 6) {
    setTimeout(() => {
      handleClear();
      onNextPage(2);
      console.log("ㅎㅇ");
    }, 1000);
  }

  const renderPasswordDots = () => {
    const dots = [];
    for (let i = 0; i < 6; i++) {
      dots.push(
        <div
          key={i}
          className="milyang-recharge2-password-dot"
          style={{
            background: i < password.length ? "#DADADA" : "transparent",
          }}
        />,
      );
    }
    return dots;
  };

  return (
    <div className="milyang-recharge2-container">
      <div className="milyang-recharge2-main-container">
        {/* Back button */}
        <div className="milyang-recharge2-back-button">
          <div className="milyang-recharge2-back-arrow-1"></div>
          <div className="milyang-recharge2-back-arrow-2"></div>
        </div>

        {/* Title */}
        <div className="milyang-recharge2-title">보안 비밀번호 입력</div>

        {/* Password dots */}
        <div className="milyang-recharge2-password-container">
          {renderPasswordDots()}
        </div>

        {/* Face authentication button */}
        <div className="milyang-recharge2-face-auth-button">
          <div className="milyang-recharge2-face-auth-text">
            얼굴인증 사용하기
          </div>
        </div>

        {/* Forgot password link */}
        <div className="milyang-recharge2-forgot-password">
          비밀번호를 잊으셨나요?
        </div>

        {/* Keyboard indicator */}
        <div className="milyang-recharge2-keyboard-indicator">
          <div className="milyang-recharge2-keyboard-text">
            보안키보드 작동 중
          </div>
        </div>

        {/* Number pad background */}
        <div className="milyang-recharge2-numpad-background" />

        {/* Horizontal lines */}
        <div className="milyang-recharge2-line milyang-recharge2-line-1"></div>
        <div className="milyang-recharge2-line milyang-recharge2-line-2"></div>
        <div className="milyang-recharge2-line milyang-recharge2-line-3"></div>
        <div className="milyang-recharge2-line milyang-recharge2-line-4"></div>

        {/* Vertical lines */}
        <div className="milyang-recharge2-vline milyang-recharge2-vline-1"></div>
        <div className="milyang-recharge2-vline milyang-recharge2-vline-2"></div>

        {/* Number buttons */}
        <button
          className="milyang-recharge2-number milyang-recharge2-number-1"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-2"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-3"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-4"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-5"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-6"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-7"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-8"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-9"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="milyang-recharge2-number milyang-recharge2-number-0"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>

        {/* Delete button */}
        <button
          className="milyang-recharge2-delete-button"
          onClick={handleDelete}
        >
          <div className="milyang-recharge2-delete-icon">⌫</div>
        </button>

        {/* Success message */}
        {password.length === 6 && (
          <div className="milyang-recharge2-success-overlay">
            <div className="milyang-recharge2-success-modal">
              <div className="milyang-recharge2-success-icon">✓</div>
              <p className="milyang-recharge2-success-text">인증 완료</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const MilyangRecharge3 = ({ onNextPage }: NextPageProps) => {
  const [chargeAmount, setChargeAmount] = useState(100000);

  const handleAmountAdd = (amount: number) => {
    if (chargeAmount + amount <= 500000) {
      setChargeAmount(chargeAmount + amount);
    }
  };

  return (
    <div className="milyang-recharge3-container">
      <img
        className="milyang-recharge3-bg-image"
        src="/miryang/cardregister/pigcard.png"
        alt="배경"
      />

      <div className="milyang-recharge3-card-title">밀양사랑카드 (굿바비)</div>

      <div className="milyang-recharge3-amount">
        <span className="milyang-recharge3-amount-number">
          {chargeAmount.toLocaleString()}
        </span>
        <span className="milyang-recharge3-amount-unit">원</span>
      </div>

      <div className="milyang-recharge3-auto-setting">
        <div className="milyang-recharge3-auto-text">자동 충전 설정</div>
      </div>

      <div className="milyang-recharge3-bank-info">
        <div className="milyang-recharge3-bank-name">지역 농협</div>
        <div className="milyang-recharge3-account">
          <span className="milyang-recharge3-divider">|</span>
          <span className="milyang-recharge3-account-number">
            {" "}
            35610834*****
          </span>
        </div>
      </div>

      <div className="milyang-recharge3-limit-info">
        <span className="milyang-recharge3-limit-text">충전 가능 금액 </span>
        <span className="milyang-recharge3-limit-amount">500,000원</span>
      </div>

      <div className="milyang-recharge3-amount-container">
        <div className="milyang-recharge3-current-amount">
          {chargeAmount.toLocaleString()}
        </div>
      </div>

      <div className="milyang-recharge3-quick-buttons">
        <button
          className="milyang-recharge3-quick-btn milyang-recharge3-quick-btn-1"
          onClick={() => handleAmountAdd(100000)}
        >
          +10만원
        </button>
        <button
          className="milyang-recharge3-quick-btn milyang-recharge3-quick-btn-2"
          onClick={() => handleAmountAdd(50000)}
        >
          +5만원
        </button>
        <button
          className="milyang-recharge3-quick-btn milyang-recharge3-quick-btn-3"
          onClick={() => handleAmountAdd(10000)}
        >
          +1만원
        </button>
      </div>

      <div className="milyang-recharge3-max-benefit">
        <div className="milyang-recharge3-max-text">
          이번 달 최대 인센티브 받을 만큼 충전
        </div>
      </div>

      <div className="milyang-recharge3-incentive-info">
        <img
          className="milyang-recharge3-incentive-icon"
          src="/miryang/cardregister/percent10.png"
          alt="인센티브"
        />
        <div className="milyang-recharge3-incentive-text">
          <div className="milyang-recharge3-incentive-rate">
            <span className="milyang-recharge3-rate-number">10%</span>
            <span className="milyang-recharge3-rate-text">
              {" "}
              인센티브 제공 중
            </span>
          </div>
          <div className="milyang-recharge3-incentive-desc">
            이번 달 50,000원 더 받을 수 있어요!
          </div>
        </div>
        <div className="milyang-recharge3-arrow-up"></div>
      </div>

      <div className="milyang-recharge3-info-section">
        <div className="milyang-recharge3-info-text">
          간편 충전 안내
          <br />
          환불/충전취소 안내
        </div>
        <div className="milyang-recharge3-arrow-down-1"></div>
        <div className="milyang-recharge3-arrow-down-2"></div>
      </div>

      <div className="milyang-recharge3-divider"></div>

      <button
        className="milyang-recharge3-charge-btn"
        onClick={() => {
          onNextPage(4);
        }}
      >
        <div className="milyang-recharge3-charge-tex heartbeat">충전하기</div>
      </button>
    </div>
  );
};
const MilyangRecharge4 = ({ onNextPage }: { onNextPage: () => void }) => {
  const [showModal] = useState(true);

  if (!showModal) return null;

  return (
    <div className="milyang-recharge4-container">
      {/* 배경 화면 (3번째 페이지) */}
      <div className="milyang-recharge4-background">
        <img
          className="milyang-recharge4-bg-image"
          src="https://placehold.co/553x350"
          alt="배경"
        />

        <div className="milyang-recharge4-card-title">
          밀양사랑카드 (굿바비)
        </div>

        <div className="milyang-recharge4-amount">
          <span className="milyang-recharge4-amount-number">0</span>
          <span className="milyang-recharge4-amount-unit">원</span>
        </div>

        <div className="milyang-recharge4-auto-setting">
          <div className="milyang-recharge4-auto-text">자동 충전 설정</div>
        </div>

        <div className="milyang-recharge4-bank-info">
          <div className="milyang-recharge4-bank-name">지역 농협</div>
          <div className="milyang-recharge4-account">
            <span className="milyang-recharge4-divider">|</span>
            <span className="milyang-recharge4-account-number">
              {" "}
              35610834*****
            </span>
          </div>
        </div>

        <div className="milyang-recharge4-limit-info">
          <span className="milyang-recharge4-limit-text">충전 가능 금액 </span>
          <span className="milyang-recharge4-limit-amount">500,000원</span>
        </div>

        <div className="milyang-recharge4-info-icon"></div>

        <div className="milyang-recharge4-amount-container">
          <div className="milyang-recharge4-current-amount">100,000</div>
          <img
            className="milyang-recharge4-edit-icon"
            src="https://placehold.co/41x41"
            alt="편집"
          />
        </div>

        <div className="milyang-recharge4-quick-buttons">
          <div className="milyang-recharge4-quick-btn milyang-recharge4-quick-btn-1">
            +10만원
          </div>
          <div className="milyang-recharge4-quick-btn milyang-recharge4-quick-btn-2">
            +5만원
          </div>
          <div className="milyang-recharge4-quick-btn milyang-recharge4-quick-btn-3">
            +1만원
          </div>
        </div>

        <div className="milyang-recharge4-max-benefit">
          <div className="milyang-recharge4-max-text">
            이번 달 최대 인센티브 받을 만큼 충전
          </div>
        </div>

        <div className="milyang-recharge4-incentive-info">
          <img
            className="milyang-recharge4-incentive-icon"
            src="https://placehold.co/78x60"
            alt="인센티브"
          />
          <div className="milyang-recharge4-incentive-text">
            <div className="milyang-recharge4-incentive-rate">
              <span className="milyang-recharge4-rate-number">10%</span>
              <span className="milyang-recharge4-rate-text">
                {" "}
                인센티브 제공 중
              </span>
            </div>
            <div className="milyang-recharge4-incentive-desc">
              이번 달 50,000원 더 받을 수 있어요!
            </div>
          </div>
          <div className="milyang-recharge4-arrow-up"></div>
        </div>

        <div className="milyang-recharge4-info-section">
          <div className="milyang-recharge4-info-text">
            간편 충전 안내
            <br />
            환불/충전취소 안내
          </div>
          <div className="milyang-recharge4-arrow-down-1"></div>
          <div className="milyang-recharge4-arrow-down-2"></div>
        </div>

        <div className="milyang-recharge4-divider"></div>

        <div className="milyang-recharge4-charge-btn">
          <div className="milyang-recharge4-charge-text">충전하기</div>
        </div>
      </div>

      {/* 모달 오버레이 */}
      <div className="milyang-recharge4-modal-overlay">
        {/* 모달 컨텐츠 */}
        <div className="milyang-recharge4-modal-content">
          <div className="milyang-recharge4-modal-title">
            충전하기 전 환불 조건을 꼭 확인하세요!
          </div>

          <div className="milyang-recharge4-modal-divider"></div>

          <div className="milyang-recharge4-modal-text">
            -지역화폐 상품권 특성 상 충전 후 70% 이상 사용
            <br />
            시 환불이 가능합니다.
            <br />
            -충전, 잔액이동, 결제취소 원복 등으로 인해 잔액
            <br />
            이 변경되는 경우 환불 가능 금액이 재 산정됩니다.
            <br />
            -환불은 [ 전체메뉴(≡) &gt; 환불 안내 ] 에서
            <br />
            확인해주세요!
            <br />
            ※ 부분환불은 불가하며, 정책수당 및 인센티브는 환<br />불 대상이
            아닙니다.
          </div>

          <div className="milyang-recharge4-modal-buttons">
            <button className="milyang-recharge4-modal-btn milyang-recharge4-close-btn">
              <span className="milyang-recharge4-close-number">7</span>
              <span className="milyang-recharge4-close-text">일간 닫기</span>
            </button>
            <button
              className="milyang-recharge4-modal-btn milyang-recharge4-confirm-btn heartbeat"
              onClick={onNextPage}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MilyangRecharge5 = ({
  chargeAmount = 100000,

  onNextPage,
}: Recharge5Props) => {
  const [showModal] = useState(true);

  // 인센티브 계산 (10%)
  const incentiveAmount = Math.floor(chargeAmount * 0.1);

  if (!showModal) return null;

  return (
    <div className="milyang-recharge5-container">
      {/* 어두운 배경 오버레이 */}
      <div className="milyang-recharge5-overlay"></div>

      {/* 충전 정보 모달 */}
      <div className="milyang-recharge5-modal">
        <div className="milyang-recharge5-title">충전정보</div>

        <div className="milyang-recharge5-info-section">
          <div className="milyang-recharge5-labels">
            <div className="milyang-recharge5-label">카드명</div>
            <div className="milyang-recharge5-label">충전금액</div>
          </div>

          <div className="milyang-recharge5-values">
            <div className="milyang-recharge5-card-name">
              밀양사랑카드 (굿바비)
            </div>
            <div className="milyang-recharge5-amount">
              {chargeAmount.toLocaleString()}원
            </div>
          </div>
        </div>

        <div className="milyang-recharge5-divider"></div>

        <div className="milyang-recharge5-incentive-section">
          <div className="milyang-recharge5-incentive-label">
            인센티브 적립 예정
          </div>
          <div className="milyang-recharge5-incentive-amount">
            +{incentiveAmount.toLocaleString()}원
          </div>
        </div>

        <div className="milyang-recharge5-buttons">
          <button className="milyang-recharge5-btn milyang-recharge5-cancel-btn">
            취소
          </button>
          <button
            className="milyang-recharge5-btn milyang-recharge5-confirm-btn heartbeat"
            onClick={onNextPage}
          >
            충전
          </button>
        </div>
      </div>
    </div>
  );
};
const MilyangRecharge6 = ({
  chargedAmount = 100000,
  incentiveAmount = 10000,
  onNavigate,
}: Recharge6Props) => {
  // 총 사용 가능 금액 (기존 잔액 + 충전 금액 + 인센티브)
  const totalAmount = chargedAmount + incentiveAmount;

  const handleCardInfo = () => {
    if (onNavigate) onNavigate("cardInfo");
  };

  const handleCharge = () => {
    if (onNavigate) onNavigate("charge");
  };

  const handleHistory = () => {
    if (onNavigate) onNavigate("history");
  };

  const handleBenefits = () => {
    if (onNavigate) onNavigate("benefits");
  };

  return (
    <div className="milyang-recharge6-container">
      {/* 헤더 */}
      <div className="milyang-recharge6-header">
        <img
          className="milyang-recharge6-header-icon"
          src="/miryang/cardregister/top.png"
          alt="메뉴"
        />
        <div className="milyang-recharge6-header-text">카드관리</div>

        {/* 뒤로가기 버튼 */}
        <div className="milyang-recharge6-back-button">
          <div className="milyang-recharge6-back-arrow-1"></div>
          <div className="milyang-recharge6-back-arrow-2"></div>
        </div>
      </div>

      {/* 카드 정보 섹션 */}
      <div className="milyang-recharge6-card-section">
        <div className="milyang-recharge6-completion-badge">
          <div className="milyang-recharge6-completion-text">
            소득공제 신청 완료
          </div>
        </div>

        <div className="milyang-recharge6-card-title">밀양사랑카드(굿바비)</div>

        {/* 카드 이미지 */}
        <div className="milyang-recharge6-card-container">
          <img
            className="milyang-recharge6-card-image"
            src="/miryang/cardregister/pigcard.png"
            alt="카드"
          />
          <div className="milyang-recharge6-card-border"></div>
          <div className="milyang-recharge6-card-circle"></div>
        </div>
      </div>

      {/* 카드 정보 버튼 */}
      <div className="milyang-recharge6-info-button" onClick={handleCardInfo}>
        <div className="milyang-recharge6-info-text">카드 정보</div>
        <img
          className="milyang-recharge6-info-icon"
          src="/miryang/cardregister/card2 1.png"
          alt="정보"
        />
      </div>

      {/* 사용 가능 금액 */}
      <div className="milyang-recharge6-balance-container">
        <div className="milyang-recharge6-balance-label">사용 가능 금액</div>
        <div className="milyang-recharge6-balance-amount">
          {totalAmount.toLocaleString()}원
        </div>
        <div className="milyang-recharge6-balance-arrow"></div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="milyang-recharge6-navigation">
        <div className="milyang-recharge6-nav-item" onClick={handleCharge}>
          <img
            className="milyang-recharge6-nav-icon"
            src="/miryang/cardregister/plus.png"
            alt="충전"
          />
          <div className="milyang-recharge6-nav-text">충전</div>
        </div>

        <div className="milyang-recharge6-nav-item" onClick={handleHistory}>
          <img
            className="milyang-recharge6-nav-icon"
            src="/miryang/cardregister/money.png"
            alt="이용내역"
          />
          <div className="milyang-recharge6-nav-text">이용내역</div>
        </div>

        <div className="milyang-recharge6-nav-item" onClick={handleBenefits}>
          <img
            className="milyang-recharge6-nav-icon"
            src="/miryang/cardregister/percent.png"
            alt="혜택정보"
          />
          <div className="milyang-recharge6-nav-text">혜택정보</div>
        </div>
      </div>
    </div>
  );
};

function MilyangRecharge() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const handleNextPage = (page: number) => {
    setCurrentPage(page);
  };
  const voiceArray = [
    "/milyangvoice/4/1.mp3",
    "/milyangvoice/4/2.mp3",
    "/milyangvoice/4/3.mp3",
    "/milyangvoice/4/4.mp3",
    "/milyangvoice/4/5.mp3",
    "/milyangvoice/4/6.mp3",
  ];

  const pages = [
    {
      component: <MilyangRecharge1 onNextPage={() => handleNextPage(1)} />,
      ment: "카드충전을 위해 충전 버튼을 선택해주세요",
    },
    {
      component: <MilyangRecharge2 onNextPage={() => handleNextPage(2)} />,
      ment: "회원가입할때 설정한 비밀번호 6자리를 입력해주세요(해당페이지는 아무 숫자 6자리 입력하면 이동됩니다.)",
    },
    {
      component: <MilyangRecharge3 onNextPage={() => handleNextPage(3)} />,
      ment: "금액을 설정 후 충전하기 버튼을 선택해주세요.(계좌를 등록했다면 자동으로 이체됩니다.)",
    },
    {
      component: <MilyangRecharge4 onNextPage={() => handleNextPage(4)} />,
      ment: "확인 버튼을 선택해주세요.",
    },
    {
      component: <MilyangRecharge5 onNextPage={() => handleNextPage(5)} />,
      ment: "충전버튼을 선택하시면 충전이 완료됩니다.",
    },
    {
      component: <MilyangRecharge6 />,
      ment: "충전이 완료되되어 카드충전 교육이 마무리되었습니다. 아래 교육마치기 버튼을 선택하시면 처음으로 돌아갑니다.",
    },
  ];

  return (
    <div className="milyang-recharge-container">
      <HomeButton address={"milyang"} />
      {pages[currentPage].component}
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
        <audio src={voiceArray[currentPage]} autoPlay />
      </div>
      {currentPage === 5 && (
        <button onClick={() => navigate("/miryang/appguide/main")}>
          교육 마치기
        </button>
      )}
    </div>
  );
}
export default MilyangRecharge;
