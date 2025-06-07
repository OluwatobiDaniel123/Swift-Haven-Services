import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import slide1 from "../../../src/assets/abou6.jpg";
import slide2 from "../../../src/assets/about5.jpg";
import slide3 from "../../../src/assets/about4.jpg";
import slide4 from "../../../src/assets/about3.jpg";
import slide5 from "../../../src/assets/about2.jpg";
import slide6 from "../../../src/assets/about1.jpg";

const About = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <TextSection>
          <Heading>Who We Are</Heading>
          <Paragraph>
            <strong>Swift Haven Service</strong> is your trusted partner for
            seamless moving experiences. Whether it's a residential transition,
            office relocation, or vehicle towing, we offer tailored solutions
            with unmatched professionalism and care.
          </Paragraph>
          <Paragraph>
            Our team is equipped with the skills, tools, and commitment to make
            your move stress-free. We go beyond transportation — we ensure
            safety, speed, and satisfaction with every service.
          </Paragraph>
          <StyledLink to="/services">View Our Services</StyledLink>
        </TextSection>

        <ImageGrid>
          {[slide1, slide2, slide3, slide4, slide5, slide6].map((img, i) => (
            <ImageCard key={i}>
              <img src={img} alt={`about-slide-${i}`} />
            </ImageCard>
          ))}
        </ImageGrid>
      </ContentContainer>
    </Wrapper>
  );
};

export default About;

// Styled Components
const Wrapper = styled.section`
  background: linear-gradient(135deg, #1b2a64, #3f8efc);
  padding: 80px 20px;
  color: white;
  font-family: "Segoe UI", sans-serif;
`;

const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Heading = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  font-variant: small-caps;
  color: #ffffff;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  background-color: #ffffff;
  color: #1b2a64;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #12204a;
    color: white;
  }
`;

const ImageGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  min-width: 300px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const ImageCard = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 140px;
    }
  }
`;
