import React from "react";
import { Container, Table } from "react-bootstrap";
import "./CheckoutPage.css"; // Import the CSS file for styling

export const CheckoutPage = (props) => {
  const bookingDetails = [...props.books];

  return (
    <div className="destination-grid">
      <div className="destination-container">
        <div className="destination-content">
          <p className="section-subtitle">To more adventures with you</p>
          <h2 className="h2 section-title">Your booking history</h2>
        </div>
        <Container>
          <div className="table-container">
            <div className="table-wrapper">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Date Booked</th>
                    <th>Total Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingDetails.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.name}</td>
                      <td>{booking.location}</td>
                      <td>{booking.date}</td>
                      <td>{booking.dateplaced.toDate().toString()}</td>
                      <td>
                        ₱
                        {Number(booking.billout.replace(/[^0-9\.-]+/g, "")) *
                          1.2}{" "}
                      </td>
                      <td>{booking.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
