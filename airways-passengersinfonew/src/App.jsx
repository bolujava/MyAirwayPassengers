import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengersInfoAdultPage from './Pages/PassengersInfoAdultPage';
import PassengersInfoInfantPage from './Pages/PassengersInfoInfantPage';
import BookingConfirmationPage from './Pages/BookingConfirmationPage';
import LandingPage from './Pages/LandingPage';
import FlightSelectionOnePage from './Pages/FlightSelectionOnePage';
import './App.css'
import PaymentInfoPage from './Pages/PaymentInfoPage';
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/searchflight" element={<LandingPage />} />
    <Route exact path="/booking-confirmation" element={<BookingConfirmationPage />} />
    <Route exact path="/flight-select" element={<FlightSelectionOnePage />}/>
    {/* <Route exact path="/flight-information" element={<FlightInformationPage/>}/> */}
    <Route exact path="/adult-info-page" element={<PassengersInfoAdultPage />} />
    <Route exact path="/infant-info-page" element={<PassengersInfoInfantPage />} />
    <Route exact path="/make-payment" element={<PaymentInfoPage />} />

      </Routes>
      </Router>
    </>
  )
}
export default App