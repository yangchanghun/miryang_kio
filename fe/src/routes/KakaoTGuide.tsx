import { Routes, Route } from "react-router-dom";
import KakaoTMain from "../miryang/kakaot/KakaoTMain";
import KakaoMap from "../miryang/kakaot/KakaoMap";
import KakaoSearch from "../miryang/kakaot/KakaoSearch";
import KakaoResult from "../miryang/kakaot/KakaoResult";
import TaxiBookingDetail from "../miryang/kakaot/TaxiBookingDetail";
import KakaoTLoading from "../miryang/kakaot/KakaoTLoading";
import KakaoTGrab from "../miryang/kakaot/KakaoTGrab";
import KakaoTComplete from "../miryang/kakaot/KakaoTComplete";

export default function KakaoTGuide() {
  return (
    <Routes>
      <Route path="main" element={<KakaoTMain />} />
      <Route path="taxi" element={<KakaoMap />} />
      <Route path="search" element={<KakaoSearch />} />
      <Route path="result" element={<KakaoResult />} />
      <Route path="booking" element={<TaxiBookingDetail />} />
      <Route path="loading" element={<KakaoTLoading />} />
      <Route path="grab" element={<KakaoTGrab />} />
      <Route path="complete" element={<KakaoTComplete />} />
    </Routes>
  );
}
