import React,{useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../App.css';
import AddRecord from './fitness/AddRecord';
import FitnessHistory from './fitness/FitnessHistory';
import CalorieCalculator from './CalorieCalculator';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
  
  const [items, setItems] = useState([
    { name: 'Add Record', path: '/add-record' },
    { name: 'Fitness History', path: '/fitness-history' },
    { name: 'Calorie Calculator', path: '/calorie-calculator' }
  ]);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    // Filter items based on the search term
    const filtered = [
      { name: 'Add Record', path: '/addrecord' },
      { name: 'Fitness History', path: '/fitnesshistory' },
      { name: 'Calorie Calculator', path: '/caloriecalculator' }
    ].filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filtered);
  };

   const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
   
 }

  return (
    <div className="dashboard-container">
      <h2 style={{ color: 'white' }} className='dtitle'>DASH BOARD</h2>
      <DashboardNav onSearch={handleSearch} />
      <div className="dashboard-content">
        <div className="dashboard-buttons">
          {items.map((item, index) => (
            <button className='Nav-button' key={index} onClick={() => navigate(item.path)}>
              {item.name}
            </button>
          ))}
        </div>
        <Routes>
          <Route path="/addrecord" element={<AddRecord />} />
          <Route path="/fitnesshistory" element={<FitnessHistory />} />
          <Route path="/caloriecalculator" element={<CalorieCalculator />} />
        </Routes>
      </div>

      <div className="dashboard-section">
      <h2 style={{ color: 'black' }}>Record History</h2>
      <button className='ds-btn' onClick={() => navigate('/fitness-history')}>Fitness History</button>
      </div>
      <div className="dashboard-section">
      <h2 style={{ color: 'black' }}>Add Records</h2>
      <button className='ds-btn' onClick={() => navigate('/add-record')}>Add Record</button>
      </div>
      <div className="dashboard-section">
      <h2 style={{ color: 'black' }}>Calorie Calculator</h2>
      <button className='ds-btn' onClick={() => navigate('/calorie-calculator')}>Calorie Calculator</button>
      </div>
      <div className="sign-out button">
      <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="go-back button"> <button onClick={() => navigate('/signin')}>Back</button ></div>
    </div>
  );
};

export default Dashboard;
