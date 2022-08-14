import Carousel from "react-bootstrap/Carousel";
import MyImage1 from "../images/1.png";
import MyImage2 from "../images/2.png";
import MyImage3 from "../images/3.png";
import MyImage4 from "../images/4.png";
import MyImage5 from "../images/5.png";

function MyCarousel() {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage1}
          width="450"
          height="400"
          alt="Raffay"
          className="right-col-image"
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage2}
          width="450"
          height="400"
          alt="Raffay"
          className="right-col-image"
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage3}
          width="450"
          height="400"
          alt="Raffay"
          className="right-col-image"
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage4}
          width="450"
          height="400"
          alt="Raffay"
          className="right-col-image"
        ></img>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage5}
          width="450"
          height="400"
          alt="Raffay"
          className="right-col-image"
        ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
