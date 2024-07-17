import React from 'react'
import "./Contact.css"
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import Phone from '../Image/phone-512.webp'
import Emain from '../Image/email2.png'

export default function Contact() {
  return (
    <>
    <section className="contact-container" id="contact">
        <h5>Contact Us</h5>
        <div className="contact-content">
            <div className="contact-card">
                <ContactCard text="9921467654" icon={Phone}/>
                <ContactCard text="virshaivtejaswini@gmail.com" icon={Emain}/>
            </div>
            <div className="contact-me">
            <ContactForm/>
            </div>
        </div>
    </section>
    </>
  )
}
