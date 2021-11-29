import React from 'react';
import { Button } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-particles-js"
import particlesConfig from "./particlesConfig";
import './Banner.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development';

const Banner = () => {
    return (
        <div className="text-center banner-container">

            <div className="banner-animation">
                <div>
                    <Particles params={particlesConfig}></Particles>
                </div>
                <div className="banner-content text-white">
                    <h1>I Am <span style={{color: "#e04641"}}>Saied Afride</span></h1>
                    <h2>
                        <ReactTypingEffect speed='50' eraseSpeed='50' typingDelay='500' eraseDelay='3000'
                            text={["Web Developer", "Mern Stack Developer", "Font End Developer"]}
                        />
                    </h2>
                    <br />
                    
                    <Link to="/contact">
                        <Button className="btn-banner" variant="outline-light">Hire Me</Button>
                    </Link>

                    <div className="outer-limit mt-5">
                        <HashLink to="/home#about">
                            <div className="inner">
                                <div className="sign"></div>
                            </div>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


// npm install react-particles-js --force
// https://vincentgarreau.com/particles.js/#nasa
// https://csvjson.com/json_beautifier

// npm install --save react-typing-effect
// speed='50' eraseSpeed='50' typingDelay='500' eraseDelay='3000'