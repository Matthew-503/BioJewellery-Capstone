import React from 'react'
import { Header, Gallery, Follow, Benefits, ProductDetail } from '../../containers';
const Home = () => {
  return (
    <div>

      <Header />
      <Gallery />
      {/* <Video /> */}
      <Benefits />
      <Follow />
      <ProductDetail />
    </div>
  )
}

export default Home
