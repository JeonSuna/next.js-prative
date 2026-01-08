"use client";
import { useEffect, useState } from "react";

export default function Partice() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovies] = useState();

  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const movieData = await res.json();
    console.log(movieData);
    setMovies(movieData);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <h1>{isLoading ? "loading😂" : JSON.stringify(movie)}</h1>;
}
