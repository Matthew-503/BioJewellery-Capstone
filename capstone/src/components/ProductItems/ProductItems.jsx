import React from 'react';
import './ProductItems.css';
const ProductItems = ({ imgUrl, product }) => {

    

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
                        {product.name}
                    </Link>
                    <h4>${product.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProductItems