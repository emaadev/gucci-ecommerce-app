import { useEffect, useState } from "react";
import "../styles/Carousel.scss";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import ImageCarousel1 from "/assets/carousel-image-1.jpg";
import ImageCarousel2 from "/assets/carousel-image-2.jpg";
import ImageCarousel3 from "/assets/carousel-image-3.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [ImageCarousel1, ImageCarousel2, ImageCarousel3];

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoSlider = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlider);
  }, []);

  return (
    <div className="carousel">
      <div
        className="container"
        style={{ transform: `translateX(-${currentImage * 100}vw)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt="Carousel Image" key={index} />
        ))}
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowCircleLeftOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowCircleRightOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
