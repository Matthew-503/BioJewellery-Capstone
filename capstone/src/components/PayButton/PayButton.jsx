// Author: Buola, Sri
// Version: 1.0
// Date: 19/03/2023

// Description: This component is for "proceed to checkout" button

import React, { useState } from 'react';
import './PayButton.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";

const PayButton = () => {

    // const {cartProducts} = useSelector((state) => state.cart);

    const [cartItems, setCartItems] = useState([
            {
                product:{priceApiId: 'price_1MmsiHGqyagVRxA1Oce48my1'},
                quantity: 1
            }
    ]);

    const checkout = async () => {
        // a fetch request to backend
        await fetch('http://localhost:8001/checkout', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({cartItems})
        }).then((response) => {
          //converts response to JSON format and returns
          return response.json();
        }).then((response) => {
          if(response.url){
            window.location.assign(response.url);
          }
        })
      }
    
    return (
        <>
            <button className="cartbar__button" onClick={() => checkout()}> <FaShoppingCart />Proceed to Checkout</button>
        </>
    )

}

export default PayButton;
