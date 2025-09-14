import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Button } from "./Button"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_v0dxdjp",   // Replace with your EmailJS Service ID
      "template_s92cvoo",  // Replace with your EmailJS Template ID
      formData,            // Data object
      "Ofwe4B9AJKx_n0VIO"    // Replace with your EmailJS Public Key
    )
    .then((result) => {
      console.log("Email sent:", result.text);
      alert("thanks for reaching out. i'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email error:", error.text);
      alert("Oops! Something went wrong. Please try again.");
    });
  };

  return (
    <div className="contact-container">
      <h1>contact me.</h1>
      <p>want to reach out? send me a message and i'll get back to you.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
            required
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your email"
            required
          />
        </label>
        <label>
          message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="your message"
            rows="6"
            required
          />
        </label>
        <button type="submit" className="contact-button">send message</button>
      </form>
    </div>
  );
};

export default Contact;
