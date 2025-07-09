const mongoose = require('mongoose');
require('dotenv').config();

const Place = require('./models/TouristPlace');
const Hotel = require('./models/Hotel');
const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    await Place.deleteMany();
    await Hotel.deleteMany();
    await Place.insertMany(places);
    await Hotel.insertMany(hotels);
    console.log("🎉 Data added!");
    process.exit();
  })
  .catch(err => console.log("❌ Error:", err));
