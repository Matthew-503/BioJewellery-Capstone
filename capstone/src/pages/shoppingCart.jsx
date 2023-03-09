import React from 'react'
import {useDispatch} from 'react-redux'
import {updateCartItem, deleteCartItem} from '../features/cartFeatures/cartSlice'

function shoppingCart() {
  return (
    <div>
      <h3></h3>
      <button onClick={() => dispatch(deleteCartItem(cart._id))} className="close">X</button>
    </div>
  )
}

export default shoppingCart
