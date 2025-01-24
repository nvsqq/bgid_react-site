import React, { useState, useEffect, useCallback } from 'react';

function SliderAttraction({ images }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let sliderInterval;

    const autoSwitchSlide = () => {
      const slider = document.getElementById('slider');
      const slides = slider.querySelector('.Attraction-slider__slides');
      const slideWidth = slider.querySelector('.Attraction-slider__slide').offsetWidth;

      slides.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      });

      if (slides.scrollLeft + slideWidth >= slides.scrollWidth) {
        slides.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    const startAutoSlider = () => {
      if (!sliderInterval) {
        sliderInterval = setInterval(() => {
          if (!isMouseOverSlider && !modalOpen) {
            autoSwitchSlide();
          }
        }, 3000);
      }
    };

    const stopAutoSlider = () => {
      if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
      }
    };

    startAutoSlider();

    return () => stopAutoSlider();
  }, [isMouseOverSlider, modalOpen, images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;

      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, nextImage, prevImage]);

  return (
    <>
      <div
        className='Attraction-slider'
        id='slider'
        onMouseEnter={() => setIsMouseOverSlider(true)}
        onMouseLeave={() => setIsMouseOverSlider(false)}
      >
        <div className='Attraction-slider__slides'>
          {images.map((img, index) => (
            <div key={index} className='Attraction-slider__slide'>
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className='slider-img'
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className='Attraction-modal' style={{ display: 'flex' }}>
          <div className='Attraction__modal-content'>
            <img src={images[currentImageIndex]} alt={`slide-${currentImageIndex + 1}`} />
            <button className='prev-modal' onClick={prevImage}>
              ❮
            </button>
            <button className='next-modal' onClick={nextImage}>
              ❯
            </button>
            <button className='close' onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SliderAttraction;
