const Hotel = require('../models/Hotel');

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

exports.recommendHotels = async (req, res) => {
  const { selectedPlaces } = req.body;

  if (!selectedPlaces || selectedPlaces.length !== 5) {
    return res.status(400).json({ error: 'Exactly 5 places must be selected' });
  }

  try {
    const allHotels = await Hotel.find({ location: /munnar/i });

    const hotelsWithScore = allHotels.map(hotel => {
      let totalDistance = 0;
      let nearbyPlaces = [];

      selectedPlaces.forEach(place => {
        const distance = getDistance(
          hotel.latitude,
          hotel.longitude,
          place.latitude,
          place.longitude
        );

        totalDistance += distance;

        if (distance < 3) {
          nearbyPlaces.push(place.name);
        }
      });

      const avgDistance = totalDistance / (selectedPlaces.length);

      const reason = nearbyPlaces.length > 0
        ? `Close to ${nearbyPlaces.join(', ')}`
        : `Recommended for overall proximity to your selected spots`;

      return {
        ...hotel._doc,
        avgDistance,
        reason,
      };
    });

    const sortedHotels = hotelsWithScore
      .sort((a, b) => a.avgDistance - b.avgDistance)
      .slice(0, 5);


    console.log("✅ Sending hotels with reasons:", sortedHotels);

    res.json({ hotels: sortedHotels });
  } catch (err) {
    console.error("Error recommending hotels:", err);
    res.status(500).json({ error: 'Failed to recommend hotels' });
  }
};

