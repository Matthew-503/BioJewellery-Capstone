// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the shopping cart. 
// Precondition: A home page with required cart item containers 
// Postcondition: a submit button that directs to payments service

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Editing qty function?
// Notes: Background and button color fix and button placement

import React from 'react';
//import { CartItem } from '../../components';

import './ShoppingCart.css';

const ShoppingCart = () => (
    <div className="shop__cart">
        

        <h1 className="shop__header-text">Shopping Cart</h1>

        <div className="shop__subtotal">
            <h3 className="shop__subtotal-text">Subtotal:</h3>   
        </div>

        <div className="shop__cartbody">
            {/*<CartItem /> */}
        </div>

        <button type='button' className='custom__button'>
                Proceed to Checkout
        </button>
    </div>
);

export default ShoppingCart;