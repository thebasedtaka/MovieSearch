export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `/api/tmdb?path=trending/movie/day&language=en-US`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies from TMDB");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `/api/tmdb?path=search/movie&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to search movies from TMDB");
    }

    return await response.json();
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
