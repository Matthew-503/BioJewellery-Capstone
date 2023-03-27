// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This component displays the subTotal, tax, total and proceeds to Stripe payment. 

import React from 'react'
import './CheckoutSummary.css';
import { useSelector } from "react-redux";

function CheckoutSummary() {
  
    const { subTotal } = useSelector((state) => state.cart);
    const gstPercent = useSelector((state) => state.gst);

    const cartItems = [
      { name: "Cerrado Leaf Earring", quantity: 1}
    ]

    function calculateTax() {
      return (subTotal * (gstPercent/100));
    }

    function calculateTotal() {
      return (subTotal + (subTotal * (gstPercent/100)));
    }

    const checkout = async () => {
      try {

      //a fetch request to backend
      const response = await fetch("http://localhost:8001/checkout",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cartItems})
      })
      
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //converts response to JSON format and returns
      const data = await response.json();
      if (data.url) {
        window.location.assign(data.url);
      }
                
      } catch (error) {
        console.error('Error:', error);
      }
    }

    return (
    <div>
      <div>Subtotal: CA${subTotal}</div>
      <div>Tax: CA${calculateTax()}</div>
      <div>Order Total: CA${calculateTotal()}</div>
      <button onClick={() => {checkout()}}>Proceed to Pay</button>
    </div>
  )
}

export default CheckoutSummary
