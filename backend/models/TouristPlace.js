const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  location: String,
  latitude: Number,
  longitude: Number,
  image_url: String,
  description: String,
});

module.exports = mongoose.model("TouristPlace", placeSchema);

