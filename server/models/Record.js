const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  duration: {
    type: Number,
    required: true
  },
  workoutType: {
    type: String,
    required: true
  },
  intensity: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('record', RecordSchema);
