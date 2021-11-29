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
        "img": "https://i.ibb.co/HG4GbXt/autocar.png",
        "title": "AutoCar - Mern Stack Website",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'Firebase- Authentication', 'MongoDB', 'Express Js', 'Node Js', 'netlify Deploy', 'Heroku Deploy'],
        "live": "https://node-autocar-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-AutoCar-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-AutoCar-Server-Side",
    },
    {
        "id": "02",
        "img": "https://i.ibb.co/bb20tDS/tourx.png",
        "title": "TourX- Mern Stack Website",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'React Hook Form', 'Firebase- Authentication', 'MongoDB', 'Express Js', 'Node Js', 'Heroku Deploy'],
        "live": "https://node-tourx-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-TourX-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-TourX-Server-Side",
    },
    {
        "id": "03",
        "img": "https://i.ibb.co/sbBbrSn/easybuy.png",
        "title": "EasyBuy - Mern Stack Website",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'Firebase- Authentication', 'MongoDB', 'Express Js', 'Node Js', 'netlify Deploy', 'Heroku Deploy'],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Easy-Buy-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Easy-Buy-Server-Side",
    },
    {
        "id": "04",
        "img": "https://i.ibb.co/wCx9Dmc/color-copy.png",
        "title": "React-Colors-Copy",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'React-Bootstrap', 'React-Hash-Link', 'Local-Database', 'Color Code', 'netlify Deploy'],
        "live": "https://react-soft-copy.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/React-Colors-Copy"
    }
]


const reacts = [
    {
        "id": "01",
        "img": "https://i.ibb.co/x7ZqnQQ/mealdb.png",
        "title": "React Meal DB",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Bootstrap', 'React-Router', 'netlify Deploy'],
        "live": "https://react-4b-meal-db-withoutlocalstorage.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/React-4B-Meal-DB-WithoutLocalStorage"
    },
    {
        "id": "02",
        "img": "https://i.ibb.co/f9GNG20/e-shikun.png",
        "title": "React eshikhon",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'React Hook Form', 'netlify Deploy', ],
        "live": "https://eshikhon.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/React-eshikhon-Projects"
    },
    {
        "id": "03",
        "img": "https://i.ibb.co/mcZGq7v/social-buddy.png",
        "title": "React Social Buddy",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'Metarial Ui', 'netlify Deploy'],
        "live": "https://stupefied-tesla-54476f.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/React-social-buddy-Material-Ui"
    },
    {
        "id": "04",
        "img": "https://i.ibb.co/TMH6Fzm/spftcoder.png",
        "title": "React Soft Coder",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'React', 'React-Router', 'React-Bootstrap', 'netlify Deploy'],
        "live": "https://the-superhero-direction.netlify.app",
        "codeClient": "https://github.com/Saiedafride11/the-superhero-direction"
    }
]


const javascripts = [
    {
        "id": "01",
        "img": "https://i.ibb.co/R2q2RM6/hard-rock.png",
        "title": "Javascript Hard Rock",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://saiedafride11.github.io/Javascript-Hard-Rock-Ph-Master/",
        "codeClient": "https://github.com/Saiedafride11/Javascript-Hard-Rock-Ph-Master"
    },
    {
        "id": "02",
        "img": "https://i.ibb.co/M6mcCLC/fency-slider.png",
        "title": "javascript Fancy Slider",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://fancy-slider1.netlify.app",
        "codeClient": "https://github.com/Saiedafride11/javascript-fancy-slider-main"
    },
    {
        "id": "03",
        "img": "https://i.ibb.co/9bRx5bK/alesha-store.png",
        "title": "javascript Alesha Store",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://alesha-store.netlify.app",
        "codeClient": "https://github.com/Saiedafride11/javascript-alesha-store"
    },
    {
        "id": "04",
        "img": "https://i.ibb.co/GvjvLsD/selary-app.png",
        "title": "javascript Salary App",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://salary-app1.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/javascript-salary-app-master"
    },
    {
        "id": "05",
        "img": "https://i.ibb.co/dfNMhYp/pin-matcher.png",
        "title": "javascript Pin Matcher",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://saiedafride11.github.io/javascript-pin-matcher-update/",
        "codeClient": "https://github.com/Saiedafride11/javascript-pin-matcher-update"
    },
    {
        "id": "06",
        "img": "https://i.ibb.co/hCTP9q0/book-archive.png",
        "title": "javascript Book Archive ",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ 'Javascript', 'HTML', 'CSS' ],
        "live": "https://javascript-book-archive1.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/javascript-book-archive"
    }
]

