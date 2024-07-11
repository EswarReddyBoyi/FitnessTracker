import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/Dashboard';
import FitnessHistory from './components/fitness/FitnessHistory';
import AddRecord from './components/fitness/AddRecord';
import CalorieCalculator from './components/CalorieCalculator';
import './App.css';

const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/fitness-history" element={isAuthenticated ? <FitnessHistory /> : <Navigate to="/signin" />} />
        <Route path="/add-record" element={isAuthenticated ? <AddRecord /> : <Navigate to="/signin" />} />
        <Route path="/calorie-calculator" element={isAuthenticated ? <CalorieCalculator /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
