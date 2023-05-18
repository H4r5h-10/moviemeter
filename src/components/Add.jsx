import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import LoadingBar from 'react-top-loading-bar';
import "./add.css";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [progress, setProgress] = useState(0);

  const onchange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };

  return (
    <div className="add-page">
      <LoadingBar progress={100} onLoaderFinished={() => setProgress(0)}/>
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search For a Movie..."
              onChange={onchange}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};

export default Add;
