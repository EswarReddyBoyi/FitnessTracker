// client/src/components/auth/SignOut.js
import React from 'react';

const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem('token');
    // Handle sign-out actions, e.g., redirect to login
  };

  return (
    <div classname="sign-out">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
