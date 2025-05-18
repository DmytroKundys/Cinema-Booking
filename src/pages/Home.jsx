import React from "react";
import { movies } from "../data/movies";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "24px" }}>Актуальні фільми</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
