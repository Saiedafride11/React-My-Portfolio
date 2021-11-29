import React from 'react';
import Web from '../Web/Web';



const works = [
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
        "languages":[ 'React', 'React-Router', 'React Hook Form', 'Firebase- Authentication', 'MongoDB', 'Express Js', 'Node Js', 'netlify Deploy', 'Heroku Deploy'],
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
        "languages":[ 'React', 'React-Router', 'Color Code', 'netlify Deploy'],
        "live": "https://react-soft-copy.netlify.app/",
        "codeClient": "https://github.com/Saiedafride11/React-Colors-Copy"
    }
]

const Webs = () => {
    return (
        <div>
            <div className="pt-5">
                    {
                        works?.map( work => <Web work={work} key={work.id}></Web>)
                    }
            </div>
        </div>
    );
};

export default Webs;