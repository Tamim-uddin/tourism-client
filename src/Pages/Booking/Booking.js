import React from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { id } = useParams(); 
    return (
        <div className="booking">
           <h3>this is from booking {id}</h3> 
        </div>
    );
};

export default Booking;