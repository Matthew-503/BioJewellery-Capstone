// Author: Sri
// Version 1.0
// Date: 15/03/2023

//Description: This is Order Summary Page before Payment. 
//Displays Address component, orderTotal and checkout button
//POSTCONDITION: navigate to Stripe payment gateway

import './Order.css';
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
    
    const orderTotal = useSelector((state) => state.cart.orderTotal);
      
    return (
        <>
            

        </>
    );
};

export default Order