import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faBehanceSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="top-header">
            <Container>
                <Nav className="mx-auto top-header-nav">
                    <Nav.Link href="tel:01730258276" target="_blank" className="top-header-call-mail"><FontAwesomeIcon icon={faPhoneSquare} />&nbsp;+01730258276</Nav.Link>
                    <Nav.Link href="mailto:designer.afride11@gmail.com" target="_blank" className="top-header-call-mail"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;designer.afride11@gmail.com</Nav.Link>
                    <Nav.Link href="https://github.com/Saiedafride11" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                    <Nav.Link href="https://www.behance.net/saiedafride11" target="_blank"><FontAwesomeIcon icon={faBehanceSquare} /></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    <Nav.Link href="https://www.youtube.com/softzeo" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} /></Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1L7g-vd7LnA8kDiQiBxP2cD4ezzN5uFpP/view" target="_blank"><Button className="btn-cv">My CV</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

      <Navbar collapseOnSelect expand="lg" className="header sticky-top" variant="dark">
        <Container>
          <Navbar.Brand href="/home#home">
              <img src="https://i.ibb.co/pd8fqTw/Logo.png" className="header-img" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/work">Work</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}

              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/work#work">Works</Nav.Link>
              {/* <Nav.Link as={Link} to="/work#work">Works</Nav.Link> */}
              <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/blog#blog">Blog</Nav.Link>
              <Nav.Link as={HashLink} to="/contact#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
};

export default Header;


// react router route with hash not working (google search)
// npm install --save react-router-hash-link
// import { HashLink } from 'react-router-hash-link';