import React from 'react';
import './Subcribe.css';

const Subcribe = () => {
    return (
        <div style={{backgroundColor: '#01a2a6', marginTop: 50 }}>
            <h2 style={{color: 'white'}}>Subscribe Us</h2>
            <div className="subcribe">
            <h3 className="sub-hed">Subscribe To The Newsletter</h3>
            <input type="email" placeholder="Your Email.."/><br />
            <button className="sub-btn">Subscribe</button>
            </div>

        </div>
    );
};

export default Subcribe;