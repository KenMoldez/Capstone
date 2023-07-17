import React from "react";
import { Table } from "react-bootstrap";
import "./CheckoutPage.css"; // Import the CSS file for styling

export const CheckoutPage = (props) => {
  const bookingDetails = [...props.books];

  return (
    <div className="checkout-page">
      <h2>Your Booked Travel Destinations</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Destination</th>
            <th>Date</th>
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
                {booking.totalPrice} {booking.billout}
              </td>
              <td></td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
