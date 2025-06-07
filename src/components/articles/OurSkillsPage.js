import React from "react";
import styled from "styled-components";
import { FiUsers, FiAward, FiSettings, FiTrendingUp } from "react-icons/fi";

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  background: #f9fafc;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #222;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 60px;
  color: #003366;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const CardsGrid = styled.div`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 14px;
  box-shadow: 0 14px 28px rgb(0 51 102 / 0.1);
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgb(0 51 102 / 0.2);
  }
`;

const IconContainer = styled.div`
  background: #004080;
  border-radius: 50%;
  padding: 16px;
  display: inline-flex;
  color: white;
  font-size: 28px;
  margin-bottom: 22px;
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #001f4d;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.55;
  color: #444;
`;

const OurSkillsPage = () => {
  return (
    <PageWrapper>
      <Title>Our Philosophy &amp; Goals</Title>

      <CardsGrid>
        <Card>
          <IconContainer>
            <FiUsers />
          </IconContainer>
          <CardTitle>Customer-Centric Approach</CardTitle>
          <CardText>
            We prioritize seamless, stress-free moving experiences designed with
            care, ensuring safety, efficiency, and reliability at every step.
          </CardText>
        </Card>

        <Card>
          <IconContainer>
            <FiAward />
          </IconContainer>
          <CardTitle>Commitment to Excellence</CardTitle>
          <CardText>
            Combining innovation with a personal touch, we handle every move as
            if it were our own — striving to exceed expectations.
          </CardText>
        </Card>

        <Card>
          <IconContainer>
            <FiSettings />
          </IconContainer>
          <CardTitle>Challenges &amp; Solutions</CardTitle>
          <CardText>
            Tackling logistics and timing challenges with strategic planning and
            advanced tools, we deliver hassle-free moving services.
          </CardText>
        </Card>

        <Card>
          <IconContainer>
            <FiTrendingUp />
          </IconContainer>
          <CardTitle>Future Goals</CardTitle>
          <CardText>
            Expanding our offerings and embracing cutting-edge tech, we commit
            to evolving and delivering top-tier, tailored moving solutions.
          </CardText>
        </Card>
      </CardsGrid>
    </PageWrapper>
  );
};

export default OurSkillsPage;
