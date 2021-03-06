import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHero = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/220244_3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-3xl">Wellness</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/220244_2.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3 className="text-3xl">Nutrition</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/220244_.jpg"
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