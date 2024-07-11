const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const FitnessRecord = require('../models/FitnessRecord');

const router = express.Router();

// Add fitness record
router.post(
  '/',
  [
    auth,
    [
      check('activity', 'Activity is required').not().isEmpty(),
      check('duration', 'Duration is required').isNumeric(),
      check('caloriesBurned', 'Calories burned is required').isNumeric()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { activity, duration, caloriesBurned } = req.body;

    try {
      const newRecord = new FitnessRecord({
        user: req.user.id,
        activity,
        duration,
        caloriesBurned
      });

      const record = await newRecord.save();
      res.json(record);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Get fitness records
router.get('/', auth, async (req, res) => {
  try {
    const records = await FitnessRecord.find({ user: req.user.id }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


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


module.exports = router;
