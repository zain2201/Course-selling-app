import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import authroutes from "./routes/auth.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/auth", authroutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect("mongodb+srv://zain90651:zain2201@cluster0.ns2ifqf.mongodb.net/")
  .then(() => {
    console.log("Connected To MongoDB");
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
