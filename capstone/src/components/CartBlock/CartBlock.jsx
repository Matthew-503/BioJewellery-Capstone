// Author: 
// Version:
// Date: 

// Description: This component displays the items with quantity in cart

import React from 'react';
import './CartBlock.css';

const CartBlock = ({ cartName, cartColor, cartPrice, cartQuantity, cartSize }) => {

    return (
        <div className='cart'>
            <table className='cart__table'>
                <tr>
                    <th>{cartName}</th>
                    <th>Each</th>
                    <th>Quality</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Color: {cartColor}</td>
                    <td>${cartPrice}</td>
                    <td>{cartQuantity}</td>
                    <td>$100.00</td>
                </tr>
                <tr>
                    <td>Size: {cartSize}</td>
                </tr>
            </table>
        </div >
    );
};

export default CartBlock;