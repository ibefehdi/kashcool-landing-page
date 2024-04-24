import React from 'react'
import "./FeatureFlashCard.css"
const FeatureFlashCard = ({ details, image, styles }) => {
    return (
        <div className='featurecard' style={styles || {}}>
            <div className='image'>
                <img src={image} alt="" className="image" />
            </div>
            <div className="details-of-feature">
                {details}
            </div>
        </div>
    )
};

export default FeatureFlashCard