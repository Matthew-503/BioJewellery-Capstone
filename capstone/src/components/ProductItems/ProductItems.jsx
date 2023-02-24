import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';
import {useDispatch } from "react-redux";
import { getProduct} from '../../features/productFeatures/productSlice';
const ProductItems = ({ imgUrl, product }) => {

    const dispatch = useDispatch();

    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <Link to={"/products"}>
                    <img src={imgUrl} alt="blog" />
                </Link>

            </div>

            <div className="gpt3__blog-container_article-content">
                <div>
                    <Link to={"/products/" + product.name} >
                        <button onClick={() => this.state=dispatch(getProduct(product._id))}>{product.name}</button>
                    </Link>
                    <h4>${product.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems