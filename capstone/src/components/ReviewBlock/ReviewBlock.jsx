import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './ReviewBlock.css';

const ReviewBlock = ({ customerUsername, customerTitle, customerDescription, reviewStarRating }) => {

    var productName = null;
    var price = null;
    var description = null;
    var stars = 3;

    //Default Variable for review block
    var customerDefaultName = "Very Cool Name";
    var customerDefaultTitle = "Default Title";
    var customerDefaultDescription = "Default Description";

    return (
        <div className='review'>
            <table className='review__table'>
                <tr>
                    <td>
                        <p>
                            {customerUsername}
                        </p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <Rating starRating={stars} className="review__rating" />
                        {customerTitle}
                        {/* <div className="detail__star">
                        </div> */}
                    </th>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {customerDescription}
                        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                    </td>
                </tr>
            </table>
        </div >
    );
};

export default ReviewBlock;