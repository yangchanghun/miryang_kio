import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import CartExplainBtn from "./explain/CartExplainBtn";
import CartExplainModal from "./explain/CartExplainModal";

const CoupangCart7 = () => {
  const navigate = useNavigate();
  const open = useDaumPostcodePopup();
  const [modal, setModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    addressDetail: "",
    phone: "",
    useAsDefault: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname) extraAddress += data.bname;
      if (data.buildingName)
        extraAddress += extraAddress
          ? `, ${data.buildingName}`
          : data.buildingName;

      if (extraAddress) fullAddress += ` (${extraAddress})`;
    }

    setFormData((prev) => ({ ...prev, address: fullAddress }));
  };

  const handleSave = () => {
    localStorage.setItem("배송지", JSON.stringify(formData));
    navigate("/miryang/coupang/cart/6");
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="relative flex items-center px-4 py-4">
          <button
            onClick={() => navigate("/miryang/coupang/cart/6")}
            className="text-2xl"
          >
            ‹
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">
            주문 / 결제
          </h1>
        </div>

        <div className="border-t bg-gray-50 px-4 py-5 text-center">
          <h2 className="text-lg font-semibold">배송지 추가</h2>
        </div>
      </header>

      {/* Form */}
      <main className="p-4 space-y-6">
        {/* 이름 */}
        <div>
          <label className="block text-sm font-medium mb-2">받는 분</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded border px-4 py-3 text-base focus:border-blue-500 focus:outline-none"
            placeholder="이름을 입력해주세요"
          />
        </div>

        {/* 주소 */}
        <div>
          <label className="block text-sm font-medium mb-2">주소</label>
          <div className="flex gap-2">
            <input
              value={formData.address}
              readOnly
              className="flex-1 rounded border px-4 py-3 bg-gray-50 text-base"
              placeholder="주소 검색을 눌러주세요"
            />
            <button
              onClick={() => open({ onComplete: handleComplete })}
              className="rounded bg-blue-500 px-4 py-3 text-white font-semibold"
            >
              🔍
            </button>
          </div>

          <input
            value={formData.addressDetail}
            onChange={(e) =>
              setFormData({ ...formData, addressDetail: e.target.value })
            }
            className="mt-3 w-full rounded border px-4 py-3 text-base focus:border-blue-500 focus:outline-none"
            placeholder="상세주소"
          />
        </div>

        {/* 전화번호 */}
        <div>
          <label className="block text-sm font-medium mb-2">전화번호</label>
          <input
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded border px-4 py-3 text-base focus:border-blue-500 focus:outline-none"
            placeholder="010-0000-0000"
          />
        </div>

        {/* 기본 배송지 */}
        <label className="flex items-center gap-3 text-base">
          <input
            type="checkbox"
            checked={formData.useAsDefault}
            onChange={(e) =>
              setFormData({ ...formData, useAsDefault: e.target.checked })
            }
            className="h-5 w-5 accent-blue-500"
          />
          기본 배송지로 설정
        </label>

        {/* 저장 버튼 */}
        <button
          onClick={handleSave}
          className="w-full rounded-lg bg-blue-500 py-4 text-lg font-semibold text-white active:bg-blue-600"
        >
          저장
        </button>
      </main>

      {/* 홈 버튼 */}
      <button
        onClick={() => navigate("/miryang/coupang/tutorial")}
        className="fixed right-3 top-3 z-50 rounded bg-black px-3 py-2 text-white"
      >
        처음으로
      </button>

      {/* 설명서 */}
      <CartExplainBtn setModal={setModal} />
      {modal && <CartExplainModal setModal={setModal} />}
    </div>
  );
};

export default CoupangCart7;
