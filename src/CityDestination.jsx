import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./citydestination.css";
import { Link, useParams } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import { auth } from "./config/firebase";

function CityDestination() {
  const { id } = useParams();
  const destinationx = require("./destinations.json");
  const cities = require("./city.json");
  const zty = cities.find((city) => city["City Title"] == id);

  // const x=require("")
  return (
    <div className="citydestination">
      <Container>
        <div className="destination-container">
          <div className="destination-content">
            <p className="section-subtitle">Enjoy {id}!</p>
            <h2 className="h2 section-title">
              Visit the Beautiful Locations in {id}
            </h2>
            <p className="section-text">{zty["City Description"]}</p>
          </div>
        </div>
        {/* Card loops starts here */}
        {destinationx
          .filter((des) => des.Title === id)
          .map((des) => (
            <Card key={des.Location} className="mb-5 cardss">
              <Row>
                <Col lg={4} className="d-flex justify-content-end">
                  <div className="card-image">
                    <Card.Img src={process.env.PUBLIC_URL + des.Image1} fluid />
                  </div>
                </Col>
                <Col lg={4} className="d-flex align-items-center">
                  <Card.Body>
                    <div className="card-content">
                      <Card.Title>{des.Location}</Card.Title>
                      <Card.Text>{des.Description}</Card.Text>
                    </div>
                  </Card.Body>
                </Col>
                <Col lg={4} className=" details">
                  <div className="card-details">
                    <div>
                      <h3>{des.Price0}</h3>
                    </div>
                    <div>/Person</div>
                    <Link
                      className="link button"
                      to={
                        auth.currentUser ? "/booking/" + des.Location : "/login"
                      }
                    >
                      <Button id="buttonn">BOOK NOW</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
      </Container>
    </div>
  );
}

export default CityDestination;
