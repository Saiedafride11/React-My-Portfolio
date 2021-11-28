import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFlickr } from '@fortawesome/free-brands-svg-icons'
import { Nav } from 'react-bootstrap';
import './Graphics.css';

const Graphics = () => {
    return (
        <div>
           <Nav className="work-icon-bar py-3">
                <Nav.Link href="https://www.behance.net/saiedafride11" target="_blank"><FontAwesomeIcon icon={faBehance} /></Nav.Link><span style={{color: "#e04641", paddingBottom: "10px"}}>Bahance</span>
                <Nav.Link href="https://dribbble.com/saiedafride11" target="_blank"><FontAwesomeIcon icon={faDribbble} /></Nav.Link><span style={{color: "#e04641", paddingBottom: "10px"}}>Dribbble</span>
                <Nav.Link href="https://www.flickr.com/photos/saiedafride11" target="_blank"><FontAwesomeIcon icon={faFlickr} /></Nav.Link><span style={{color: "#e04641", paddingBottom: "10px"}}>Flickr</span>
            </Nav>
        </div>
    );
};

export default Graphics;