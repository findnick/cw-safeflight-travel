import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((ele, i) => {
        return (
          <div key={i}>
            <img src={ele.img} alt="" />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
