import Carousel from "react-bootstrap/Carousel";
import placeholder1 from "../../assets/placeholder1.jpg";
import placeholder2 from "../../assets/placeholder2.jpg";
import placeholder3 from "../../assets/placeholder3.jpg";

function UncontrolledExample() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={placeholder1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={placeholder2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={placeholder3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
