import Navbar from "./navbar";
import "../index.css";
import { useParams } from "react-router-dom";
import getAmovie from "./getamovie";
import { url } from "../App";
import Footer from "./footer";

export default function Card2() {
  const { id } = useParams();

  const { data, error, isLoading } = getAmovie(id);

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>loading</div>;
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="card2">
        <div className="card2-img">
          <img src={url + data.poster_path} />
        </div>
        <div className="cardtext">
          <h1 data-testid="movie-title">{data.title}</h1>
          <p data-testid="movie-overview">{data.overview}</p>
          <span data-testid="movie-release-date">{data.release_date} .</span>
          <br />
          <span data-testid="movie-runtime">{data.runtime}Min</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
