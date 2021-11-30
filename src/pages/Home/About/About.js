import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faBehanceSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faComments, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import './About.css';
import { HashLink } from 'react-router-hash-link';
import ScrollToTop from "react-scroll-to-top";

const About = () => {
    return (
        <div className="bg-dark about-container py-5" id="about">
            <Container>
                <h2 className="text-center py-5"><span style={{color: "#fff"}}>ABOUT</span> <span style={{color: "#e04641"}}>ME</span></h2>
                <div className="about-me text-center">
                    <img className="rounded-circle img-fluid" src="https://i.ibb.co/0MRwsVG/afride.jpg" alt="" />
                </div>
                <Nav className="icon-bar py-3">
                    <Nav.Link href="https://github.com/Saiedafride11" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                    <Nav.Link href="https://www.behance.net/saiedafride11" target="_blank"><FontAwesomeIcon icon={faBehanceSquare} /></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    <Nav.Link href="https://www.youtube.com/softzeo" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} /></Nav.Link>
                </Nav>
                <div className="about-details">
                    <p className="text-light">Hello,
                        I am Afride from Bangladesh.
                        I have 2 years experience in mern stack development. Also 4 years of experience in graphics and ui ux design.
                        Are you looking for a fresh, creative, unique, professional,
                        clean and simple work for your company, Blog, website, Business, and Apps???
                        So, You are right to come place.

                        Looking forward to working with you.
                        If You Need any Web Design, Web Development, Apps, UI UX and Graphic Design Related Project, Please Contact Me.

                        Thank You...
                    </p>
                    <Nav className="d-flex align-items-center justify-content-center py-5">
                        <Nav.Link as={HashLink} to="/contact#contact"><Button className="btn-about"><FontAwesomeIcon icon={faComments} /> Talk with me</Button></Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1L7g-vd7LnA8kDiQiBxP2cD4ezzN5uFpP/view" target="_blank"><Button className="btn-about"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume</Button></Nav.Link>
                    </Nav>
                </div>
            </Container>
            <div>
                <ScrollToTop smooth />
            </div>
        </div>
    );
};

export default About;




// npm i react-scroll-to-top