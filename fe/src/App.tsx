import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MiryangAppGuide from "./routes/MiryangAppGuide";
import GalaxyGuide from "./routes/GalaxyGuide";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/miryang/appguide/*" element={<MiryangAppGuide />}></Route>
        <Route path="/miryang/galaxyguide/*" element={<GalaxyGuide />}></Route>
      </Routes>
    </div>
  );
}
