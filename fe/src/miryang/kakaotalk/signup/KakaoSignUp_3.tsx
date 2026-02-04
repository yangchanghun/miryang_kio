import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KakaoSignUpModal from "./modal/KakaoSignUpModal";

type Agreements = {
  all: boolean;
  age14: boolean;
  kakaoAccount: boolean;
  kakaoTalk: boolean;
  personalInfo: boolean;
  kakaoMail: boolean;
  locationInfo: boolean;
  profileInfo: boolean;
};

const KakaoSignUp_3 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);
  const [answer, setAnswer] = useState(false);
  const [modalMessage, setModalMessage] =
    useState("모두 동의합니다를 선택해주세요!");

  const [agreements, setAgreements] = useState<Agreements>({
    all: false,
    age14: false,
    kakaoAccount: false,
    kakaoTalk: false,
    personalInfo: false,
    kakaoMail: false,
    locationInfo: false,
    profileInfo: false,
  });

  /** 개별 동의가 전부 체크되면 all 자동 체크 */
  useEffect(() => {
    const allChecked =
      agreements.age14 &&
      agreements.kakaoAccount &&
      agreements.kakaoTalk &&
      agreements.personalInfo &&
      agreements.kakaoMail &&
      agreements.locationInfo &&
      agreements.profileInfo;

    if (agreements.all !== allChecked) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAgreements((prev) => ({ ...prev, all: allChecked }));
    }

    setAnswer(allChecked);
  }, [
    agreements.age14,
    agreements.kakaoAccount,
    agreements.kakaoTalk,
    agreements.personalInfo,
    agreements.kakaoMail,
    agreements.locationInfo,
    agreements.profileInfo,
    agreements.all,
  ]);

  const handleAllAgreement = (checked: boolean) => {
    setAgreements({
      all: checked,
      age14: checked,
      kakaoAccount: checked,
      kakaoTalk: checked,
      personalInfo: checked,
      kakaoMail: checked,
      locationInfo: checked,
      profileInfo: checked,
    });

    if (checked) {
      setAnswer(true);
      setModalMessage("성공입니다!");
      setModal(true);
    }
  };

  const handleIndividualAgreement =
    (key: keyof Agreements) => (checked: boolean) => {
      setAgreements((prev) => ({
        ...prev,
        [key]: checked,
      }));
    };

  const goNext = () => {
    if (!answer) {
      setModalMessage("모두 동의합니다를 선택해주세요!");
      setModal(true);
      return;
    }
    navigate("/miryang/kakaotalk/signup/4");
  };

  const goPrev = () => {
    navigate("/miryang/kakaotalk/signup/2");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-full max-w-[700px] rounded-xl bg-white px-12 py-16 shadow-lg">
        {/* 가이드 */}
        <div className="mb-10 rounded-lg bg-[#FEE500] px-5 py-4 text-center text-lg font-semibold text-[#3c1e1e]">
          카카오톡 회원가입 따라하기{" "}
          <span className="ml-1 text-[20px] font-medium">3 / 8단계</span>
        </div>

        <audio src="/kakaotalk/voice/signup/3.mp3" autoPlay />

        {/* 타이틀 */}
        <h1 className="mb-10 text-center text-5xl font-light tracking-tight text-gray-800">
          kakao
        </h1>

        {/* 약관 영역 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="mb-2 text-[28px] font-semibold text-gray-800">
              카카오계정
            </h2>
            <p className="text-lg text-gray-600">
              서비스 약관에 동의해 주세요.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            {/* 전체 동의 */}
            <div className="border-b bg-gray-50 p-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreements.all}
                  onChange={(e) => handleAllAgreement(e.target.checked)}
                  className="mt-1 h-5 w-5"
                />
                <span className="text-base font-medium text-gray-800">
                  모두 동의합니다.
                </span>
              </label>

              <p className="ml-8 mt-3 text-sm leading-relaxed text-gray-600">
                전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이
                가능합니다.
              </p>
            </div>

            {/* 개별 동의 */}
            <div>
              {[
                {
                  key: "age14",
                  label: (
                    <>
                      만 14세{" "}
                      <span className="text-blue-600 font-semibold">
                        이상입니다.
                      </span>
                    </>
                  ),
                },
                {
                  key: "kakaoAccount",
                  label: "[필수] 카카오계정 약관",
                  expandable: true,
                },
                {
                  key: "kakaoTalk",
                  label: "[필수] 카카오 통합서비스 약관",
                  expandable: true,
                  desc: "본 약관은 카카오, Daum 서비스 등에 공통 적용되며 별도 이용약관 제공 없이 이용할 수 있습니다.",
                },
                {
                  key: "personalInfo",
                  label: "[필수] 개인정보 수집 및 이용 동의",
                  expandable: true,
                },
              ].map((item) => (
                <div key={item.key} className="border-b last:border-b-0">
                  <label className="flex items-center justify-between px-5 py-4 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={agreements[item.key as keyof Agreements]}
                        onChange={(e) =>
                          handleIndividualAgreement(
                            item.key as keyof Agreements,
                          )(e.target.checked)
                        }
                        className="mt-1 h-5 w-5"
                      />
                      <span className="text-sm text-gray-800">
                        {item.label}
                      </span>
                    </div>
                    {item.expandable && (
                      <span className="text-gray-400 text-lg">›</span>
                    )}
                  </label>

                  {item.desc && (
                    <p className="ml-12 px-5 pb-3 text-xs leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-12 left-1/2 w-[90%] max-w-[700px] -translate-x-1/2">
          <div className="flex justify-between">
            <button
              onClick={goPrev}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e]
                         shadow transition hover:-translate-y-1 hover:bg-[#fdd835]"
            >
              이전
            </button>

            <button
              onClick={() => navigate("/miryang/kakaotalk/main")}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e]
                         shadow transition hover:-translate-y-1 hover:bg-[#fdd835]"
            >
              처음으로
            </button>

            <button
              onClick={goNext}
              className="rounded-lg bg-[#FEE500] px-8 py-4 text-lg font-semibold text-[#3c1e1e]
                         shadow transition hover:-translate-y-1 hover:bg-[#fdd835]"
            >
              다음
            </button>
          </div>
        </div>
      </div>

      {modal && <KakaoSignUpModal text={modalMessage} setModal={setModal} />}
    </div>
  );
};

export default KakaoSignUp_3;
