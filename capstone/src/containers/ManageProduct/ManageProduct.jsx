import React from 'react';
import Form from 'react-bootstrap/Form';
//import { EmployeeProduct } from '../../components';
import { EmployeeMenu } from '../../components';
import { AiOutlinePlus } from "react-icons/ai";

import './ManageProduct.css';

const ManageProduct = () => {
    return (
        <div className="app__center">
            <EmployeeMenu />

            <div className="employee__add-products">
                <AiOutlinePlus />
            </div>

            <div className="employee__product-search">
            <div class="search__container">
                    <p class="search__title">
                        Go ahead, hover over search
                    </p>
                    <input type="text" class="search__input" placeholder="Search"></input>
                </div>

                <div class="credits__container">
                    <p class="credits__text">Background color: Pantone Color of the Year 2016 <a href="https://www.pantone.com/color-of-the-year-2016" class="credits__link">Rose Quartz</a></p>
                </div>
            </div>

            <div className="employee__product">
                {/* <EmployeeProduct /> */}
            </div>

        </div>
    )
}

export default ManageProduct;