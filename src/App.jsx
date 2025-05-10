import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import React from "react";
import Search from "./components/Search";
import { fetchTrendingMovies, searchMovies } from "./services/movies";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      if (query != "") {
        const { results } = await searchMovies(encodeURIComponent(query));
        setMovieList(results || []);
        return;
      }

      const { results } = await fetchTrendingMovies(); // Destructure results
      setMovieList(results || []); // Ensure we always have an array
      console.log("Movies loaded:", results); // Debug log
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage(error.message || "Error fetching movies");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></Search>
          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {IsLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
              </ul>
            )}
          </section>
        </header>
      </div>
    </main>
  );
}

export default App;
