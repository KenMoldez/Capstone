import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
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
            className="bg-body-tertiary mt-3 header"
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
                      <Link className="navbar-link" to="/">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="navbar-link" to="/about">
                        About
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link className="navbar-link" to="/destinations">
                        Destinations
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Button>
                      <Nav.Link>
                        <Link className="header-btn-group" to="/login">
                          Login
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
