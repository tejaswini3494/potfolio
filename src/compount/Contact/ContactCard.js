import React from "react";
import "./ContactCard.css";

export default function ContactCard({ text, icon }) {
  return (
    <div className="contact-detail-card">
      <div className="icon">
        <img src={icon} />
      </div>
      <p>{text}</p>
    </div>
  );
}
