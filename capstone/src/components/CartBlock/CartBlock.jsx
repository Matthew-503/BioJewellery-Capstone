import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
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