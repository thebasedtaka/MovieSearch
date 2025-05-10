/* eslint-env node */

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "";
  const queryString = new URLSearchParams(searchParams)
    .toString()
    .replace("path=", "");

  const tmdbUrl = `https://api.themoviedb.org/3/${path}?${queryString}`;

  try {
    const response = await fetch(tmdbUrl, {
      headers: {
        Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("TMDB Proxy Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
