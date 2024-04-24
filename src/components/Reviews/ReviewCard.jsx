// ReviewCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './reviewcard.css';
import profileImg from '../../assets/profile.jpeg';
import quotes from "../../assets/quotes.svg";
import quotes2 from "../../assets/quotes2.svg";
const ReviewCard = () => {
    return (
        <Card className='review-card'>
            <Card.Body>
                <div className='profile-image-wrapper'>
                    <img src={profileImg} alt='profile' className='profile-image' />
                </div>
                <div className='review-content'>
                    <div className='reviewer-name'>Olivia</div>
                    <div className='reviewer-rating'>
                        ★ ★ ★ ★ ★
                    </div>
                    <div className='reviewer-quote'>
                        <img src={quotes} alt='quotes' /> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor <img src={quotes2} alt='quote' />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;
