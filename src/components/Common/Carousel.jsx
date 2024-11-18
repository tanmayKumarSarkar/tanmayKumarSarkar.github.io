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
    <div className="flex flex-col items-center justify-center">
      <section className="slider min-h-[25vh] md:min-h-[50vh] lg:min-h-[80vh] w-[100%] md:w-[90%]">
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
                  className="image portrait:max-h-[80vh] landscape:max-h-[60vh]"
                  title={slide}
                />
              )}
            </div>
          );
        })}
      </section>
      <div className="mt-4">{imageSet?.images[current]?.split(".")[0]}</div>
    </div>
  );
};

export default Carousel;
