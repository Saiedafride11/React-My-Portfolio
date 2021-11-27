import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';
import About from '../Home/About/About';

const Contact = () => {
    document.title = 'Contact Us';
    return (
        <>
            <Container>
                <div className="contact-container" id="contact">
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>ITS PLEASURE FOR <span style={{color: "#e04641"}}>ME</span></h2>
                            <Nav className="mx-auto contact-nav">
                                <Nav.Link href="https://github.com/Saiedafride" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                                <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                                <Nav.Link href="https://www.instagram.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                            </Nav>
                            <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Unde Veritatis Odit Quis Impedit Accusamus Doloremque? Quibusdam Dolorum Minus Iure Dolores!</p>
                        </div>
                    </div>
                    <div className="contact py-3">
                        <form className="row g-3 p-5">
                            <div className="col-md-12">
                                <label htmlFor="fName" className="form-label">First Name</label>
                                <input type="text" placeholder="First Name..." className="form-control" id="fName"/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" placeholder="Email..." className="form-control" id="email"/>
                            </div>
                            <div className="col-12">
                                <textarea className="w-100 p-2" style={{height:'100px'}} placeholder="Message...">

                                </textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn w-50 text-white"  style={{backgroundColor: '#e04641'}}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
            <div>
                <About></About>
            </div>
        </>
    );
};

export default Contact;