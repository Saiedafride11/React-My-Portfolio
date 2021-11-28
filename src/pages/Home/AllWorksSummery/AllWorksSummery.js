import React from 'react';
import { Button, Nav } from "react-bootstrap";
import { Parallax } from "react-parallax";
import './AllWorksSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};




const mernStacks = [
    {
        "id": "01",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Volunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "02",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Polunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "03",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Dolunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "04",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Solunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    }
]

const AllWorksSummery = () => {
    return (
        <>  
            <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", width: "280px"}}>MERN Stack Project</h3>
            <div className="mern-stack-container m-2">
                {
                    mernStacks?.map(mernStack => <div key={mernStack.id} className="mern-stack-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{mernStack.id}.</span>{mernStack.title}</h4>
                        <div style={styles}>
                            <Parallax bgImage={mernStack.img} strength={500}>
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="mern-stack-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="mern-stack-paragraph">{mernStack.description}</p>
                                <div className="py-3">
                                    <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                                    {
                                    mernStack?.languages?.map( (language, i) => <Button className="btn btn-experience-work" key={i}>{language}</Button>)
                                    }
                                </div>
                                <Nav className="py-3">
                                    <Nav.Link href={mernStack.live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Clint </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeServer} target="_blank"><span style={{color: "#e04641"}}>Code Server </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <h3 className="text-center mx-auto mt-5" style={{borderLeft: "4px solid #e04641", width: "280px"}}>React Project </h3>
            <div className="mern-stack-container m-2">
                {
                    mernStacks?.map(mernStack => <div key={mernStack.id} className="mern-stack-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{mernStack.id}.</span>{mernStack.title}</h4>
                        <div style={styles}>
                            <Parallax bgImage={mernStack.img} strength={500}>
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="mern-stack-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="mern-stack-paragraph">{mernStack.description}</p>
                                <div className="py-3">
                                    <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                                    {
                                    mernStack?.languages?.map( (language, i) => <Button className="btn btn-experience-work" key={i}>{language}</Button>)
                                    }
                                </div>
                                <Nav className="py-3">
                                    <Nav.Link href={mernStack.live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Clint </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeServer} target="_blank"><span style={{color: "#e04641"}}>Code Server </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <h3 className="text-center mx-auto mt-5" style={{borderLeft: "4px solid #e04641", width: "280px"}}>Javascript Project</h3>
            <div className="mern-stack-container m-2">
                {
                    mernStacks?.map(mernStack => <div key={mernStack.id} className="mern-stack-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{mernStack.id}.</span>{mernStack.title}</h4>
                        <div style={styles}>
                            <Parallax bgImage={mernStack.img} strength={500}>
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="mern-stack-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="mern-stack-paragraph">{mernStack.description}</p>
                                <div className="py-3">
                                    <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                                    {
                                    mernStack?.languages?.map( (language, i) => <Button className="btn btn-experience-work" key={i}>{language}</Button>)
                                    }
                                </div>
                                <Nav className="py-3">
                                    <Nav.Link href={mernStack.live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Clint </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={mernStack.codeServer} target="_blank"><span style={{color: "#e04641"}}>Code Server </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                                </Nav>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default AllWorksSummery;