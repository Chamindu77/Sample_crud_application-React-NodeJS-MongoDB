const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  stname: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Student", studentSchema);
