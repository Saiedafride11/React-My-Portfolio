import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Do from '../Do/Do';
import Mentor from '../Mentor/Mentor';
import MyWork from '../MyWork/MyWork';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skill/>
            <Do/>
            <MyWork/>
            <Mentor/>
            <About/>
        </div>
    );
};

export default Home;