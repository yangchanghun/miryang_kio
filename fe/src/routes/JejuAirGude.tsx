import { Routes, Route } from "react-router-dom";

import JejuAir from "../miryang/jejuair/JejuAir";
import DestinationSelector from "../miryang/jejuair/DestinationSelector";
import FlightBookingPage from "../miryang/jejuair/FlightBookingPage";
import PassengerInfoPage from "../miryang/jejuair/PassengerInfoPage";
import BaggageSelection from "../miryang/jejuair/BaggageSelection";
// import SecurityNotice from "../miryang/jejuair/SecurityNotice";
import TravelDetailsPage from "../miryang/jejuair/TravelDetailsPage";
import JejuAirPaymentPage from "../miryang/jejuair/JejuAirPaymentPage";
import JejuTicket from "../miryang/jejuair/JejuTicket";
import JejuAirFinish from "../miryang/jejuair/JejuAirFinish";
import JejuAppLayout from "../miryang/jejuair/JejuAppLayout";
export default function JejuAirGuide() {
  return (
    <Routes>
      <Route element={<JejuAppLayout />}>
        <Route path="main" element={<JejuAir />} />
        <Route path="selector" element={<DestinationSelector />} />
        <Route path="booking" element={<FlightBookingPage />} />
        <Route path="passengerinfo" element={<PassengerInfoPage />} />
        <Route path="baggage" element={<BaggageSelection />} />
        <Route path="detail" element={<TravelDetailsPage />} />
        <Route path="payment" element={<JejuAirPaymentPage />} />
        <Route path="ticket" element={<JejuTicket />} />
        <Route path="finish" element={<JejuAirFinish />} />
      </Route>
    </Routes>
  );
}
