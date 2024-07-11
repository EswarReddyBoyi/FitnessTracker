const mongoose = require('mongoose');

const FitnessRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  caloriesBurned: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

module.exports = mongoose.model('FitnessRecord', FitnessRecordSchema);
