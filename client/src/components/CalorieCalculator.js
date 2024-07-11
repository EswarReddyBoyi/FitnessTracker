import React, { useState } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../App.css';

const CalorieCalculator = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const calculateCalories = () => {
    const calories = (weight * 3.5 * duration) / 200;
    setCaloriesBurned(calories.toFixed(2));
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigate to dashboard page
  };

  return (
    <div className='cc'>
      <button className="go-back button" onClick={handleBackToDashboard}>Back to Dashboard</button>
      <h2 style={{ color: 'black' }}>Calorie Calculator</h2>
      <form>
        <label>
          Weight (in kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Duration (in minutes):
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <button className="cal-calc-btn" type="button" onClick={calculateCalories}>Calculate Calories Burned</button>
      </form>
      {caloriesBurned && <p>Calories Burned: {caloriesBurned}</p>}
    </div>
  );
};

export default CalorieCalculator;
