const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisSchema = new Schema({
  ul:           { type: String,  required: true, unique: true, trim: true },
  group:        { type: String,  trim: true },
  main_mm:      { type: String,  trim: true },
  secondary_mm: [{ type: String, trim: true }],
  equipment:    [{ type: String, trim: true }],
  phys_a:       { type: String,  trim: true }
})

const Exercise = mongoose.model("Exercise", exercisSchema);

module.exports = Exercise; 