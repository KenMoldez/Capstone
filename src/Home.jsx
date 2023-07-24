import { Accordion, Container } from "react-bootstrap";
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
        <Container id="heroo">
          <h2 className="h1 hero-title">
            Journey to explore <br />
            Mindanao
          </h2>

          <p className="hero-text">
            The southernmost major island of the Philippines, offers a diverse
            and captivating destination for tourists, boasting stunning
            landscapes, vibrant cultural heritage, and warm hospitality that
            invites exploration of its pristine beaches, majestic mountains, and
            unique cultural experiences.
          </p>

          <Row className="justify-content-center">
            <Col lg={3} className="mb-2">
              <Link className="link" to={"/destinations/"}>
                <Button variant="primary" size="lg" id="buttonn" block>
                  destinations | book now
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
              <Button variant="primary" id="buttonn">
                Check Destinations
              </Button>
            </Link>
          </Row>
        </div>
      </div>
      <div className="destination-grid">
        <div className="destination-container">
          <div className="destination-content">
            <p className="section-subtitle">Photo Gallery</p>
            <h2 className="h2 section-title">Photo's from travellers</h2>
            <p className="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </div>
          <Container>
            <Row className="gallery">
              <Col lg={4} md={12} className="mb-4 mb-lg-0">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Images/Zampen_aliguay_island2.jpg"
                  }
                  className="w-100 shadow-1-strong rounded mb-4"
                />

                <img
                  src={
                    process.env.PUBLIC_URL + "/Images/davao_eagle_center3.jpg"
                  }
                  className="w-100 shadow-1-strong rounded mb-4"
                />
              </Col>

              <Col lg={4} className="mb-4 mb-lg-0">
                <img
                  src={process.env.PUBLIC_URL + "/Images/eden_gallery1.jpg"}
                  className="w-100 shadow-1-strong rounded mb-4"
                />
              </Col>

              <Col lg={4} className="mb-4 mb-lg-0">
                <img
                  src={process.env.PUBLIC_URL + "/Images/mantigue_gallery3.jpg"}
                  className="w-100 shadow-1-strong rounded mb-4"
                />

                <img
                  src={
                    process.env.PUBLIC_URL + "/Images/surigao_tatak_falls3.jpg"
                  }
                  className="w-100 shadow-1-strong rounded mb-4"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="destination-grid">
        <div className="destination-container">
          <div className="destination-content">
            <p className="section-subtitle">Here's our!</p>
            <h2 className="h2 section-title">Frequently asked question</h2>
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col md={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What are the type of services do you offer?
                    </Accordion.Header>
                    <Accordion.Body>
                      Our travel agency offers a comprehensive range of services
                      to cater to all your travel needs. We provide flight
                      bookings to domestic and international destinations, hotel
                      accommodations, curated tour packages to popular tourist
                      spots, visa assistance for international travel, travel
                      insurance options, and more.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How do I make a reservation or booking?
                    </Accordion.Header>
                    <Accordion.Body>
                      Making a reservation or booking with us is quick and
                      convenient. You can easily book online through our website
                      by selecting your desired destination, dates, and
                      preferred services. Alternatively, you can reach out to
                      our dedicated customer support team via phone or email,
                      and they will assist you in finalizing your booking.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What are your cancellation and refund policies?
                    </Accordion.Header>
                    <Accordion.Body>
                      We understand that plans can change, and we strive to be
                      as flexible as possible. Our cancellation and refund
                      policies vary depending on the type of service and
                      provider. Generally, cancellations made within a certain
                      timeframe before the travel date may be eligible for a
                      partial or full refund, subject to any applicable
                      cancellation fees. For detailed information, please refer
                      to the specific service's terms and conditions or contact
                      our customer support team.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Are there any current travel deals or discounts available?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we frequently offer exciting travel deals and
                      discounts on various packages and services. These may
                      include seasonal promotions, early-bird booking offers,
                      group discounts, or special deals for specific
                      destinations. Keep an eye on our website's "Deals" section
                      or subscribe to our newsletter to stay updated on the
                      latest offers.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      What travel documents are required for my destination?
                    </Accordion.Header>
                    <Accordion.Body>
                      The travel documents required vary based on your
                      destination and nationality. For international travel, you
                      will typically need a valid passport with at least six
                      months of validity, and in some cases, a visa may be
                      necessary. Our website provides a general overview of visa
                      requirements for different countries, but we highly
                      recommend checking with the respective embassy or
                      consulate for the most up-to-date and specific information
                      regarding travel documents.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
