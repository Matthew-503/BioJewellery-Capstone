// Author: Matthew, Sri
// Version: 1.1
// Date: 17.03.2023

// Description: This component displays items in cart with price and qunatity. 
// Options for Update quantity and delete item

import React from 'react';
import './CartContent.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { updateItemCount } from '../../features/cartFeatures/cartSlice';

const CartContent = () => {
    const { cartProducts, increaseItemQuantity, decreaseItemQuantity, deleteCartItem }= useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(()=> {
        //dispatch(updateItemCount())
        
    }, [dispatch, cartProducts]);

    return (
        <>        
            {cartProducts.length > 0 ?
             <div className='cart'>
                <table className='cart__table'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price per unit</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((item) => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>CA${200}</td>
                                <td>
                                    <button onClick={() => {increaseItemQuantity(item.product._id)}}>+</button>

                                    {item.quantity}

                                    <button onClick={() => {decreaseItemQuantity(item.product._id)}}>-</button>
                               
                                    <button onClick={() => {dispatch(deleteCartItem(item.product._id))}}>Remove from cart</button>
                                </td>
                            </tr>
                        ))}  
                    </tbody>                    
                </table>
                </div>
                :
                <>
                    <h1>Cart is empty!</h1>
                </>
            }
        </>
    );
};

export default CartContent;