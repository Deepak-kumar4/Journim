const Place = require('../models/TouristPlace');

exports.getPlaces = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query missing' });

  try {
    const places = await Place.find({ location: new RegExp(q, 'i') });
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch places' });
  }
};
