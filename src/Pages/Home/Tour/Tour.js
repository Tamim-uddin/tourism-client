import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';


const Tour = (props) => {
    // console.log(props);
    const {name, img, price, _id} = props.tour;

    
    return (
        <Grid item xs={12} sm={6} md={4}>
    
 
        <div className="container">
            <img src={img} alt="" className="image" />
                <div className="overlay">
                    <div className="text">
                        <h3>{name}</h3>
                        
                            {/* <div className="tour-last"> */}
                                    <p>${price}</p>
                                <Link to={`/bokking/${_id}`}> <button className="tour-btn">Details</button></Link>
                            {/* </div> */}
                    </div>
                 </div>
        </div>
        </Grid>
    );
};

export default Tour;