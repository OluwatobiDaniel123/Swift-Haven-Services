import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelopeOpenText } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: #003366;
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    &:hover {
      color: #0066cc;
    }
  }
`;
const Section = styled.section`
  background: #f0f8ff;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-variant: small-caps;
  text-align: center;
  margin-bottom: 1rem;
  color: #003366;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
`;

const FormWrapper = styled.form`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #cde3f8;
  border-radius: 6px;
  background: #f9fcff;
  &:focus {
    border-color: #3399ff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  height: 150px;
  border: 1px solid #cde3f8;
  border-radius: 6px;
  resize: vertical;
  background: #f9fcff;
  margin-bottom: 1rem;
  &:focus {
    border-color: #3399ff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: #0066cc;
  color: white;
  padding: 0.9rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: #004c99;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const AnimationBox = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Map = styled.iframe`
  margin-top: 4rem;
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      );
      form.current.reset();
    } catch (error) {
      console.error("Error sending message:", error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Title>Contact Us</Title>
      <SubTitle>
        We're here to help and answer any questions you might have
      </SubTitle>
      <ContentWrapper>
        <AnimationBox>
          <DotLottieReact
            src="https://lottie.host/113aa8aa-b464-41a9-be0f-906d7a2d63b8/SSzUfeyU3r.lottie"
            autoplay
            loop
            style={{ width: "100%" }}
          />
        </AnimationBox>

        <FormWrapper ref={form} onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </SubmitButton>
        </FormWrapper>
      </ContentWrapper>

      <ContactLinks>
        <a
          href="mailto:youremail@example.com"
          title="Send Email"
          aria-label="Send Email"
        >
          <FaEnvelopeOpenText />
        </a>
        <a
          href="https://wa.me/2349021232651"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </ContactLinks>

      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.48552128197!2d3.322643733452314!3d6.454279235478465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bbcba8a7fef%3A0xa70f492d44afb0b0!2sApapa%2C%20Lagos!5e0!3m2!1sen!2sng!4v1749337574842!5m2!1sen!2sng"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Section>
  );
};

export default Contact;
