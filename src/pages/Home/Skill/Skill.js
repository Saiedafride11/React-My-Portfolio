import React from 'react';
import { Container } from 'react-bootstrap';
import './Skill.css';
import SkillSummery from '../SkillSummery/SkillSummery';

const Skill = () => {
    const skills = [
        {
            "id": "01",
            "headline": "FONT END DEVELOPMENT",
            "spanColor": "#e6e2d3",
            "progress": [
                {"title": "React.Js", "percents": "70"},
                {"title": "Javascript", "percents": "80"},
                {"title": "Material UI", "percents": "55"},
                {"title": "Bootstrap", "percents": "90"},
                {"title": "Json API", "percents": "85"},
                {"title": "Scss", "percents": "35"}
            ]
        },
        {
            "id": "02",
            "headline": "BACK END DEVELOPMENT",
            "spanColor": "#deeaee",
            "progress": [
                {"title": "Node Js", "percents": "35"},
                {"title": "Express Js", "percents": "45"},
                {"title": "MongoDb", "percents": "50"},
                {"title": "Bootstrap", "percents": "95"},
                {"title": "React Hook Form", "percents": "70"},
                {"title": "Redux", "percents": "30"}
            ]
        },
        {
            "id": "03",
            "headline": "TOOLS",
            "spanColor": "#e6e2d3",
            "progress": [
                {"title": "Firebase", "percents": "55"},
                {"title": "D3 Chart", "percents": "65"},
                {"title": "Adobe Photoshop", "percents": "95"},
                {"title": "Adobe Illustrator", "percents": "90"},
                {"title": "Adobe XD", "percents": "85"},
            ]
        }
    ];

    return (
        <Container className="py-5">
            <h2 className="py-5 text-center">ABOUT MY <span style={{color: "#e04641"}}>SKILLS</span></h2>
            <div className="skill-container">
                {
                    skills?.map(skill => <SkillSummery skill={skill} key={skill.id}></SkillSummery>)
                }
            </div>
        </Container>
    );
};

export default Skill;



// npm i react-animated-progress-bar
// {/* <ProgressBar
//         width="400px"
//         height="10px"
//         rect
//         fontColor="gray"
//         percentage="70"
//         rectPadding="1px"
//         rectBorderRadius="20px"
//         trackPathColor="transparent"
//         bgColor="#333333"
//         trackBorderColor="grey"
//       /> */}