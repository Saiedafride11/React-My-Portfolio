import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Graphics from '../../Graphics/Graphics';
import MernStack from '../MernStack/MernStack';
import './AllWorks.css';

const AllWorks = () => {
    return (
        <div id="work">
            <Container>
                <h2 className="text-center" style={{paddingTop: "5rem"}}>WELCOME IN THE <span style={{color: "#e04641"}}>WORK PROJECT</span></h2>
                <p className="text-center py-2">I Have 2 Years Experience On Web Development .In This Time Will <br/> Build Many Excellent Project .I Will Try To Maintain Standard Coding <br/> Style.I Will Try To Follow Fully Responsiveness.</p>
                <div className="text-center">
                    <Button className="btn-work" variant="outline-light">Let's go</Button>
                </div>
                <div className="pt-5">
                    <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", width: "370px"}}>Graphics And UI UX Design</h3>
                    <Graphics></Graphics>
                </div>
                <div className="pt-5">
                    <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", width: "280px"}}>MERN Stack Project</h3>
                    <MernStack></MernStack>
                </div>
                <div className="pt-5">
                    <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", width: "280px"}}>React Project </h3>
                    <MernStack></MernStack>
                </div>
                <div className="pt-5">
                    <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", width: "280px"}}>Javascript Project</h3>
                    <MernStack></MernStack>
                </div>
            </Container>
        </div>
    );
};

export default AllWorks;