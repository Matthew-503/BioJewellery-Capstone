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
                <ul className="">
                    <li className="">
                        <button>ASC</button>
                    </li>

                    <li className="">
                        <button>DSC</button>
                    </li>

                    <li className="">
                        <button>Price</button>
                    </li>
                    <li className="">
                        <button>Brand</button>
                    </li>
                </ul>
            </div>
            <div>
                <div className="app__gallery-images">
                    <div>
                        <h5>Products</h5>
                    </div>
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
