const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  staff_phone: {
    type: String,
    required: true
  },
  date: {
    type: String, // Format: 'YYYY-MM-DD'
    required: true
  },
  inTime: {
    type: Date,
    required: true
  },
  inLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  inStatus: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'pending'
  },
  inRemark: {
    type: String,
    default: ''
  },
  outTime: {
    type: Date,
    default: null
  },
  outLocation: {
    latitude: { type: Number },
    longitude: { type: Number }
  },
  outStatus: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'pending'
  },
  outRemark: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
