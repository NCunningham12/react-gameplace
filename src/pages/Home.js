import React from 'react';
import Slider from '../components/Slider.js';
import SliderImages from '../components/SliderImages.js';

function Home() {
  return (
    <>
      <Slider slides={SliderImages} />
    </>
  );
}

export default Home;
