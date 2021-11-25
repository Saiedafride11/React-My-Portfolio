import React from 'react';
import { Container } from 'react-bootstrap';
import './Skill.css'

const Skill = () => {
    return (
        <Container className="py-5">
            <h2 className="py-5 text-center">ABOUT MY <span style={{color: "#e04641"}}>SKILLS</span></h2>
            <div className="skill-container">
                <div className="skills-wrapper">
                    <h5 class="title-sub " style={{color : 'darkgrey'}}>Font End Development</h5>
                    <div className="progress-title">
                        <span style={{backgroundColor: '#e6e2d3'}}></span>
                        <div>
                            hi
                        </div>
                        <p>React Js</p>
                    </div>
                </div>
                <div className="skills-wrapper">
                    <h5 class="title-sub " style={{color : 'darkgrey'}}>BACK END DEVELOPMENT</h5>
                    <div className="progress-title">
                        <span style={{backgroundColor: '#deeaee'}}></span>
                        <div>
                            hi
                        </div>
                        <p>Node Js</p>
                    </div>
                </div>
                <div className="skills-wrapper">
                    <h5 class="title-sub " style={{color : 'darkgrey'}}>TOOLS</h5>
                    <div className="progress-title">
                        <span style={{backgroundColor: '#e6e2d3'}}></span>
                        <div>
                            hi
                        </div>
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skill;