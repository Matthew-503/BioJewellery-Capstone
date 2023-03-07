import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './ReviewBlock.css';

const ReviewBlock = ({  customerUsername, customerTitle, customerDescription, reviewStarRating}) => {
    return (
        <div className="gpt3__blog">
            <div className="gpt3__blog-container_groupB">
                <div>
                    <h5>Customer</h5>
                    <p>
                        {customerUsername}
                    </p>
                    <h5>Title</h5>
                    <p>
                        {customerTitle}
                    </p>
                    <h5>Description</h5>
                    <p>
                        {customerDescription}
                        
                    </p>
                </div>
                <div>
                    <Rating starRating={reviewStarRating} />
                </div>
            </div>
        </div>

    );
};

export default ReviewBlock;