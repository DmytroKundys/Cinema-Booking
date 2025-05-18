import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
    <div className="poster-wrapper">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
    </div>
    <div className="content-wrapper">
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      <div className="badge-row">
        <span className="badge badge-genre">{movie.genre}</span>
        <span className="badge badge-time">{movie.time}</span>
      </div>
      <Link to={`/booking/${movie.id}`} className="book-button">
        Забронювати
      </Link>
    </div>
  </div>
  
  );
}

export default MovieCard;
