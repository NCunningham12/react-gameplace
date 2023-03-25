import React from 'react';
import './Carousel.css';

function Carousel() {

  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={require('../assets/images/sekiro.png')}
          alt="Sekiro Thumbnail"
          className="carousel-item carousel-item-1"
          data-index="1"
        />
        <img
          src={require('../assets/images/hogwarts.jpg')}
          alt="Hogwarts Thumbnail"
          className="carousel-item carousel-item-2"
          data-index="2"
        />
        <img
          src={require('../assets/images/raft.jpg')}
          alt="Raft Thumbnail"
          className="carousel-item carousel-item-3"
          data-index="3"
        />
        <img
          src={require('../assets/images/ready-or-not2.jpg')}
          alt="Ready Or Not Thumbnail"
          className="carousel-item carousel-item-4"
          data-index="4"
        />
        <img
          src={require('../assets/images/rocket-league.jpg')}
          alt="Rocket League Thumbnail"
          className="carousel-item carousel-item-5"
          data-index="5"
        />
      </div>
      <div className="carousel-controls"></div>
    </div>  
  );
}

export default Carousel;
