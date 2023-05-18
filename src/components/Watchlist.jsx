import React, { useContext } from "react";
import "./watchlist.css";
import { MovieCard } from "./MovieCard";
import { RiSearchEyeLine } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalState";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="top-container">
      <h1 className="page-head">
        <div className="v-line"></div>My Watchlist
      </h1>
      <div className="card-container">
        {watchlist.length ? (
          <div className="cards">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no">
            Add movies by clicking <RiSearchEyeLine />
          </h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
