const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  summary: String,
  skills: String,
  education: String,
  experience: String,
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
