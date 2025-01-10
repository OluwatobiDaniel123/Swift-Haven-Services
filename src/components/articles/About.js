import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import slide1 from "../../../src/assets/abou6.jpg";
import slide2 from "../../../src/assets/about5.jpg";
import slide16 from "../../../src/assets/about4.jpg";
import slide15 from "../../../src/assets/about3.jpg";
import slide14 from "../../../src/assets/about2.jpg";
import slide13 from "../../../src/assets/about1.jpg";

import { Link } from "react-router-dom";

const About = () => {
  const Div = styled.div`
    background: linear-gradient(
      135deg,
      rgb(46, 46, 240) 0%,
      rgb(74, 140, 255) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Div2 = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px;
    margin: 0 0 12px;

    @media (max-width: 769px) {
      width: 100%;
      padding: 20px;
    }
  `;
  const MissionTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 43px 0 43px 0;
    border-top: 1px solid rgb(0, 195, 255);

    @media (max-width: 769px) {
      padding: 0 1px;
      flex-direction: column;
      align-items: center;
    }
  `;

  const MissionTextImgDiv = styled.div`
    width: 30%;
    height: 390px;
    padding-top: 133px;
    align-items: center;

    @media (max-width: 769px) {
      width: 210px;

      padding-top: 130px;
    }
  `;

  const H1 = styled.h2`
    padding: 30px 0 0;
    font-variant: small-caps;
    font-size: 40px;
    color: white;
  `;

  const P = styled.h6`
    font-size: 20px;
    // font-variant: small-caps;
    font-family: "Arial", sans-serif;
    font-weight: 400px;
    color: white;
    @media (max-width: 769px) {
      font-size: 18px;
      width: 100%;
      padding: 0 1px;
    }
  `;
  const Div3 = styled.div`
    width: 100%;
  `;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    speed: 2000,
    className: "center",
    centerMode: true,
    centerPadding: "-17px",
  };
  const Div4 = styled.div`
    // padding: 5px;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    @media (max-width: 769px) {
      height: 350px;
      padding: 1px;
    }
  `;
  const Img = styled.img`
    width: 95%;
    height: 90%;
    border-radius: 5px;

    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.02);
    }
  `;

  const Div5 = styled.div``;

  return (
    <Div>
      <H1>What We Do</H1>

      <MissionTextWrapper>
        <Div2>
          <P>
            Welcome to Swift Haven Services, We are a Packing and Moving company
            that offer varied moving services such as home and office moving
            service, haulage transportation and domestic door to door delivery
            services.
          </P>
        </Div2>
      </MissionTextWrapper>

      <Div3 className="slider-container">
        <Slider {...settings}>
          <Div4>
            <Img src={slide1} loading="lazy" alt="img" />
          </Div4>
          <Div4>
            <Img src={slide2} loading="lazy" alt="img" />
          </Div4>
          <Div4>
            <Img src={slide16} loading="lazy" alt="img" />
          </Div4>
          <Div4>
            <Img src={slide15} loading="lazy" alt="img" />
          </Div4>{" "}
          <Div4>
            <Img src={slide14} loading="lazy" alt="img" />
          </Div4>{" "}
          <Div4>
            <Img src={slide13} loading="lazy" alt="img" />
          </Div4>
        </Slider>
      </Div3>
    </Div>
  );
};

export default About;
