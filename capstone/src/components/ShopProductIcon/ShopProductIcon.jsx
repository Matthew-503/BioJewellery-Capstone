import React from 'react';


// import images from '../../constants/images';
import './ShopProductIcon.css';

const ShopProductIcon = ({ productImage,productTitle, productPrice }) => {
    return (
        
        <div>
            <div>
                <img src={productImage} alt="" />
            </div>
           <div>
                <p>{productTitle}</p>
                <p>{productPrice}</p>
           </div>
        </div>
    );
};

export default ShopProductIcon;