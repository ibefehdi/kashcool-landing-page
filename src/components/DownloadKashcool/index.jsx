import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./downloadkashcool.css"
import googleplay from "../../assets/google-play-store-icon.svg"
import applestore from "../../assets/apple-icon.svg"
import phone from "../../assets/phone.svg"
const DownloadKashcool = () => {
    return (
        <div className="full-width">
            <Container>
                <Row>
                    <Col style={{marginTop:'5rem'}}>
                        <h1 className="takekashcool">
                            Take Kashcool With You Anywhere
                        </h1>
                        <p className="downloaddetails">
                            Get The Best Experience Of Interactive Education With Kashcool On Your Devices With IPhone, Android Or Windows Systems.
                        </p>
                        <div className="button-container">
                            <button className='downloadbtn'><img src={googleplay} alt='google' /><span className="market">Google Play </span></button>
                            <button className='downloadbtn'><img src={applestore} alt='apple' /><span className="market">Apple Store </span></button>

                        </div>
                    </Col>
                    <Col>
                        <img src={phone} alt='phone' className="phone-image" />
                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default DownloadKashcool