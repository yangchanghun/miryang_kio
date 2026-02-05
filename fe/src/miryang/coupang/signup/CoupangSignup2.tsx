import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainSuccessModal from "../success/MainSuccessModal";
import SignExplainBtn from "../signup/signexplain/SignExplainBtn";
import SignExplainModal from "../signup/signexplain/SignExplainModal";

type AgreementKey =
  | "all"
  | "age"
  | "terms"
  | "privacy"
  | "finance"
  | "personalInfo"
  | "thirdParty"
  | "marketing"
  | "email"
  | "sms"
  | "appPush";

const CoupangSignup2: React.FC = () => {
  const navigate = useNavigate();

  const [agreements, setAgreements] = useState<Record<AgreementKey, boolean>>({
    all: false,
    age: false,
    terms: false,
    privacy: false,
    finance: false,
    personalInfo: false,
    thirdParty: false,
    marketing: false,
    email: false,
    sms: false,
    appPush: false,
  });

  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  /* 전체 동의 */
  const handleAllCheck = (checked: boolean) => {
    const updated = Object.keys(agreements).reduce(
      (acc, key) => ({ ...acc, [key]: checked }),
      {} as Record<AgreementKey, boolean>,
    );
    setAgreements(updated);
  };

  /* 개별 동의 */
  const handleSingleCheck = (key: AgreementKey, checked: boolean) => {
    const updated = { ...agreements, [key]: checked };

    const allChecked = (Object.keys(updated) as AgreementKey[])
      .filter((k) => k !== "all")
      .every((k) => updated[k]);

    updated.all = allChecked;
    setAgreements(updated);
  };

  const requiredChecked =
    agreements.age &&
    agreements.terms &&
    agreements.privacy &&
    agreements.finance &&
    agreements.personalInfo;

  const handleNext = () => {
    if (!requiredChecked) {
      alert("필수 항목을 모두 체크해주세요");
      return;
    }

    setSuccessModal(true);
    setTimeout(() => {
      navigate("/miryang/coupang/signup/3");
    }, 2000);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[780px] flex-col bg-white font-sans">
      <audio src="/coupang/voice/2.mp3" autoPlay />

      {/* 상단 진행바 */}
      <div className="border-b px-5 pt-5">
        <div className="mb-5 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
              1
            </div>
            <span className="mt-2 text-xs font-medium text-black">
              동의하기
            </span>
          </div>

          <div className="h-[2px] w-14 bg-gray-300" />

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm text-gray-500">
              2
            </div>
            <span className="mt-2 text-xs text-gray-400">정보 입력하기</span>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="flex-1 px-5 py-6">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          확인 후 동의해주세요
        </h2>

        {/* 모두 동의 */}
        <label className="mb-4 flex cursor-pointer items-center rounded-lg border bg-gray-50 p-4">
          <input
            type="checkbox"
            checked={agreements.all}
            onChange={(e) => handleAllCheck(e.target.checked)}
            className="mr-3 h-5 w-5"
          />
          <span className="text-base font-semibold">
            모두 동의
            <span className="ml-1 text-xs font-normal text-gray-500">
              *선택 정보 포함
            </span>
          </span>
        </label>

        {/* 개별 항목 */}
        <div className="divide-y">
          {[
            ["age", "[필수] 만 14세 이상입니다"],
            ["terms", "[필수] 쿠팡 이용약관 동의"],
            ["privacy", "[필수] 전자금융거래 이용약관 동의"],
            ["finance", "[필수] 개인정보 수집 및 이용 동의"],
            ["personalInfo", "[필수] 개인정보 제3자 제공 동의"],
            ["thirdParty", "[선택] 마케팅 목적의 개인정보 수집 및 이용"],
            ["marketing", "[선택] 광고성 정보 수신 동의"],
          ].map(([key, label]) => (
            <label key={key} className="flex cursor-pointer items-center py-4">
              <input
                type="checkbox"
                checked={agreements[key as AgreementKey]}
                onChange={(e) =>
                  handleSingleCheck(key as AgreementKey, e.target.checked)
                }
                className="mr-3 h-5 w-5"
              />
              <span className="flex-1 text-sm text-gray-800">{label}</span>
              <span className="text-gray-400">{">"}</span>
            </label>
          ))}

          {/* 하위 선택 */}
          <div className="ml-8 border-t pt-3">
            {[
              ["email", "[선택] 이메일"],
              ["sms", "[선택] SMS, SNS"],
              ["appPush", "[선택] 앱 푸시"],
            ].map(([key, label]) => (
              <label
                key={key}
                className="flex cursor-pointer items-center py-2"
              >
                <input
                  type="checkbox"
                  checked={agreements[key as AgreementKey]}
                  onChange={(e) =>
                    handleSingleCheck(key as AgreementKey, e.target.checked)
                  }
                  className="mr-3 h-4 w-4"
                />
                <span className="text-sm text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="border-t p-5">
        <button
          onClick={handleNext}
          disabled={!requiredChecked}
          className={`w-full rounded-lg py-4 text-lg font-semibold transition ${
            requiredChecked
              ? "bg-blue-600 text-white active:bg-blue-700"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          다음
        </button>
      </div>

      {/* 기타 */}
      <SignExplainBtn setModal={setModal} />
      {modal && <SignExplainModal setModal={setModal} />}
      {successModal && <MainSuccessModal setSuccessModal={setSuccessModal} />}

      {/* 처음으로 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed left-3 top-3 rounded bg-black px-4 py-2 text-sm text-white"
      >
        처음으로
      </button>
    </div>
  );
};

export default CoupangSignup2;
