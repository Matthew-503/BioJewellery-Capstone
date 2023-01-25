import React, { Component } from 'react'
import welcome from '../assets/welcome.jpg';
import logo from '../assets/logo.jpg';

export default class Login extends Component {
  render() {
    return (
      <form>
        <div>
            <img src={welcome} alt="Welcome image" width={962} height={963}/>
        </div>
        <div>
            <h2>Turn your dreams into reality</h2>
            <h5>Start for free and get attractive offers</h5>
        </div>
        <div>
        <img src={logo} alt="Logo image" width={300} height={300}/>
        </div>
        <h3>Login</h3>
        <p>Welcome back! Please enter your details.</p>
        <div>
          <p>
            Sorry email or password incorrect. Please try again or create a new account.
          </p>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember for 30 days
            </label>
          </div>
        </div>
        <div className="forgot-password text-right">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <div>
            <a href="#">Continue as guest user...</a>
        </div>        
      </form>
    )
  }
}