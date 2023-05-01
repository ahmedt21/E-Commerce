import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>At our store, we're committed to providing high-quality, affordable products for all your needs. From clothing and accessories to home decor and electronics, we have something for everyone.</p>
      <p>Our team is dedicated to providing excellent customer service and making every shopping experience a pleasant one. We're always here to help with any questions or concerns you may have.</p>
      <p>Connect with us on social media:</p>
      <div className="social-icons">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="mailto:info@example.com"><FaEnvelope /></a>
      </div>
    </div>
  );
}

export default About;