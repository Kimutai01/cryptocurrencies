import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image from '../assets/images/tether.jpg';
import rates2 from '../assets/images/main.jpg';
import rates3 from '../assets/images/coin.jpg';

const Home = () => (
  <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={image}
          className="d-block w-100"
          alt="stock"
          style={{ height: '100vh' }}
        />
        <Carousel.Caption>
          <h3>Check popular stocks of varios companies 💯</h3>
          <p>
            We provide accurate stocks of various companies all over the world.
          </p>
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
          <h3>Check Gainers and losers 😇</h3>
          <p>Avoid losses by checking out the gainers and losers of the day.</p>
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
          <h3>Get accurate data of all stocks👌</h3>
          <p>We provide all stocks data</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;
