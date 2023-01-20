import React from 'react';

// import { AboutUs, Footer, Gallery, Header, } from '../src/containers';
// import { Navbar } from './components';
// components are things that are reused in multiple containers

import './App.css';
//import { Navbar } from './components';
// import {Uploader} from './components';
// import { Header, Gallery, Benefits, Footer } from './containers';

import {AddProduct} from './components';
const App = () => (
    <div>
        {/* <Navbar />
        <Header />
        <Gallery />
        <Benefits />
        <Footer /> */}
        <AddProduct />
        {/* <Uploader /> */}
    </div>
);

export default App;