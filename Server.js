const express = require("express");
const cars = require("cars");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cars());
app.use(express.json());

app.use("/ap:/students",require("./routes/StudentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Server is running on port ${PORT}"));
console.log("Server.js");