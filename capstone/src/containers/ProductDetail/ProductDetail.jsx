// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for display the information of a product
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input 
// N/A
// Output
// Product Detail Container

import React from 'react';

import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';

import './ProductDetail.css';

const productImage = images.gallery01;

const ProductDetail = () => {
    return (
        <div className="app__gallery app__section-padding">
            <div className="detail__headtext">
                {/* <h3>{productName == null ? "Needs product name" : productName}</h3> */}
                <SubHeading title={"Product Name"} />
                <img
                    className="detail__image"
                    src={productImage}
                    alt="product image"
                />
                <ProductDetailBar />
            </div>
        </div>
    )
};


export default ProductDetail;