import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Offcanvas,
  Button,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const TEST = () => {
  const destinationx = require("./destinations.json");
  return (
    <div className="Navbar">
      <Nav>
        {destinationx.map((destination) => (
          <NavLink>
            <Link className="link" to={"/destinations/" + destination.Location}>
              {destination.Location}
            </Link>
          </NavLink>
        ))}
      </Nav>
    </div>
  );
};

export default TEST;
