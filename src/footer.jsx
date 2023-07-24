import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <div id="footer-top">
        <Container>
          <Row className="row">
            <Col md={4} id="footer-brand">
              <h4 id="contact-title">Partner Hotels</h4>

              <Row>
                <Col className="logos__">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/hotel_logo1.svg"}
                    alt="Hotel Logo 1"
                    className="image1 img-fluid"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/Images/hotel_logo2.svg"}
                    alt="Hotel Logo 2"
                    className="image2 img-fluid"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/Images/hotel_logo3.svg"}
                    alt="Hotel Logo 3"
                    className="image3 img-fluid"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/Images/hotel_logo4.svg"}
                    alt="Hotel Logo 4"
                    className="image4 img-fluid"
                  />
                </Col>
              </Row>
            </Col>
            <Col md={4} id="footer-contact">
              <h4 id="contact-title">Contact Us</h4>

              <p id="contact-text">Feel free to contact and reach us !!</p>

              <ul>
                <li id="contact-item">
                  <ion-icon name="call-outline"></ion-icon>
                  <a href="tel:+01123456790" id="contact-link">
                    +01 (123) 4567 90
                  </a>
                </li>

                <li id="contact-item">
                  <ion-icon name="mail-outline"></ion-icon>
                  <a href="mailto:info.lakbay-tikang.com" id="contact-link">
                    info.lakbay-tikang.com
                  </a>
                </li>

                <li id="contact-item">
                  <ion-icon name="location-outline"></ion-icon>
                  <address>143, Sa Puso Mo</address>
                </li>
              </ul>
            </Col>

            <Col md={4} id="footer-form">
              <p id="form-text">
                Subscribe our newsletter for more update & news !!
              </p>

              <form action="" id="form-wrapper">
                <input
                  type="email"
                  name="email"
                  id="input-field"
                  placeholder="Enter Your Email"
                  required
                />

                <button type="submit" id="buttonn" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="footer-bottom">
        <Container>
          <p id="copyright">
            &copy; 2022 <a href="">Lakbay - Tikang</a>. All rights reserved
          </p>

          <ul id="footer-bottom-list">
            <li>
              <a href="#" id="footer-bottom-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" id="footer-bottom-link">
                Term & Condition
              </a>
            </li>

            <li>
              <a href="#" id="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
