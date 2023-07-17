import React, { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import "./AdminPage.css";

const AboutPage = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "John Doe",
      destination: "Sa puso mo",
      dateBooked: "2023-07-15",
      payment: 1500,
      status: "Reserved",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      destination: "Sa puso mo",
      dateBooked: "2023-07-16",
      payment: 2000,
      status: "Pending",
    },
    // Add more booking objects as needed
  ]);

  const updateStatus = (bookingId, newStatus) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div className="admin-page">
      <nav className="admin-navbar">
        <h1 className="admin-title">Admin Page</h1>
        {/* Navigation buttons or links */}
      </nav>
      <Container className="mt-3">
        <Table striped bordered hover className="booking-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Destination Booked</th>
              <th>Date Booked</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.customerName}</td>
                <td>{booking.destination}</td>
                <td>{booking.dateBooked}</td>
                <td>{booking.payment}</td>
                <td>{booking.status}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => updateStatus(booking.id, "Done")}
                  >
                    Done
                  </Button>{" "}
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => updateStatus(booking.id, "Pending")}
                  >
                    Pending
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => updateStatus(booking.id, "Reserved")}
                  >
                    Reserved
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AboutPage;
