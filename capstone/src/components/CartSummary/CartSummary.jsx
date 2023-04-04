// Author: Nicholas Proc, Sri Guru
// Version: 1.1
// Date: 15/03/2023

// Description: This component displays the "subtotal" and renders "PayButton" for "proceed to checkout" button

import React from 'react';
import './CartSummary.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { PayButton } from '..';
import { getSubtotal} from '../../features/cartFeatures/cartSlice';
const CartSummary = () => {
    const { subTotal,isError, message } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getSubtotal())

    }, [isError, message])
    return (
        // <div className="">
        //     <div>
        //         <table className='cartbar__table'>
        //             <tbody>
        //                 <tr>
        //                     <th>Subtotal</th>
        //                     <th>CA${299.99}</th>
        //                 </tr>
        //                 <tr>
        //                     <td>
        //                         <div className="cartbar__button">
        //                             <PayButton/>
        //                         </div>
        //                     </td>
        //                 </tr>
        //             </tbody>                    
        //         </table>
        //     </div>
        // </div>

        <div className='cart__summary'>
            <div className='cart__summary-header'>
                <h1>
                    Subtotal
                </h1>

                <h1>
                    CA${subTotal}
                </h1>
            </div>

            <div className='cart__summary-action'>
                <PayButton />
            </div>
        </div>
    )
};

export default CartSummary;