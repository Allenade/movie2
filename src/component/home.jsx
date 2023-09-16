// import datas from "../data";
import Navbar from "./navbar";
import Text from "./text";
import Footer from "./footer";
import Card from "./card";
import "../index.css";
import getMovies from "../getmovies";
import { useState } from "react";
import getSearch from "./getsearch";

export default function Home() {
  const { data, error, isLoading } = getMovies();
  const [search, setSearch] = useState("");

  const result = getSearch(search);
  const movieSearch = result.data;
  const movieError = result.error;
  const moveIsloading = result.isLoading;

  const handleSearch = (keyWord) => {
    setSearch(keyWord);
  };

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>loading</div>;

  //   const cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Navbar handleSearch={handleSearch} />

      {search ? (
        <div>
          <h1>search result</h1>
          <main className="card--list">
            {movieSearch.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </main>
        </div>
      ) : (
        <div data-testid="movie-card">
          <Text />
          <main className="card--list">
            {data.slice(0, 10).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </main>
        </div>
      )}

      <Footer />
    </div>
  );
}
