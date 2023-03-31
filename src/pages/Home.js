import React from 'react';
import Slider from '../components/Slider.js';
import SliderImages from '../components/SliderImages.js';
import Cards from '../components/Cards.js';
import Genres from '../components/Genres.js';

function Home() {
  return (
    <>
      <Slider slides={SliderImages} />
      <Cards />
      <Genres />
    </>
  );
}

export default Home;
