import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface MobileLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function MobileLayout({
  children,
  title = "땡겨요 교육용 앱",
}: MobileLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-5 font-sans">
      {/* 모바일 프레임 */}
      <div className="relative h-[1000px] w-full max-w-[785px] overflow-hidden rounded-[35px] bg-[#1a1a1a] p-2 shadow-[0_0_0_3px_#333,0_0_0_6px_#555,0_20px_40px_rgba(0,0,0,0.4)]">
        {/* 노치 */}
        <div className="absolute left-1/2 top-0 z-10 flex h-[25px] w-[120px] -translate-x-1/2 items-center justify-center rounded-b-[15px] bg-[#1a1a1a]">
          <div className="h-2 w-2 rounded-full bg-[#333]" />
        </div>
        {/* 상태바 */}
        <div className="mt-[15px] flex items-center justify-between rounded-t-[27px] bg-black px-5 py-2 text-[14px] font-semibold text-white">
          <span className="tabular-nums">9:41</span>
          <div className="flex items-center gap-2 text-[12px]">
            <span>●●●</span>
            <span>📶</span>
            <span>🔋 85%</span>
          </div>
        </div>
        {/* 콘텐츠 영역 */}
        <div className="relative h-full overflow-y-auto rounded-b-[27px] bg-gradient-to-b from-slate-50 to-slate-200">
          {/* 헤더 */}
          <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-5 py-4">
            <button
              onClick={() => navigate(-1)}
              className="rounded-md bg-white px-2 py-1 text-xl font-bold text-gray-700 hover:bg-slate-100 active:scale-95"
            >
              &lt;
            </button>
            <h1 className="text-[20px] font-bold text-gray-800">{title}</h1>
            <div className="w-6" /> {/* 균형용 */}
          </header>

          {/* 메인 콘텐츠 */}
          <main className="flex flex-col gap-4 p-5 pb-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
