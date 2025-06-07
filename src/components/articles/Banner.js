import { Carousel } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RightOutlined } from "@ant-design/icons";

const Slide = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 40px 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 180px 15px;
  }
`;

const Content = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.55);
  padding: 40px 30px;
  border-radius: 16px;
  max-width: 800px;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    padding: 25px 15px;
  }
`;

const Title = styled.h2`
  font-family: "Segoe UI", sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  font-size: clamp(1.8rem, 4vw, 3rem);
`;

const Description = styled.p`
  font-family: "Segoe UI", sans-serif;
  line-height: 1.6;
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  background: #1890ff;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Segoe UI", sans-serif;
  font-size: clamp(1rem, 2vw, 1.125rem);
  text-decoration: none;
  box-shadow: 0 4px 12px rgb(24 144 255 / 0.4);
  transition: background 0.3s ease;

  &:hover {
    background: #40a9ff;
  }

  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 1rem;
  }
`;

const Banner = () => {
  const slides = [
    {
      bg: "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738966562/469224302_565264176222389_6733959511765024553_n_aj3aem.jpg",
      title: "Residential & Local Moving",
      desc: `Relocating nearby? Our expert local moving service ensures a smooth and stress-free experience. From packing and loading to safe transport and unloading, we handle every step with care and efficiency—whether you're moving into a house, condo, or apartment.`,
      ctaText: "Get a Quote",
      ctaLink: "#quote1",
    },
    {
      bg: "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738966615/469280781_565264186222388_7348765552042787412_n_gj8clw.jpg",
      title: "Interstate & Long-Distance Moves",
      desc: `Traveling across states? We provide reliable long-distance moving services with guaranteed safety and punctuality. Our team ensures your items are securely packed and transported, giving you complete peace of mind from start to finish.`,
      ctaText: "Learn More",
      ctaLink: "#learn2",
    },
    {
      bg: "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738967314/Screenshot_2025-02-07_232756_licfno.png",
      title: "Vehicle Towing Services",
      desc: `Have a car that won't start? Our professional towing service is here to assist. We offer prompt, secure towing for non-operational vehicles, ensuring they reach your desired location quickly and safely.`,
      ctaText: "Contact Us",
      ctaLink: "#contact3",
    },
  ];

  return (
    <Carousel autoplay pauseOnHover={false} effect="fade">
      {slides.map(({ bg, title, desc, ctaText, ctaLink }, index) => (
        <Slide key={index} bg={bg}>
          <Content
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <Button
              href={ctaLink}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {ctaText} <RightOutlined />
            </Button>
          </Content>
        </Slide>
      ))}
    </Carousel>
  );
};

export default Banner;
