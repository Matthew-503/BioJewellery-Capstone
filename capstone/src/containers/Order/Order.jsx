// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This is Order Summary Page before Payment. 
//Displays Address component, orderTotal and checkout button
//POSTCONDITION: navigate to Stripe payment gateway

import './Order.css';
import React from "react";
import Address from '../../components/Address/Address'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

import { useSelector } from "react-redux";

const Order = () => {
    
    const orderTotal = useSelector((state) => state.cart.orderTotal);
    return (
        <>
           <Address/> 
           <CheckoutSummary />
        </>
    );
};

export default Order