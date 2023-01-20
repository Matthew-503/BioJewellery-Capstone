import React from 'react';


// import images from '../../constants/images';
import './ShopProductIcon.css';


/*
// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023
 
// Description: This Component is to display a customer review. It displays the Username, Title, Description and the rating of the product.
// Precondition: There must be a product and a review associated with the product.
// Postcondition: Displays the review with the relavent information
 
// Input 
customerUsername: String -- Username of the reviewer
customerTitle: String -- Title of the review
customerDescription: String -- Description of the review
reviewStarRating: int -- Amount of stars of the review
// Output
ReviewBlock component

*/

const ShopProductIcon = ({ productImage,productTitle, productPrice }) => {
    return (
        
        <div>
            <div>
                <img src={productImage} alt="" />
            </div>
           <div>
                <p>{productTitle}</p>
                <p>{productPrice}</p>
           </div>
        </div>
    );
};

export default ShopProductIcon;