import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Do.css';

const Do = () => {
    const does = [
        {
            "id": "01",
            "img": "https://i.imgur.com/mhww2BH.png",
            "title": "Front End Application",
            "description": "I Have 2 Years Of Experience With Front End Development . I Try Will Understand About Client Demand And I Wil Maintain That ."
        },
        {
            "id": "02",
            "img": "https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeamernstackdeveloper-mobile.png",
            "title": "MERN-Stack App",
            "description": "I Have Some Experience On Full Stack On Mern Applications. I Will Done Some Project On Mern Technology. Its Very Interesting For Me."
        },
        {
            "id": "03",
            "img": "https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg",
            "title": "React Application",
            "description": "I Have Experience To Build React Applications And I Have Completed Many React Project. I Want To Build More Project With My Experience."
        }
    ]
    return (
        <Container >
            <h2 className="pb-5 text-center">WHAT I <span style={{color: "#e04641"}}>DO</span></h2>
            <div className="do-container">
               {
                   does?.map(element => <div className="do-wrapper" key={element.id}>
                        <img src={element.img} className="w-25" alt="" />
                        <h4 className="py-2">{element.title}</h4>
                        <p style={{color: "#6c757d"}}>{element.description}</p>
                        <Link to="/contact">
                            <Button style={{backgroundColor: 'rgb(224, 70, 65)', border: 'none'}}>Contact Me</Button>
                        </Link>
                   </div>)
               }
            </div>
        </Container>
    );
};

export default Do;