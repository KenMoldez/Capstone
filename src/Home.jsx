import { Container } from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./home.css";
import { Link } from "react-router-dom";
import { auth } from "./config/firebase";

const LandingPage = () => {
  const cities = require("./hhome.json");
  return (
    <section id="home">
      <div className="hero">
        <Container>
          <h2 className="h1 hero-title">Journey to explore Mindanao</h2>

          <p className="hero-text">
            The southernmost major island of the Philippines, offers a diverse
            and captivating destination for tourists, boasting stunning
            landscapes, vibrant cultural heritage, and warm hospitality that
            invites exploration of its pristine beaches, majestic mountains, and
            unique cultural experiences.
          </p>

          <Row className="justify-content-center">
            <Col xs={6} sm={3} md={3} lg={3} xl={3} className="mb-2">
              <Link className="link" to={"/destinations/"}>
                <Button variant="primary" size="lg" block>
                  destinations
                </Button>
              </Link>
            </Col>
            <Col xs={6} sm={3} md={3} lg={3} xl={3} className="mb-2">
              <Link
                className="link"
                to={auth.currentUser ? "/booking/" : "/login"}
              >
                <Button variant="secondary" size="lg" block>
                  book now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="destination-grid">
        <div className="destination-container">
          <div className="destination-content">
            <p className="section-subtitle">CHECK IT NOW!</p>
            <h2 className="h2 section-title">AVAILABLE DESTINATIONS</h2>
            <p className="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </div>
          <Row
            xs={1}
            md={2}
            lg={3}
            className="g-4 justify-content-center destination-row"
          >
            {cities.map((hhome) => (
              <Col className="destination-col">
                <Card className="destination-card">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + hhome["City Image"]}
                  />
                  <Card.Body>
                    <Card.Title>{hhome["City Title"]}</Card.Title>
                    <Card.Text>{hhome["City Description"]}</Card.Text>
                  </Card.Body>
                </Card>{" "}
              </Col>
            ))}
            <Link className="link" to={"/destinations/"}>
              <Button variant="primary">Check Destinations</Button>
            </Link>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
