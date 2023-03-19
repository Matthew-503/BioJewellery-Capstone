// Author: Buola Achor, Matthew, Sri
// Version 1.1
// Date: 15/03/2023

// Description: This is Shopping cart page. 
// Precondition: A home page and product page for users to add items in cart 
// Postcondition: Proceed to check out button that directs to order summary page

import './ShoppingCart.css';
import { CartContent, CartSummary } from '../../components';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const ShoppingCart = () => {

    return (
        <div className="cart app__section-padding">
            <div className='cart__headtext'>
                <h1>
                    ShoppingCart <HiOutlineShoppingBag className='cart__icons' />
                </h1>

            </div>

            <div className='detail__sidebar'>
                <CartSummary />
            </div>

            <div className="shop__cartbody">
                <CartContent />
            </div>
        </div>

    );
};

export default ShoppingCart