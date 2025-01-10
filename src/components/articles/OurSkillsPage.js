import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(
    135deg,
    rgb(46, 46, 240) 0%,
    rgb(74, 140, 255) 100%
  );
  color: white;
`;

const Section = styled.div`
  margin: 40px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #0055ff;
`;

const SectionContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: black;
`;

const OurSkillsPage = () => {
  return (
    <PageContainer>
      <h1
        style={{
          fontVariant: "small-caps",
          textAlign: "center",
          borderBottom: "1px solid rgb(0, 195, 255)",
        }}
      >
        Our Philosophy and Goals
      </h1>
      <Section>
        <SectionTitle>Customer-Centric Approach</SectionTitle>
        <SectionContent>
          We prioritize creating seamless, stress-free moving experiences for
          our clients. Our services are designed with attention to detail,
          ensuring safety, efficiency, and reliability at every step.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Commitment to Excellence</SectionTitle>
        <SectionContent>
          We believe in combining innovative practices with a personal touch.
          From precise logistics to customer support, we aim to exceed
          expectations and handle every move as if it were our own.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Challenges and Solutions</SectionTitle>
        <SectionContent>
          Overcoming logistical complexities and ensuring timely delivery are
          challenges we face daily. By employing advanced tools, strategic
          planning, and a dedicated team, we provide solutions that make the
          moving process smooth and hassle-free.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Future Goals</SectionTitle>
        <SectionContent>
          Our goal is to expand our services, embracing technology to enhance
          efficiency and customer satisfaction. We are committed to evolving
          with industry trends, ensuring that our clients always receive
          top-tier moving solutions tailored to their needs.
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default OurSkillsPage;
