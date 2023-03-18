    // Author: Ling Shan Matthew Ng, Naomy Tung
// Version 1.o
// Date: 25/1/2023


// Description: Contains the navbar and footer, and routing 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Have figured out which component is causing issues

import React from 'react';
import { Link, Route, Routes } from "react-router-dom"
import { Navbar, AddProduct, EditProduct, EmployeeMenu, Uploader } from './components';
import { Home, Header, Gallery, Benefits, Footer, Follow, ShopProduct, ProductDetail, OrderConfirmation, ShoppingCart, UserNavigation, ShopCategory, Feed, Login } from './containers';

// components are things that are reused in multiple containers

import './App.css';
import PaymentCancellation from './containers/PaymentCancellation/PaymentCancellation';
import OrderPreview from './containers/OrderPreview/OrderPreview';

//testing address component - need to be removed
import Address from './components/Address/Address';

const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<UserNavigation />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories">
                    <Route index element={<ShopCategory />} />
                    <Route path=":cat" element={<Feed />} />
                </Route>
                <Route path="/products">
                    <Route index element={<ShopProduct />} />
                    <Route path=":name" element={<ProductDetail />} />
                </Route>

                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/success" element={<OrderConfirmation />} />
                <Route path="/cancel" element={<PaymentCancellation />} />
                <Route path="/orderpreview" element={<OrderPreview />} />
                <Route path="/addresses" element={<Address />} />
            </Route>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin">
                
                 <Route index element={<HomeAdmin />} />              
            </Route> */}

            {/* Route specifications for the Login Page
                <Route path="/login" element={<LoginTemplate />}>
                <Route index element={<Blog />} /> 
                <Route path=":cat" element={<ShopProduct />} />  
                //dont forget to add <Outlet context(){varname: "whatever"}/> in the Login Template     
                //in the other page to use the context const obj = useOutletContext();   
                //use the replace in the Link so it will go back 2 pages   
            </Route> */}

            {/*Route for the not found page)
             <Route path="*" element={<NotFound />}/> 
            */}
        </Routes>

        {/* The uploader is causing the spacing issues, have to comment out everything inside css
            Side note: Avoid using a <main> tag.*/}
        {/* <Navbar />
        <Uploader />  */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <AddProduct />  */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EditProduct />  */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EmployeeMenu /> */}
    </div>
);

export default App;