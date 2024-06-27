import React from 'react'
import "./Contact.css"
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <>
    <section className="contact-container" id="contact">
        <h5>Contact Us</h5>
        <div className="contact-content">
            <div className="contact-card">
                <ContactCard text="9921467654" icon={"Image/phone-512.webp"}/>
                <ContactCard text="virshaivtejaswini@gmail.com" icon={"Image/email2.png"}/>
            </div>
            <div className="contact-me">
            <ContactForm/>
            </div>
        </div>
    </section>
    </>
  )
}
