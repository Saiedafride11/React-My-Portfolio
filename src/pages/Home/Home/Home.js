import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Do from '../Do/Do';
import Mentor from '../Mentor/Mentor';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skill/>
            <Do/>
            <Mentor/>
            <About/>
        </div>
    );
};

export default Home;