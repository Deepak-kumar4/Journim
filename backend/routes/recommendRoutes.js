const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
const haversine = require("haversine-distance");

router.post("/", async (req, res) => {
  const selectedPlaces = req.body.selectedPlaces;

  if (!selectedPlaces?.length) {
    return res.status(400).json({ error: "No places provided" });
  }

  const hotels = await Hotel.find();

  const scored = hotels.map(hotel => {
    const totalDistance = selectedPlaces.reduce((sum, place) => {
      return sum + haversine(
        { latitude: place.latitude, longitude: place.longitude },
        { latitude: hotel.latitude, longitude: hotel.longitude }
      );
    }, 0);

    const avgDistance = totalDistance / selectedPlaces.length; // meters

    let reason = "";
    if (avgDistance < 500) {
      reason = "🚶 Very close to all selected places";
    } else if (avgDistance < 1000) {
      reason = "✅ Walkable from most places";
    } else if (avgDistance < 3000) {
      reason = "📍 Near your selected places";
    } else {
      reason = "⛳ Reasonably reachable from selected places";
    }

    return {
      ...hotel._doc,
      avgDistance, // meters
      reason
    };
  });

  const top5 = scored
    .sort((a, b) => a.avgDistance - b.avgDistance)
    .slice(0, 5);

  res.json(top5);
});

module.exports = router;



