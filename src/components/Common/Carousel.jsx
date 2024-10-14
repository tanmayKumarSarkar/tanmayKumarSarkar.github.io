import React, { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ imageSet }) => {
  const [current, setCurrent] = useState(0);
  const length = imageSet.images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imageSet.images) || imageSet.images.length <= 0) {
    return null;
  }
  return (
    <div className="">
      <section className="slider min-h-[25vh] md:min-h-[50vh] lg:min-h-[85vh]">
        <FaChevronCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaChevronCircleRight className="right-arrow" onClick={nextSlide} />
        {imageSet.images.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={`${imageSet.path}/${slide}`}
                  alt={slide}
                  className="image"
                  title={slide}
                />
              )}
            </div>
          );
        })}
      </section>
      <div>{imageSet.images[current].split(".")[0]}</div>
    </div>
  );
};

export default Carousel;
