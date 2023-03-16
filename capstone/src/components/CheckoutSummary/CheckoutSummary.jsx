// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This is checkout Summary component. 
//Displays subtotal, tax, total and proceed to pay button
//POSTCONDITION: navigate to Stripe payment gateway

import React from 'react'
import './CheckoutSummary.css';
import { useSelector } from "react-redux";

function CheckoutSummary() {
    const subTotal = useSelector((state) => state.cart.subTotal);
    const gstPercent = useSelector((state) => state.gst);

    function calculateTax() {
      return (subTotal * (gstPercent/100));
    }

    function calculateTotal() {
      return (subTotal + (subTotal * (gstPercent/100)));
    }

    return (
    <div>
      <div>Subtotal: ${subTotal}</div>
      <div>Tax: ${calculateTax()}</div>
      <div>Order Total: ${calculateTotal()}</div>
      <button>Proceed to Pay</button>
    </div>
  )
}

export default CheckoutSummary
