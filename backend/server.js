require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const hrRoutes = require("./routes/hr");
const storeRoutes = require("./routes/store");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.listen(5000, () => console.log("🚀 Server running on 5000"));
