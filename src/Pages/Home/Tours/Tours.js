import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css';

const Tours = () => {
    const [tours, settours] = useState([]);
    useEffect( () => {
        fetch('./tour.json')
        .then(res => res.json())
        .then(data => settours(data))
    } , [])
    return (
        <div id="tours">
            <div className="tours-header">
            <h3>Special Deals And last Minute <br />Amazing Offers</h3>
            </div>
            <div className="tour-container">
                {
                    tours.map(tour => <Tour key={tour.id} tour={tour}></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;