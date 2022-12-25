const express = require("express");
const carRouter = express.Router();
const Cars = require("../models/CarModel.js");

//ADD CAR
carRouter.post("/api/add", async (req, res) => {
  const {
    name,
    image,
    price,
    probig,
    year,
    brand,
    body,
    fuel,
    drive_type,
    gearbox,
  } = req.body;
  var car = new Cars.Car({
    name: name,
    image: image,
    price: price,
    probig: probig,
    year: year,
    brand: brand,
    body: body,
    fuel: fuel,
    drive_type: drive_type,
    gearbox: gearbox,
  });
  await car
    .save()
    .then(() => {
      res.json({ isAdded: true });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
});

module.exports = carRouter;
