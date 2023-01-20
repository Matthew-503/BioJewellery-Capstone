import React from 'react';

// import { AboutUs, Footer, Gallery, Header, } from '../src/containers';
// import { Navbar } from './components';
// components are things that are reused in multiple containers

import './App.css';
import { Navbar, CartItem, EmployeeMenu } from './components';
import { Header, Gallery, Benefits, Footer, ShoppingCart } from './containers';

const App = () => (
    <div>
        {/*
        <Header />
        <Gallery />
        <Benefits />
        <Footer /> 
        <SideMenu /> */}
        <ShoppingCart />
        <EmployeeMenu />
    </div>
);

export default App;