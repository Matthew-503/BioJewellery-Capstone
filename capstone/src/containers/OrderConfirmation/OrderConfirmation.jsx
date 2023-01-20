/**
* Author: Buola Achor, Ling Shan Matthew Ng, Nicholas Proc, Naomy Tung, Srineethi Gurumurthi Girahhalskhmi 
* Version 0.1
* Date: 19/1/2023
*
* Description: Thank you for ordering page. 
* Precondition: User purchased a product and confirmed the order
* Postcondition: Thank you page is displayed with correct information about product and user
*
 */

import React from 'react'
import './OrderConfirmation.css';
import productpic from '../../assets/gallery01.png'

const OrderConfirmation = () => {
  return (
    <div>
      <h1> Thank you for ordering</h1> {/* just to mention the name of the page, but this would be the subheading of the navbar*/}
      
      <br></br>
      <form className="order_confirmation__form">
        <div className="order_confirmation-info_box"> 
          <h2>Shipping Details</h2>

          <label className="order_confirmation__description">
            First Name:
          </label>
          <label className="order_confirmation__desc order_confirmation__first">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Last Name:
          </label>
          <label className="order_confirmation__desc order_confirmation__last">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Phone Number:
          </label>
          <label className="order_confirmation__desc order_confirmation__phone">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Street:
          </label>
          <label className="order_confirmation__desc order_confirmation__street">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            City:
          </label>
          <label className="order_confirmation__desc order_confirmation__city">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Province:
          </label>
          <label className="order_confirmation__desc order_confirmation__province">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Postal Code:
          </label>
          <label className="order_confirmation__desc order_confirmation__PC">
            Example
          </label>
          <br></br>

          <label className="order_confirmation__description">
            Country:
          </label>
          <label className="order_confirmation__desc order_confirmation__country">
            Example
          </label>
        </div>
        
        <div className="order_confirmation-info_box"> 
          <h2>Payment Method</h2>
          <label className="order_confirmation__description">
            Number Card:
          </label>
          <label className="order_confirmation__desc order_confirmation__cardno">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            CVV:
          </label>
          <label className="order_confirmation__desc order_confirmation__cvv">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            Name:
          </label>
          <label className="order_confirmation__desc order_confirmation__name">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            Expiry Date:
          </label>
          <label className="order_confirmation__desc order_confirmation__expiry_date">
            Example
          </label>
        </div>

        <div className="order_confirmation-info_box"> 
          <h2>Product Details</h2>
          <label className="order_confirmation__description">
            Product Name:
          </label>
          <label className="order_confirmation__desc order_confirmation__product_name">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            Qty:
          </label>
          <label className="order_confirmation__desc order_confirmation__qty">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            Price:
          </label>
          <label className="order_confirmation__desc order_confirmation__price">
            Example
          </label>
          <br></br>
          <label className="order_confirmation__description">
            Description:
          </label>
          <label className="order_confirmation__desc order_confirmation__description">
            Example
          </label>
          <br></br>
          <img src={productpic} alt="product_image"/>
        </div>
    
    </form>
      
    </div>
  )
}

export default OrderConfirmation
