import React from "react";
import "./CinemaHall.css";

function CinemaHall({ selectedSeats, setSelectedSeats, bookedSeats }) {
  const rows = 5;
  const cols = 8;

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const seatId = `${row}-${col}`;
        let className = "seat";

        if (bookedSeats.includes(seatId)) {
          className += " booked";
        } else if (selectedSeats.includes(seatId)) {
          className += " selected";
        }

        seats.push(
          <div
            key={seatId}
            className={className}
            onClick={() => handleSeatClick(seatId)}
          >
            {seatId}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div className="cinema-container">
      <div className="screen">Екран</div>
      <div className="seats">{renderSeats()}</div>
    </div>
  );
}

export default CinemaHall;
