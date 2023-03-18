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
  
    const {subTotal, cartProducts} = useSelector((state) => state.cart);
    const gstPercent = useSelector((state) => state.gst);

    function calculateTax() {
      return (subTotal * (gstPercent/100));
    }

    function calculateTotal() {
      return (subTotal + (subTotal * (gstPercent/100)));
    }

    const checkout = async () => {
      //a fetch request to backend
      await fetch('http://localhost:8001/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cartItems: cartProducts})
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
    <div>
      <div>Subtotal: CA${subTotal}</div>
      <div>Tax: CA${calculateTax()}</div>
      <div>Order Total: CA${calculateTotal()}</div>
      <button onClick={checkout()}>Proceed to Pay</button>
    </div>
  )
}

export default CheckoutSummary
