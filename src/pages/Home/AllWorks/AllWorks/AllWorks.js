import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../../Shared/Header/Header';
import About from '../../About/About';
import AllWorksSummery from '../../AllWorksSummery/AllWorksSummery';
import Graphics from '../../Graphics/Graphics';
import './AllWorks.css';

const AllWorks = () => {
    return (
        <>
            <Header></Header>
            <div id="work">
                <Container>
                    <h2 className="text-center" style={{paddingTop: "5rem"}}>WELCOME IN THE <span style={{color: "#e04641"}}>WORK PROJECT</span></h2>
                    <p className="text-center py-2">I Have 2 Years Experience On Web Development .In This Time Will <br/> Build Many Excellent Project .I Will Try To Maintain Standard Coding <br/> Style.I Will Try To Follow Fully Responsiveness.</p>
                    <div className="text-center">
                        <Button className="btn-work" variant="outline-light">Let's go</Button>
                    </div>
                    <div>
                        <Graphics></Graphics>
                    </div>
                    <div className="pt-5">
                        <AllWorksSummery></AllWorksSummery>
                    </div>
                </Container>
                <div className="mt-5">
                    <About></About>
                </div>
            </div>
        </>
    );
};

export default AllWorks;