import React from 'react';
import Banners from '../Banners/Banners';
import Finds from '../Finds/Finds';
import Subcribe from '../Subscribe/Subcribe';
import Tours from '../Tours/Tours';
import bg from '../../../Images/background/bg3.png';

const homebg = {
    background: `url(${bg})`
}

const Home = () => {
    return (
        <div id="home" style={homebg}>
            
            <Banners></Banners>
            <Finds></Finds>
            <Tours></Tours>
            <Subcribe></Subcribe>
            
        </div>
    );
};

export default Home;