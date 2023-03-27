import React from 'react';
import SliderImages from './SliderImages';
import './Slider.css';

const slide1 = document.querySelector('.slider-image-1')
const slide2 = document.querySelector('.slider-image-2');
const slide3 = document.querySelector('.slider-image-3');
const slide4 = document.querySelector('.slider-image-4');
const slide5 = document.querySelector('.slider-image-5');

const Slider = () => {

   // Slide 1
   slide1.addEventListener('click', () => {
    slide1.classList.add('slider-image-3');
    slide1.classList.remove('slider-image-1');

    slide2.classList.add('slider-image-4');
    slide2.classList.remove('slider-image-2');

    slide3.classList.add('slider-image-5');
    slide3.classList.remove('slider-image-3');

    slide4.classList.add('slider-image-1');
    slide4.classList.remove('slider-image-4');

    slide5.classList.add('slider-image-2');
    slide5.classList.remove('slider-image-5');
  });

  // Slide 2
  slide2.addEventListener('click', () => {
    slide1.classList.add('slider-image-2');
    slide1.classList.remove('slider-image-1');

    slide2.classList.add('slider-image-3');
    slide2.classList.remove('slider-image-2');

    slide3.classList.add('slider-image-4');
    slide3.classList.remove('slider-image-3');

    slide4.classList.add('slider-image-5');
    slide4.classList.remove('slider-image-4');

    slide5.classList.add('slider-image-1');
    slide5.classList.remove('slider-image-5');
  });

  // Slide 4
  slide4.addEventListener('click', () => {
    slide1.classList.add('slider-image-5');
    slide1.classList.remove('slider-image-1');

    slide2.classList.add('slider-image-1');
    slide2.classList.remove('slider-image-2');

    slide3.classList.add('slider-image-2');
    slide3.classList.remove('slider-image-3');

    slide4.classList.add('slider-image-3');
    slide4.classList.remove('slider-image-4');

    slide5.classList.add('slider-image-4');
    slide5.classList.remove('slider-image-5');
  });

  // Slide 5
  slide5.addEventListener('click', () => {
    slide1.classList.add('slider-image-4');
    slide1.classList.remove('slider-image-1');

    slide2.classList.add('slider-image-5');
    slide2.classList.remove('slider-image-2');

    slide3.classList.add('slider-image-1');
    slide3.classList.remove('slider-image-3');

    slide4.classList.add('slider-image-2');
    slide4.classList.remove('slider-image-4');

    slide5.classList.add('slider-image-3');
    slide5.classList.remove('slider-image-5');
  });

  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-inner-container">
          {/* <img
            src={require('../assets/images/left-arrow.png')}
            alt="Left arrow"
            className="left-arrow"
          />
          <img
            src={require('../assets/images/right-arrow.png')}
            alt="Right arrow"
            className="right-arrow"
          /> */}
          {SliderImages.map((slide, index) => {
            return (
                <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                className={slide.className}
                link={slide.link}
                />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
