import { Routes, Route } from "react-router-dom";
import KakaoPayLogin from "../miryang/kakaopay/login/KakaoPayLogin";
import KakaoPayAuth from "../miryang/kakaopay/login/KakaoPayAuth";
import KakaoPayAuthStart from "../miryang/kakaopay/login/KakaoPayAuthStart";
import KakaoPayTerms from "../miryang/kakaopay/login/KakaoPayTerms";
import { KakaoPayAuthComplete } from "../miryang/kakaopay/login/KakaoPayAuthComplete";
import KakaoPayPayment from "../miryang/kakaopay/payment/KakaoPayPayment";
import KakaoPaySettings from "../miryang/kakaopay/payment/KakaoPaySettings";
import KakaoPayChargeAccount from "../miryang/kakaopay/payment/KakaoPayChargeAccount";
import KakaoPayConnectAccount from "../miryang/kakaopay/payment/KakaoPayConnectAccount";
import KakaoPayVerifyAccount from "../miryang/kakaopay/payment/KakaoPayVerifyAccount";
import KakaoPayCertSign from "../miryang/kakaopay/payment/KakaoPayCertSign";
import KakaoPayAccountComplete from "../miryang/kakaopay/payment/KakaoPayAccountComplete";
import KakaopayCardRegister from "../miryang/kakaopay/card/KakaopayCardRegister";
import KakaoPayBarcodePay from "../miryang/kakaopay/card/KakaoPayBarcodePay";
import KakaoPayHome from "../miryang/kakaopay/transfer/KakaoPayHome";
import KakaoPayTransfer from "../miryang/kakaopay/transfer/KakaoPayTransfter";
import KakaoPayAccountInput from "../miryang/kakaopay/transfer/KakaoPayAccountInput";
import KakaoPayAmountInput from "../miryang/kakaopay/transfer/KakaoPayAmountInput";
import KakaoPayTransferConfirm from "../miryang/kakaopay/transfer/KakaoPayTransferConfirm";
import KakaoPayTransferComplete from "../miryang/kakaopay/transfer/KakaoPayTransferComplete";
import KakaoPayEducationComplete from "../miryang/kakaopay/KakaoPayEducationComplete";
import KakaoPayCardScan from "../miryang/kakaopay/card/KakaoPayCardScan";

export default function KakaoPayGuide() {
  return (
    <Routes>
      {/* login */}
      <Route path="login/main" element={<KakaoPayLogin />} />
      <Route path="login/auth" element={<KakaoPayAuth />} />
      <Route path="login/auth/start" element={<KakaoPayAuthStart />} />
      <Route path="login/auth/terms" element={<KakaoPayTerms />} />
      <Route path="login/auth/complete" element={<KakaoPayAuthComplete />} />

      {/*payment  */}
      <Route path="payment/main" element={<KakaoPayPayment />} />
      <Route path="payment/settings" element={<KakaoPaySettings />} />
      <Route path="payment/account" element={<KakaoPayChargeAccount />} />
      <Route
        path="payment/account/connect"
        element={<KakaoPayConnectAccount />}
      />
      <Route
        path="payment/account/verify"
        element={<KakaoPayVerifyAccount />}
      />
      <Route path="payment/account/cert" element={<KakaoPayCertSign />} />
      <Route
        path="payment/account/complete"
        element={<KakaoPayAccountComplete />}
      />

      {/* card register */}
      <Route path="payment/card/register" element={<KakaopayCardRegister />} />
      <Route path="payment/card/scan" element={<KakaoPayCardScan />} />
      <Route path="payment/barcode" element={<KakaoPayBarcodePay />} />

      {/* transfer  */}
      <Route path="home" element={<KakaoPayHome />} />
      <Route path="transfer" element={<KakaoPayTransfer />} />
      <Route path="input" element={<KakaoPayAccountInput />} />
      <Route path="amount/input" element={<KakaoPayAmountInput />} />
      <Route path="confirm" element={<KakaoPayTransferConfirm />} />
      <Route path="transfer/complete" element={<KakaoPayTransferComplete />} />
      <Route path="complete" element={<KakaoPayEducationComplete />} />
    </Routes>
  );
}
