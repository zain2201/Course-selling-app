import { Router } from "express";

import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
const router = Router();

const SECRET = "s3c83t";
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  let user = await User.findOne({ username: username });
  if (user) {
    res.status(403).send({ message: "User already exists" });
  } else {
    const newUser = new User({ username: username, password: password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res
      .status(200)
      .send({ message: "User successfully created", token: token });
  }
});

export default router;
