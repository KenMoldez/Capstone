import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <div className="Navbar">
      <nav>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
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
                  <Nav className="justify-content-around flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link className="link" to="/">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="link" to="/about">
                        About
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="link" to="/destinations">
                        Destinations
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link>
                      <Link className="link" to="/login">
                        Login
                      </Link>
                    </Nav.Link>
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
