import { FaWhatsapp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const TooltipContainer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &:hover span {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const WattDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  animation: ${bounce} 2s infinite;
  box-shadow: 0px 4px 10px rgba(0, 128, 0, 0.6);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 30px rgba(0, 255, 0, 0.8);
  }
`;

const Whatsapp = () => {
  const HandleClick = () => {
    window.open(
      "https://wa.me/2349021232651?text=Hello%20Swift%20Haven%20Services%2C%20I'm%20interested%20in%20your%20cleaning%20and%20moving%20services.%20Please%20provide%20more%20information%20on%20how%20I%20can%20get%20started.%20Thank%20you!"
    );
  };

  return (
    <TooltipContainer onClick={HandleClick}>
      <WattDiv>
        <FaWhatsapp />
      </WattDiv>
    </TooltipContainer>
  );
};

export default Whatsapp;