const AllWorksSummery = () => {
    return (
        <>  
            <h3 className="text-center mx-auto" style={{borderLeft: "4px solid #e04641", borderBottom: "4px solid #e04641", paddingBottom: '5px', width: "280px"}}>MERN Stack Project</h3>
            <div className="all-work-summery-container m-2">
                {
                    mernStacks?.map(mernStack => <div key={mernStack.id} className="all-work-summery-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{mernStack.id}.</span>{mernStack.title}</h4>
                        <div style={styles}>
                            <Parallax bgImage={mernStack.img} strength={500} 
                                renderLayer={(percentage) => (
                                    <div>
                                        <div
                                            style={{
                                            position: "absolute",
                                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                                            left: "50%",
                                            top: "50%",
                                            borderRadius: "50%",
                                            transform: "translate(-50%,-50%)",
                                            width: percentage * 500,
                                            height: percentage * 500
                                            }}
                                            >
                                            
                                            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                                                <Nav>
                                                    <Nav.Link href="https://drive.google.com/file/d/1L7g-vd7LnA8kDiQiBxP2cD4ezzN5uFpP/view" target="_blank"><Button className="btn-all-work-summery">Live Link</Button></Nav.Link>
                                                </Nav>
                                            </div>
                                        </div>
                                    </div>
                                  )}
                                >
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="all-work-summery-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="all-work-summery-paragraph">{mernStack.description}</p>
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

            <h3 className="text-center mx-auto mt-5" style={{borderLeft: "4px solid #e04641", borderBottom: "4px solid #e04641", paddingBottom: '5px', width: "280px"}}>React Project </h3>
            <div className="all-work-summery-container m-2">
                {
                    reacts?.map(react => <div key={react.id} className="all-work-summery-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{react.id}.</span>{react.title}</h4>
                        <div style={styles}>
                        <Parallax bgImage={react.img} strength={500} 
                                renderLayer={(percentage) => (
                                    <div>
                                        <div
                                            style={{
                                            position: "absolute",
                                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                                            left: "50%",
                                            top: "50%",
                                            borderRadius: "50%",
                                            transform: "translate(-50%,-50%)",
                                            width: percentage * 500,
                                            height: percentage * 500
                                            }}
                                            >
                                            
                                            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                                                <Nav>
                                                    <Nav.Link href="https://drive.google.com/file/d/1L7g-vd7LnA8kDiQiBxP2cD4ezzN5uFpP/view" target="_blank"><Button className="btn-all-work-summery">Live Link</Button></Nav.Link>
                                                </Nav>
                                            </div>
                                        </div>
                                    </div>
                                  )}
                                >
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="all-work-summery-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="all-work-summery-paragraph">{react.description}</p>
                                <div className="py-3">
                                    <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                                    {
                                    react?.languages?.map( (language, i) => <Button className="btn btn-experience-work" key={i}>{language}</Button>)
                                    }
                                </div>
                                <Nav className="py-3">
                                    <Nav.Link href={react.live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={react.codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
                               </Nav>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <h3 className="text-center mx-auto mt-5" style={{borderLeft: "4px solid #e04641", borderBottom: "4px solid #e04641", paddingBottom: '5px', width: "280px"}}>Javascript Project</h3>
            <div className="all-work-summery-container m-2">
                {
                    javascripts?.map(javascript => <div key={javascript.id} className="all-work-summery-inner">
                        <h4 className="text-center py-3"><span style={{color: "#e04641"}}>{javascript.id}.</span>{javascript.title}</h4>
                        <div style={styles}>
                        <Parallax bgImage={javascript.img} strength={500} 
                                renderLayer={(percentage) => (
                                    <div>
                                        <div
                                            style={{
                                            position: "absolute",
                                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                                            left: "50%",
                                            top: "50%",
                                            borderRadius: "50%",
                                            transform: "translate(-50%,-50%)",
                                            width: percentage * 500,
                                            height: percentage * 500
                                            }}
                                            >
                                            
                                            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                                                <Nav>
                                                    <Nav.Link href="https://drive.google.com/file/d/1L7g-vd7LnA8kDiQiBxP2cD4ezzN5uFpP/view" target="_blank"><Button className="btn-all-work-summery">Live Link</Button></Nav.Link>
                                                </Nav>
                                            </div>
                                        </div>
                                    </div>
                                  )}
                                >
                                <div className="parallax-height"></div> {/* height dite hbe (height: 500px) */}
                            </Parallax>
                        </div>
                        <div className="all-work-summery-details">
                            <div>
                                <h6>Project Summary :</h6>
                                <p className="all-work-summery-paragraph">{javascript.description}</p>
                                <div className="py-3">
                                    <p className="text-muted text-uppercase" style={{fontWeight: "bold"}}>using technology</p>
                                    {
                                    javascript?.languages?.map( (language, i) => <Button className="btn btn-experience-work" key={i}>{language}</Button>)
                                    }
                                </div>
                                <Nav className="py-3">
                                    <Nav.Link href={javascript.live} target="_blank"><span style={{color: "#e04641"}}>Live Link </span><FontAwesomeIcon icon={faGlobe} style={{color: "#000"}}/></Nav.Link>
                                    <Nav.Link href={javascript.codeClient} target="_blank"><span style={{color: "#e04641"}}>Code Link </span><FontAwesomeIcon icon={faGithub} style={{color: "#000"}}/></Nav.Link>
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