import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7088/api/contact", {
        name: formData.name,
        email: formData.email,
        message: `${formData.subject} - ${formData.message}`
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="contact-overlay">
      <div className="contact-box">
        {/* <button className="close-btn" onClick={onClose}>×</button> */}

        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>Feel free to reach out. We will get back to you soon.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Get in Touch</h3>
          <p>📍 Indore, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 Contact@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
