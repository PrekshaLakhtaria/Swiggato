const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  // console.log("New user :", newUser);
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user registration failed!!" });
    } else {
      newUser.save();
      res.send("User registered successfully");
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });

    if (user.length > 0) {
      const currentUser = {
        username: user[0].username,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "user login failed!!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;
