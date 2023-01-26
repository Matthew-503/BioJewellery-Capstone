// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for displaying a list of products
// Precondition: Must have a list of products
// Postcondition: Display a list of products

// Input 
// N/A
// Output
// ShopProduct Container

import React from 'react';

import ShopProductIcon from '../../components/ShopProductIcon/ShopProductIcon';
import { images } from '../../constants';

import './ShopProduct.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const ShopProduct = () => {

    return (
        <div>
            <div>
                <h1>Products</h1>
            </div>
            <div>
                <h3>Filter by: </h3>
            </div>
            <div>
                <div className="app__gallery-images">
                    <div>
                        <h5>Products</h5>
                    </div>
                    <br />
                    <div>
                        <ShopProductIcon
                            productImage={galleryImages[1]}
                            productPrice={99.99}
                            productTitle={"Default Product"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShopProduct;
