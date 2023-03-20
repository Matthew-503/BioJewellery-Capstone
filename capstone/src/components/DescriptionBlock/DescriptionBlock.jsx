import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './DescriptionBlock.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
const DescriptionBlock = () => {

    var stars = 3;

    const { selectedProduct, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

    }, [isError, message])

    return (
        // <div className='review'>
        //     <table className='review__table'>
        //         <tbody>
        //             <tr>
        //                 <td>
        //                     <p>
        //                         {selectedProduct.name}
        //                     </p>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td colSpan={2}>
        //                     {selectedProduct.type}
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td colSpan={2}>
        //                     {selectedProduct.colour}
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <Rating starRating={stars} className="review__rating" />
        //                 </th>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>


        <div className='description'>
            <div className='description__category'>
                <p>
                    Product Name:
                </p>

                <p>
                    Product Type:
                </p>

                <p>
                    Color:
                </p>

                <p>
                    Ratings:
                </p>
            </div>

            <div className='description__detail'>
                <p>
                    {selectedProduct.name}
                </p>

                <p>
                    {selectedProduct.type}
                </p>

                <p>
                    {selectedProduct.colour}
                </p>

                <div className="description__rating">
                    <Rating starRating={stars} />
                </div>

            </div>
        </div>
    );
};

export default DescriptionBlock;