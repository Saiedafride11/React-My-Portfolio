import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import './Mentor.css';

export default class Mentor extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container className="pb-5">
        <h2 className="text-center">MY <span style={{color: "#e04641"}}>MENTOR'S</span></h2>
        <p className="text-center">It Is A Long Established Fact That A Reader Will Be Of A Page When Established Fact Looking At Its Layout.</p>
        <Slider {...settings} className="text-center">
          <div className="mentor-wrapper">
                <div className="pt-3">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: '#e65f78', fontSize: "3rem"}}/>
                </div>
                <div className="mx-auto w-100 text-center my-5">
                    <img className="d-block review-img" src="https://i.imgur.com/ZKi1BAW.jpg" alt="" />
                </div>
                <p className="review-quote">The point of using that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                <p className="review-quote pb-4" style={{color: '#e04641'}}>Jhangkar Mahbub, <strong>Programming Hero</strong></p>
          </div>
          <div className="mentor-wrapper">
                <div className="pt-3">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: '#e65f78', fontSize: "3rem"}}/>
                </div>
                <div className="mx-auto w-100 text-center m-5">
                    <img className="d-block review-img" src="https://i.ibb.co/Krwwh5T/akjm.jpg" alt="" />
                </div>
                <p className="review-quote"> The point of using that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                <p className="review-quote pb-4" style={{color: '#e04641'}}>Akjm Al-Amin, <strong>European It Solution</strong></p>
          </div>
          <div className="mentor-wrapper">
                <div className="pt-3">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{color: '#e65f78', fontSize: "3rem"}}/>
                </div>
                <div className="mx-auto w-100 text-center m-5">
                    <img className="d-block review-img" src="https://i.ibb.co/Gv8C5S3/tonoy.jpg" alt="" />
                </div>
                <p className="review-quote"> The point of using that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                <p className="review-quote pb-4" style={{color: '#e04641'}}>Toufiqul Bari Tonoy, <strong>Shikbe Shobai</strong></p>
          </div>
        </Slider>
      </Container>
    );
  }
}