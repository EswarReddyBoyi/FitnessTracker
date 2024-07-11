import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const FitnessHistory = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedRecord, setEditedRecord] = useState({
    _id: '',
    activity: '',
    duration: '',
    caloriesBurned: '',
    date: '', // New field for date
  });

  useEffect(() => {
    const fetchRecords = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/fitness', { headers: { 'x-auth-token': token } });
        setRecords(res.data);
      } catch (err) {
        console.error('Fetch records failed', err);
      }
    };
    fetchRecords();
  }, []);

  const handleEditRecord = (record) => {
    setEditMode(true);
    setEditedRecord({ ...record });
  };

  const handleSaveRecord = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(`http://localhost:5000/api/fitness/${editedRecord._id}`, editedRecord, {
        headers: { 'x-auth-token': token },
      });
      console.log('Record updated successfully:', res.data);
      const updatedRecords = records.map((record) =>
        record._id === editedRecord._id ? { ...record, ...editedRecord } : record
      );
      setRecords(updatedRecords);
      setEditMode(false);
      setEditedRecord({
        _id: '',
        activity: '',
        duration: '',
        caloriesBurned: '',
        date: '', // Reset date field after saving
      });
    } catch (err) {
      console.error('Update record failed', err);
    }
  };

  const handleDeleteRecord = async (recordId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.delete(`http://localhost:5000/api/fitness/${recordId}`, {
        headers: { 'x-auth-token': token },
      });
      console.log('Record deleted successfully:', res.data);
      const updatedRecords = records.filter((record) => record._id !== recordId);
      setRecords(updatedRecords);
    } catch (err) {
      console.error('Delete record failed', err);
    }
  };

  const handleChange = (e) => {
    setEditedRecord({ ...editedRecord, [e.target.name]: e.target.value });
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigate to dashboard page
  };

  return (
    <div className="fitness-history-container">
      <button className="go-back button" onClick={handleBackToDashboard}>Back to Dashboard</button>
      <h2 style={{ color: 'black' }} className="no-label">Fitness History</h2>
      {records.length > 0 ? (
        <ul className="records-list">
          {records.map((record) => (
            <li key={record._id} className="record-item">
              {editMode && editedRecord._id === record._id ? (
                <div className="edit-mode">
                  <input type="text" name="activity" value={editedRecord.activity} onChange={handleChange} />
                  <input type="number" name="duration" value={editedRecord.duration} onChange={handleChange} />
                  <input type="number" name="caloriesBurned" value={editedRecord.caloriesBurned} onChange={handleChange} />
                  <button className="save-btn" onClick={handleSaveRecord}>Save</button>
                </div>
              ) : (
                <div className="display-mode">
                  <div className="record-box">
                    <span className="box-label">Activity:</span>
                    <span className="box-content">{record.activity}</span>
                  </div>
                  <div className="record-box">
                    <span className="box-label">Duration:</span>
                    <span className="box-content">{record.duration} minutes</span>
                  </div>
                  <div className="record-box">
                    <span className="box-label">Calories Burned:</span>
                    <span className="box-content">{record.caloriesBurned} calories</span>
                  </div>
                  <div className="button-container">
                    <button className="edit-btn" onClick={() => handleEditRecord(record)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteRecord(record._id)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default FitnessHistory;
