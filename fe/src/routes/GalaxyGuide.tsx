import { Routes, Route } from "react-router-dom";
import GalaxyMain from "../miryang/galaxy/GalaxyMain";
import GalaxyMessage from "../miryang/galaxy/GalaxyMessage";
import ContactGuide from "../miryang/galaxy/GalaxyContact";
import RecordGuide from "../miryang/galaxy/GalaxyRecord";
import CameraGuide from "../miryang/galaxy/GalaxyCamera";
export default function GalaxyGuide() {
  return (
    <Routes>
      <Route path="main" element={<GalaxyMain />} />
      <Route path="message" element={<GalaxyMessage />} />
      <Route path="contact" element={<ContactGuide />} />
      <Route path="record" element={<RecordGuide />} />
      <Route path="camera" element={<CameraGuide />} />
      <Route path="contact" element={<ContactGuide />} />
    </Routes>
  );
}
