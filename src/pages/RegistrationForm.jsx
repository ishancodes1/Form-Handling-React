import React, { useState } from 'react';
import './FormStyles.css';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

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
    else if(!course){
      setMessage(`Course Field Can't Be Empty`);
      setSubmittedData(null);
      return; 
    }
    else{
      setMessage('');
      setSubmittedData({
        fullName: fullName,
        email: email,
        course: course
      });
      setFullName('');
      setEmail('');
      setCourse('');
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="regFullName">Enter Full Name:</label>
          <input 
            type="text"
            id="regFullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="regEmail">Enter Your Email:</label>
          <input 
            type="text" 
            id="regEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="course">Enter Your Course:</label>
          <input 
            type="text" 
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input type="submit" value="Register" />
        </form>

        {message && <p className="error-message">{message}</p>}

        {submittedData && (
          <div className="success-box">
            <h1>Name: {submittedData.fullName}</h1>
            <h1>Email: {submittedData.email}</h1>
            <h1>Course: {submittedData.course}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;