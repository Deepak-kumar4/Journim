const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

const haversine = require("haversine-distance");

router.post("/", async (req, res) => {
  const selectedPlaces = req.body.selectedPlaces;

  const hotels = await Hotel.find();
  const scored = hotels.map(hotel => {
    const avgDist = selectedPlaces.reduce((sum, place) => {
      return sum + haversine(
        { lat: place.latitude, lon: place.longitude },
        { lat: hotel.latitude, lon: hotel.longitude }
      );
    }, 0) / selectedPlaces.length;

    return { ...hotel._doc, avgDistance: avgDist };
  });

  const top5 = scored.sort((a, b) => a.avgDistance - b.avgDistance).slice(0, 5);
  res.json(top5);
});

module.exports = router;
