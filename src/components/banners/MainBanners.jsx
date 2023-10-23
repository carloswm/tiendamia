import React, { useState, useEffect } from 'react';
import '../../css/banners.css';
import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

const MainBanners = () => {
  const images = [
    '/img/banners/banner1.webp',
    '/img/banners/banner2.webp',
    '/img/banners/banner3.webp',
    '/img/banners/banner4.webp',
    '/img/banners/banner5.webp',
    '/img/banners/banner6.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const autoChangeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(autoChangeImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="main-banners">
      <div className="banner-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`banner ${index === currentImageIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Banner ${index}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev-button" onClick={goToPreviousSlide}>
          <img src={arrowLeft} alt="" />
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBanners;