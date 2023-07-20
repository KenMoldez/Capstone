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
import { useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "./config/firebase";
import { useEffect } from "react";
function App() {
  const [user, setUser] = useState(0);
  const dbRefbk = collection(db, "bookings");
  const [books, setBooks] = useState([]);

  const getBookings = async () => {
    try {
      const data = await getDocs(dbRefbk);
      const filteredData = data.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .filter((doc) => doc.userId == auth?.currentUser?.uid)
        .sort((a, b) => b.dateplaced.toDate() - a.dateplaced.toDate());
      setBooks(filteredData);
    } catch (err) {
      if (auth.currentUser) {
        alert("cannot connect to firebase servers");
      }
      setBooks([]);
      console.error(err);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="App">
      {console.log(books)}
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
              <LoginX getBookings={getBookings} />
            </>
          }
        />
        <Route exact path="/booked" element={<CheckoutPage books={books} />} />
        <Route exact path="/destinations/" element={<DestinationPage />} />
        <Route path="/destinations/:id" element={<CityDestination />} />
        <Route
          path="/booking/:id"
          element={<Booking getBookings={getBookings} />}
        />
      </Routes>
    </div>
  );
}

export default App;
