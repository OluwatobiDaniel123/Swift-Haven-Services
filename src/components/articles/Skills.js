import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import {
  FaDoorOpen,
  FaCaravan,
  FaNode,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { SiMongodb } from "react-icons/si";
const HighlightsSection = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #f9f9f9;
  @media (max-width: 769px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  width: 100%;
  font-variant: small-caps;
  border-bottom: 1px solid rgb(0, 195, 255);

  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  width: 100%;

  font-variant: small-caps;

  color: #666;
  margin-bottom: 40px;
`;

const HighlightsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 769px) {
    width: 95%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 15px;
`;

const Number = styled.h3`
  font-size: 2rem;
  color: #333;
  margin: 10px 0;
`;

const Label = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Skills = () => {
  return (
    <HighlightsSection>
      <Title>Our Skills</Title>
      <Subtitle>Our team excels in the MERN stack, which include</Subtitle>
      <HighlightsGrid>
        <HighlightCard>
          <IconWrapper>
            {/* <FaCalendarAlt /> */}
            <FaHome />
          </IconWrapper>
          <Number>Home Moving</Number>
          <Label>
            {" "}
            Moving from house to house or city to city by road you are at the
            right place.
          </Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            {/* <FaLaptopCode /> */}
            <FaCaravan />
          </IconWrapper>
          <Number>{/* <CountUp end={200} />+ */}Haulage Transport</Number>
          <Label>
            If you want to move inter-state, Suremeal Logistics is the best
            solution.
          </Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <HiOutlineOfficeBuilding />
          </IconWrapper>
          <Number>Office Moving</Number>
          <Label>
            Want to move items urgently from your current office? Suremeal
            Logistics is here for you
          </Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaDoorOpen />
          </IconWrapper>
          <Number>Door to Door</Number>
          <Label>
            Need a Fast, easy, and affordable door-to-door delivery? Contact us
          </Label>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsSection>
  );
};

export default Skills;
