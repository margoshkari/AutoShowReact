const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/UserRouter.js");

app.use(express.json());
app.use(userRouter);
app.use(cookieParser());


mongoose.connect(process.env.mongooseConnection, function (err, db) {
  if (!err) {
    console.log("Mongose connected");
  } else console.log(err);
});
app.listen(port, () => {
    console.log("Server start");
  });