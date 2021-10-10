const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://allenj1234:allenj1234@bugstack.b66ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
