import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Img from "../../assets/logo.png";
const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

const FooterHeader = styled.h3`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 5px 0;
  padding: 6px;
`;

const FooterLink = styled.a`
  width: 200px;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  display: block;
  outline: none;
  padding: 1px;

  &:hover {
    color: lightblue;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;

    &:hover {
      color: lightblue;
    }
  }
`;
const LogoImage = styled.img`
  height: 60px;
  background: #f9f9f9;
  border-radius: 50%;
  box-shadow: 0 0 0 2px lightblue;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeader>
            <LogoImage
              src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738964142/Logo124_-_Made_with_PosterMyWall_bd7hli.png"
              loading="eager"
              alt="logo-image"
            />
          </FooterHeader>
          <FooterText>Lagos State</FooterText>
          <FooterText>7b. Parklane, Apapa, Lagos</FooterText>
          <FooterText>+234 (0)902 7503 086</FooterText>
        </FooterSection>

        <FooterSection>
          <FooterHeader>Services</FooterHeader>
          <FooterLink href="#">Residential & Local Move</FooterLink>
          <FooterLink href="#">Commercial & Office Move</FooterLink>
          <FooterLink href="#">Inter-State & Long Distance Move</FooterLink>
          <FooterLink href="#">Bike Delivery Services</FooterLink>
          <FooterLink href="#">Toying vehicle</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Inside Swift Haven Services</FooterHeader>
          <FooterLink href="/About">About</FooterLink>
          <FooterLink href="/Contact">Contact</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Legal</FooterHeader>
          <FooterLink href="#">Terms Of Use</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </FooterSection>
      </FooterContent>
      <SocialIcons>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.facebook.com"
          aria-label="Facebook"
        >
          <FaFacebook />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.twitter.com"
          aria-label="Twitter"
        >
          <FaTwitter />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.linkedin.com"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.instagram.com"
          aria-label="Instagram"
        >
          <FaInstagram />
        </FooterLink>
      </SocialIcons>

      <div
        style={{
          borderTop: "1px solid rgb(0, 195, 255)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <FooterText style={{ marginTop: "20px" }}>
          &copy; {new Date().getFullYear()} Swift Haven Services. All rights
          reserved.
        </FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
