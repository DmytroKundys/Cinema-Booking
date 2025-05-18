import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";
import { BookingService } from "../services/BookingService";

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const booked = BookingService.getBookedSeats(id);
    setBookedSeats(booked);
  }, [id]);

  const handleBooking = (userData) => {
    BookingService.saveBooking(id, selectedSeats, userData);
    alert("Бронювання успішно збережено!");
    setSelectedSeats([]);
    setBookedSeats(BookingService.getBookedSeats(id));
  };

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

      {selectedSeats.length > 0 && <BookingForm onSubmit={handleBooking} />}
    </div>
  );
}

export default Booking;
