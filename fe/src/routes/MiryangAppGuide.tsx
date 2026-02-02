import { Routes, Route } from "react-router-dom";
import SignUpGuide from "../miryang/appguide/SignUpGuide";
import MiryangAppMain from "../miryang/appguide/MiryangAppMain";
import RegisterCardGuide from "../miryang/appguide/RegisterCardGuide";
import MilyangAccountRegisterGuideBook from "../miryang/appguide/MilyangAccountRegisterGuideBook";
import MilyangRecharge from "../miryang/appguide/MilyangRecharge";
export default function MiryangAppGuide() {
  return (
    <Routes>
      <Route path="main" element={<MiryangAppMain />} />

      <Route path="signupguide" element={<SignUpGuide />} />
      <Route path="cardregister" element={<RegisterCardGuide />} />
      <Route path="recharge" element={<MilyangRecharge />} />
      <Route
        path="accountregister"
        element={<MilyangAccountRegisterGuideBook />}
      />
    </Routes>
  );
}
