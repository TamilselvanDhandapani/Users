const mongoose = require("mongoose");

const newDate = new Date();
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  gender: { type: String, required: true },
  place: { type: String, required: true },
  date: { type:String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
