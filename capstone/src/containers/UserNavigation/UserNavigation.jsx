import React from 'react'
import { Outlet } from "react-router-dom";
import { Footer } from '../../containers';
import { Navbar } from '../../components';

const UserNavigation = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default UserNavigation
