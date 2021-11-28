import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './MyWork.css';


const MyWork = () => {
    return (
        <div className="pb-5">
           <Container>
                <h2 className="text-center py-5">MY WORK OF <span style={{color: "#e04641"}}>EXPERIENCE</span></h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <Link to="/home/web">
                            <Button className="my-work-btn" style={{color: "blue"}} variant="outline-light">WEB</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/home/ui">
                            <Button className="my-work-btn" style={{color: "blue"}} variant="outline-light">UI UX</Button>
                        </Link>
                    </div>
                </div>
                <Outlet />
           </Container>
        </div>
    );
};

export default MyWork;