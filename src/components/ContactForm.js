import React from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="input-group">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <textarea required></textarea>
          <label>Message</label>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
