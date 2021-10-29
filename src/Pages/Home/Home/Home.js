import React from 'react';
import Banners from '../Banners/Banners';

import Finds from '../Finds/Finds';
import Subcribe from '../Subscribe/Subcribe';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <h3>this is from home</h3>
            <Banners></Banners>
            <Finds></Finds>
            <Tours></Tours>
            <Subcribe></Subcribe>

        </div>
    );
};

export default Home;