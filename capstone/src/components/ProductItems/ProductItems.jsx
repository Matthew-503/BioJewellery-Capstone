import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';
const ProductItems = ({ imgUrl, product }) => {

    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <Link to={"/products/" + product.name} >
                    <img src={imgUrl} alt={product.name} />
                </Link>
            </div>

            <div className="gpt3__blog-container_article-content">
                <div>
                    <Link to={"/products/" + product.name} >
                        {product.name}
                    </Link>
                    <h4>${product.price.$numberDecimal}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems