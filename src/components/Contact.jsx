import React from 'react';
import "../index.css";
const Contact = () => {
  return (
    <section className="contact section glass" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or the form below.</p>

      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:huanma921@gmail.com">huanma921@gmail.com</a></p>
        <p><strong>Phone:</strong> (585) 213-5076 </p>
        <p><strong>Location:</strong> Rochester, NY, USA</p>
      </div>

      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label><br />
            <input id="email" type="email" name="email" placeholder="your@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label><br />
            <textarea id="message" name="message" rows="4" placeholder="Type your message..." required></textarea>
          </div>

          <button type="submit">📨 Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



