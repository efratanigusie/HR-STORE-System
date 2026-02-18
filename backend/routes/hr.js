const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/dashboard", auth(["hr"]), (req, res) => {
  res.json({ message: "HR Dashboard Access" });
});

module.exports = router;
