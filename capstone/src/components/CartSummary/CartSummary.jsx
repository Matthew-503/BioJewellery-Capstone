// Author: Nicholas Proc, Sri Guru
// Version: 1.1
// Date: 15/03/2023

// Description: This component displays the "subtotal" and renders "PayButton" for "proceed to checkout" button

import React from 'react';
import './CartSummary.css';

import { PayButton } from '..';
import { useSelector } from "react-redux";

const CartSummary = () => {
    const subTotal = useSelector((state) => state.cart.subTotal);

    return (
        
        <div className='cart__summary'>
            <div className='cart__summary-header'>
                <h1>
                    Subtotal
                </h1>

                <h1>
                    CA${299.99}
                </h1>
            </div>

            <div className='cart__summary-action'>
                <PayButton />
            </div>
        </div>
    )
};

export default CartSummary;