import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import {MovieCard} from "./MovieCard"


export const Watched = () => {
  const {watched}=useContext(GlobalContext)

  return (
    <div>
      <div className='top-container'>
        <h1 className="page-head"><div className="v-line"></div>Watched Movies</h1>
        <div className="card-container">
        {watched.length? (<div className='cards'>
          {watched.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} type="watched" id={movie.id}/>
          ))}
        </div>):<h2 className="no">No movies in your Watched List...</h2>}
        </div>
      </div>
      
    </div>
  )
}

export default Watched
