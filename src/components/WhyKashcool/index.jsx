import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./whykashcool.css"
import laptopkid from "../../assets/laptopkid.svg"
import WhyKashcoolFlashcard from './WhyKashcoolFlashcard'
import Trophies from "../../assets/trophies.svg"
const WhyKashcool = () => {
    return (
        <div className="background-why-kashcool">
            <Container className='whykashcool-container'>
                <div className="kashcool-header">
                    <h2 className="kashcool-top">Why Kashcool</h2>
                </div>
                <Row >
                    <Col>
                        <WhyKashcoolFlashcard image={laptopkid} />

                    </Col>
                    <Col>
                        <p className="details-for-kashcool">
                            Simply Because The Notebook Has Been Developed With Advanced Technologies Designed Specifically To Facilitate The Curriculum For The Three Educational Grades : Primary - Medium - High School.
                        </p>
                    </Col>
                    <Col>
                        <WhyKashcoolFlashcard image={Trophies} />
                    </Col>

                </Row>


            </Container>
        </div>

    )
}

export default WhyKashcool