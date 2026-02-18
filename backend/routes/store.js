const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/dashboard", auth(["store"]), (req, res) => {
  res.json({ message: "Store Dashboard Access" });
});

module.exports = router;
