// Layout.js
import { Outlet } from "react-router-dom";
import HomeButton from "../../utils/HomeButton";

export default function JejuAppLayout() {
  return (
    <div>
      {/* 공통 버튼 */}
      <HomeButton />

      {/* 현재 선택된 라우트의 컴포넌트가 여기에 렌더링됨 */}
      <Outlet />
    </div>
  );
}
