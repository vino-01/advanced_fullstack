const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/Advanced_Fullstack";

const connectDB = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Connection to MONGODB is successfully done"))
    .catch((err) =>
      console.log("Error in connect: Connection failed", err.message)
    );
};

module.exports = connectDB;
