const router = require("express").Router();
const Attendance = require("../models/Attendance");
const auth = require("../middleware/auth");

// ============================
// GET all attendance
// ============================
router.get("/", auth(), async (req, res) => {
  try {
    const data = await Attendance.find()
      .populate("employee", "name department position")
      .sort({ date: -1 });

    res.status(200).json(data);
  } catch (error) {
    console.error("Get attendance error:", error);
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
});

// ============================
// GET attendance by date
// ============================
router.get("/by-date", auth(), async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        message: "Date query parameter is required (YYYY-MM-DD)",
      });
    }

    const data = await Attendance.find({ date })
      .populate("employee", "name department position")
      .sort({ createdAt: -1 });

    res.status(200).json(data);
  } catch (error) {
    console.error("Get attendance by date error:", error);
    res.status(500).json({ message: "Failed to fetch attendance by date" });
  }
});

// ============================
// POST create attendance
// ============================
router.post("/", auth(), async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({
        message: "employeeId, date and status are required",
      });
    }

    // ✅ Prevent duplicate attendance
    const existing = await Attendance.findOne({
      employee: employeeId,
      date,
    });

    if (existing) {
      return res.status(409).json({
        message: "Attendance already marked for this employee on this date",
      });
    }

    const attendance = new Attendance({
      employee: employeeId,
      date,
      status,
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    console.error("Create attendance error:", error);

    // Handle MongoDB duplicate key error (backup safety)
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Duplicate attendance entry",
      });
    }

    res.status(500).json({ message: "Failed to create attendance" });
  }
});

module.exports = router;
