import React from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';

import './PayButton.css';

const PayButton = ({cartProductName}) => {


    const handleCheckout = () => {
        console.log(cartProductName)
        axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
            cartProductName,
        })
        .then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url;
            }
        })
        .catch((err) => console.log(err.message));
    };

    return (
        <>
                <button className="cartbar__button" onClick={() => handleCheckout ()}> <FaShoppingCart />  Proceed to Checkout</button>
        </>
    )

}

export default PayButton;