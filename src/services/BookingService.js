export const BookingService = {
    getBookedSeats(movieId) {
      const data = JSON.parse(localStorage.getItem("bookings")) || {};
      return data[movieId]?.flatMap((b) => b.seats) || [];
    },
  
    saveBooking(movieId, seats, userData) {
      const data = JSON.parse(localStorage.getItem("bookings")) || {};
      if (!data[movieId]) {
        data[movieId] = [];
      }
      data[movieId].push({ seats, user: userData });
      localStorage.setItem("bookings", JSON.stringify(data));
    }
  };
  