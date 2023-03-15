// Author: Nicholas Proc, Sri Guru
// Version: 1.0
// Date: 09/03/2023

// Description: This component displays the "subtotal" and renders "PayButton" for "proceed to checkout" button

import React from 'react';
import './CartBar.css';

import { PayButton } from '../../components';
import { useSelector } from "react-redux";

const CartBar = () => { 
    const subTotal = useSelector((state) => state.cart.subTotal);
    
    return (
        <div className="">
            <div>
                <table className='cartbar__table'>
                    <tr>
                        <th>Subtotal</th>
                        <th>{subTotal}</th>
                        
                    </tr>
                    <tr>
                        <td>
                            <div className="cartbar__button">
                                <PayButton/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default CartBar;