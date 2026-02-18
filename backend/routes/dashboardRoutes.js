const router = require("express").Router();
const Employee = require("../models/Employee");
const Attendance = require("../models/Attendance");
const auth = require("../middleware/auth");

router.get("/stats", auth, async (req, res) => {
  const employees = await Employee.countDocuments();
  const presentToday = await Attendance.countDocuments({
    status: "Present",
  });

  res.json({
    totalEmployees: employees,
    presentToday,
    absentToday: employees - presentToday,
  });
});

module.exports = router;
