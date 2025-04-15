import React from 'react';

const Contact = () => {
  return (
    <section className="contact section glass" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or the form below.</p>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:huanma921@gmail.com">huanma921@gmail.com</a></p>
        <p><strong>Location:</strong> Rochester, NY, USA</p>
      </div>
      <div className="contact-form">
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <label>Name:<br/><input type="text" name="name" required /></label>
          </div>
          <div>
            <label>Email:<br/><input type="email" name="email" required /></label>
          </div>
          <div>
            <label>Message:<br/><textarea name="message" rows="4" required /></label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

