require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function createUsers() {
  await mongoose.connect(process.env.MONGO_URI);

  const users = [
    { username: "hradmin", password: "12345", role: "hr" },
    { username: "storeadmin", password: "12345", role: "store" },
  ];

  for (const u of users) {
    const exists = await User.findOne({ username: u.username });
    if (exists) {
      console.log(`⚠️ ${u.username} already exists`);
      continue;
    }

    const hashed = await bcrypt.hash(u.password, 10);
    await User.create({
      username: u.username,
      password: hashed,
      role: u.role,
    });

    console.log(`✅ ${u.username} created`);
  }

  process.exit();
}

createUsers();
