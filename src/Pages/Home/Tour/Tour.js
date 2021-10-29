import React from 'react';
import './Tour.css';

const Tour = (props) => {
    // console.log(props);
    const {id, name, img, des, price} = props.tour;
    
    return (
        <div className="tour">
            <img src={img}/>
            <h3>{name}</h3>
            <p>{des}</p>
            <div className="tour-last">
                <p>${price}</p>
                <button>Bokking</button>
            </div>
        </div>
    );
};

export default Tour;