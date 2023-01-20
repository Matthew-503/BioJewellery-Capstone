import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    
    return(
        <AddProduct className="flex__center">
            <div>
                <form>
                <h1>Add Product</h1>
                <p>Product Information</p>
                    <label>
                        Product Name
                        <input name="name" type="text" placeholder="Product Name"/>
                    </label>
                    
                    <label>
                        Product Description 
                        <input name="descrption" type="text" placeholder="Description"/>
                    </label>
                     
                    <label>
                        Price 
                        <input name="price" type="number" placeholder="Price per unit"/>
                    </label>
                     
                    <label>
                        In-Stock
                        <input name="stock" type="number" placeholder="Number of Products in Stock"/>
                    </label>
                    
                    <div>
                        <button className='custom__button'>Save</button>
                        <button className='custom__button'>Cancel</button>
                    </div>                    
                </form>
            </div>            
        </AddProduct>
    );
};

export default AddProduct;