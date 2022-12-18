const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScheme = new Schema({
  username: String,
  surname: String,
  patronymic: String,
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  password: String,
  role: String,
});

const User = mongoose.model("users", UserScheme);

module.exports = {
  User,
};