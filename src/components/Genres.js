import React from 'react'
import { Link } from 'react-router-dom'
import './Genres.css'

const Genres = () => {
  return (
    <div className='genres'>
      <h1 className="discover">Discover Games</h1>
      <br /><hr /><br />
      <div className="genre__container">
        <Link className='genre__item__link' to='/genres/rpg'>
          <div className="genre__item">RPG</div>
        </Link>
        <Link className='genre__item__link' to='/genres/fps'>
          <div className="genre__item">FPS</div>
        </Link>
        <Link className='genre__item__link' to='/genres/survival'>
          <div className="genre__item">Survival</div>
        </Link>
        <Link className='genre__item__link' to='/genres/rts'>
          <div className="genre__item">RTS</div>
        </Link>
        <Link className='genre__item__link' to='/genres/horror'>
          <div className="genre__item">Horror</div>
        </Link>
        <Link className='genre__item__link' to='/genres'>
          <div className="genre__item">More...</div>
        </Link>
        </div>
    </div>
  )
}

export default Genres