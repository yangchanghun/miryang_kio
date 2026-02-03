import { Routes, Route } from "react-router-dom";
import KakaoTalkTutorial from "../miryang/kakaotalk/signup/KakaoTalkTutorial";
import KakaoSignUp_2 from "../miryang/kakaotalk/signup/KakaoSignUp_2";
import KakaoSignUp_1 from "../miryang/kakaotalk/signup/KakaoSignUp_1";
import KakaoSignUp_3 from "../miryang/kakaotalk/signup/KakaoSignUp_3";

export default function KakaoTalkGuide() {
  return (
    <Routes>
      {/* signup */}
      <Route path="main" element={<KakaoTalkTutorial />} />
      <Route path="signup/1" element={<KakaoSignUp_1 />} />
      <Route path="signup/2" element={<KakaoSignUp_2 />} />
      <Route path="signup/3" element={<KakaoSignUp_3 />} />
    </Routes>
  );
}
