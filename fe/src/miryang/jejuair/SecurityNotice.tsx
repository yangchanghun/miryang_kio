import { useNavigate } from "react-router-dom";

interface Props {
  setOnModal: (v: boolean) => void;
}

export default function SecurityNotice({ setOnModal }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => setOnModal(false)}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1000px] max-h-[90vh] overflow-y-auto
                   bg-white rounded-2xl shadow-2xl"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            항공보안법 개정에 따른 안내
          </h2>
          <button
            onClick={() => setOnModal(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 text-sm text-gray-700 leading-relaxed">
          <p className="mb-6">
            다음에 해당하는 신분증명서가 없을 경우 탑승권 발급 및 항공기 탑승이
            제한될 수 있으니, 공항 방문 시 반드시 아래 중 하나에 해당하는
            신분증명서를 소지해 주세요.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-2">
              <span className="font-medium">1.</span>
              <span className="text-orange-500 font-semibold">
                기존에 허용한 사본 및 사진은 시행령 발효 이후 인정되지 않습니다.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">2.</span>
              <span>복사본, 팩스본, 사진촬영본은 인정되지 않습니다.</span>
            </div>
          </div>

          {/* TABLE */}
          <div className="border rounded-lg overflow-hidden mb-6">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2 text-center font-semibold">
                    구분
                  </th>
                  <th className="border px-3 py-2 text-center font-semibold">
                    적용 대상
                  </th>
                  <th className="border px-3 py-2 text-center font-semibold">
                    신분증명서 종류
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    rowSpan={2}
                    className="border px-3 py-4 text-center font-semibold bg-gray-50"
                  >
                    신분증명서
                  </td>
                  <td className="border px-3 py-4 text-center">일반 승객</td>
                  <td className="border px-3 py-4 text-left leading-relaxed">
                    • 여권, 주민등록증, 운전면허증(국제운전면허증 포함),
                    장애인등록증, 외국인등록증, 승무원등록증, 국내거소신고증,
                    선원수첩 등
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-4 text-center">만 19세 미만</td>
                  <td className="border px-3 py-4 text-left leading-relaxed">
                    • 주민등록등본 또는 초본, 가족관계증명서, 건강보험증,
                    학생증, 청소년증 등
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 pb-6">
          <button
            onClick={() => navigate("/miryang/jejuair/detail")}
            className="w-full py-4 bg-orange-500 text-white
                       rounded-xl text-lg font-bold hover:bg-orange-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
