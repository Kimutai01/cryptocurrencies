import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image from '../assets/images/pink1.jpg';
import rates2 from '../assets/images/pink2.jpg';
import rates3 from '../assets/images/pink3.jpg';

const Home = () => (
  <div style={{ overflow: 'none' }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={image}
          className="d-block w-100"
          alt="stock"
          style={{ height: '100vh' }}
        />
        <Carousel.Caption>
          <h3>Check accurate coin data 💯</h3>
          <p>We provide accurate coin data all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={rates2}
          alt="stock2"
          className="d-block w-100"
          style={{ height: '100vh' }}
        />
        <Carousel.Caption>
          <h3>Check data of all coins 😇</h3>
          <p>We provide data about all coins</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={rates3}
          alt="stock4"
          className="d-block w-100"
          style={{ height: '100vh' }}
        />
        <Carousel.Caption>
          <h3>We record changes every minute👌</h3>
          <p>We provide all crypto changes every minute</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;
