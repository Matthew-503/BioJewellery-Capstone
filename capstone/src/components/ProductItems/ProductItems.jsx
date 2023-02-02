import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';

const ProductItems = ({ imgUrl, price, text, url }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <Link to={url}>
                    <img src={imgUrl} alt="blog" />
                </Link>

            </div>

            <div className="gpt3__blog-container_article-content">
                <div>
                    <Link to={url}>
                        <h3>{text}</h3>
                    </Link>
                    <h4>${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems