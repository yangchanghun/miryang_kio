import { useRef } from "react";

type PassengerForm = {
  adult: number;
  child: number;
  youth: number;
  senior: number;
  disabledPerson: number;
};

interface SelectPassengerModalProps {
  passengerForm: PassengerForm;
  setPassengerForm: (v: PassengerForm) => void;
  setModalPassenger: (v: boolean) => void;
}

export default function SelectPassengerModal({
  passengerForm,
  setPassengerForm,
  setModalPassenger,
}: SelectPassengerModalProps) {
  const passengerTypes: {
    label: string;
    key: keyof PassengerForm;
    min: number;
  }[] = [
    { label: "어른", key: "adult", min: 1 },
    { label: "어린이", key: "child", min: 0 },
    { label: "유아", key: "youth", min: 0 },
    { label: "경로", key: "senior", min: 0 },
    { label: "장애인", key: "disabledPerson", min: 0 },
  ];

  // 초기값 저장 (취소용)
  const initPassengerFormRef = useRef<PassengerForm>({
    ...passengerForm,
  });

  const totalPassengers = Object.values(passengerForm).reduce(
    (sum, v) => sum + v,
    0,
  );

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
      onClick={() => setModalPassenger(false)}
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-xl bg-white shadow-xl"
      >
        {/* Header */}
        <div className="grid grid-cols-3 items-center bg-[#1e4a6b] text-white px-4 py-3">
          <div />
          <h2 className="text-center text-xl font-bold tracking-wide">
            인원 선택
          </h2>
          <div className="justify-self-end">☰</div>
        </div>

        {/* Info */}
        <div className="text-sm text-gray-600 py-3 border-b">
          최소 1명 · 최대 9명
        </div>

        {/* Passenger Rows */}
        <div className="p-4 space-y-3">
          {passengerTypes.map((type) => (
            <div
              key={type.key}
              className="flex justify-between items-center text-lg font-semibold"
            >
              <span>{type.label}</span>

              <div className="flex items-center gap-3">
                <button
                  className="w-8 h-8 flex items-center justify-center border bg-gray-100"
                  onClick={() => {
                    if (passengerForm[type.key] > type.min) {
                      setPassengerForm({
                        ...passengerForm,
                        [type.key]: passengerForm[type.key] - 1,
                      });
                    }
                  }}
                >
                  −
                </button>

                <span className="w-6 text-center text-xl">
                  {passengerForm[type.key]}
                </span>

                <button
                  className="w-8 h-8 flex items-center justify-center border bg-gray-100"
                  onClick={() => {
                    if (totalPassengers < 9) {
                      setPassengerForm({
                        ...passengerForm,
                        [type.key]: passengerForm[type.key] + 1,
                      });
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex border-t">
          <button
            className="flex-1 py-3 border-r font-semibold"
            onClick={() => {
              setPassengerForm(initPassengerFormRef.current);
              setModalPassenger(false);
            }}
          >
            취소
          </button>
          <button
            className="flex-1 py-3 font-semibold"
            onClick={() => setModalPassenger(false)}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
