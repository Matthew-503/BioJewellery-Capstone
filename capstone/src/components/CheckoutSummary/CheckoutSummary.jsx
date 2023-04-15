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
    

    const cartItems = [
      { name: "Cerrado Leaf Bracelet", quantity: 1}
    ]

    // const email = 'blossomshini@gmail.com';

    const checkout = async () => {
    try {

      //a fetch request to backend
      const response = await fetch("http://localhost:8001/checkout",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'cartItems': cartItems})
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
    <div className='checkout__summary'>
      <div className='checkout__summary-header'>
        <div>Subtotal: CA${subTotal}</div>
      </div>
      

      <div className='order__button'>
        <button
            className='order__button-submit'
            onClick={ () => {checkout()}}
        >
            Proceed to pay <FaShoppingCart className='order__button-icon' />
        </button>
      </div>

    </div>
  )
}

export default CheckoutSummary
