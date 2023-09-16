import { useEffect, useState } from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWRjNDk4YzYxNjRhYjgxNGVjYTNkNmI1YTZlODBmOCIsInN1YiI6IjY1MDQ1MWQ0ZGI0ZWQ2MTAzODU3ODUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b4ras5AESFvXFdKxhI24bQ0RZBKqhgxjFNvVd7Ulzh8",
  },
});

function getSearch(query) {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get("/search/movie?query=" + query)
      .then((result) => {
        setData(result.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  });

  return {
    data,
    error,
    isLoading,
  };
}
export default getSearch;
