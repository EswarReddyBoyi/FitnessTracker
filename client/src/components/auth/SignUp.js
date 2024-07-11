import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  //const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      if (res.data.success) {
        setMessage('Sign up successful');
      } else{
        alert('Sign up failed, Enter Valid Credentials to Sign Up!');
      }
    } catch (err) {
      console.error('Sign up failed', err);
      alert('Sign up failed');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {message && (
        <div>
          <p>{message}</p>

        </div>
      )}
      <p style={{ color: 'grey' }}>Note: Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number</p>
      <p style={{ color: 'white' }} >
        Already have an account? Click here to Sign in now <a href="https://fitness-trackzz.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#2a4fef' }}>Click here</a>
      </p>
    </div>
  );
};

export default SignUp;
