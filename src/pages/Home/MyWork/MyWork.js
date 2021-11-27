import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyWorkDetails from '../MyWorkDetails/MyWorkDetails';
import './MyWork.css';

const MyWork = () => {
    return (
        <div className="py-5">
           <Container>
                <h2 className="text-center py-5">MY WORK OF <span style={{color: "#e04641"}}>EXPERIENCE</span></h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <Link to="">
                            <Button className="my-work-btn" style={{color: "blue"}}>Recent</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="">
                            <Button className="my-work-btn" style={{color: "#e04641"}}>Best</Button>
                        </Link>
                    </div>
                </div>

                <div className="py-5">
                    <MyWorkDetails></MyWorkDetails>
                </div>
           </Container>
        </div>
    );
};

export default MyWork;