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
        dispatch(updateItemCount())
    }, [dispatch, cartProducts]);

    return (
        <>        
            {cartProducts.itemCount > 0 ?
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
                            <tr key={item.product._id}>
                                <td>{item.product.name}</td>
                                <td>CA${item.product.price.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => {increaseItemQuantity(item.product._id)}}>+</button>

                                    {item.quantity}

                                    <button onClick={() => {decreaseItemQuantity(item.product._id)}}>-</button>
                                </td>
                                <td>
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