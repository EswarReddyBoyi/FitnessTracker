const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
  try {
      await mongoose.connect(db);
      console.log('Successfully connected to MongoDB');
  } catch (error) {
      console.error('Error connecting to DB: ', error.message)
      process.exit(1)
  }
}

module.exports = connectDB;
