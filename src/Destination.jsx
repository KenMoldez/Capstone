import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./destination.css";
import { Link } from "react-router-dom";
import { auth } from "./config/firebase";

function DestinationPage() {
  const cities = require("./city.json");
  return (
    <div className="destination-container">
      <div className="destination-content">
        <p className="section-subtitle">CHECK IT NOW!</p>
        <h2 className="h2 section-title">AVAILABLE DESTINATIONS</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>
      </div>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-4 justify-content-center destination-row"
      >
        {cities.map((city) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + city["City Image"]}
              />
              <Card.Body>
                <Card.Title>{city["City Title"]}</Card.Title>
                <Card.Text>{city["City Description"]}</Card.Text>
                <Link
                  className="link"
                  to={"/destinations/" + city["City Title"]}
                >
                  <Button variant="primary">Check Destination</Button>
                </Link>
              </Card.Body>
            </Card>{" "}
          </Col>
        ))}

        {/* test */}
        <Card className="destination-card">
          <div className="destination-image">
            <img src={"#"} alt="Destination" />
          </div>
          <div className="destination-info">
            <div className="destination-description">{"description"}</div>
            <div className="destination-price">{"price"}</div>
            <Button variant="primary" className="book-now-button">
              Book Now
            </Button>
          </div>
        </Card>
      </Row>
    </div>
  );
}

export default DestinationPage;
