import React from "react";
import "./Carousel.css";

const Carousel = ({ imageSet }) => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="slideshow">
          {imageSet.images.map((img, i) => (
            <div key={`slide-${i + 1}`} id={`slide-${i + 1}`} className="slide">
              <a href={`#slide-${i == 0 ? imageSet.images.length : i}`} />
              <a
                href={`#slide-${i + 1 == imageSet.images.length ? 1 : i + 2}`}
              />
              <img src={`${imageSet.path}/${img}`} />
            </div>
          ))}
        </div>
        <div className="pagination">
          {imageSet.images.map((img, i) => (
            <a href={`#slide-${i + 1}`}>
              <span>{i + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
