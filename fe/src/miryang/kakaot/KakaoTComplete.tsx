import { useNavigate } from "react-router-dom";

const KakaoTComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex h-screen max-w-[785px] flex-col bg-gray-100 px-5">
      {/* HEADER */}
      <header className="py-6 text-center">
        <h1 className="text-xl font-bold text-gray-900">
          카카오 택시 호출 완료
        </h1>
      </header>

      {/* SUCCESS */}
      <section className="flex flex-col items-center justify-center gap-6 py-8">
        {/* 체크 애니메이션 */}
        <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-green-500">
          <span className="text-4xl font-bold text-white">✓</span>
        </div>

        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            성공적으로 택시를 호출하셨습니다
          </h2>
          <p className="text-sm text-gray-600">🎉 축하합니다!</p>
        </div>
      </section>

      {/* NEXT MISSION */}
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <h3 className="text-base font-semibold text-gray-900">
            다음 미션 안내
          </h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          이제 다른 앱들도 체험해보세요!
          <br />
          <strong>배달의민족</strong>, <strong>카카오톡</strong> 등 다양한
          앱에서
          <br />
          새로운 미션들이 기다리고 있어요.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span>💡</span>
            <span>각 앱마다 다른 재미있는 기능들을 배워보세요</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span>🎯</span>
            <span>실제 사용법과 거의 똑같이 연습할 수 있어요</span>
          </div>
        </div>
      </section>

      {/* ACTION */}
      <div className="mt-auto py-6">
        <button
          onClick={() => navigate("/")}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-4 text-white transition hover:bg-blue-600"
        >
          <span className="text-lg">🏠</span>
          <span className="text-sm font-medium">홈으로 가기</span>
        </button>

        <div className="mt-6 flex justify-center">
          <img
            src="/icon/키오에듀-로고.png"
            alt="KIO EDU"
            className="h-8 opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default KakaoTComplete;
