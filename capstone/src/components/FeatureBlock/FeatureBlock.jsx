import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './FeatureBlock.css';

const FeatureBlock = ({ productFeatureName, productFeatureType, productFeatureColor, reviewStarRating }) => {

    var stars = 3;

    return (
        <div className='review'>
            <table className='review__table'>
                <tr>
                    <td>
                        <p>
                            {productFeatureName}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {productFeatureType}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {productFeatureColor}
                    </td>
                </tr>
                <tr>
                    <th>
                        <Rating starRating={stars} className="review__rating" />
                        {/* <div className="detail__star">

                        </div> */}
                    </th>
                </tr>
            </table>
        </div >
    );
};

export default FeatureBlock;