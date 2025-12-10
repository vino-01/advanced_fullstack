const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// model name should be Capital and singular
const User = mongoose.model("User", userSchema);

module.exports = User;
