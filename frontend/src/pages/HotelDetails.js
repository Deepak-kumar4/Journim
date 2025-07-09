import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/hotels/${id}`);
        setHotel(res.data);
      } catch (err) {
        console.error("Could not fetch hotel", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!hotel) return <p>Hotel not found</p>;

  return (
    <div className="hotel-details">
      <button onClick={() => navigate(-1)} className="back-btn">← Go Back</button>
      <img src={hotel.image_url} alt={hotel.name} />
      <div className="info">
        <h1>{hotel.name}</h1>
        <p>{hotel.description}</p>
        <p><strong>Location:</strong> {hotel.location || "N/A"}</p>
        <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
        <p><strong>Price:</strong> ₹{hotel.price} / night</p>
        <p><strong>Latitude:</strong> {hotel.latitude}</p>
        <p><strong>Longitude:</strong> {hotel.longitude}</p>
      </div>
    </div>
  );
}


