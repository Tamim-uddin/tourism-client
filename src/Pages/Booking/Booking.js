import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams(); 
    return (
        <div>
           <h3>this is from booking {id}</h3> 
        </div>
    );
};

export default Booking;