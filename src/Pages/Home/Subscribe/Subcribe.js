import React from 'react';
import './Subcribe.css';

const Subcribe = () => {
    return (
        <div className="subcribe">
            <h3 className="sub-hed">Subscribe To The Newsletter</h3>
            <input type="email" placeholder="Your Email.."/><br />
            <button className="sub-btn">Subscribe</button>
        </div>
    );
};

export default Subcribe;