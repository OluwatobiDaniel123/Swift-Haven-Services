import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";

const Container = styled.div`
  padding: 40px;
  background: #f4f4f4;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid rgb(0, 195, 255);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  margin: 10px 0;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 5px 0;
`;

const BudgetContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  width: 100%;

  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    businessName: "",
    websiteUrl: "",
    helpWith: [],
    comments: "",
    budget: "",
    referral: "",
  });

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  // Modal functions
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Form handling
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        helpWith: checked
          ? [...prev.helpWith, value]
          : prev.helpWith.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      formData.helpWith.length === 0 ||
      !formData.budget
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setModalText(
      `Thank you, ${
        formData.fullName
      }! We have received your request for ${formData.helpWith.join(", ")}. 
    We will contact you at ${formData.email} or via WhatsApp: ${
        formData.whatsapp
      }.`
    );

    // Show the modal upon form submission
    showModal();
  };

  return (
    <Container>
      <Title>Request a Quote</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
        />

        <CheckboxContainer>
          <h4>What do you need help with?</h4>
          {[
            "I want to relocate my current office",
            "I want to relocate to my new home",
            "I need to move my properties",
            "Other (Specify below)",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="checkbox"
                value={item}
                checked={formData.helpWith.includes(item)}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </CheckboxContainer>

        <TextArea
          name="comments"
          placeholder="Comment other things you need help with"
          value={formData.comments}
          onChange={handleChange}
        />

        <BudgetContainer>
          <h4>Your Budget</h4>
          {[
            "#10,000 - #20,000",
            "#20,000 - #50,000",
            "#50,000 - #100,000",
            "#200,000 - #500,000",
            "Above #500,000",
            "Don't have a budget",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="radio"
                name="budget"
                value={item}
                checked={formData.budget === item}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </BudgetContainer>

        <Input
          type="text"
          name="referral"
          placeholder="How did you hear from us?"
          value={formData.referral}
          onChange={handleChange}
        />

        <Button type="submit">GET FREE QUOTE</Button>
      </Form>

      <Modal
        title="Quote Request Received!"
        open={isModalOpen}
        onOk={() => {
          handleOk();
          // Reset the form
          setFormData({
            fullName: "",
            email: "",
            whatsapp: "",
            businessName: "",
            websiteUrl: "",
            helpWith: [],
            comments: "",
            budget: "",
            referral: "",
          });
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </Container>
  );
};

export default RequestQuote;
