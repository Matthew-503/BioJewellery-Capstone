// Author: Matthew, Sri
// Version: 1.0
// Date: 15.03.2023

// Description: This component displays items in cart with price and qunatity. 
// Options for Update quantity and delete item

import React from 'react';
import './CartContent.css';

const CartContent = ({ cartName, cartPrice, cartQuantity }) => {

    return (
        <div className='cart'>
            <table className='cart__table'>
                <tr>
                    <th>Product</th>
                    <th>Price per unit</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>{cartName}</td>
                    <td>${cartPrice}</td>
                    <td>{cartQuantity}</td>
                </tr>
            </table>
        </div >
    );
};

export default CartContent;