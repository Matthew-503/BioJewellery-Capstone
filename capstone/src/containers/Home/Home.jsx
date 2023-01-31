import React from 'react'
import { Header, Gallery, Follow, Benefits, ProductDetail, ShoppingCart } from '../../containers';
const Home = () => {
  return (
    <div>

      <Header />
      <Gallery />
      {/* <Video /> */}
      <Benefits />
      <Follow />
      <ShoppingCart />
    </div>
  )
}

export default Home
