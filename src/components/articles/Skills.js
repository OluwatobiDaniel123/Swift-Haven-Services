import React from "react";
import styled from "styled-components";
import { FaDoorOpen, FaCaravan, FaHome } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ServicesHighlights = () => {
  return (
    <Wrapper>
      <Heading>What We Do Best</Heading>
      <Subheading>Reliable, Fast & Affordable Moving Solutions</Subheading>

      <CardsContainer>
        <Card>
          <Icon>
            <FaHome />
          </Icon>
          <CardTitle>Home Moving</CardTitle>
          <CardDescription>
            Relocate effortlessly within the city or to another state. We make
            home transitions smooth and safe.
          </CardDescription>
        </Card>

        <Card>
          <Icon>
            <FaCaravan />
          </Icon>
          <CardTitle>Haulage Transport</CardTitle>
          <CardDescription>
            Need to transport heavy items or move inter-state? We’ve got the
            right vehicles and expertise.
          </CardDescription>
        </Card>

        <Card>
          <Icon>
            <HiOutlineOfficeBuilding />
          </Icon>
          <CardTitle>Office Relocation</CardTitle>
          <CardDescription>
            Move your office equipment and furniture with zero downtime and full
            security.
          </CardDescription>
        </Card>

        <Card>
          <Icon>
            <FaDoorOpen />
          </Icon>
          <CardTitle>Door-to-Door Delivery</CardTitle>
          <CardDescription>
            We deliver straight to your doorstep — safe, fast, and right on
            time.
          </CardDescription>
        </Card>
      </CardsContainer>
    </Wrapper>
  );
};

export default ServicesHighlights;

const Wrapper = styled.section`
  background-color: #f0f6ff;
  padding: 80px 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  color: #1b2a64;
  font-variant: small-caps;
  margin-bottom: 10px;
`;

const Subheading = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 50px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 30px 20px;
  width: 270px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 15px;
`;

const CardTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
  color: #1b2a64;
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`;
