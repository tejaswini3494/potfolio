import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <div className="contact-form-content">
        <form>
          <div className="name-container">
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="Lname" placeholder="Last Name" />
          </div>
          <input type="text" name="email" placeholder="Email" />
          <textarea type="text" name="message" placeholder="Message" rows={3} />
          <button className="contact-btn">Send</button>
        </form>
      </div>
    </>
  );
}
