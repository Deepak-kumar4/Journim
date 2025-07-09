const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json(hotel);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;



