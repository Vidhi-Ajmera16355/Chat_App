import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); //parse in json
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Hlo world!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on  port ${PORT}`);
});
