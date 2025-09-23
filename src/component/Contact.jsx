import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, message sent!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-container">
        {/* Left column */}
        <div className="contact-left">
          <p className="contact-sub">
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="send-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right column */}
        <div className="contact-right">
          <h3>Contact Info</h3>
          <p>
            <FaMapMarkerAlt /> Address
          </p>
          <p className="text">4321 California St, San Francisco, CA 12345</p>
          <p>
            <FaPhoneAlt /> Phone
          </p>
          <p className="text">+1 123 456 1234</p>
          <p>
            <FaEnvelope /> Email
          </p>
          <p className="text">info@company.com</p>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
