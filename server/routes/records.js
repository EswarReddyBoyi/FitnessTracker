// routes/records.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Auth middleware if needed
const User = require('../models/User');

// Update record route
router.put('/:id', async (req, res) => {
  const { activity, duration, caloriesBurned } = req.body;
  try {
    const updatedRecord = await FitnessRecord.findByIdAndUpdate(
      req.params.id,
      { activity, duration, caloriesBurned },
      { new: true }
    );
    res.json(updatedRecord);
  } catch (err) {
    console.error('Update record failed', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete record route
router.delete('/:id', async (req, res) => {
  try {
    await FitnessRecord.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Record deleted' });
  } catch (err) {
    console.error('Delete record failed', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
