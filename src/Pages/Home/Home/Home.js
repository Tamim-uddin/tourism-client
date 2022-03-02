import React from 'react';
import Banners from '../Banners/Banners';
import Finds from '../Finds/Finds';
import Subcribe from '../Subscribe/Subcribe';
import Tours from '../Tours/Tours';
import bg from '../../../Images/background/bg3.png';
import Header from '../../Header/Header';
import Footers from '../../Footers/Footers';
import Aboutus from '../Aboutus/Aboutus';
import Addreviews from '../../Addreviews/Addreviews';
import Reviews from '../../Reviews/Reviews';

const homebg = {
    background: `url(${bg})`
}

const Home = () => {
    return (
        <div id="home" style={homebg}>
             <Header></Header>
            <Banners></Banners>
            <Finds></Finds>
            <Tours></Tours>
            <Subcribe></Subcribe>
            <Aboutus></Aboutus>
            <Reviews></Reviews>
            <Footers></Footers>
            
        </div>
    );
};

export default Home;