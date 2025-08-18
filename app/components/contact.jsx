'use client';

import React, {useState} from 'react';

const Contact = () => {
 const [form, setForm] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
 });

 const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value});
 };

 const handleSubmit = (e) => {
  e.preventDefault();
     console.log(form); // Later you can replace this with an API call
     setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
     });
     window.toast('Message sent successfully!', 'success');
 };

 return (
  <section className="contact" id="contact">
   <h1 className="contact-heading">Contact Us</h1>
   <form className="contact-form center" onSubmit={handleSubmit}>
    <div className="input-group">
     <label htmlFor="name">Full Name *</label>
     <input
      id="name"
      name="name"
      type="text"
      className="contact-input"
      placeholder="Enter Your Name"
      value={form.name}
      onChange={handleChange}
      required
     />
    </div>

    <div className="input-groups">
     <div className="input-group">
      <label htmlFor="email">Email *</label>
      <input
       id="email"
       name="email"
       type="email"
       className="contact-input"
       placeholder="Enter Your Email"
       value={form.email}
       onChange={handleChange}
       required
      />
     </div>
     <div className="input-group">
      <label htmlFor="phone">Phone</label>
      <input
       id="phone"
       name="phone"
       type="text"
       className="contact-input"
       placeholder="Enter Phone Number"
       value={form.phone}
       onChange={handleChange}
      />
     </div>
    </div>

    <div className="input-group">
     <label htmlFor="message">Message</label>
     <textarea
      id="message"
      name="message"
      className="form-textarea"
      placeholder="Your Message Here..."
      value={form.message}
      onChange={handleChange}
     ></textarea>
    </div>

    <input type="submit" value="Submit" className="form-btn" />
   </form>
  </section>
 );
};

export default Contact;
