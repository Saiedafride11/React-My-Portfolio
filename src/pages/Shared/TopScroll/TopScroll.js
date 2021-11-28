import React from "react";
import './TopScroll.css';

const TopScroll = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      };

    return (
        <div className="scroll-to-top">
                <button onClick={scrollToTop}>Hello</button>
        </div>

    );
};

export default TopScroll;