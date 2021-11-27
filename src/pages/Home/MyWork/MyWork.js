import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyWorkDetails from '../MyWorkDetails/MyWorkDetails';
import './MyWork.css';

const works = [
    {
        "id": "01",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Volunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "use":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "02",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Polunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "use":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "03",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Dolunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "use":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "04",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Solunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "use":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    }
]

const MyWork = () => {
    return (
        <div className="pb-5">
           <Container>
                <h2 className="text-center py-5">MY WORK OF <span style={{color: "#e04641"}}>EXPERIENCE</span></h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <Link to="">
                            <Button className="my-work-btn" style={{color: "blue"}}>Recent</Button>
                        </Link>
                    </div>
                    <div>
                        <Link to="">
                            <Button className="my-work-btn" style={{color: "#e04641"}}>Best</Button>
                        </Link>
                    </div>
                </div>

                <div className="pt-5">
                    {
                        works?.map( work => <MyWorkDetails work={work} key={work.id}></MyWorkDetails>)
                    }
                </div>
           </Container>
        </div>
    );
};

export default MyWork;