import React, { useContext } from "react";
import "./resultcard.css";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let alrWatchlist = watchlist.find((o) => o.id === movie.id);
  let checkWatchlist = alrWatchlist ? true : false;

  let alrWatched = watched.find((o) => o.id === movie.id);
  let checkWatched = alrWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            width="200"
            height="300"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="No preview available"
            width="200"
            height="300"
          />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h2 className="title">{movie.title}</h2>
          <h4 className="date">{movie.release_date.slice(0, 4)}</h4>
          <button
            className={checkWatchlist ? "btn off" : "btn add"}
            disabled={checkWatchlist}
            onClick={() => addMovieToWatchlist(movie)}
          >
            {" "}
            Add to Watchlist
          </button>
          <button
            className={checkWatched ? "btn off" : "btn add"}
            disabled={checkWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            {" "}
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
