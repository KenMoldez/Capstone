import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavComponent";
import LandingPage from "./Home";
import AboutPage from "./About";
import { LoginX } from "./LoginCompo";
import DestinationPage from "./Destination";
import Booking from "./Booking";
import CityDestination from "./CityDestination";
import { CheckoutPage } from "./CheckOutPage";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <TEST /> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Capstone" element={<LandingPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route
          exact
          path="/login"
          element={
            <>
              <LoginX />
            </>
          }
        />
        <Route exact path="/booked" element={<CheckoutPage />} />
        <Route exact path="/destinations/" element={<DestinationPage />} />
        <Route path="/destinations/:id" element={<CityDestination />} />

        <Route path="/booking/:id" element={<Booking />} />

        <Route
          exact
          path="/Zamboanga-Peninsula"
          element={<DestinationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
