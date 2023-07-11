import { Container, Row, Col } from "react-bootstrap";
import Experement from "./Experement";
import Modal1 from "./Modals";

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            semper dolor. Fusce tincidunt, erat sed bibendum interdum, ligula
            erat congue lacus, ac pulvinar enim justo et ligula.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            semper dolor. Fusce tincidunt, erat sed bibendum interdum, ligula
            erat congue lacus, ac pulvinar enim justo et ligula.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            semper dolor. Fusce tincidunt, erat sed bibendum interdum, ligula
            erat congue lacus, ac pulvinar enim justo et ligula.
          </p>
        </Col>
      </Row>
      <Experement />
      <Modal1 />
    </Container>
  );
};

export default AboutPage;
