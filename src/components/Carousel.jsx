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
          className="w-[450px] h-[400px] object-cover rounded-lg"
          alt="Raffay"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage2}
          className="w-[450px] h-[400px] object-cover rounded-lg"
          alt="Raffay"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage3}
          className="w-[450px] h-[400px] object-cover rounded-lg"
          alt="Raffay"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage4}
          className="w-[450px] h-[400px] object-cover rounded-lg"
          alt="Raffay"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={MyImage5}
          className="w-[450px] h-[400px] object-cover rounded-lg"
          alt="Raffay"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
