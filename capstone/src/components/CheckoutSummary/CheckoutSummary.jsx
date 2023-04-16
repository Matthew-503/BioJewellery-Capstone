// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This component displays the subTotal, tax, total and proceeds to Stripe payment. 

import React from 'react'
import './CheckoutSummary.css';
import { useSelector } from "react-redux";
import { FaShoppingCart } from 'react-icons/fa';

function CheckoutSummary() {

  const { subTotal } = useSelector((state) => state.cart);
  const gstPercent = useSelector((state) => state.gst);

  const cartItems = [
    { name: "Cerrado Leaf Earring", quantity: 1 }
  ]

  function calculateTax() {
    return (subTotal * (gstPercent / 100));
  }

  function calculateTotal() {
    return (subTotal + (subTotal * (gstPercent / 100)));
  }

  const checkout = async () => {
    try {

      //a fetch request to backend
      const response = await fetch("http://localhost:8001/checkout", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartItems })
      })

      if (!response.ok) {
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
    <div className='checkout__summary'>
      <div className='checkout__summary-header'>
        <div>
          <h3>Subtotal:</h3>
          <h3>Tax:</h3>
          <h3>Order Total:</h3>
        </div>

        <div>
          <h3>CA${subTotal}</h3>
          <h3>CA${calculateTax()}</h3>
          <h3>CA${calculateTotal()}</h3>
        </div>
      </div>


      <div className='order__button'>
        <button
          className='order__button-submit'
          onClick={() => { checkout() }}
        >
          Proceed to pay <FaShoppingCart className='order__button-icon' />
        </button>
      </div>

    </div>
  )
}

export default CheckoutSummary
