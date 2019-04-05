const mongoose = require("mongoose");

const user = new mongoose.Schema({
  forename: { type: String, required: true },
  surname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  auth_lvl: { type: Number, required: true },
  job_role: { type: String, required: true },
  manager: { type: String, required: true }
});

module.exports = mongoose.model("User", user);
