import { Routes, Route } from "react-router-dom";
import CoupangTutorial from "../miryang/coupang/CoupangTutorial";
import CoupangSignup1 from "../miryang/coupang/signup/CoupangSignup1";
import CoupangSignup2 from "../miryang/coupang/signup/CoupangSignup2";
import CoupangSignup3 from "../miryang/coupang/signup/CoupangSignup3";
import CoupangSignup4 from "../miryang/coupang/signup/CoupangSignup4";
import CoupangSignup5 from "../miryang/coupang/signup/CoupangSignup5";
import CoupangSignup6 from "../miryang/coupang/signup/CoupangSignup6";
import CoupangLogin from "../miryang/coupang/signup/CoupangLogin";
import SignupSuccess from "../miryang/coupang/signup/SignupSuccess";
import CoupangApp from "../miryang/coupang/cart/CoupangApp";
import CoupangSearch from "../miryang/coupang/cart/CoupangSearch";
import CoupangTissue from "../miryang/coupang/cart/CoupangTissue";
import CoupangCart4 from "../miryang/coupang/cart/CoupangCart4";
import CoupangCart5 from "../miryang/coupang/cart/CoupangCart5";
import CoupangCart7 from "../miryang/coupang/cart/CoupangCart7";
import CoupangCart6 from "../miryang/coupang/cart/CoupangCart6";
import CoupangCart8 from "../miryang/coupang/cart/CoupangCart8";
import CoupangCart9 from "../miryang/coupang/cart/CoupangCart9";
import CoupangCartFinish from "../miryang/coupang/cart/CoupangCartFinish";
import JangCart1 from "../miryang/coupang/jang/JangCart1";
import JangCart2 from "../miryang/coupang/jang/JangCart2";
import JangCartEggs from "../miryang/coupang/jang/JangCartEggs";
import JangCartEgg from "../miryang/coupang/jang/JangCartEgg";
import JangCartRices from "../miryang/coupang/jang/JangCartRices";
import JangCartRice from "../miryang/coupang/jang/JangCartRice";
import JangCartPurChase from "../miryang/coupang/jang/JangCartPurChase";
import JangCartFinal from "../miryang/coupang/jang/JangCartFinal";
import JangCartComplete from "../miryang/coupang/jang/JangCartComplete";
import JejuAppLayout from "../miryang/jejuair/JejuAppLayout";

export default function CoupangGuide() {
  return (
    <Routes>
      <Route element={<JejuAppLayout />}>
        <Route path="tutorial" element={<CoupangTutorial />} />
        <Route path="signup/1" element={<CoupangSignup1 />} />
        <Route path="signup/2" element={<CoupangSignup2 />} />
        <Route path="signup/3" element={<CoupangSignup3 />} />
        <Route path="signup/4" element={<CoupangSignup4 />} />
        <Route path="signup/5" element={<CoupangSignup5 />} />
        <Route path="signup/6" element={<CoupangSignup6 />} />
        <Route path="login" element={<CoupangLogin />} />
        <Route path="signup/complete" element={<SignupSuccess />} />

        {/* main */}
        <Route path="main" element={<CoupangApp />} />
        <Route path="search" element={<CoupangSearch />} />
        <Route path="result/tissue" element={<CoupangTissue />} />
        <Route path="cart/4" element={<CoupangCart4 />} />
        <Route path="cart/5" element={<CoupangCart5 />} />
        <Route path="cart/6" element={<CoupangCart6 />} />
        <Route path="cart/7" element={<CoupangCart7 />} />
        <Route path="cart/8" element={<CoupangCart8 />} />
        <Route path="cart/9" element={<CoupangCart9 />} />
        <Route path="cart/finish" element={<CoupangCartFinish />} />

        {/* jang */}
        <Route path="jangcart/1" element={<JangCart1 />} />
        <Route path="jangcart/2" element={<JangCart2 />} />
        <Route path="jangcart/eggs" element={<JangCartEggs />} />
        <Route path="jangcart/egg" element={<JangCartEgg />} />
        <Route path="jangcart/rices" element={<JangCartRices />} />
        <Route path="jangcart/rice" element={<JangCartRice />} />
        <Route path="jangcart/purchase" element={<JangCartPurChase />} />
        <Route path="jangcart/final" element={<JangCartFinal />} />
        <Route path="jangcart/complete" element={<JangCartComplete />} />
      </Route>
    </Routes>
  );
}
