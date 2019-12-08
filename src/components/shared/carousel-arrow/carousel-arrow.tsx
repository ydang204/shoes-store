import React from "react";

import "./carousel-arrow.scss";

import prevBtn from "../../../assets/images/icons/slider-prev-btn.png";
import nextBtn from "../../../assets/images/icons/slider-next-btn.png";

export const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={nextBtn}
      alt="Next"
      onClick={onClick}
      className={className}
      style={{
        display: "block",
        zIndex: 100,
        height: "23px",
        width: "8px",
        right: "-15px"
      }}
    />
  );
};

export const PrevArrow: React.FC = (props: any) => {
  const { className, onClick } = props;
  return (
    <img
      src={prevBtn}
      alt="Previous"
      onClick={onClick}
      className={className}
      style={{
        display: "block",
        zIndex: 100,
        height: "23px",
        width: "8px",
        left: "-15px"
      }}
    />
  );
};
