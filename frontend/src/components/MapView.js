<<<<<<< HEAD
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapView.css";

// Custom red icon for places
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom blue icon for hotels
const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FitBounds({ places, hotels }) {
  const map = useMap();
  const points = [...places, ...hotels].map(p => [p.latitude, p.longitude]);
  if (points.length > 0) {
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [50, 50] });
  }
  return null;
}

export default function MapView({ hotels, places }) {
  return (
    <div className="map-wrapper">
      <MapContainer center={[10.0889, 77.0595]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        <FitBounds places={places} hotels={hotels} />

        {places.map((p, i) => (
          <Marker key={p._id || i} position={[p.latitude, p.longitude]} icon={redIcon}>
            <Popup>
              <b>{p.name}</b><br />Tourist Spot
            </Popup>
          </Marker>
        ))}

        {hotels.map((h, i) => (
          <Marker key={h._id || i} position={[h.latitude, h.longitude]} icon={blueIcon}>
            <Popup>
              <b>{h.name}</b><br />Rating: ⭐{h.rating}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}



=======
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapView.css";

// Custom red icon for places
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom blue icon for hotels
const blueIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FitBounds({ places, hotels }) {
  const map = useMap();
  const points = [...places, ...hotels].map(p => [p.latitude, p.longitude]);
  if (points.length > 0) {
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [50, 50] });
  }
  return null;
}

export default function MapView({ hotels, places }) {
  return (
    <div className="map-wrapper">
      <MapContainer center={[10.0889, 77.0595]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        <FitBounds places={places} hotels={hotels} />

        {places.map((p, i) => (
          <Marker key={p._id || i} position={[p.latitude, p.longitude]} icon={redIcon}>
            <Popup>
              <b>{p.name}</b><br />Tourist Spot
            </Popup>
          </Marker>
        ))}

        {hotels.map((h, i) => (
          <Marker key={h._id || i} position={[h.latitude, h.longitude]} icon={blueIcon}>
            <Popup>
              <b>{h.name}</b><br />Rating: ⭐{h.rating}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}



>>>>>>> ba77fe1 (Initial commit / Updated project)
