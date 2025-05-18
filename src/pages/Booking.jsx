import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const bookedSeats = []; // поки що порожній список

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Виберіть місця на фільм #{id}
      </h2>

      <CinemaHall
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        bookedSeats={bookedSeats}
      />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <strong>Обрані місця:</strong>{" "}
        {selectedSeats.length > 0 ? selectedSeats.join(", ") : "немає"}
      </div>
    </div>
  );
}

export default Booking;
