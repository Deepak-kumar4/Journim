import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlaceCard from "../components/PlaceCard";
import HotelCard from "../components/HotelCard";
import MapView from "../components/MapView";
import Navbar from "../components/Navbar"; 

import "../styles/Home.css";

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.removeItem("places");
    localStorage.removeItem("selected");
    localStorage.removeItem("hotels");
    localStorage.removeItem("lastQuery");
  }, []);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }, [hotels]);

  
  const searchPlaces = async (query, reset = true) => {
    setLoading(true);
    setError("");
    setMessage("");
    localStorage.setItem("lastQuery", query); // save last query

    try {
      const res = await axios.get(`http://localhost:5000/api/places/${query}`);
      if (res.data.length === 0) {
        setMessage("No tourist places found for that location.");
      } else {
        setMessage(`Found ${res.data.length} places`);
      }

      setPlaces(res.data);
      if (reset) {
        setSelected([]);
        setHotels([]);
      }
    } catch (err) {
      console.error("Error fetching places:", err);
      setError("Something went wrong while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const toggleSelect = (place) => {
    if (selected.some((p) => p._id === place._id)) {
      setSelected(selected.filter((p) => p._id !== place._id));
    } else if (selected.length < 5) {
      setSelected([...selected, place]);
    }
  };


  const getHotels = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/recommend", {
        selectedPlaces: selected,
      });

      if (res.data.length === 0) {
        setMessage("No hotels found near the selected places.");
      } else {
        setMessage(`Found ${res.data.length} hotel recommendations`);
      }

      setHotels(res.data);
    } catch (err) {
      console.error("Error fetching hotels:", err);
      setError("Could not get hotel recommendations. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
        <Navbar/>
      <h1>Munnar Trip Planner</h1>

      <SearchBar onSearch={(query) => searchPlaces(query, true)} />

      {loading && <p className="status-message loading">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}
      {message && <p className="status-message success">{message}</p>}

      {places.length > 0 && <h2>Select 5 Places</h2>}
      <div className="places-grid">
        {places.map((p) => (
          <PlaceCard
            key={p._id}
            place={p}
            onSelect={toggleSelect}
            isSelected={selected.some((s) => s._id === p._id)}
          />
        ))}
      </div>

      {selected.length === 5 && (
        <button className="recommend-btn" onClick={getHotels}>
          Recommend Hotels
        </button>
      )}

      {hotels.length > 0 && (
        <>
          <h2>Hotels</h2>
          <div className="hotels-grid">
            {hotels.map((h) => (
              <HotelCard key={h._id} hotel={h} />
            ))}
          </div>
          <MapView hotels={hotels} places={selected} height="250px" />
        </>
      )}
    </div>
  );
}





