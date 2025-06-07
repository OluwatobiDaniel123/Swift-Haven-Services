import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import {
  FaCalendarAlt,
  FaPeopleCarry,
  FaCaravan,
  FaGlobeAfrica,
} from "react-icons/fa";

const Section = styled.section`
  padding: 70px 20px;
  background: linear-gradient(135deg, #004aad, #50a8ff);
  color: white;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-variant: small-caps;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #cde6ff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconBox = styled.div`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 15px;
  animation: pop 0.6s ease forwards;

  @keyframes pop {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Count = styled.h2`
  font-size: 32px;
  margin: 10px 0;
  color: #ffffff;
`;

const Label = styled.p`
  font-size: 16px;
  color: #e2eaff;
`;

const CompanyHighlights = () => {
  return (
    <Section>
      <Heading>Why Choose Us</Heading>
      <SubHeading>Built on trust, reliability, and nationwide reach</SubHeading>
      <Grid>
        <Card>
          <IconBox>
            <FaCalendarAlt />
          </IconBox>
          <Count>
            <CountUp end={13} duration={2} />+
          </Count>
          <Label>Years of Experience</Label>
        </Card>
        <Card>
          <IconBox>
            <FaPeopleCarry />
          </IconBox>
          <Count>
            <CountUp end={30} duration={2} />+
          </Count>
          <Label>Professional Staff</Label>
        </Card>
        <Card>
          <IconBox>
            <FaCaravan />
          </IconBox>
          <Count>
            <CountUp end={1000} duration={2} />+
          </Count>
          <Label>Moves Completed Per Year</Label>
        </Card>
        <Card>
          <IconBox>
            <FaGlobeAfrica />
          </IconBox>
          <Count>
            <CountUp end={36} duration={2} />+
          </Count>
          <Label>States Reached</Label>
        </Card>
      </Grid>
    </Section>
  );
};

export default CompanyHighlights;
