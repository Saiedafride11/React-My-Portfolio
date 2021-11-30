import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faBehanceSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';
import About from '../Home/About/About';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../Shared/Header/Header';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link } from 'react-router-dom';


const Contact = () => {
    document.title = 'Contact Us';
    const [state, handleSubmit] = useForm("mnqwavkv");
    if (state.succeeded) {
        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks for your message',
            showConfirmButton: false,
            timer: 2000
        }) && <Link to="/home"><button className='contact-back-home'>Back Home</button></Link>
     }
    return (
        <>  
            <Header></Header>
            <Container>
                <div className="contact-container" id="contact">
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>ITS PLEASURE FOR <span style={{color: "#e04641"}}>ME</span></h2>
                            <Nav className="contact-nav">
                                <Nav.Link href="https://github.com/Saiedafride11" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                                <Nav.Link href="https://www.behance.net/saiedafride11" target="_blank"><FontAwesomeIcon icon={faBehanceSquare} /></Nav.Link>
                                <Nav.Link href="https://www.facebook.com/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/saiedafride11/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                                <Nav.Link href="https://www.youtube.com/softzeo" target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} /></Nav.Link>
                            </Nav>
                            <p style={{color: 'grey'}}>Hello,
                                I am Afride from Bangladesh.
                                If You Need any Web Design, Web Development, Apps, UI UX and Graphic Design Related Project.<br></br>
                                 Please Contact Me. Thank You...
                            </p>
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
                            <button type="submit" disabled={state.submitting} className="btn-contact">Send Message</button>
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