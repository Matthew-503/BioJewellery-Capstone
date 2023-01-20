import React, { Component } from 'react'
import './AddProduct.css';

class AddProduct extends Component {
   
    render() 
    { 
        return(
            <div className='flex__center'>
            <form>
            <h1>Add Product</h1>
            <p>Product Information</p>
                <label>
                    Product Name<br/>
                    <input name="name" type="text" placeholder="Product Name"/><br/>
                </label>
                
                <label>
                    Product Description<br/> 
                    <input name="descrption" type="text" placeholder="Description"/><br/>
                </label>
                
                <label>
                    Price <br/>
                    <input name="price" type="number" placeholder="Price per unit"/><br/>
                </label>
                
                <label>
                    In-Stock<br/>
                    <input name="stock" type="number" placeholder="Number of Products in Stock"/><br/>
                </label>
                
                <div>
                    <button className='custom__button' >Save</button>
                    <button className='custom__button'>Cancel</button>  
                </div>             
            </form>     
            </div>
    );
    }
}

export default AddProduct;