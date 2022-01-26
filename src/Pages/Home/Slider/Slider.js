import React from "react";
import { Carousel } from "react-bootstrap";
import s1 from '../../../images/slider/s1.jpg';
import s2 from '../../../images/slider/s2.jpg';
import s3 from '../../../images/slider/s3.jpg';

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "100%", width: "100%" }}
            className="d-block w-100"
            src={s1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
