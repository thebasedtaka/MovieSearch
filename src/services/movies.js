export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch("/api/tmdb/trending/movie/day?language=en-US");

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies from TMDB");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovies = async (params) => {
  try {
    const response = await fetch(`/api/tmdb/search/movie?query=${params}`);

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies from TMDB");
    }

    const data = await response.json();

    console.log(params);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
