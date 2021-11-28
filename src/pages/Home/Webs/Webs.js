import React from 'react';
import Web from '../Web/Web';



const works = [
    {
        "id": "01",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Volunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "02",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Polunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "03",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Dolunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
    },
    {
        "id": "04",
        "img": "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "title": "Solunteer Network",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicingelit. Sit sunt officiis inventore vero exercitationem repellendus repudiandae placeat, beatae saepe quasi!",
        "languages":[ "Html", "Css", "Javascript", "React Js"],
        "live": "https://node-easy-buy-firebase-auth.web.app/",
        "codeClient": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
        "codeServer": "https://github.com/Saiedafride11/Node-Responsive-Genius-Car-Client-Side",
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