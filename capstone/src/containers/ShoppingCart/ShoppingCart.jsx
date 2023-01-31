// // Author: Buola Achor
// // Version 0.1
// // Date: 18/1/2023

// // Description: This is the shopping cart. 
// // Precondition: A home page with required cart item containers 
// // Postcondition: a submit button that directs to payments service

// // Input: Currently no input available
// // Output: Currently no specific output

// // Notes: Editing qty function?
// // Notes: Background and button color fix and button placement

// import React from 'react';
// import { Rating, CartBlock, ReviewBlock } from '../../components';
// import { Link } from "react-router-dom"

// import { HiOutlineShoppingBag } from 'react-icons/hi';
// import './ShoppingCart.css';

// const ShoppingCart = () => {


//     //Default Variable for review block
//     var customerDefaultName = "Very Cool Name";
//     var customerDefaultTitle = "Default Title";
//     var customerDefaultDescription = "Default Description";
//     var stars = 3;

//     //Default Variable for review block
//     var cartProductName = "Very Cool Name";
//     var cartProductColor = "Default Title";
//     var cartProductSize = "Default Description";
//     var cartProductPrice = "Very Cool Name";
//     var cartProductQuantity = "Default Title";

// <div className="cart app__section-padding">
//         <h1 className="cart__headtext">
//             My Cart
//             <HiOutlineShoppingBag />
//             <div />
//         </h1>

//         <div className="shop__subtotal">
//             <h3 className="shop__subtotal-text">Subtotal:</h3>

//             <Link to="/checkout">
//                 <button type='button' className='custom__button-checkout'>
//                     Proceed to Checkout
//                 </button>
//             </Link>
//         </div>

// <div className="shop__cartbody">
//             {/* <CartBlock
//                 cartName={cartProductName}
//                 cartColor={cartProductColor}
//                 cartSize={cartProductSize}
//                 cartPrice={cartProductPrice}
//                 cartQuantity={cartProductQuantity}
//             />

//             <ReviewBlock
//                 customerUsername={customerDefaultName}
//                 customerDescription={customerDefaultDescription}
//                 customerTitle={customerDefaultTitle}
//                 reviewStarRating={stars}
//             /> */}
//         </div>
//     </div>
// };

// export default ShoppingCart;

import React from 'react';
import { Rating, CartBlock, ReviewBlock } from '../../components';
import { Link } from "react-router-dom"

import { HiOutlineShoppingBag } from 'react-icons/hi';
import './ShoppingCart.css';

const ShoppingCart = () => {

    //Default Variable for review block
    var cartProductName = "Gold Leaf Necklace";
    var cartProductColor = "Gold";
    var cartProductSize = "Small";
    var cartProductPrice = "100.00";
    var cartProductQuantity = "1";
    return (
        <div className="cart app__section-padding">
            <div>ShoppingCart</div>

            <div className="shop__subtotal">
                <h3 className="shop__subtotal-text">Subtotal:</h3>

                <Link to="/checkout">
                    <button type='button' className='custom__button-checkout'>
                        Proceed to Checkout
                    </button>
                </Link>

                <div className="shop__cartbody">
                    <CartBlock
                        cartName={cartProductName}
                        cartColor={cartProductColor}
                        cartSize={cartProductSize}
                        cartPrice={cartProductPrice}
                        cartQuantity={cartProductQuantity}
                    />

                    <CartBlock
                        cartName={cartProductName}
                        cartColor={cartProductColor}
                        cartSize={cartProductSize}
                        cartPrice={cartProductPrice}
                        cartQuantity={cartProductQuantity}
                    />
                </div>
            </div>
        </div>

    );
};

export default ShoppingCart