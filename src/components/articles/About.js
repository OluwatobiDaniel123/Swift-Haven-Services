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
    height: 100vh;
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
      <H1>About Us</H1>

      <MissionTextWrapper>
        <Div2>
          <P>
            At Swift Haven Service, we provide professional and reliable moving
            solutions tailored to meet your needs. Whether you're relocating
            within the city, moving your office, or transporting specialized
            items, we ensure a seamless experience.
          </P>
        </Div2>
      </MissionTextWrapper>
    </Div>
  );
};

export default About;
