const express = require("express");
const router = express.Router();

const user = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new user({ username, email, password });
  try {
    newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
