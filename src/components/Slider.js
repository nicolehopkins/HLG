import React from 'react';
import '../styling/Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import probate from '../images/probate.jpg';
import wills from '../images/wills.jpg';
import realEstate from '../images/realEstate.jpg';

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={wills} alt="First slide" />
          <Carousel.Caption style={{color: 'black'}}>
            <h1>Wills, Trusts and Estate Planning</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={probate} alt="Third slide" />
          <Carousel.Caption style={{color: 'black'}}>
            <h1 >Probate</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={realEstate} alt="Third slide" />
          <Carousel.Caption style={{color: 'black'}}>
            <h1>Real Estate</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider;