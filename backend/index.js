import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import authroutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/auth", authroutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected To MongoDB");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
