import React from 'react'
import "./WhyKashcoolFlashcard.css"
import { Container } from 'react-bootstrap'
const WhyKashcoolFlashcard = ({ image }) => {
    return (
        <Container className='WhyKashcoolFlashcard'>
            <img src={image} alt="imageforkashcool" className="imageflashcard" />
        </Container>
    )
}

export default WhyKashcoolFlashcard