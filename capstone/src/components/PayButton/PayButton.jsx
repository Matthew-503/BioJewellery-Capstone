// Author: Buola, Sri
// Version: 
// Date: 

// Description: This component is for "proceed to checkout" button

import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {url} from "../../containers";

import { FaShoppingCart } from 'react-icons/fa';

import './PayButton.css';

const PayButton = ({cartProductName}) => {


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