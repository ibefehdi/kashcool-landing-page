import React from 'react'
import "./whoarewe.css"
import FlashCard from './FlashCard'
import FeatureFlashCard from './FeatureFlashCard'
import cpuimg from "../../assets/Frame.svg"
import flask from "../../assets/Flask.svg";
import camera from "../../assets/Camera.svg";
import robot from "../../assets/robot.svg";
import { Container } from 'react-bootstrap'
const style = {
    marginTop: "17rem"
};

const WhoAreWe = () => {
    return (
        <div className="container-div">
            <Container className='container-about'>
                <div className="top-half">
                    <FlashCard />
                    <FeatureFlashCard details={"Experience AI Avatar"} image={cpuimg} styles={style} />
                </div>
                <div className="bottom-half">
                    <img src={robot} alt="robot" className='robot-img' />
                    <div className="bundle-cards">
                        <FeatureFlashCard details={"Affordable Price"} image={flask} />
                        <FeatureFlashCard details={"Quality Videos"} image={camera} />
                    </div>


                </div>
            </Container>
        </div>

    )
}

export default WhoAreWe