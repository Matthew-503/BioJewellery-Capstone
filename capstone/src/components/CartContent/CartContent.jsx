// Author: Matthew, Sri
// Version: 1.0
// Date: 15.03.2023

// Description: This component displays items in cart with price and qunatity. 
// Options for Update quantity and delete item

import React from 'react';
import './CartContent.css';

const CartContent = () => {
    const { cartProducts, itemCount }= useSelector((state) => state.cart);

    return (
        <>        
            {cartProducts && (<div className='cart'>
                <table className='cart__table'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price per unit</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((item) => (
                            <tr key={item.product._id}>
                                <td>{item.product.name}</td>
                                <td>${item.product.price.toFixed(2)}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}  
                    </tbody>                    
                </table>
            </div>)}
        </>
    );
};

export default CartContent;