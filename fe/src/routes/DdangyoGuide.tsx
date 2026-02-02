import { Routes, Route } from "react-router-dom";
import DdangPopupPage from "../miryang/ddangyo/DdangPopupPage";
import LocationConsentPage from "../miryang/ddangyo/LocationConsentPage";
import AddressSearchPage from "../miryang/ddangyo/AddressSearchPage";
import AddressDetailPage from "../miryang/ddangyo/AddressDetailPage";
import OnboardingPage from "../miryang/ddangyo/OnboardingPage";
import MainHomePage from "../miryang/ddangyo/MainHomePage";
import ChickenListPage from "../miryang/ddangyo/ChickenListPage";
import ChickenMainPage from "../miryang/ddangyo/ChickenMainPage";
import OrderPage from "../miryang/ddangyo/OrderPage";
import CouponPage from "../miryang/ddangyo/Couponpage";
import DdangyoFinishPage from "../miryang/ddangyo/DdangyoFinishPage";
export default function DdangyoGuide() {
  return (
    <Routes>
      <Route path="popup" element={<DdangPopupPage />} />
      <Route path="locationconsent" element={<LocationConsentPage />} />
      <Route path="address/search" element={<AddressSearchPage />} />
      <Route path="address/detail" element={<AddressDetailPage />} />
      <Route path="onboard" element={<OnboardingPage />} />
      <Route path="main/home" element={<MainHomePage />} />
      <Route path="chicken/list" element={<ChickenListPage />} />
      <Route path="chicken/main" element={<ChickenMainPage />} />
      <Route path="chicken/order" element={<OrderPage />} />
      <Route path="chicken/coupon" element={<CouponPage />} />
      <Route path="finish" element={<DdangyoFinishPage />} />
    </Routes>
  );
}
