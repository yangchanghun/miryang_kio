import { Routes, Route } from "react-router-dom";
import JejuAppLayout from "../miryang/jejuair/JejuAppLayout";
import KorailMain from "../miryang/korail/KorailMain";
import KorailList from "../miryang/korail/KorailList";
export default function KorailGuide() {
  return (
    <Routes>
      <Route element={<JejuAppLayout />}>
        <Route path="main" element={<KorailMain />} />
        <Route path="list" element={<KorailList />} />
      </Route>
    </Routes>
  );
}
