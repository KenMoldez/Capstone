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
                  <Nav className="justify-content-end flex-grow-1 pe-3">
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
                    <NavDropdown
                      title="Destinations"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Nav.Link>
                          <Link className="link" to="/Camiguin">
                            Camiguin
                          </Link>
                        </Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Nav.Link>
                          <Link className="link" to="/Davao">
                            Davao
                          </Link>
                        </Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Nav.Link>
                          <Link className="link" to="/Siargao-Surigao">
                            Siargao/Surigao
                          </Link>
                        </Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Nav.Link>
                          <Link className="link" to="/Zamboanga-Peninsula">
                            Zamboanga Peninsula
                          </Link>
                        </Nav.Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link>
                      <Link className="link" to="/login">
                        Login
                      </Link>
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
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
