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

mongoose.connect(
  "mongodb+srv://product:qwerty123@cluster0.xotx6dl.mongodb.net/autoshow",
  function (err, db) {
    if (!err) {
      console.log("Mongose connected");
    } else console.log(err);
  }
);
app.listen(port, () => {
  console.log("Server start");
});
