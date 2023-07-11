import { Container, Row, Col, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid>
      <Row className="landing-page">
        <Col md={6} className="landing-page__content">
          <h1>Explore Mindanao</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            semper dolor. Fusce tincidunt, erat sed bibendum interdum, ligula
            erat congue lacus, ac pulvinar enim justo et ligula.
          </p>
          <Button variant="primary">Get Started</Button>
        </Col>
        <Col md={6} className="landing-page__image">
          <img src="your-image-url" alt="Landing Page" />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
