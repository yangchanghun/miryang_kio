import { Routes, Route } from "react-router-dom";
import JejuAppLayout from "../miryang/jejuair/JejuAppLayout";
import KorailMain from "../miryang/korail/KorailMain";
import KorailList from "../miryang/korail/KorailList";
import KorailReservation from "../miryang/korail/KorailReservation";
import KorailSelectSeat from "../miryang/korail/KorailSelectSeat";
import KorailPayment from "../miryang/korail/KorailPayment";
import KorailPaymentMethod from "../miryang/korail/KorailPaymentMethod";
import KorailTicket from "../miryang/korail/KorailTicket";
import KorailEducationComplete from "../miryang/korail/KorailEducationComplete";
export default function KorailGuide() {
  return (
    <Routes>
      <Route element={<JejuAppLayout />}>
        <Route path="main" element={<KorailMain />} />
        <Route path="list" element={<KorailList />} />
        <Route path="reservation" element={<KorailReservation />} />
        <Route path="seat" element={<KorailSelectSeat />} />
        <Route path="payment" element={<KorailPayment />} />
        <Route path="paymethod" element={<KorailPaymentMethod />} />
        <Route path="ticket" element={<KorailTicket />} />
        <Route path="complete" element={<KorailEducationComplete />} />
      </Route>
    </Routes>
  );
}
