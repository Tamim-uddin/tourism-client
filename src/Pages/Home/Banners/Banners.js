import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banners.css'
import banner5 from '../../../Images/Banners/banner5.jpg'
import banner12 from '../../../Images/Banners/banner12.jpg'
import banner9 from '../../../Images/Banners/banner9.jpg'

const Banners = () => {
    return (
        
            
            <div className="banners">
                {/* set the img url */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{fontFamily: 'Segoe Print'}}>Your Journey Begins </h3>
                    <p>A Journey of a 1000 miles starts with  a single step</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner12}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{fontFamily: 'Segoe Print'}}>The journey is my home</h3>
                    <p>I love to travel, but hate to arrive </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner9}
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