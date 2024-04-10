import React, { useEffect, useRef, useState } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import './mainSlider.styles.scss';


const MainSlider = ( {slides} ) => {
    //creating the functionality of the Slider
    //the intial state & function
    const [current, setCurrent] = useState(0);
    //for checking the length of our images in the slides
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => ( current === length - 1 ? 0 : current + 1));
        }

        timeout.current= setTimeout(nextSlide, 8000); // run the nextSlide function every 8 second
        
        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    }, [current, length]);
 

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    //if there is no array or no data in the array, return null
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
      <section className="heroSection">
          <div className="heroWrapper">
              {slides.map((slide, index) => {
                  return(
                      <div className="heroSlide" key={index}>
                          {index === current && (
                            <div className="heroSlider">
                                <img className="heroImage" src={slide.image} alt={slide.alt}/>
                                <div className="heroContent">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.subTitle}</p>
                                </div>
                            </div>
                          )}
                      </div>
                  )
              })}
              <div className="sliderButtons">
                <IoArrowBack className="arrowButtons" onClick={prevSlide}/>
                <IoArrowForward className="arrowButtons" onClick={nextSlide}/>
              </div>
          </div>
      </section>
    );
  }
  
  export default MainSlider;
