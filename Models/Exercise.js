const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisSchema = new Schema({
  ul:           { type: String,  required: true, unique: true, trim: true },
  group:        [{ type: String }],
  main_mm:      [{ type: String }],
  secondary_mm: [{ type: String }],
  equipment:    [{ type: String }]
})

const Exercise = mongoose.model("Exercise", exercisSchema);

module.exports = Exercise; 