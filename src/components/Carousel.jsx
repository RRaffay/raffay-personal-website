import { useState, useEffect } from "react";
import MyImage1 from "../images/1.png";
import MyImage2 from "../images/2.png";
import MyImage3 from "../images/3.png";
import MyImage4 from "../images/4.png";
import MyImage5 from "../images/5.png";

function MyCarousel() {
  const [current, setCurrent] = useState(0);
  const images = [MyImage1, MyImage2, MyImage3, MyImage4, MyImage5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[450px] h-[400px]">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            className="w-full h-full object-cover rounded-lg"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default MyCarousel;
