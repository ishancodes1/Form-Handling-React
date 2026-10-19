import React, { useState } from 'react';
import './FormStyles.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, SetContactMessage] = useState("");

  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!fullName){
      setMessage(`Name Field Can't Be Empty`);
      setSubmittedData(null);
      return;
    }
    else if(!email){
      setMessage(`Email Field Can't Be Empty`);
      setSubmittedData(null);
      return;
    }
    else if(!contactMessage){
      setMessage(`Message Field Can't Be Empty`);
      setSubmittedData(null);
      return; 
    }
    else{
      setMessage('');
      setSubmittedData({
        fullName: fullName,
        email: email,
        contactMessage: contactMessage
      });
      setFullName('');
      setEmail('');
      SetContactMessage('');
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Enter Full Name:</label>
          <input 
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="email">Enter Your Email:</label>
          <input 
            type="text" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Enter Your Message:</label>
          <input 
            type="text" 
            id="message"
            value={contactMessage}
            onChange={(e) => SetContactMessage(e.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>

        {message && <p className="error-message">{message}</p>}

        {submittedData && (
          <div className="success-box">
            <h1>Name: {submittedData.fullName}</h1>
            <h1>Email: {submittedData.email}</h1>
            <h1>Message: {submittedData.contactMessage}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;