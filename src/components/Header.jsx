import React from 'react';
import { Link } from "react-router-dom";
import './header.css'
import {ImVideoCamera} from 'react-icons/im'

export const Header = () => {
  return (
    <>
    <header>
      <div className='container'>
        <div className="inner-content">
            <div className='logo'>
              <div className='icon'><ImVideoCamera/></div>
              <Link className="brand" to="/">MovieMeter</Link>
            </div>
            <div className="pages">
                <nav className="nav">
                    <Link className='link' to='/'>WatchList</Link>
                    <Link className='link' to='/watched'>Watched</Link>
                    <Link to='/add' className='btn'>+ Add</Link>
                </nav>
            </div>
        </div>
      </div>
    </header>
    </>
    
  )
}

export default Header;
