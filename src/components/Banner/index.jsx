import React from 'react';
import cartoon_boy from "../../assets/cartoon-boy.svg";
import play from "../../assets/Play.svg";
import ellipse from "../../assets/ellipse.svg";
import './banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="background-image">
                <img src={cartoon_boy} alt="Cartoon Boy" className="cartoon-boy" />
                
            </div>

            <div className="overlay"></div>

            <div className="content">
                <h1 className="title">KASHCOOL</h1>
                <p className="subtitle">Unlock Your Learning Potential</p>
                <div className='buttons-list'>
                    <button className="start-button">Get Started</button>
                    <button className="play-button"><img src={play} alt='play' /></button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
