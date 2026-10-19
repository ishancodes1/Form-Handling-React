import React, { useState } from 'react';
import './FormStyles.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email){
      setMessage(`Email Field Can't Be Empty`);
      setSubmittedData(null);
      return;
    }
    else if(!password){
      setMessage(`Password Field Can't Be Empty`);
      setSubmittedData(null);
      return; 
    }
    else{
      setMessage('');
      setSubmittedData({
        email: email,
        password: password
      });
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginEmail">Enter Your Email:</label>
          <input 
            type="text"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Enter Your Password:</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Login" />
        </form>

        {message && <p className="error-message">{message}</p>}

        {submittedData && (
          <div className="success-box">
            <h1>You Have Logged In Successfully, Enjoy!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;