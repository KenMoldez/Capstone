import { Container } from "react-bootstrap";
import "./home.css";

const LandingPage = () => {
  return (
    <section
      className="hero"
      id="home"
      // style={{
      //   backgroundImage: `url("https://via.placeholder.com/500")`,
      // }}
    >
      <Container>
        <h2 className="h1 hero-title">Journey to explore Mindanao</h2>

        <p className="hero-text">
          Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
          class corporis nostra rem quos voluptatibus habitant? Fames, vivamus
          minim nemo enim, gravida lobortis quasi, eum.
        </p>

        <div className="btn-group">
          <button className="btn btn-primary">Learn more</button>

          <button className="btn btn-secondary">Book now</button>
        </div>
      </Container>
    </section>
  );
};

export default LandingPage;
