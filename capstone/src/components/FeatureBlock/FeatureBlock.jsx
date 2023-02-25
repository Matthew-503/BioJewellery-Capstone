import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './FeatureBlock.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
const FeatureBlock = () => {

    var stars = 3;

    const { selectedProduct, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        
        
    }, [isError, message])
    return (
        <div className='review'>
            <table className='review__table'>
                <tbody>
                <tr>
                    <td>
                        <p>
                            {selectedProduct[0].name}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {selectedProduct[0].type}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {selectedProduct[0].colour}
                    </td>
                </tr>
                <tr>
                    <th>
                        <Rating starRating={stars} className="review__rating" />
                        {/* <div className="detail__star">

                        </div> */}
                    </th>
                </tr>
                </tbody>
            </table>
        </div >
    );
};

export default FeatureBlock;