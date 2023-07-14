import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavComponent";
import LandingPage from "./Home";
import AboutPage from "./About";
import Login from "./Login";
import { LoginX } from "./LoginCompo";
import { Movie } from "./Movie";
import DestinationPage from "./Destination";
import TEST from "./TEST";
import Booking from "./Booking";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <TEST /> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Capstone" element={<LandingPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/destinations/:id" element={<DestinationPage />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route exact path="/Camiguin" element={<DestinationPage />} />
        <Route exact path="/Davao" element={<DestinationPage />} />
        <Route exact path="/Siargao/Surigao" element={<DestinationPage />} />
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
