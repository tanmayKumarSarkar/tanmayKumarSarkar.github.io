import React from "react";
import "./Carousel.css";

const Carousel = ({ imageSet }) => {
  return (
    <div>
      <div className="center">
        <div className="carousel-wrapper">
          {/* abstract radio buttons for slides */}

          {imageSet.images.map((img, i) => (
            <input
              key={`imput-${img}-${i}`}
              id={`slide${i}`}
              type="radio"
              name="controls"
              defaultChecked={i == 0 ? "checked" : ""}
            />
          ))}
          {/* <input
            id="slide1"
            type="radio"
            name="controls"
            defaultChecked="checked"
          /> */}
          {/* <input id="slide2" type="radio" name="controls" />
          <input id="slide3" type="radio" name="controls" />
          <input id="slide4" type="radio" name="controls" />
          <input id="slide5" type="radio" name="controls" /> */}
          {/* navigation dots */}
          {imageSet.images.map((img, i) => (
            <label
              key={`label-nav-dot-${img}-${i}`}
              htmlFor={`slide${i}`}
              className="nav-dot"
            />
            // <input
            //   key={`label-nav-dot-${img}-${i}`}
            //   id={`slide${i}`}
            //   type="radio"
            //   name="controls"
            //   defaultChecked={i == 0 ? "checked" : ""}
            // />
          ))}
          {/* <label htmlFor="slide1" className="nav-dot" />
          <label htmlFor="slide2" className="nav-dot" />
          <label htmlFor="slide3" className="nav-dot" />
          <label htmlFor="slide4" className="nav-dot" />
          <label htmlFor="slide5" className="nav-dot" /> */}
          {/* arrows */}
          {imageSet.images.map((img, i) => (
            <label
              key={`label-left-arrow-${img}-${i}`}
              htmlFor={`slide${i}`}
              className="left-arrow"
            >
              {" "}
              &lt;{" "}
            </label>
          ))}
          {/* <label htmlFor="slide1" className="left-arrow">
            {" "}
            &lt;{" "}
          </label>
          <label htmlFor="slide2" className="left-arrow">
            {" "}
            &lt;{" "}
          </label>
          <label htmlFor="slide3" className="left-arrow">
            {" "}
            &lt;{" "}
          </label>
          <label htmlFor="slide4" className="left-arrow">
            {" "}
            &lt;{" "}
          </label>
          <label htmlFor="slide5" className="left-arrow">
            {" "}
            &lt;{" "}
          </label> */}
          {imageSet.images.map((img, i) => (
            <label
              key={`label-right-arrow-${img}-${i}`}
              htmlFor={`slide${i}`}
              className="right-arrow"
            >
              {" "}
              &gt;{" "}
            </label>
          ))}
          {/* <label htmlFor="slide1" className="right-arrow">
            {" "}
            &gt;{" "}
          </label>
          <label htmlFor="slide2" className="right-arrow">
            {" "}
            &gt;{" "}
          </label>
          <label htmlFor="slide3" className="right-arrow">
            {" "}
            &gt;{" "}
          </label>
          <label htmlFor="slide4" className="right-arrow">
            {" "}
            &gt;{" "}
          </label>
          <label htmlFor="slide5" className="right-arrow">
            {" "}
            &gt;{" "}
          </label> */}
          <div className="carousel">
            <ul>
              {imageSet.images.map((img, i) => (
                <li key={img}>
                  <img
                    src={`${imageSet.path}/${img}`}
                    alt=""
                    className="w-full "
                  />
                </li>
              ))}

              {/* <li>
                <img
                  src="https://m.media-amazon.com/images/I/31Y+R3Y3nvL._SL1000_.jpg"
                  alt=""
                />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
