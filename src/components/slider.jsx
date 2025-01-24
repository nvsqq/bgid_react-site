import React, { useState, useEffect, useRef } from 'react';
import '../styles/slider.scss';

function Slider() {
  const slides = [
    'https://raw.githubusercontent.com/nvsqq/Bgid/refs/heads/main/assets/img/%D1%86%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C.jfif',
    'https://github.com/nvsqq/Bgid/blob/main/assets/img/%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8F.jpg?raw=true',
    'https://github.com/nvsqq/Bgid/blob/main/assets/img/%D1%87%D1%82%D0%BE%20%D0%B7%D0%B0%20%D1%82%D0%B8%D0%B3%D1%80%20%D1%8D%D1%82%D0%BE%D1%82%20%D0%BB%D0%B5%D0%B2.jpg?raw=true',
    'https://github.com/nvsqq/Bgid/blob/main/assets/img/belgorod.jpg?raw=true',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);
  const slideContainerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const startSlideShow = startSlideShow(() => {
    slideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  });

  function stopSlideShow() {
    clearInterval(slideIntervalRef.current);
  }

  useEffect(() => {
    startSlideShow();

    return () => stopSlideShow();
  }, [startSlideShow]);

  useEffect(() => {
    if (slideContainerRef.current) {
      const slideWidth = slideContainerRef.current.children[0]?.clientWidth || 0;
      slideContainerRef.current.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <section className='slider-1'>
      <div className='slider' onMouseEnter={stopSlideShow} onMouseLeave={startSlideShow}>
        <div className='slider__slides' ref={slideContainerRef}>
          {slides.map((src, index) => (
            <div className='slider__slide' key={index}>
              <img src={src} alt={`Фото ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className='slider__prev' onClick={prevSlide}>
          &#10094;
        </button>
        <button className='slider__next' onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Slider;
