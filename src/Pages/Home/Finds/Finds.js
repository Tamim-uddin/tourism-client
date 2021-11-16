import React from 'react';
import './Finds.css';

const Finds = () => {
    return (
        <div style={{backgroundColor: '#01a2a6', marginTop: 50 }}>
            <h2 style={{color: 'white'}}>Find Us</h2>
            <div className="finds">
                <h4>Where to?</h4>
                <h4>Month</h4>
                <h4>Travel Type</h4>
                <button>Find Now</button>
            </div>
        </div>
    );
};

export default Finds;