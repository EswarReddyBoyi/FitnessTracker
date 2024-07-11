import React from 'react';

const RecordItem = ({ record }) => {
  return (
    <li>
      <p>Date: {new Date(record.date).toLocaleDateString()}</p>
      <p>Duration: {record.duration} minutes</p>
      <p>Workout Type: {record.workoutType}</p>
      <p>Intensity: {record.intensity}</p>
    </li>
  );
};

export default RecordItem;
