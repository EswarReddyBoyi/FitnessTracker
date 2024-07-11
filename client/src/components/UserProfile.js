import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Fetch user profile failed', err);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>No user profile found</p>
      )}
    </div>
  );
};

export default UserProfile;
