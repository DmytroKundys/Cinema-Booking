import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";
import { BookingService } from "../services/BookingService";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SEAT_PRICE = 100;

function Booking() {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setBookedSeats(BookingService.getBookedSeats(id));
  }, [id]);

  const handleBooking = (userData) => {
    if (!selectedSeats.length) {
      toast.error("Спочатку оберіть місця");
      return;
    }
    BookingService.saveBooking(id, selectedSeats, userData);
    toast.success("Успішно заброньовано!");
    setShowPopup(false);
    setSelectedSeats([]);
    setBookedSeats(BookingService.getBookedSeats(id));
  };

  const formatSeats = (seats) =>
    seats.map((s) => {
      const [row, col] = s.split("-");
      return `${+row + 1} ряд ${+col + 1} місце`;
    });

  const totalPrice = selectedSeats.length * SEAT_PRICE;

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <ToastContainer position="bottom-right" />
      <Link to="/" style={{ display: "inline-block", marginBottom: "20px", textDecoration: "none", color: "#ff5c1c", fontWeight: 600 }}>
        ← Назад до фільмів
      </Link>
      <h2>Виберіть місця на фільм #{id}</h2>

      <CinemaHall
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        bookedSeats={bookedSeats}
      />

      {selectedSeats.length > 0 && (
        <>
          <p style={{ marginTop: "16px" }}>
            <strong>Обрані місця:</strong> {formatSeats(selectedSeats).join(", ")}
          </p>
          <button
            onClick={() => setShowPopup(true)}
            style={{
              marginTop: "16px",
              padding: "12px 20px",
              backgroundColor: "#ff5c1c",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Забронювати місця ({totalPrice} грн)
          </button>
        </>
      )}

      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999
        }}>
          <div style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
            maxWidth: "400px",
            width: "90%",
            position: "relative",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
          }}>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: 8, right: 12,
                background: "transparent",
                border: "none",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
            <h3 style={{ marginBottom: "12px" }}>Введіть ваші дані для бронювання</h3>
            <BookingForm onSubmit={handleBooking} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
