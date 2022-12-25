const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarScheme = new Schema({
  name: String,
  image: String,
  price: Number,
  probig: Number,
  year: Number,
  brand: String,
  body: String,
  fuel: String,
  drive_type: String,
  gearbox: String,
});

const Car = mongoose.model("cars", CarScheme);

module.exports = {
  Car,
};
