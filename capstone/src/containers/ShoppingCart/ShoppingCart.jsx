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

import { Rating, CartBlock, PayButton, ReviewBlock, ProductDetailBar, CartBar } from '../../components';
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
            <div className='cart__headtext'>
                <h1>
                    ShoppingCart <HiOutlineShoppingBag className='cart__icons' />
                </h1>

            </div>

            <div className='detail__sidebar'>
                <CartBar cartItem = {ShoppingCart.cartProductName}/>
            </div>
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

                {/* <div className="cart__subtotal">
                    <h3 className="cart__subtotal-header">Subtotal:</h3>

                    <Link to="/create-checkout-session">
                        <button type='button' className='custom__button-checkout'>
                            Proceed to Checkout
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>

    );
};

export default ShoppingCart