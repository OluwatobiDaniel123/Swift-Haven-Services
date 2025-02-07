import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgb(46, 46, 240) 0%,
    rgb(74, 140, 255) 100%
  );
  padding: 30px 15px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: 7px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  h2 {
    font-variant: small-caps;
    font-size: 30px;
    color: black;
    border-bottom: 2px solid rgb(0, 195, 255);
    margin-bottom: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.3px;
    border-radius: 0.5rem;
    background: #f9f9f9;
    border: 2px solid lightblue;
    resize: none;
    color: black;

    &:hover {
      border-color: rgb(0, 195, 255);
    }

    transition: all 0.3s ease-in-out;
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);

  color: white;
  font-weight: bold;
  padding: 10px 15px;
  width: 70%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`;

const Map = styled.iframe`
  border-radius: 5px;
  width: 100%;
  height: 450px;
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      );
      console.log(result.text);

      form.current.reset();
    } catch (error) {
      console.error(error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection>
      <ContactContainer>
        <DotLottieReact
          src="https://lottie.host/113aa8aa-b464-41a9-be0f-906d7a2d63b8/SSzUfeyU3r.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}
        />
        <ContactForm ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          />

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
        </ContactForm>
      </ContactContainer>
      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05067748396!2d-74.3091773393739!3d40.69719333811824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng"
        allowfullscreen
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </ContactSection>
  );
};

export default Contact;
