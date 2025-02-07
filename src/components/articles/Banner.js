import React from "react";
import { Carousel } from "antd";
import "./Banner.css";
const contentStyle = {
  // height: "160px",
  color: "#fff",
  // lineHeight: "160px",
  textAlign: "center",
  // height: "100vh",
};

const Banner = () => (
  <Carousel autoplay>
    <div className="div">
      <h3 className="h3">
        Swift Hoven Services
        <p>
          Moving from house to house or city to city by road you are at the
          right place.
        </p>
      </h3>
    </div>
    <div className="div">
      <h3 className="h3">
        Swift Hoven Services
        <p>
          Moving from house to house or city to city by road you are at the
          right place.
        </p>
      </h3>
    </div>
    <div className="div">
      <h3 className="h3">
        Swift Hoven Services
        <p>
          Moving from house to house or city to city by road you are at the
          right place.
        </p>
      </h3>
    </div>
  </Carousel>
);
export default Banner;
