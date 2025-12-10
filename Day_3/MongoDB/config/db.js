const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/Advanced_Fullstack";

const connectDB = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connection to MongoDB succeeded"))
    .catch((err) =>
      console.log("Error connecting to MongoDB", err.message)
    );
};

module.exports = connectDB;
