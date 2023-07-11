import { Carousel, Image } from "react-bootstrap";
import camiguin1 from "./Images/camiguin1.png";

const DestinationPage = () => {
  return (
    <div className="container">
      <div className="destination-info text-center">
        <h1 className="title">Destination Title</h1>
        <h5>One Liner</h5>
      </div>
      <h4 className="place mt-5 mb-2">Name of Location</h4>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100 mt-5 mb-5"
            src={camiguin1}
            alt="carousel image1"
            placeholder="camiguin spots"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 mt-5 mb-5"
            src={"#"}
            alt="Carousel Image 2"
            placeholder="images"
          />
        </Carousel.Item>
        {/* Add more carousel items as needed */}
      </Carousel>

      <div className="destination-info text-center">
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, eius
          nam modi veniam accusantium expedita dolorum? Animi distinctio
          consequuntur, voluptates sunt dolorem ea esse incidunt aperiam
          accusamus fuga aliquid reprehenderit?
        </p>
        <p className="location">Location: City, Country</p>
        <p className="rating">Rating: 4.5/5</p>
        <div className="price">PHP ***</div>
      </div>

      <div className="text-end">
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default DestinationPage;
