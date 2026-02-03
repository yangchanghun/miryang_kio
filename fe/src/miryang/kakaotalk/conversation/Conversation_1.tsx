import { useNavigate } from "react-router-dom";

export default function Conversation_1() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto h-screen max-w-[785px] bg-white">
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 z-[999] flex w-full max-w-[785px] justify-around border-t border-gray-200 bg-white py-2">
        {/* 친구 */}
        <div className="flex flex-col items-center text-black">
          <div className="text-xl">👥</div>
          <span className="text-xs">친구</span>
        </div>

        {/* 채팅 (강조) */}
        <div className="relative flex flex-col items-center rounded-full border-4 border-red-500 px-3 py-1 text-black shadow-red-400/70 animate-pulse">
          <div className="text-xl">💬</div>
          <span className="text-lg font-semibold">채팅</span>
        </div>

        {/* 처음으로 */}
        <div
          onClick={() => navigate("/miryang/kakaotalk/main")}
          className="flex cursor-pointer flex-col items-center rounded-md border border-black bg-[#fee500] px-3 py-1"
        >
          <span className="text-2xl font-medium text-[#3c1e1e]">처음으로</span>
        </div>

        {/* 쇼핑 */}
        <div className="flex flex-col items-center text-gray-500">
          <div className="text-xl">🛍️</div>
          <span className="text-xs">쇼핑</span>
        </div>

        {/* 더보기 */}
        <div className="flex flex-col items-center text-gray-500">
          <div className="text-xl">⋯</div>
          <span className="text-xs">더보기</span>
        </div>
      </div>
    </div>
  );
}
