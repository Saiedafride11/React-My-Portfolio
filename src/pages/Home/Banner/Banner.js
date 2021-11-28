import React from 'react';
import { Button } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import Particles, { ClickMode, HoverMode, InteractivityDetect, MoveDirection, OutMode, MoveType as PolygonMaskMoveType,
    ShapeType, InlineArrangement as PolygonMaskInlineArrangement, Type as PolygonMaskType } from 'react-particles-js';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="text-center banner-container">

            <div className="banner-animation">
                <div className="banner-animation">
                    <Particles 
                        params={{
                                particles: {
                                    line_linked: {
                                        shadow: {
                                            enable: true,
                                            color: "#3CA9D1",
                                            blur: 5
                                        }
                                    }
                                },
                                shape: {
                                    type: ShapeType.circle,
                                    polygon: {
                                        sides: 5
                                    },
                                    image: {
                                        src: "",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: true,
                                        speed: 1,
                                        minimumValue: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 1,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        minimumValue: 0,
                                        sync: false
                                    }
                                },
                                links: {
                                    enable: true,
                                    distance: 150,
                                    color: "#FFF",
                                    opacity: 0.6,
                                    width: 1,
                                    shadow: {
                                        enable: false,
                                        blur: 5,
                                        color: "lime"
                                    }
                                },
                                move: {
                                    enable: true,
                                    speed: 3,
                                    direction: MoveDirection.none,
                                    random: false,
                                    straight: false,
                                    outMode: OutMode.bounce,
                                    bounce: true,
                                    attract: {
                                        enable: false,
                                        rotateX: 3000,
                                        rotateY: 3000
                                    }
                                },
                                interactivity: {
                                    detectsOn: InteractivityDetect.canvas,
                                    events: {
                                        onHover: {
                                            enable: false,
                                            mode: HoverMode.grab
                                        },
                                        onClick: {
                                            enable: false,
                                            mode: ClickMode.repulse
                                        },
                                        resize: true
                                    },
                                    modes: {
                                        grab: {
                                            distance: 180,
                                            links: {
                                                opacity: 0.35
                                            }
                                        },
                                        bubble: {
                                            distance: 200,
                                            size: 80,
                                            duration: 0.4
                                        },
                                        repulse: {
                                            distance: 100,
                                            duration: 5
                                        },
                                        push: {
                                            quantity: 4
                                        },
                                        remove: {
                                            quantity: 2
                                        }
                                    }
                                },
                                detectRetina: true,
                                fpsLimit: 999,
                                polygon: {
                                    enable: false,
                                    scale: 1,
                                    type: PolygonMaskType.inline,
                                    inline: {
                                        arrangement: PolygonMaskInlineArrangement.onePerPoint
                                    },
                                    draw: {
                                        enable: false,
                                        stroke: {
                                            width: 0.5,
                                            color: "rgba(255, 255, 255, .1)"
                                        }
                                    },
                                    move: {
                                        radius: 10,
                                        type: PolygonMaskMoveType.path
                                    },
                                    url: ""
                                }
                            }}
                        />
                </div>
             <div className="banner-content text-white">
                <h1>I Am <span style={{color: "#e04641"}}>Saied Afride</span></h1>
                <h2>
                    <ReactTypingEffect speed='50' eraseSpeed='50' typingDelay='500' eraseDelay='3000'
                        text={["Web Developer", "Mern Stack Developer", "Font End Developer"]}
                    />
                </h2>
                <br />
                <Button className="btn-cv" variant="outline-light">Hire Me</Button>

                <div className="outer-limit mt-5">
                    <Link to="/contact">
                        <div className="inner">
                            <div className="sign"></div>
                        </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;


// npm install react-particles-js --force

// npm install --save react-typing-effect
// speed='50' eraseSpeed='50' typingDelay='500' eraseDelay='3000'