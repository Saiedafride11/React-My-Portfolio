import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="top-header">
            <Container>
                <Nav className="mx-auto top-header-nav">
                    <Nav.Link href="tel:01730258276" target="_blank" className="top-header-call-mail"><FontAwesomeIcon icon={faPhoneSquare} />&nbsp;+01730258276</Nav.Link>
                    <Nav.Link href="mailto:designer.afride11@gmail.com" target="_blank" className="top-header-call-mail"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;designer.afride11@gmail.com</Nav.Link>
                    <Nav.Link href="#features" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                    <Nav.Link href="#features" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                    <Nav.Link href="#features" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    <Nav.Link href="#features" target="_blank"><Button className="btn-cv">My CV</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

      <Navbar collapseOnSelect expand="lg" className="header" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img src="https://i.ibb.co/pd8fqTw/Logo.png" className="header-img" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="work">Work</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;