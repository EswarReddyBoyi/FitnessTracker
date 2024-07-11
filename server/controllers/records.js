const Record = require('../models/Record');

// Add a new record
exports.addRecord = async (req, res) => {
  try {
    const { duration, workoutType, intensity } = req.body;
    const newRecord = new Record({
      duration,
      workoutType,
      intensity,
      date: req.body.date || Date.now(),
      user: req.user.id // Assuming user is authenticated and user ID is available in req.user.id
    });

    const record = await newRecord.save();
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all records for a user
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user.id }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a single record by ID
exports.getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ msg: 'Record not found' });
    }
    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a record
exports.updateRecord = async (req, res) => {
  try {
    const { duration, workoutType, intensity, date } = req.body;
    const recordFields = {};
    if (duration) recordFields.duration = duration;
    if (workoutType) recordFields.workoutType = workoutType;
    if (intensity) recordFields.intensity = intensity;
    if (date) recordFields.date = date;

    let record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ msg: 'Record not found' });
    }

    // Ensure user owns record
    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    record = await Record.findByIdAndUpdate(req.params.id, { $set: recordFields }, { new: true });

    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a record
exports.deleteRecord = async (req, res) => {
  try {
    let record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ msg: 'Record not found' });
    }

    // Ensure user owns record
    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Record.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Record removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
