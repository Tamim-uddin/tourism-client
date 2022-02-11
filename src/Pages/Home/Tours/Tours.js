import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Typography } from '@mui/material';
import Tour from '../Tour/Tour';
import './Tours.css';


// set the tourism place
const Tours = () => {
    const [tours, settours] = useState([]);
    useEffect( () => {
        fetch('https://limitless-chamber-81508.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => settours(data))
    } , [])
    return (
        <div>
            <div className='container-header'>
            <Typography className='container-mider'  variant="h3" gutterBottom component="div" sx={{textAlign: 'left', fontFamily: 'Montserrat,sans-serif', color: '#303030', fontWeight: '500'}}>
            Choose The
            <span style={{color: '#000', fontWeight: '900', fontFamily: 'Montserrat,sans-serif', fontSize: '50px'}}> Destination <br />Just Right </span> 
            For Your <br /> Vacation
            </Typography>
            </div>
            
            <Grid container spacing={1}>
  
                {
                    tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
                }
  
  
            </Grid>
                
           
        </div>
    );
};

export default Tours;