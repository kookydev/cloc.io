const mongoose = require("mongoose");

const Rota = new mongoose.Schema({
  username: { type: String, required: true },
  start: { type: Number, required: true },
  finish: { type: Number, required: true },
  clockin: { type: Number, require: false },
  clockout: { type: Number, required: false }
});

module.exports = mongoose.model("Rota", Rota);
