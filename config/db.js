const mongoose = require('mongoose');
const config = require('./production.json');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI.toString());

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
