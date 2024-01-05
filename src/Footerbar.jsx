import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out if you have any questions or inquiries.
          </p>
          <div className="details">
            <p><strong>Email:</strong> sharadkushwah10@gmail.com</p>
            <p><strong>Phone:</strong> +91 9548300724</p>
            <p><strong>Address:</strong> Jasper Hostel, IIT(ISM) Dhanbad, Jharkhand</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
        </div>
      </div>
      <div className="footer-bar">
        <p>&copy; 2022 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

