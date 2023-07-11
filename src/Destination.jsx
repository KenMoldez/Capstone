import { Carousel, Image } from "react-bootstrap";
import camiguin1 from "./Images/camiguin1.png";
import { Link, useParams } from "react-router-dom";

const DestinationPage = () => {
  const { id } = useParams();

  const destinationx = require("./destinations.json");
  const x = destinationx.find((destination) => destination["Location"] == id);

  return (
    <div className="container">
      <div className="destination-info text-center">
        <h1 className="title">{x.Tittle}</h1>
        <h5>{x["One-liner"]}</h5>
      </div>
      <h4 className="place mt-5 mb-2">{x.Location}</h4>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100 mt-5 mb-5"
            src={process.env.PUBLIC_URL + x.Image1}
            alt="carousel image1"
            placeholder="camiguin spots"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 mt-5 mb-5"
            src={process.env.PUBLIC_URL + x.Image2}
            alt="Carousel Image 2"
            placeholder="images"
          />
        </Carousel.Item>
        {/* Add more carousel items as needed */}
      </Carousel>

      <div className="destination-info text-center">
        <p className="description">{x.Description}</p>
        <p className="location">{x.Location}</p>
        <p className="rating">{x.Rating}</p>
        <div className="price">{x.Price}</div>
      </div>

      <div className="text-end">
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default DestinationPage;
