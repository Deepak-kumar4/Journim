<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // 👈 Load .env file

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use MongoDB URI from .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error", err));

// ✅ Correct route files
const placeRoutes = require("./routes/placeRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const recommendRoutes = require("./routes/recommendRoutes");

// ✅ Routes
app.use("/api/places", placeRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/recommend", recommendRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));


=======
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // 👈 Load .env file

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use MongoDB URI from .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error", err));

// ✅ Correct route files
const placeRoutes = require("./routes/placeRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const recommendRoutes = require("./routes/recommendRoutes");

// ✅ Routes
app.use("/api/places", placeRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/recommend", recommendRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));


>>>>>>> ba77fe1 (Initial commit / Updated project)
