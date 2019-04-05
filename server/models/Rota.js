const mongoose = require("mongoose");

const Rota = new mongoose.Schema({
  username: { type: String, required: true },
  start_time: { type: Number, required: false },
  finish_time: { type: Number, required: false },
  in_time: { type: Number, require: false },
  out_time: { type: Number, required: false }
});

module.exports = mongoose.model("Rota", Rota);
