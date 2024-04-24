import React, { useState } from 'react';
import "./reviews.css";
import ReviewCard from './ReviewCard';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalReviews = 10; // Adjust based on your actual number of reviews
    const reviewsPerPage = 3;

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const maxIndex = totalReviews - (totalReviews % reviewsPerPage || reviewsPerPage);
            return Math.min(prevIndex + reviewsPerPage, maxIndex);
        });
    };


    const handleBack = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - reviewsPerPage, 0));
    };

    // Calculate the offset for the sliding effect
    const offset = currentIndex * -100; // Move 100% of the view width per transition

    return (
        <div className="background-review">
            <Container>
                <Row>
                    <Col>
                        <Button onClick={handleBack} disabled={currentIndex === 0}>Back</Button>
                    </Col>
                    <Col style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
                        <h2 className="reviews-header">People Saying About Us</h2>
                    </Col>
                    <Col>
                        <Button onClick={handleNext} disabled={currentIndex >= totalReviews - reviewsPerPage}>Next</Button>
                    </Col>
                </Row>
                <div className="reviews-container">
                    <Row className="review-cards" style={{ transform: `translateX(${offset}%)` }}>
                        {Array.from({ length: totalReviews }).map((_, index) => (
                            <Col key={index} className="review-card-col">
                                <ReviewCard />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Reviews;
