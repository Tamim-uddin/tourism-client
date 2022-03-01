import { Grid } from '@mui/material';
import React from 'react';
import './Footers.css';

const Footers = () => {
    return (
        <Grid container spacing={2} className="footer" sx={{mt: '150px'}}>
            {/* footer details */}
            <Grid item xs={12} sm={6} md={4}>
                <h3>About Us</h3>
                <p>Tourism security is a subdiscipline of tourist studies that explores the factors that affect the ontological security of tourists. Risks are evaluated by their impact and nature.</p>
                <p>3079 west sahara avenue. suite 362 las vegas nv 88735</p>
                <p>support@linethemes.com</p>
                <p>01 800 688 8688</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h3>Links</h3>
                <p>Destinations</p>
                <p>Tours</p>
                <p>Contact</p>
                <p>respite care</p>
                <p>Faq's</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <h3>Company</h3>
                <p>Rewards</p>
                <p>Locations</p>
                <p>Community blog</p>
                <p>Work With Us</p>
                <p>contact us</p>
            </Grid>
        </Grid>
    );
};

export default Footers;