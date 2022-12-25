const express = require("express");
const carRouter = express.Router();
const Cars = require("../models/CarModel.js");
const { check, validationResult } = require("express-validator");

const validation = [
  check("name")
    .notEmpty()
    .withMessage("Name cannot be empty!")
    .isLength({
      min: 2,
      max: 30,
    })
    .withMessage("Wrong name length"),

  check("image").notEmpty().withMessage("Image cannot be empty!"),

  check("price")
    .notEmpty()
    .withMessage("Price cannot be empty!")
    .isInt({ min: 0 })
    .withMessage("Price must be above zero!"),

  check("probig")
    .notEmpty()
    .withMessage("Probig cannot be empty!")
    .isInt({ min: 0, max: 999 })
    .withMessage("Probig must be between 0 and 1000!"),
];
//ADD CAR
carRouter.post("/api/add", validation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.json({ error: errors });
  }
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

//GET CAR
carRouter.get("/api/getcar", async (req, res) => {
  var carsArray = await Cars.Car.find({});
  res.json({ cars: carsArray });
});

//FILTER CAR
carRouter.post("/api/filter", async (req, res) => {
  const {
    price_min,
    price_max,
    year_min,
    year_max,
    probig_min,
    probig_max,
    brandArray,
    bodyArray,
  } = req.body;
  console.log(req.body);

  let priceMatch = {};
  if (price_min != "") {
    priceMatch["$gte"] = price_min;
  } else {
    priceMatch["$gte"] = 0;
  }
  if (price_max != "") {
    priceMatch["$lt"] = price_max;
  }

  let yearMatch = {};
  if (year_min != "") {
    yearMatch["$gte"] = year_min;
  } else {
    yearMatch["$gte"] = 0;
  }
  if (year_max != "") {
    yearMatch["$lt"] = year_max;
  }

  let probigMatch = {};
  if (probig_min != "") {
    probigMatch["$gte"] = probig_min;
  } else {
    probigMatch["$gte"] = 0;
  }
  if (year_max != "") {
    probigMatch["$lt"] = probig_max;
  }

  let brandMatch = {};
  if (brandArray != "") {
    brandMatch.brand = {};
    brandMatch.brand["$in"] = brandArray;
  }

  let bodyMatch = {};
  if (bodyArray != "") {
    bodyMatch.body = {};
    bodyMatch.body["$in"] = bodyArray;
  }

  var carsArray = await Cars.Car.find({
    $and: [
      { price: priceMatch },
      { year: yearMatch },
      { probig: probigMatch },
      brandMatch.brand ? { brand: brandMatch.brand } : {},
      bodyMatch.body ? { body: bodyMatch.body } : {},
    ],
  });
  console.log(carsArray);
  res.json({ cars: carsArray });
});

//DELETE CAR
carRouter.post("/api/delete", async (req, res) => {
  const { _id } = req.body;
  await Cars.Car.remove({ _id: _id });
  var carsArray = await Cars.Car.find({});
  res.json({ cars: carsArray });
});

module.exports = carRouter;
