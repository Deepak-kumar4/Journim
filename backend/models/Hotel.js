const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  rating: Number,
  price: Number, // ✅ Add this line
  image_url: String,
  description: String,
});

module.exports = mongoose.model("Hotel", hotelSchema);




