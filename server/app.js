const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/UserRouter.js");
const carRouter = require("./routes/CarRouter.js");

app.use(express.json());
app.use(cookieParser());
app.use(userRouter);
app.use(carRouter);



mongoose.connect(process.env.mongooseConnection, function (err, db) {
  if (!err) {
    console.log("Mongose connected");
  } else console.log(err);
});
app.listen(port, () => {
  console.log("Server start");
});
