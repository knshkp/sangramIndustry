const Attendance = require('../models/attendance_model');

// Helper to get current date in YYYY-MM-DD
const getTodayDate = () => new Date().toISOString().slice(0, 10);

exports.markAttendance = async (req, res) => {
  try {
    const {
      staff_phone,
      type, // 'in' or 'out'
      timestamp,
      location,
      remark
    } = req.body;

    if (!staff_phone || !type || !timestamp || !location) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const date = getTodayDate();

    let attendanceRecord = await Attendance.findOne({ staff_phone, date });

    if (type === 'in') {
      if (attendanceRecord) {
        return res.status(400).json({ message: 'In attendance already marked for today.' });
      }

      // Evaluate in status
      const inHour = new Date(timestamp).getHours();
      const inStatus = inHour <= 10 ? 'approved' : 'pending';

      attendanceRecord = new Attendance({
        staff_phone,
        date,
        inTime: timestamp,
        inLocation: location,
        inStatus,
        inRemark: remark || ''
      });

      await attendanceRecord.save();
      return res.status(201).json({ message: 'In attendance recorded.', data: attendanceRecord });
    }

    if (type === 'out') {
      if (!attendanceRecord) {
        return res.status(404).json({ message: 'No in attendance found for today.' });
      }

      if (attendanceRecord.outTime) {
        return res.status(400).json({ message: 'Out attendance already marked.' });
      }

      const outHour = new Date(timestamp).getHours();
      const outStatus = outHour >= 19 ? 'approved' : 'pending'; // 7 PM = 19

      attendanceRecord.outTime = timestamp;
      attendanceRecord.outLocation = location;
      attendanceRecord.outStatus = outStatus;
      attendanceRecord.outRemark = remark || '';

      await attendanceRecord.save();
      return res.status(200).json({ message: 'Out attendance recorded.', data: attendanceRecord });
    }

    return res.status(400).json({ message: 'Invalid attendance type.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
// GET /employee/attendance/:phone
exports.getEmployeeAttendance = async (req, res) => {
  try {
    const { phone } = req.params;

    if (!phone) {
      return res.status(400).json({ message: 'Phone number is required.' });
    }

    const records = await Attendance.find({ staff_phone: phone }).sort({ date: -1 });

    if (!records.length) {
      return res.status(404).json({ message: 'No attendance records found for this employee.' });
    }

    return res.status(200).json({ message: 'Attendance records found.', data: records });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET /employee/attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const records = await Attendance.find().sort({ date: -1 });

    if (!records.length) {
      return res.status(404).json({ message: 'No attendance records found.' });
    }

    return res.status(200).json({ message: 'All attendance records retrieved.', data: records });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
