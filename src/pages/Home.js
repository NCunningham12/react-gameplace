import React from 'react';
import Slider from '../components/Slider.js';
import SliderImages from '../components/SliderImages.js';
import Cards from '../components/Cards.js';

function Home() {
  return (
    <>
      <Slider slides={SliderImages} />
      <Cards />
    </>
  );
}

export default Home;
