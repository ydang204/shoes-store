import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./main-slider.scss";
import banner1 from "../../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../../assets/images/banner/banner3.jpg";

interface Props {}

const MainSlider: React.FC<Props> = props => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  return (
    <Slider className="main-slider">
      <Slider className="container">
        <Slider {...settings}>
          <div>
            <img src={banner1} />
          </div>
          <div>
            <img src={banner2} />
          </div>
          <div>
            <img src={banner3} />
          </div>
        </Slider>
      </Slider>
    </Slider>
  );
};

export default MainSlider;
