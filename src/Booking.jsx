import { useState } from "react";
import "./Booking.css";
import { Link, useParams } from "react-router-dom";
import { auth, db } from "./config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Form, Modal, Button } from "react-bootstrap";

const Booking = (props) => {
  const { id } = useParams();
  const destinationx = require("./destinations.json");
  const desx = destinationx.find((des) => des.Location == id);
  const now = new Date().toISOString().split("T")[0];
  const [billout, setBillout] = useState(desx.Price1);
  const [sdate, setSdate] = useState(now);
  const [card, setCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [nat, setNat] = useState("");
  const [prov, setProv] = useState("");
  const bookingsCollectionRef = collection(db, "bookings");
  const [spin, setSpin] = useState("");
  const billchange = (event) => {
    setBillout(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const [cardError, setCardError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [natError, setNatError] = useState(false);
  const [provError, setProvError] = useState(false);

  const resetFormErrors = () => {
    setCardError(false);
    setMonthError(false);
    setYearError(false);
    setCvvError(false);
    setNameError(false);
    setNatError(false);
    setProvError(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const pay = async () => {
    setSpin(" ");
    resetFormErrors();

    if (
      card.length == 16 &&
      month &&
      year >= 23 &&
      cvv &&
      name &&
      nat &&
      prov &&
      sdate
    ) {
      let x = card.slice(11, 15);
      let y = new Date();

      await addDoc(bookingsCollectionRef, {
        dateplaced: y,
        location: id,
        name: name,
        date: sdate,
        billout: billout,
        digits: x,
        email: auth?.currentUser?.email,
        userId: auth?.currentUser?.uid,
        status: "pending",
      });
      await props.getBookings();
      setShowModal(true); // Show the modal after successful booking
    } else {
      // Check each field and set error state if necessary
      if (card.length !== 16) {
        setCardError(true);
      }
      if (!month) {
        setMonthError(true);
      }
      if (year < 23) {
        setYearError(true);
      }
      if (!cvv) {
        setCvvError(true);
      }
      if (!name) {
        setNameError(true);
      }
      if (!nat) {
        setNatError(true);
      }
      if (!prov) {
        setProvError(true);
      }
    }

    setSpin("");
  };

  return (
    <div className="booking">
      <div className="container d-lg-flex">
        <div className="box-1 bg-light user">
          <div className="box-inner-1 pb-3 mb-3">
            <div className="d-flex justify-content-center mb-3 mt-5 userdetails">
              <p className="fw-bold">{id}</p>
            </div>
            <div
              id="my"
              className="carousel slide carousel-fade img-details"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#my"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#my"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#my"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={process.env.PUBLIC_URL + desx.Image2}
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={process.env.PUBLIC_URL + desx.Image3}
                    className="d-block w-100 h-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={process.env.PUBLIC_URL + desx.Image4}
                    className="d-block w-100"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#my"
                data-bs-slide="prev"
              >
                <span className="icon">
                  <span className="fas fa-arrow-left"></span>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#my"
                data-bs-slide="next"
              >
                <span className="icon">
                  <span className="fas fa-arrow-right"></span>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <p className="dis info my-3">{desx.Description}</p>
            <div className="radiobtn">
              <input
                type="radio"
                name="box"
                id="one"
                value={desx.Price1}
                onClick={billchange}
              />
              <input
                type="radio"
                name="box"
                id="two"
                value={desx.Price2}
                onClick={billchange}
              />
              <input
                type="radio"
                name="box"
                id="three"
                value={desx.Price3}
                onClick={billchange}
              />
              <label for="one" className="box py-2 first">
                <div className="d-flex align-items-start">
                  <span className="circle"></span>
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold"> Promo 1 </span>
                      <span className="fas fa-peso-sign">{desx.Price1}</span>
                    </div>
                    <span>
                      2Days | 1Night | 3Adults | 2Children | Hotel Included
                    </span>
                  </div>
                </div>
              </label>
              <label for="two" className="box py-2 second">
                <div className="d-flex">
                  <span className="circle"></span>
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold"> Promo 2 </span>
                      <span className="fas fa-peso-sign">{desx.Price2}</span>
                    </div>
                    <span>
                      2Days | 1Night | 5Adults | 3Children | Hotel Included
                    </span>
                  </div>
                </div>
              </label>
              <label for="three" className="box py-2 third">
                <div className="d-flex">
                  <span className="circle"></span>
                  <div className="course">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold"> Promo 3 </span>
                      <span className="fas fa-peso-sign">{desx.Price3}</span>
                    </div>
                    <span>
                      2Days | 1Night | 8Adults | 5Children | Hotel Included
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="box-2 mt-4">
          <div className="box-inner-2">
            <div>
              <p className="fw-bold">Payment Details</p>
              <p className="dis mb-3">
                Complete your tour by providing your payment details
              </p>
            </div>
            <form action="">
              <div className="mb-3">
                <p className="dis fw-bold mb-2">Email address</p>
                <input
                  className="form-control"
                  type="email"
                  value={auth.currentUser.email}
                  disabled
                />
              </div>
              <div className="my-3 cardname">
                <p className="dis fw-bold mb-2">Travel Date</p>
                <Form.Control
                  className="form-control"
                  type="date"
                  value={sdate}
                  onChange={(date) => setSdate(date.target.value)}
                  min={now}
                />
              </div>
              <div>
                <p className="dis fw-bold mb-2">Card details</p>
                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                  <div className="fab fa-cc-visa ps-3"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Details"
                    maxlength={16}
                    onChange={(e) => setCard(e.target.value)}
                  />
                  <div className="d-flex w-50">
                    <input
                      type="text"
                      className="form-control px-0"
                      placeholder="MM"
                      maxlength={2}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control px-0"
                      placeholder="YY"
                      maxlength={2}
                      onChange={(e) => setYear(e.target.value)}
                    />
                    <input
                      type="password"
                      maxlength="3"
                      className="form-control px-0"
                      placeholder="CVV"
                      onChange={(e) => setCVV(e.target.value)}
                    />
                  </div>
                </div>
                <div className="my-3 cardname">
                  <p className="dis fw-bold mb-2">Cardholder name</p>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="address">
                  <p className="dis fw-bold mb-3">Billing address</p>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setNat(e.target.value)}
                  >
                    <option selected hidden>
                      Select Country
                    </option>
                    <option value="1">Philippines</option>
                    <option value="2">Other..</option>
                  </select>
                  <div className="d-flex">
                    <input
                      className="form-control zip"
                      type="text"
                      placeholder="ZIP"
                    />
                    <input
                      className="form-control state"
                      type="text"
                      placeholder="Province"
                      onChange={(e) => setProv(e.target.value)}
                    />
                  </div>

                  <div className="d-flex flex-column dis mt-5">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p>Subtotal</p>
                      <p>₱{Number(billout.replace(/[^0-9\.-]+/g, ""))}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p>
                        VAT<span>(20%)</span>
                      </p>
                      <p>₱{Number(billout.replace(/[^0-9\.-]+/g, "")) * 0.2}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold">
                        <p>
                          ₱{Number(billout.replace(/[^0-9\.-]+/g, "")) * 1.2}
                        </p>
                      </p>
                    </div>
                    {spin ? (
                      <>
                        <div className="btn btn-primary mt-2" disabled="true">
                          Loading
                        </div>
                      </>
                    ) : (
                      <div
                        className="btn btn-primary mt-2"
                        id="buttonn | Hotel Included"
                        onClick={pay}
                      >
                        Pay ₱{Number(billout.replace(/[^0-9\.-]+/g, "")) * 1.2}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Modal show={showModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>BOOKING SECURE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your booking is confirmed. Thank you for booking with us!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Booking;
