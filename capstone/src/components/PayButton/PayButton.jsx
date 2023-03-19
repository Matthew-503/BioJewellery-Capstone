// Author: Buola, Sri
// Version: 
// Date: 

// Description: This component is for "proceed to checkout" button

import React from 'react';
import './PayButton.css';
import { FaShoppingCart } from 'react-icons/fa';

const PayButton = () => {

    {/* const handleCheckout = () => {
        console.log(cartProductName)
            axios
                .post('${url}/stripe/create-checkout-session', {
                    cartProductName,
                })
                .then((res) => {
                    if(res.data.url) {
                        window.location.href = res.data.url;
                    }
                })
                .catch((err) => console.log(err.message));
    }; */}

    // const checkout = async () => {
    //     await fetch ('http://localhost:4000/checkout', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items:cartProductName})
    //     }).then ((response) => {
    //         return response.json();
    //     }).then ((response) => {
    //         if(response.url) {
    //             window.location.assign(response.url);
    //         }
    //     })
    // }

    const checkout = () => {

    }
    
    return (
        <>
                <button className="cartbar__button" onClick={() => checkout ()}> <FaShoppingCart />  Proceed to Checkout</button>
        </>
    )

}

export default PayButton;