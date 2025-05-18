import React, { useState } from "react";
import { movies as allMovies } from "./data/movies";
import MovieList from "./components/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "24px" }}>Актуальні фільми</h1>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Пошук за назвою фільму..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 16px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "300px",
            maxWidth: "90%",
          }}
        />
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
