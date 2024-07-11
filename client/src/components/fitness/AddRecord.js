import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const AddRecord = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [message, setMessage] = useState('');

  const handleAddRecord = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      let activityToSend = activity; // Default to selected activity

      // If activity is 'Other', use custom activity input
      if (activity === 'Other') {
        activityToSend = e.target.activity.value.toLowerCase(); // Get value from input
      }

      const res = await axios.post(
        'http://localhost:5000/api/fitness',
        { date, activity: activityToSend, duration, caloriesBurned },
        { headers: { 'x-auth-token': token } }
      );
      if (res.data) {
        setMessage('Record added successfully');
        setActivity('');
        setDuration('');
        setCaloriesBurned('');
      }
    } catch (err) {
      console.error('Add record failed', err);
      setMessage('Add record failed');
    }
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigate to dashboard page
  };

  return (
    <div className='cc'>
      <button className="go-back button" onClick={handleBackToDashboard}>Back to Dashboard</button>
      <h2 style={{ color: 'black' }}>Add Record</h2>
      <form onSubmit={handleAddRecord}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        >
          <option value="">Select an activity</option>
          <option value="Running">Running</option>
          <option value="Swimming">Swimming</option>
          <option value="Cycling">Cycling</option>
          <option value="Walking">Walking</option>
          <option value="Yoga">Yoga</option>
          <option value="Other">Other</option>
        </select>
        {activity === 'Other' && (
          <input
            type="text"
            name="activity"
            placeholder="Enter Custom Activity"
            required
          />
        )}
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          required
        />
        <button className="add-btn" type="submit">Add Record</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddRecord;
