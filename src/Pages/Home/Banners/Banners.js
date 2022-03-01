import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banners.css'
import banner5 from '../../../Images/Banners/banner5.jpg'
import banner13 from '../../../Images/Banners/banner13.jpg'
import banner10 from '../../../Images/Banners/banner10.jpg'

const Banners = () => {
    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    return (
        
            
            <div className="banners responsive">
                {/* set the img url */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className='img-fluid'
                    src={banner5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{fontFamily: 'Segoe Print'}}>Your Journey Begins </h3>
                    <p>Take a single step</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='img-fluid'
                    src={banner13}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{fontFamily: 'Segoe Print'}}>The journey is my home</h3>
                    <p>I love to travel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    // className="d-block w-100"
                    className='img-fluid'
                    src={banner10}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{fontFamily: 'Segoe Print'}}>To travel is to live</h3>
                    <p>Travel teaches toleration</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
       
    );
};

export default Banners;