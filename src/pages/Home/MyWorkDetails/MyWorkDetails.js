import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Parallax } from "react-parallax";
import './MyWorkDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};



const MyWorkDetails = (props) => {
    const {id, img, title, description, live, codeClient, codeServer} = props.work
    return (
        <div className="myWork-details-container">
            <div style={styles}>
                <Parallax bgImage={img} strength={500}>
                    <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                </Parallax>
            </div>
            <div className="myWork-details">
                <div>
                    <h2 className="mt-2"><span style={{color: "#e04641"}}>{id}.</span>{title}</h2>
                    <p className="my-work-paragraph">{description}</p>
                    <div className="py-3">
                        <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                        <Button className="btn btn-experience-work">Html</Button>
                        <Button className="btn btn-experience-work">Css</Button>
                        <Button className="btn btn-experience-work">Javascript</Button>
                        <Button className="btn btn-experience-work">React Js</Button>
                    </div>
                    <Nav className="py-3">
                        <Nav.Link href={live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                        <Nav.Link href={codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Clint </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                        <Nav.Link href={codeServer} target="_blank"><span style={{color: "#e04641"}}>Code Server </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    );
};

export default MyWorkDetails;




// npm i react-parallax@3.1.1