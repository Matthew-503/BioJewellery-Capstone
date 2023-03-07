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

import { ProductItems } from '../../components';
// import { SubHeading } from '../../components';

import { gallery02, gallery03, gallery04, gallery01 } from './import.js';


import './ShopProduct.css';

const ShopProduct = () => {
    return (
        <div className="product product__section-padding" id="blog">

            {/* <SubHeading title="Chef's word" /> */}

            <div className="product__container">
                <div className="product__container-card">
                    <ProductItems

                        imgUrl={gallery02}
                        text="Popular"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery03}
                        text="Trending"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery04}
                        text="Most Saved"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery01}
                        text="On Sale"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery02}
                        text="Popular"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery03}
                        text="Trending"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery04}
                        text="Most Saved"
                        price={100}
                    />

                    <ProductItems

                        imgUrl={gallery01}
                        text="On Sale"
                        price={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopProduct