import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactMe = () => {


  const form = useRef();

  const sendEmail = (e) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId= process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;
    e.preventDefault();
  
    emailjs
      .sendForm(
       serviceId,
       templateId,
        form.current,
        {
          publicKey: publicKey,
        }
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
           // Reset form fields after successful submission
        form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };


  return (
    <section id="Contact" className="contact--section">
      <div>
        
        <h2>Contact Me</h2>
        
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md" >Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Enquire</option>
            <option>Job Oppurtunity(Hire)</option>
            <option>Connect</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md"  >Message</span>
          <textarea
          name="message"
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn  contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe 