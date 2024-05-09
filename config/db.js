const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected Successfully ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`MongoDB Database Error: ${error}`.bgRed.white.bold);
  }
};

module.exports = connectDB;
