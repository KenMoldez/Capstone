import React from "react";
import { Table } from "react-bootstrap";
import "./CheckoutPage.css"; // Import the CSS file for styling

export const CheckoutPage = () => {
  // Example travel booking details
  const bookingDetails = [
    {
      id: 1,
      name: "John Doe",
      destination: "At Krasty Karbs",
      date: "2023-08-20",
      totalPrice: 1200,
      currency: "USD",
      status: "Success",
    },
    {
      id: 2,
      name: "Jane Smith",
      destination: "At Krasty Karbs",
      date: "2023-09-10",
      totalPrice: 1800,
      currency: "USD",
      status: "Pending",
    },
    // Add more booked destinations as needed
  ];

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
              <td>{booking.destination}</td>
              <td>{booking.date}</td>
              <td>
                {booking.totalPrice} {booking.currency}
              </td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
