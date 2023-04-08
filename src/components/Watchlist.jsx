import React, {useContext} from 'react'
import './watchlist.css'
import {MovieCard} from './MovieCard'

import { GlobalContext } from '../context/GlobalState'

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);


  return (
    <div className='top-container'>
        <div className="heading">
          <h1>My Watchlist</h1>
        </div>
        {watchlist.length? (<div className='cards'>
          {watchlist.map((movie)=>(
            <MovieCard movie={movie} type="watchlist"/>
          ))}
        </div>):<h2 className="no">No movies in your watchlist...</h2>}
    </div>
  )
}

export default Watchlist
