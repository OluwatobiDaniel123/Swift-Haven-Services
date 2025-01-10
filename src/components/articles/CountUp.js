import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import {
  FaCode,
  FaCaravan,
  FaPeopleCarry,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";

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

const CompanyHighlights = () => {
  return (
    <HighlightsSection>
      <Title>Our Strengths That Set Us Apart</Title>
      <Subtitle>The Most preferable Moving Company in Nigeria</Subtitle>
      <HighlightsGrid>
        <HighlightCard>
          <IconWrapper>
            <FaCalendarAlt />
          </IconWrapper>
          <Number>
            <CountUp end={13} />+
          </Number>
          <Label>Years of Trust</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaPeopleCarry />
          </IconWrapper>
          <Number>
            <CountUp end={30} />+
          </Number>
          <Label>Trained Manpower</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaCaravan />
          </IconWrapper>
          <Number>
            <CountUp end={1000} />+
          </Number>
          <Label>Annual Moves</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <Number>
            <CountUp end={36} />+
          </Number>
          <Label>Moves Nationwide</Label>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsSection>
  );
};

export default CompanyHighlights;
