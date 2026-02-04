import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JejuAirCommonModal from "./modal/JejuAirCommonModal";

export default function PassengerInfoPage() {
  const navigate = useNavigate();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState<"남자" | "여자">("남자");
  const [birthDate, setBirthDate] = useState("");
  const [notSelf, setNotSelf] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const goPrice = Number(localStorage.getItem("goPrice") ?? 0);
  const returnPrice = Number(localStorage.getItem("returnPrice") ?? 0);

  const totalAmount = goPrice + returnPrice;
  const discountAmount = totalAmount - 20000;

  const handleNext = () => {
    if (!lastName || !firstName) {
      alert("이름을 입력해주세요");
      return;
    }
    if (!birthDate) {
      alert("생년월일을 입력해주세요");
      return;
    }

    localStorage.setItem("lastName", lastName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("gender", gender);

    navigate("/miryang/jejuair/baggage");
  };

  return (
    <div className="max-w-[1000px] mx-auto min-h-screen bg-gray-100">
      <audio src="/jejuair/voice/3.mp3" autoPlay />

      {/* HEADER */}
      <header className="flex items-center gap-4 px-5 py-4 bg-white border-b">
        <button
          onClick={() => navigate("/miryang/jejuair/booking")}
          className="text-xl"
        >
          ←
        </button>

        <div className="flex items-center gap-3 flex-1">
          <Step active />
          <Line />
          <Step active label="탑승객 정보 입력" />
          <Line />
          <Step />
          <Line />
          <Step />
        </div>
      </header>

      <main className="px-5 py-6">
        <h1 className="text-2xl font-bold mb-6 leading-snug">
          신분증 정보와 동일하게
          <br />
          입력해 주세요.
        </h1>

        {/* PASSENGER SELECT */}
        <div className="mb-6">
          <div className="flex items-center gap-3 border-2 border-orange-500 rounded-xl p-4 bg-white">
            <span className="text-xl">👤</span>
            <div className="flex-1 font-semibold">성인 1</div>
            <span className="text-orange-500">▾</span>
          </div>
          <p className="mt-2 text-orange-500 font-medium text-sm">
            신규 회원 할인이 자동으로 적용되었어요!
          </p>
        </div>

        {/* CHECKBOX */}
        <label className="flex items-center gap-3 mb-8 cursor-pointer">
          <input
            type="checkbox"
            checked={notSelf}
            onChange={(e) => setNotSelf(e.target.checked)}
            className="w-5 h-5 accent-green-600"
          />
          <span className="text-sm text-gray-600">
            본인이 탑승하지 않을 경우 체크해 주세요.
          </span>
        </label>

        {/* FORM */}
        <section className="bg-white rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-6">탑승객 정보</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Input
              label="성"
              value={lastName}
              onChange={setLastName}
              placeholder="홍"
            />
            <Input
              label="이름"
              value={firstName}
              onChange={setFirstName}
              placeholder="길동"
            />
          </div>

          {/* GENDER */}
          <div className="mb-6">
            <label className="block font-medium mb-2">
              성별<span className="text-orange-500">*</span>
            </label>
            <div className="flex gap-8">
              {["남자", "여자"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={() => setGender(g as "남자" | "여자")}
                    className="w-5 h-5 accent-orange-500"
                  />
                  <span className="text-lg">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* BIRTH */}
          <div>
            <label className="block font-medium mb-2">
              생년월일<span className="text-orange-500">*</span>
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-lg"
            />
          </div>
        </section>

        {/* PRICE */}
        <section className="bg-white rounded-xl p-6 mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">총 결제 금액</span>
            <span className="text-xl font-bold">
              {totalAmount.toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between items-center text-orange-500 font-semibold">
            <span>할인 적용 시</span>
            <span>{discountAmount.toLocaleString()}원 ~</span>
          </div>
        </section>

        <p className="text-center text-sm text-gray-500 mb-8">
          결제 후 탑승 시 J 포인트 최대 5,569P 적립
        </p>

        {/* NEXT */}
        <button
          onClick={handleNext}
          className="w-full py-4 bg-orange-500 text-white text-lg font-bold rounded-xl"
        >
          부가서비스 선택하기
        </button>
      </main>

      {/* GUIDE */}
      {onModal && (
        <JejuAirCommonModal
          onModal={onModal}
          setOnModal={setOnModal}
          title="제주항공 앱"
          steps={[
            "탑승객 정보를 입력해주세요",
            "교육용 웹앱으로 성인 1명만 진행됩니다",
          ]}
        />
      )}

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-[200px] right-5 bg-gray-800 text-white px-4 py-2 rounded"
      >
        사용법
      </button>
    </div>
  );
}

/* ---------------- SUB ---------------- */

function Step({ active, label }: { active?: boolean; label?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded-full ${
          active ? "bg-orange-500" : "bg-gray-300"
        }`}
      />
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}

function Line() {
  return <div className="w-5 h-[2px] bg-gray-300" />;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-medium mb-2">
        {label}
        <span className="text-orange-500">*</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-3 text-lg"
      />
    </div>
  );
}
