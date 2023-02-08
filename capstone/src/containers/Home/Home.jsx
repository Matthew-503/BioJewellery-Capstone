import React from 'react'
import { Header, Gallery, Follow, Benefits, ProductDetail, Login } from '../../containers';
const Home = () => {
  return (
    <div>

      <Header />
      <Gallery />
      {/* <Video /> */}
      <Benefits />
      <Follow />
      <Login />
    </div>
  )
}

export default Home
