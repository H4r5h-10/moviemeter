import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import {MovieCard} from "./MovieCard"

export const Watched = () => {
  const {watched}=useContext(GlobalContext)

  return (
    <div>
      <div className='top-container'>
        <div className="heading">
          <h1>Watched Movies</h1>
        </div>
        {watched.length? (<div className='cards'>
          {watched.map((movie)=>(
            <MovieCard movie={movie} type="watched" id={movie.id}/>
          ))}
        </div>):<h2 className="no">No movies in your Watched List...</h2>}
    </div>
    </div>
  )
}

export default Watched
