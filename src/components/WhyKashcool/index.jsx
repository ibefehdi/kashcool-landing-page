import React from 'react'
import { Container } from 'react-bootstrap'
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
                <div className="image-container-kashcool">
                    <WhyKashcoolFlashcard image={laptopkid} />
                    <p className="details-for-kashcool">
                        Simply Because The Notebook Has Been Developed With Advanced Technologies Designed Specifically To Facilitate The Curriculum For The Three Educational Grades : Primary - Medium - High School.
                    </p>
                    <WhyKashcoolFlashcard image={Trophies} />
                </div>


            </Container>
        </div>

    )
}

export default WhyKashcool