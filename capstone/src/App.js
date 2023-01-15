import React from 'react';

// import { AboutUs, Footer, Gallery, Header, } from '../src/containers';
// import { Navbar } from './components';
// components are things that are reused in multiple containers

import './App.css';
import { Navbar } from './components';
import { Header, Gallery, Benefits, Footer, ShopCategory, Blog } from './containers';

const App = () => (
    <div>
        <Navbar />
        <Header />
        <Gallery />
        <Benefits />
        <Footer />

        <Navbar />
        <Blog />
    </div>
);

export default App;