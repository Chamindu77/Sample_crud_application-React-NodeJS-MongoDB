require("dotenv").config();
require("./Config/database").StudentDataBase();
const express = require("express");
const app = express();
const cors = require("cors");
//const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");
const studentRoutes = require("./Routes/studentRoutes");
const auth = require("./middleware/auth");

app.use(
  cors({
    credentials: true,
    // origin : "https://auth-todo-list-mern.vercel.app"
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/", todoRouters);
app.use("/", userRoutes);
// app.use("/", userRoutes);
app.use("/api/Student", studentRoutes);


module.exports = app;


