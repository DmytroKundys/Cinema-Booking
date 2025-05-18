import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-genre">{movie.genre}</p>
      <p className="movie-time">Сеанс: {movie.time}</p>

      <Link to={`/booking/${movie.id}`} className="book-button">
        Забронювати
      </Link>
    </div>
  );
}

export default MovieCard;
