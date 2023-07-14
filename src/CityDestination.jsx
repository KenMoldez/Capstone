import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./destination.css";
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
        <p class="section-subtitle">Enjoy {id}!</p>
        {/* <h2 class="h2 section-title">Checkout Our Available Destinations</h2> */}
        <h2 class="h2 section-title">Visit the Beautiful Locations in {id}</h2>

        <p class="section-text">{zty["City Description"]}</p>

        {/* Card loops starts here */}
        {destinationx
          .filter((des) => des.Title == id)
          .map((des) => (
            <>
              <Row>
                <Col lg={4}>
                  <Image src={process.env.PUBLIC_URL + des.Image1} fluid />
                </Col>
                <Col lg={4}>
                  <div>
                    <h2>{des.Location}</h2>
                    <h3>One Liner</h3>
                  </div>
                  <div>{des.Description}</div>
                </Col>
                <Col lg={4}>
                  <div>REVIEW COUNT:{des.Rating}</div>
                  <div>{des.Price0}</div>
                  <div>/Person</div>

                  <Link
                    className="link"
                    to={
                      auth.currentUser ? "/booking/" + des.Location : "/login"
                    }
                  >
                    <Button>BOOK NOW</Button>
                  </Link>
                </Col>
              </Row>
            </>
          ))}
      </Container>
    </div>
  );
}

export default CityDestination;
