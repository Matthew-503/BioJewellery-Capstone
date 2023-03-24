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
        <div className="">
            <div>
                <table className='cartbar__table'>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <th>CA${299.99}</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="cartbar__button">
                                    <PayButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>                    
                </table>
            </div>
        </div>
    )
};

export default CartSummary;