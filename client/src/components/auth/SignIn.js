import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { username, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token); 
        navigate('/dashboard');
      } else {
        setMessage('Sign in failed');
      }
    } catch (err) {
      console.error('Sign in failed', err);
      setMessage('Sign in failed');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
        <button className="sign-in-button" type="submit">Sign In</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div>
      <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default SignIn;
