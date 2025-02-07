import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  padding: 40px 0;
  background: #f4f4f4;
  text-align: center;
`;

const ServiceHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid rgb(0, 195, 255);
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceItem = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 500px;
  padding: 40px;
  margin: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  font-size: 20px;
  color: #007bff;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

const Services = [
  {
    name: "Residential & Local Move",
    description:
      "Moving to a new home? Our local moving service is designed to make your transition smooth and stress-free. Our team carefully packs, loads, transports, and unloads your belongings with precision and care. Whether you're moving to an apartment, a house, or a condo, we handle it all with efficiency and professionalism.",
  },
  {
    name: "Commercial & Office Move",
    description:
      "Relocating a business requires proper planning and execution to minimize downtime. We specialize in office moves, ensuring that your furniture, equipment, and documents are safely transported to your new location. Our team works efficiently to help you get back to business as soon as possible.",
  },
  {
    name: "Inter-State & Long Distance Move",
    description:
      "Moving across state lines? We offer long-distance moving services that guarantee the safe and timely delivery of your belongings. Our experienced team ensures that everything is securely packed and transported, giving you peace of mind throughout the journey.",
  },
  {
    name: "Bike Delivery Services",
    description:
      "Need to transport your motorcycle or bicycle? Our specialized bike delivery service ensures safe handling and timely delivery. Whether you're relocating, selling, or sending a bike to a loved one, we have the expertise to transport it without damage.",
  },
  {
    name: "Toying vehicle",
    description:
      "If you need to move a broken-down or non-operational vehicle, our towing service is here to help. We provide fast and secure towing solutions, ensuring that your vehicle reaches its destination safely and without hassle.",
  },
];

const ServicePage = () => {
  return (
    <ServiceContainer>
      <ServiceHeader>Our Moving Services</ServiceHeader>
      <ServiceList>
        {Services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServiceContainer>
  );
};

export default ServicePage;
