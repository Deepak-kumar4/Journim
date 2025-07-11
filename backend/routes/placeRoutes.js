const express = require("express");
const router = express.Router();
const Place = require("../models/TouristPlace");

router.get("/:location", async (req, res) => {
  const data = await Place.find({ location: req.params.location });
  res.json(data);
});

module.exports = router;

