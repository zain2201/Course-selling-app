import { Router } from "express";

import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
const router = Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username: username, password: password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ message: "User successfully created", token: token });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });
  if (user) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Successfully Signed In", token: token });
  } else {
    res.status(403).json({ message: "Invalid Username or Password" });
  }
});

export default router;
