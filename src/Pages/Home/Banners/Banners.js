import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banners.css'
import banner1 from '../../../Images/Banners/banner 1.jfif'
import banner2 from '../../../Images/Banners/banner 2.jfif'
import banner3 from '../../../Images/Banners/banner 3.jfif'

const Banners = () => {
    return (
        
            
            <div className="banners">
                {/* set the img url */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Your Journey Begins</h3>
                    <p>A Journey of a 1000 miles starts with  a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Your Journey Begins</h3>
                    <p>A Journey of a 1000 miles starts with  a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Your Journey Begins</h3>
                    <p>A Journey of a 1000 miles starts with  a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
       
    );
};

export default Banners;