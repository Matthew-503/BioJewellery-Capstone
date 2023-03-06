import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './ReviewBlock.css';

const ReviewBlock = ({ customerUsername, customerTitle, customerDescription, reviewStarRating }) => {
    return (
        <div className='review'>
            <table className='review__table'>
                <tbody>
                    <tr>
                        <td>
                            <p>
                                {customerUsername}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            
                            <p>
                                <Rating starRating={stars} className="review__rating" />
                                {customerTitle}
                            </p>
                            <h5>Description</h5>
                            <p>
                                {customerDescription}
                                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default ReviewBlock;