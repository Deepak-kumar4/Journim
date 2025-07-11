import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";

import "./App.css"; 


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel/:id" element={<HotelDetails />} />
    </Routes>
  );
}









