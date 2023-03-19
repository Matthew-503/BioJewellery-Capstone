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
import { Rating, ReviewBlock } from '../../components';
import './ProductDetail.css';
import SwitchDetail from '../../components/SwitchProductDetail/SwitchProductDetail';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductByName, reset } from '../../features/productFeatures/productSlice';
const productImage = images.gallery01;

const ProductDetail = ({ productid }) => {



    const { selectedProduct, isError, message } = useSelector((state) => state.products);

    let { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getProductByName(name))

        return () => {
            dispatch(reset())
        }
    }, [isError, message, dispatch])
    var price = null;
    var NameName = "test";
    var stars = 3;

    //Default Variable for review block
    var customerDefaultName = "Very Cool Name";
    var customerDefaultTitle = "Default Title";
    var customerDefaultDescription = "Default Description";

    return (
        <div className="app__gallery app__section-padding">
            <div className="detail__headtext">

                <SubHeading title={selectedProduct.name} />
                <img
                    className="detail__product-image"
                    src={images.product1}
                    alt="product image"
                />
                <div className='detail__sidebar'>
                    <ProductDetailBar />
                </div>

                <div>
                    <SwitchDetail />
                </div>
            </div>
        </div>
    )
};


export default ProductDetail;