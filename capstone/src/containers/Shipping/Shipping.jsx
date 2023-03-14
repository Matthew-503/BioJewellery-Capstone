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
import productpic from '../../assets/gallery01.png'
import { SubHeading } from '../../components';

import './Shipping.css';

const Shipping = () => {
    return (
        <div className='confirm app__section-padding'>
            <div className='confirm__headtext'>
                <SubHeading title={"Thank you for ordering"} />

                <br></br>
                <table className='confirm__shipping-table'>
                    <tr>
                        <th rowSpan={6}>Shipping Details</th>
                    </tr>
                    <tr>
                        <td>Bob</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>123 456 789</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>17 Ave SW</td>
                    </tr>
                    <tr>
                        <td>Calgary</td>
                        <td>T3J 0H8</td>
                    </tr>
                    <tr>
                        <td>AB</td>
                        <td>Canada</td>
                    </tr>
                </table>

                <table className='confirm__payment-table'>
                    <tr>
                        <th rowSpan={5}>Payment Details</th>
                    </tr>
                    <tr>
                        <td>123 4567 8910</td>
                    </tr>
                    <tr>
                        <td>Bob Lee</td>
                    </tr>
                    <tr>
                        <td>012</td>
                    </tr>
                    <tr>
                        <td>01/29</td>
                    </tr>
                </table>

                <table className='confirm__product-table'>
                    <tr>
                        <th rowSpan={5}>Product Details</th>
                    </tr>
                    <tr>
                        <td>Gold leaf necklace</td>
                        <td rowSpan={5}>
                            <img src={productpic} alt="product_image" />
                        </td>
                    </tr>
                    <tr>
                        <td>1 qty</td>
                    </tr>
                    <tr>
                        <td>$1000.00</td>
                    </tr>
                    <tr>
                        <td>Warranty: 1 year from purchase</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Shipping
