const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
//   name: String,
//   completed: Boolean, adding validators
name: {
    type: String,
    required: [true, 'must provide a task'],
    trim: true,
    maxlength: [20, 'task can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
