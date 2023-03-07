import React from 'react';
import './ProductItems.css';

const ProductItems = ({ imgUrl, price, text }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog" />
            </div>

            <div className="gpt3__blog-container_article-content">
                <div>
                    <h3>{text}</h3>
                    <h4>${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems