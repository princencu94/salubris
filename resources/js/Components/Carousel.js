import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHero = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/hero-wellness-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-3xl">Wellness</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/random3.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3 className="text-3xl">Nutrition</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/random1.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 className="text-3xl">Fitness</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
}

export default CarouselHero;