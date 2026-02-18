const router = require("express").Router();
const Employee = require("../models/Employee");
const auth = require("../middleware/auth");

/**
 * GET – all employees
 * Any logged-in user
 */
router.get("/", auth(), async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
});

/**
 * GET – single employee
 * Any logged-in user
 */
router.get("/:id", auth(), async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employee" });
  }
});

/**
 * POST – add employee
 * HR only
 */
router.post("/", auth(["hr"]), async (req, res) => {
  try {
    const { name, department, position, salary, status } = req.body;

    if (!name || !department || !position || !salary) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const employee = new Employee({
      name,
      department,
      position,
      salary,
      status: status || "Active",
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create employee" });
  }
});

/**
 * PUT – update employee
 * HR only
 */
router.put("/:id", auth(["hr"]), async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Failed to update employee" });
  }
});

/**
 * DELETE – delete employee
 * HR only
 */
router.delete("/:id", auth(["hr"]), async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete employee" });
  }
});

module.exports = router;
