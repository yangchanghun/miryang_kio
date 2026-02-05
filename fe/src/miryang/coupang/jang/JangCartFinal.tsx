import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JangExplainBtn from "./jangexplain/JangExplainBtn";
import JangExplainModal from "./jangexplain/JangExplainModal";
import MainSuccessModal from "../success/MainSuccessModal";

export default function JangCartFinal() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("기업은행");

  let name = "홍길동";
  let address = "DMC플렉스데시앙";
  let addressDetail = "A동 705호";
  let phone = "16444907";

  try {
    const raw = localStorage.getItem("배송지");
    if (raw) {
      const data = JSON.parse(raw);
      name = data?.name || name;
      address = data?.address || address;
      addressDetail = data?.addressDetail || addressDetail;
      phone = data?.phone || phone;
    }
  } catch {
    console.log("ㅎㅇ");
  }

  const card = localStorage.getItem("카드") || "신한카드";

  return (
    <div className="max-w-[785px] mx-auto min-h-screen bg-gray-100 pb-40">
      {modal && <JangExplainModal setModal={setModal} />}
      {successModal && <MainSuccessModal setSuccessModal={setModal} />}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate("/miryang/coupang/jangcart/purchase")}>
          ←
        </button>
        <h1 className="text-lg font-bold">주문 / 결제</h1>
        <div className="w-6" />
      </header>

      {/* 배송지 */}
      <section className="bg-white mt-2 p-4 relative">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="font-bold text-base">배송지</h2>
          <span className="text-sm text-gray-500">{name}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3 text-xs">
          <span className="px-2 py-0.5 rounded bg-gray-200 text-gray-600">
            최근배송지
          </span>
          <span className="px-2 py-0.5 rounded bg-green-100 text-green-600">
            로켓프레시 가능
          </span>
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600">
            로켓와우 가능
          </span>
        </div>

        <p className="text-sm">
          {address} {addressDetail}
        </p>
        <p className="text-sm text-gray-500">휴대폰 : {phone}</p>

        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          ›
        </span>
      </section>

      {/* 배송 요청 */}
      <section className="bg-white mt-2 p-4 relative">
        <h2 className="font-bold mb-2">배송 요청사항</h2>
        <p className="text-sm">문 앞 (경비*************)</p>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          ›
        </span>
      </section>

      {/* 결제수단 */}
      <section className="bg-white mt-2 p-4 relative">
        <h2 className="font-bold mb-2">결제수단</h2>
        <p className="text-sm">카드</p>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          ›
        </span>
      </section>

      {/* 결제 옵션 */}
      <section className="bg-white mt-2 p-4">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={selectedPayment === "기업은행"}
            onChange={() => setSelectedPayment("기업은행")}
            className="accent-blue-500"
          />
          <span className="text-sm">{card}</span>
        </label>
      </section>

      {/* 결제 요약 */}
      <section className="bg-white mt-2 p-4">
        <h2 className="font-bold mb-4">배송 3건 중 1</h2>

        <div className="border-t pt-4 flex justify-between items-center">
          <span className="font-bold text-base">총 결제 금액</span>
          <span className="text-lg font-bold text-red-500">59,390원</span>
        </div>
      </section>

      {/* 결제 버튼 */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-white p-4 shadow">
        <button
          onClick={() => {
            setSuccessModal(true);
            setTimeout(() => {
              navigate("/miryang/coupang/jangcart/complete");
            }, 2000);
          }}
          className="w-full bg-blue-500 text-white py-4 rounded-lg text-lg font-bold"
        >
          결제하기
        </button>
      </div>

      {/* 약관 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[785px] bg-gray-100 px-4 py-2 text-[11px] text-gray-400 text-center">
        주문 내용을 확인하였으며, 개인정보 제공 등에 동의합니다. 오픈마켓 상품의
        경우 통신판매중계자로서 책임을 지지 않습니다.
      </div>

      {/* 설명 버튼 */}
      <JangExplainBtn setModal={setModal} />
    </div>
  );
}
