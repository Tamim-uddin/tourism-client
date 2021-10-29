import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    // console.log(props);
    const {id, name, img, des, price} = props.tour;
    
    return (
        <div className="tour">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>{des}</p>
            <div className="tour-last">
                <p>${price}</p>
               <Link to={`/bokking/${id}`}> <button className="tour-btn">Bokking</button></Link>
            </div>
        </div>
    );
};

export default Tour;