// import React, { Component } from 'react';
// import { images } from '../../constants';

// export default class Login extends Component {
//   render() {
//     return (
//       <form>
//         <div>
//           {/* <img src={welcome} alt="Welcome image" width={962} height={963} /> */}
//           <img
//             className="app__gallery-images_card "
//             src={images.welcome}
//             alt="product image"
//           />
//         </div>
//         <div>
//           <h2>Turn your dreams into reality</h2>
//           <h5>Start for free and get attractive offers</h5>
//         </div>
//         <div>
//           {/* <img src={logo} alt="Logo image" width={300} height={300} /> */}
//         </div>
//         <h3>Login</h3>
//         <p>Welcome back! Please enter your details.</p>
//         <div>
//           <p>
//             Sorry email or password incorrect. Please try again or create a new account.
//           </p>
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Username"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//           />
//         </div>
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember for 30 days
//             </label>
//           </div>
//         </div>
//         <div className="forgot-password text-right">
//           <a href="#">Forgot Password?</a>
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Login
//           </button>
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//         </div>
//         <div>
//           <a href="#">Continue as guest user...</a>
//         </div>
//       </form>
//     )
//   }
// }

// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A functional login page that allows user to login 
// Postcondition: Reformatting the login page

// Input: Currently no input available
// Output: Currently no specific output


import React from 'react';
import { images } from '../../constants';
import { Link } from "react-router-dom"

// import './Header.css';

const Login = () => (
    <div className='app__section-padding ' id='home'>
        <div className="header-overlay app__flex-center">
            <img src={images.logo} alt="login_logo" />
        </div>

        {/* <div className='app__wrapper-info'>
            <h1 className='header__h1'>Discover the beauty of the BioJewerly Collection</h1>
            <p className='app__p' style={{ margin: '2rem 0' }}>
                Explore different categories. Find the best deals.
            </p>
            <Link to="/categories">
                <button type='button' className='app__button'>
                    Shop Now 
                </button>
            </Link>
            
        </div> */}
    </div>
);

export default Login;