import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import './SkillSummery.css';

const SkillSummery = (props) => {
    const {headline, spanColor, progress} = props.skill;
    return (
        <div className="skills-wrapper mb-4">
            <h5 className="title-sub pb-2" style={{color : 'darkgrey'}}>{headline}</h5>
            <div className="progress-title">
                {
                    progress?.map((tl, i) => <div key={i}>
                        <div className="d-flex align-items-center">
                            <span style={{backgroundColor: `${spanColor}`}}></span>
                            <p>{tl.title}</p>
                        </div>
                        <ProgressBar rect percentage={tl.percents}  width="250px" height="10px"/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SkillSummery;