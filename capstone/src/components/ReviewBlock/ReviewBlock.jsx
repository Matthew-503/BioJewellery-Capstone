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
    var customerDefaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    return (
        // <div className='review'>
        //     <table className='review__table'>
        //         <tbody>
        //             <tr>
        //                 <td>
        //                     <p>
        //                         {customerDefaultName}
        //                     </p>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <Rating starRating={stars} className="review__rating" />
        //                     {customerDefaultTitle}
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <td colSpan={2}>
        //                     {customerDefaultDescription}
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div >

        <div className='review'>
            <div className='review__header'>
                <div className="review__rating">
                    <Rating starRating={stars} />
                </div>

                <h3 className='review__header-title'>
                    {customerDefaultTitle}
                </h3>
            </div>

            <p className='review__detail'>
                {customerDefaultDescription}
            </p>

            <p className='review__name'>
                {customerDefaultName}
            </p>

            

            <div className='review__header'>
                <div className="review__rating">
                    <Rating starRating={stars} />
                </div>

                <h3 className='review__header-title'>
                    {customerDefaultTitle}
                </h3>
            </div>

            <p className='review__detail'>
                {customerDefaultDescription}
            </p>

            <p className='review__name'>
                {customerDefaultName}
            </p>
        </div>

    );
};

export default ReviewBlock;