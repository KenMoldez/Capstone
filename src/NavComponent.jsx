import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavCSS from "./NavBar.css";
import { auth } from "./config/firebase";
import { useState } from "react";
import { useEffect } from "react";
const NavigationBar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  return (
    <div className={`${NavCSS["Navbar"]}`}>
      <nav>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={`${NavCSS["bg-body-tertiary mt-3 header"]}`}
          >
            <Container>
              <Navbar.Brand>LAKBAY - TIKANG</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link className={`${NavCSS["navbar-link"]}`} to="/">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className={`${NavCSS["navbar-link"]}`} to="/about">
                        About
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link
                        className={`${NavCSS["navbar-link"]}`}
                        to="/destinations"
                      >
                        Destinations
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className={`${NavCSS["navbar-link"]}`} to="/booked">
                        Booked Destinations
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Button>
                      <Nav.Link>
                        <Link id={`${NavCSS["header btn-group"]}`} to="/login">
                          {auth.currentUser ? auth.currentUser.email : "login"}
                        </Link>
                      </Nav.Link>
                    </Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;
