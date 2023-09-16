import { Link } from "react-router-dom";
import { url } from "../App";
export default function Card(props) {
  return (
    <div data-testid="movie-card" className="card">
      <Link to={"/movies/" + props.item.id}>
        {" "}
        <img
          data-testid="movie-poster"
          src={url + props.item.poster_path}
          className="card-img"
        />{" "}
      </Link>
      <div className="card--stats">
        {/* <span className="gray">{props.item.country}</span> */}
        <span></span>
      </div>
      <span data-testid="movie-title">{props.item.title}</span>
      <span data-testid="movie-release-date">{props.item.release_date} .</span>
    </div>
  );
}
