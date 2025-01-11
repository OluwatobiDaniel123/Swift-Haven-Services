import React from "react";
import { Carousel } from "antd";
import "./Banner.css";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  height: "100vh",
};

const Banner = () => (
  <Carousel autoplay>
    <div>
      <h3 className="carousel" style={contentStyle}>
        1
      </h3>
    </div>
    <div>
      <h3 className="carousel" style={contentStyle}>
        2
      </h3>
    </div>
    <div>
      <h3 className="carousel" style={contentStyle}>
        3
      </h3>
    </div>
  </Carousel>
);
export default Banner;
