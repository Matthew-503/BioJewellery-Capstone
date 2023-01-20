// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the shopping cart item. 
// Precondition: Items able to be added via button in previous pages
// Postcondition: removal of items

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';

import './CartItem.css';

const CartItem = () => {
    return (
        <div className="cart__item">

            {/*<div className="cart__iamge">
                
            </div> */}

                <ul className="cart__desc">

                    <li className="cart__name">
                         <h2>Product Name</h2>
                    </li>

                    <li className="cart__price">
                         <h2>Price</h2>
                    </li>

                    <li className="cart__stock">
                         <h2>Stock:</h2>
                    </li>

                    <li className="cart__qty">
                         <h2>Qty:</h2>
                    </li>
                </ul>

            <button type='button' className='custom__button'>
                Remove
            </button>

        </div>
    );
}

export default CartItem;