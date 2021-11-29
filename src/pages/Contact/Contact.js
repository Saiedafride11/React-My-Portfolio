import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faBehanceSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';
import About from '../Home/About/About';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../Shared/Header/Header';


const Contact = () => {
    document.title = 'Contact Us';
    const [state, handleSubmit] = useForm("mnqwavkv");
    if (state.succeeded) {
        return <p className="text-center mt-5">Thanks for your message</p>;  }
    return (
        <>  
            <Header></Header>
            <Container>
                <div className="contact-container" id="contact">
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>ITS PLEASURE FOR <span style={{color: "#e04641"}}>ME</span></h2>
                            <Nav className="mx-auto contact-nav">
                                <Nav.Link href="https://github.com/Saiedafride" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                                <Nav.Link href="https://www.behance.net/saiedafride11" target="_blank"><FontAwesomeIcon icon={faBehanceSquare} /></Nav.Link>
                                <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                                <Nav.Link href="https://www.youtube.com/softzeo" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} /></Nav.Link>
                            </Nav>
                            <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Unde Veritatis Odit Quis Impedit Accusamus Doloremque? Quibusdam Dolorum Minus Iure Dolores!</p>
                        </div>
                    </div>
                    <div className="contact py-3">
                        {/* <form className="row g-3 p-5">
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
                        </form> */}

                        <form onSubmit={handleSubmit} className="row g-3 p-5">
                            <div className="col-md-12">
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className="col-md-12">
                                <input className="w-100" id="email" type="email" name="email" placeholder="Email..."/>
                            </div>
                            <div className="col-md-12">
                                <ValidationError prefix="Email" field="email"errors={state.errors}/>
                            </div>
                            <div className="col-md-12">
                                <textarea id="message" name="message" className="w-100 p-2" style={{height:'100px'}} placeholder="Message..."/>
                            </div>
                            <div className="col-md-12">
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button type="submit" disabled={state.submitting} style={{width: "97%", margin:'0 auto', backgroundColor: "#e04641", color: "#fff", border: "none", padding: "5px"}}>Send Message</button>
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