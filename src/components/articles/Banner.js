import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
const contentStyle = {
  // height: "160px",
  color: "#fff",
  // lineHeight: "160px",
  textAlign: "center",
  // height: "100vh",
};

const Div1 = styled.div`
  background-image: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1738966562/469224302_565264176222389_6733959511765024553_n_aj3aem.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Div2 = styled.div`
  background-image: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1738966615/469280781_565264186222388_7348765552042787412_n_gj8clw.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Div3 = styled.div`
  background-image: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1738967314/Screenshot_2025-02-07_232756_licfno.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const H3 = styled.h3`
  text-align: center;
  color: darkblue;
  padding: 100px 0 0;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: linear-gradient(90deg blue, red black);
`;

const P = styled.p`
  font-size: 18px;
  padding: 0 40px;
`;

const Banner = () => (
  <Carousel autoplay>
    <Div1>
      <H3>
        Residential & Local Move
        <P>
          Moving to a new home? Our local moving service is designed to make
          your transition smooth and stress-free. Our team carefully packs,
          loads, transports, and unloads your belongings with precision and
          care. Whether you're moving to an apartment, a house, or a condo, we
          handle it all with efficiency and professionalism.
        </P>
      </H3>
    </Div1>
    <Div2>
      <H3>
        Inter-State & Long Distance Move
        <P>
          Moving across state lines? We offer long-distance moving services that
          guarantee the safe and timely delivery of your belongings. Our
          experienced team ensures that everything is securely packed and
          transported, giving you peace of mind throughout the journey.
        </P>
      </H3>
    </Div2>
    <Div3>
      <H3>
        Toying vehicle
        <P>
          If you need to move a broken-down or non-operational vehicle, our
          towing service is here to help. We provide fast and secure towing
          solutions, ensuring that your vehicle reaches its destination safely
          and without hassle.
        </P>
      </H3>
    </Div3>
  </Carousel>
);
export default Banner;
