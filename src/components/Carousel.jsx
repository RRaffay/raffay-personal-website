import MyImage4 from "../images/4.png";

function MyCarousel() {
  return (
    <div className="relative w-[450px] h-[400px] z-0">
      <img
        src={MyImage4}
        className="w-full h-full object-cover rounded-lg"
        alt="Slide"
      />
    </div>
  );
}

export default MyCarousel;
