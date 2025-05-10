/* eslint-env node */

export default async function handler(req, res) {
  const { url, method } = req;

  // Remove `/api/tmdb` from request url
  const tmdbPath = url.replace(/^\/api\/tmdb/, "");

  const tmdbUrl = `https://api.themoviedb.org/3${tmdbPath}`;

  try {
    const response = await fetch(tmdbUrl, {
      method,
      headers: {
        Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("TMDB Proxy Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
