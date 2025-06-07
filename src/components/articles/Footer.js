import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #0b0c10;
  color: #cfd8dc;
  padding: 60px 20px 30px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #00c3ff;
  background: white;
  margin-bottom: 15px;
`;

const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
`;

const Link = styled.a`
  text-decoration: none;
  color: #cfd8dc;
  margin: 6px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #00c3ff;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: #cfd8dc;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #00c3ff;
  font-size: 14px;
  margin-top: 40px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>
        <Column>
          <Logo
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738964142/Logo124_-_Made_with_PosterMyWall_bd7hli.png"
            alt="Swift Haven Logo"
            loading="eager"
          />
          <p>Lagos State</p>
          <p>7b Parklane, Apapa</p>
          <p>+234 902 123 2651</p>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Blog</Link>
        </Column>

        <Column>
          <Title>Services</Title>
          <Link href="#">Residential & Local Move</Link>
          <Link href="#">Commercial & Office Move</Link>
          <Link href="#">Long Distance Move</Link>
          <Link href="#">Bike Delivery</Link>
          <Link href="#">Towing Vehicle</Link>
        </Column>

        <Column>
          <Title>Connect with Us</Title>
          <Socials>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </Socials>
        </Column>
      </FooterGrid>

      <FooterBottom>
        &copy; {new Date().getFullYear()} Swift Haven Services. All rights
        reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
