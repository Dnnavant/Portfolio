import React from 'react';
import './ContactMe.css';

export default function ContactMe() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <br />
        <p>
          Please feel free to contact me by filling out the form below. I will
          respond to you as soon as I can.
        </p>
      </div>
      <div className="form">
        <form action="/action_page.php" method="post">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <input type="submit" value="Submit" style={{ display: 'none' }} />
        </form>
      </div>
    </div>
  );
}
