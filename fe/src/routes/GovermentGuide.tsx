import { Routes, Route } from "react-router-dom";
import GovermentDownloadPage from "../miryang/goverment24/GovermentDownloadPage";
import GovermentMain from "../miryang/goverment24/GovermentMain";
import GovernmentLogin from "../miryang/goverment24/GovernmentLogin";
import GovernmentPrivateCert from "../miryang/goverment24/GovernmentPrivateCert";
import GovernmentKakaoSuccess from "../miryang/goverment24/GovernmentKakaoSuccess";
import GovernmentKakaoAuth from "../miryang/goverment24/GovernmentKakaoAuth";
import GovernmentAuthComplete from "../miryang/goverment24/GovernmentAuthComplete";
import GovernmentServiceOverview from "../miryang/goverment24/third-level/GovernmentServiceOverview";
import GovernmentDocumentApplication from "../miryang/goverment24/third-level/GovernmentDocumentApplication";
import GovernmentServiceHistory from "../miryang/goverment24/third-level/GovernmentServiceHistory";
import GovernmentLearningComplete from "../miryang/goverment24/third-level/GovernmentLearningComplete";
import JejuAppLayout from "../miryang/jejuair/JejuAppLayout";
import GovernmentMobileIdTerms from "../miryang/goverment24/second-level/GovernmentMobileIdTerms";
import GovernmentPassAuth from "../miryang/goverment24/second-level/GovernmentPassAuth";
import GovernmentBasicInfo from "../miryang/goverment24/second-level/GovernmentBasicInfo";
import GovernmentPasswordRegistration from "../miryang/goverment24/second-level/GovernmentPasswordRegistration";
import GovernmentIdentity from "../miryang/goverment24/second-level/GovernmentIdentity";

export default function GovermentGuide() {
  return (
    <Routes>
      <Route element={<JejuAppLayout />}>
        <Route path="download" element={<GovermentDownloadPage />} />
        <Route path="main" element={<GovermentMain />} />
        <Route path="login" element={<GovernmentLogin />} />
        <Route path="cert" element={<GovernmentPrivateCert />} />
        <Route path="kakaoauth" element={<GovernmentKakaoAuth />} />
        <Route path="kakaosuccess" element={<GovernmentKakaoSuccess />} />
        <Route path="authcomplete" element={<GovernmentAuthComplete />} />

        {/* mobileregister */}
        <Route
          path="mobileregister/term"
          element={<GovernmentMobileIdTerms />}
        />
        <Route
          path="mobileregister/passauth"
          element={<GovernmentPassAuth />}
        />
        <Route
          path="mobileregister/basicinfo"
          element={<GovernmentBasicInfo />}
        />
        <Route
          path="mobileregister/password"
          element={<GovernmentPasswordRegistration />}
        />
        <Route
          path="mobileregister/identity"
          element={<GovernmentIdentity />}
        />

        {/* third */}
        <Route
          path="overview/service"
          element={<GovernmentServiceOverview />}
        />
        <Route
          path="overview/document"
          element={<GovernmentDocumentApplication />}
        />
        <Route path="overview/history" element={<GovernmentServiceHistory />} />
        <Route path="complete" element={<GovernmentLearningComplete />} />
      </Route>
    </Routes>
  );
}
