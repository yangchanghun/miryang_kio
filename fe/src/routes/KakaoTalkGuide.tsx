import { Routes, Route } from "react-router-dom";
import KakaoTalkTutorial from "../miryang/kakaotalk/signup/KakaoTalkTutorial";
import KakaoSignUp_2 from "../miryang/kakaotalk/signup/KakaoSignUp_2";
import KakaoSignUp_1 from "../miryang/kakaotalk/signup/KakaoSignUp_1";
import KakaoSignUp_3 from "../miryang/kakaotalk/signup/KakaoSignUp_3";
import KakaoSignUp_4 from "../miryang/kakaotalk/signup/KakaoSignUp_4";
import KakaoSignUp_5 from "../miryang/kakaotalk/signup/KakaoSignUp_5";
import KakaoSignUp_6 from "../miryang/kakaotalk/signup/KakaoSignUp_6";
import KakaoSignUp_7 from "../miryang/kakaotalk/signup/KakaoSignUp_7";
import KakaoSignUp_8 from "../miryang/kakaotalk/signup/KakaoSignUp_8";

export default function KakaoTalkGuide() {
  return (
    <Routes>
      {/* signup */}
      <Route path="main" element={<KakaoTalkTutorial />} />
      <Route path="signup/1" element={<KakaoSignUp_1 />} />
      <Route path="signup/2" element={<KakaoSignUp_2 />} />
      <Route path="signup/3" element={<KakaoSignUp_3 />} />
      <Route path="signup/4" element={<KakaoSignUp_4 />} />
      <Route path="signup/5" element={<KakaoSignUp_5 />} />
      <Route path="signup/6" element={<KakaoSignUp_6 />} />
      <Route path="signup/7" element={<KakaoSignUp_7 />} />
      <Route path="signup/8" element={<KakaoSignUp_8 />} />
    </Routes>
  );
}
