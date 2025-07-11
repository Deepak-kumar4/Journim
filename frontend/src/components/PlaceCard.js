import "./Card.css";

export default function PlaceCard({ place, onSelect, isSelected }) {
  return (
    <div
      className={`card ${isSelected ? "card-selected" : ""}`}
      onClick={() => onSelect(place)}
    >
      <img src={place.image_url} alt={place.name} />
      <div className="card-content">
        <h3>{place.name}</h3>
        <p>{place.description}</p>
      </div>
    </div>
  );
}

