import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./config/firebase";
import { useState, useEffect } from "react";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  // ... (the existing code remains the same)

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="nnaav">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} id="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + "/Images/Lakbay - Tikang.png"}
                alt="LAKBAY - TIKANG"
                width="100"
                height="80"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Container>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/Images/Lakbay - Tikang.png"
                      }
                      alt="LAKBAY - TIKANG"
                      width="130"
                      height="90"
                      className="side_logo"
                    />
                  </Container>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1" id="justify-content-end pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/destinations">Destinations</Link>
                  </Nav.Link>
                </Nav>
                <Nav>
                  {auth.currentUser ? (
                    <DropdownButton
                      title={auth.currentUser.email}
                      variant="link"
                      className="p-0 drop"
                    >
                      <Dropdown.Item>
                        <Link to="/booked">Booked Destinations</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          to="/"
                          onClick={() => {
                            auth.signOut();
                            props.getBookings();
                          }}
                        >
                          Log Out
                        </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <Nav.Link>
                      <Link id="header btn-group" to="/login">
                        Login
                      </Link>
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavigationBar;
