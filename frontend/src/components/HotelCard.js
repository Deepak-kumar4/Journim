import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/hotel/${hotel._id}`)}>
      <img src={hotel.image_url} alt={hotel.name} />
      <div className="card-content">
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <p>⭐ {hotel.rating} / 5</p>
        <p><strong>Price:</strong> ₹{hotel.price} / night</p>

        {/*  Add reason */}
        {hotel.reason && (
          <p className="hotel-reason">
            <strong>Why recommended:</strong> {hotel.reason}
          </p>
        )}

        {/*  Add avgDistance */}
        {hotel.avgDistance !== undefined && (
          <p className="hotel-distance">
            <strong>Avg. distance:</strong> {hotel.avgDistance.toFixed(2)} km
          </p>
        )}
      </div>
    </div>
  );
}




