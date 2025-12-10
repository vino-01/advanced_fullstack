
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("../Day_3/userRoutes");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// DB connection
connectDB();

// routes
app.use("/",userRoutes);

app.listen(PORT, () => {
  console.log("Server running successfully");
});
