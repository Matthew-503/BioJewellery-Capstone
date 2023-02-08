import React from 'react';

import './EmployeeProduct.css';

const EmployeeProduct = () => {
    return (
        <div className="app__center">

            <div className="employee__product-container">

                <h1 className="employee__product-name">Product Name: xxxx</h1>
                <h1 className="employee__product-price">Price:100</h1>

                <ul className="employee__product-details">
                    <li className="employee__product-desc">Description</li>
                    <li className="employee__product-stock">Stock:?</li>
                </ul>

                <div className="employee__product-icon-container">
                    <button className="custom__button" >Save</button>
                </div>


            </div>
        </div>
    )
}