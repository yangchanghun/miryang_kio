import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MiryangAppGuide from "./routes/MiryangAppGuide";
import GalaxyGuide from "./routes/GalaxyGuide";
import DdangyoGuide from "./routes/DdangyoGuide";
import KakaoTalkGuide from "./routes/KakaoTalkGuide";
import KakaoTGuide from "./routes/KakaoTGuide";

import JejuAirGuide from "./routes/JejuAirGude";
import KorailGuide from "./routes/KorailGuide";
import KakaoPayGuide from "./routes/KakaoPayGuide";
import CoupangGuide from "./routes/CoupangGuide";
import GovermentGuide from "./routes/GovermentGuide";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/miryang/appguide/*" element={<MiryangAppGuide />}></Route>
        <Route path="/miryang/galaxyguide/*" element={<GalaxyGuide />}></Route>
        <Route path="/miryang/ddangyo/*" element={<DdangyoGuide />}></Route>
        <Route path="/miryang/kakaotalk/*" element={<KakaoTalkGuide />}></Route>
        <Route path="/miryang/kakaot/*" element={<KakaoTGuide />}></Route>
        <Route path="/miryang/jejuair/*" element={<JejuAirGuide />}></Route>
        <Route path="/miryang/korail/*" element={<KorailGuide />}></Route>
        <Route path="/miryang/kakaopay/*" element={<KakaoPayGuide />}></Route>
        <Route path="/miryang/coupang/*" element={<CoupangGuide />}></Route>
        <Route path="/miryang/goverment/*" element={<GovermentGuide />}></Route>
      </Routes>
    </div>
  );
}
