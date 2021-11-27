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

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


const MyWorkDetails = () => {
    return (
        <div>
            <div className="myWork-details-container">
                <div style={styles}>
                    <Parallax bgImage={image1} strength={500}>
                        <div style={{ height: 500 }}></div>
                    </Parallax>
                </div>
                <div className="myWork-details">
                    <div>
                        <h2 className="mt-2"><span style={{color: "#e04641"}}>01.</span>Volunteer Network</h2>
                        <p className="my-work-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!</p>
                        <div className="py-3">
                            <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                            <Button className="btn btn-experience-work">Html</Button>
                            <Button className="btn btn-experience-work">Css</Button>
                            <Button className="btn btn-experience-work">Javascript</Button>
                            <Button className="btn btn-experience-work">React Js</Button>
                        </div>
                        <Nav className="py-3">
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="myWork-details-container">
                <div style={styles}>
                    <Parallax bgImage={image2} strength={500}>
                        <div style={{ height: 500 }}></div>
                    </Parallax>
                </div>
                <div className="myWork-details">
                    <div>
                        <h2 className="mt-2"><span style={{color: "#e04641"}}>01.</span>Volunteer Network</h2>
                        <p className="my-work-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!</p>
                        <div className="py-3">
                            <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                            <Button className="btn btn-experience-work">Html</Button>
                            <Button className="btn btn-experience-work">Css</Button>
                            <Button className="btn btn-experience-work">Javascript</Button>
                            <Button className="btn btn-experience-work">React Js</Button>
                        </div>
                        <Nav className="py-3">
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="myWork-details-container">
                <div style={styles}>
                    <Parallax bgImage={image3} strength={500}>
                        <div style={{ height: 500 }}></div>
                    </Parallax>
                </div>
                <div className="myWork-details">
                    <div>
                        <h2 className="mt-2"><span style={{color: "#e04641"}}>01.</span>Volunteer Network</h2>
                        <p className="my-work-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!</p>
                        <div className="py-3">
                            <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                            <Button className="btn btn-experience-work">Html</Button>
                            <Button className="btn btn-experience-work">Css</Button>
                            <Button className="btn btn-experience-work">Javascript</Button>
                            <Button className="btn btn-experience-work">React Js</Button>
                        </div>
                        <Nav className="py-3">
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
            <div className="myWork-details-container">
                <div style={styles}>
                    <Parallax bgImage={image4} strength={500}>
                        <div style={{ height: 500 }}></div>
                    </Parallax>
                </div>
                <div className="myWork-details">
                    <div>
                        <h2 className="mt-2"><span style={{color: "#e04641"}}>01.</span>Volunteer Network</h2>
                        <p className="my-work-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!</p>
                        <div className="py-3">
                            <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                            <Button className="btn btn-experience-work">Html</Button>
                            <Button className="btn btn-experience-work">Css</Button>
                            <Button className="btn btn-experience-work">Javascript</Button>
                            <Button className="btn btn-experience-work">React Js</Button>
                        </div>
                        <Nav className="py-3">
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                            <Nav.Link href="https://github.com/Saiedafride" target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorkDetails;




// npm i react-parallax@3.1.1