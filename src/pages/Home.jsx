import React, { useState } from "react";
import { movies } from "../data/movies";
import MovieList from "../components/MovieList";
import "./Home.css";


function Home() {
  const [query, setQuery] = useState("");
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="Home">
      <h1>Актуальні фільми</h1>
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
