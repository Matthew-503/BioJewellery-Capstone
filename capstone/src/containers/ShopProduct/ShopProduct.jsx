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

import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset  } from '../../features/productFeatures/productSlice';
import { useEffect} from "react";
import './ShopProduct.css';

const ShopProduct = () => {


    const dispatch = useDispatch();

    const { products, isError, message } = useSelector((state) => state.products)

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if(products.length === 0){
            dispatch(getProducts())
        }
        
        console.log("Products: " + products);

      
    }, [products, isError, message, dispatch])
    return (
        <div className="product product__section-padding" id="blog">

            {/* <SubHeading title="Chef's word" /> */}

            <div className="product__container">
                <div className="product__container-card">
                    {products.length > 0 ? (
                        <div>
                            {products[0].map((product) => (<ProductItems
                                key={product._id}
                                product={product}
                                imgUrl={gallery01}
                            />))}
                        </div>
                    ) : (<h3>You have not set any products</h3>)}
                </div>
            </div>
        </div >
    )
}

export default ShopProduct