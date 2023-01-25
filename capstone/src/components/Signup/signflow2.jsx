import React, { Component } from 'react'
import welcome from '../assets/welcome.jpg';
import logo from '../assets/logo.jpg';

export default class SignUp extends Component {
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
        <h3>Create an account</h3>
        
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apartment name, House number"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Street address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="City"
          />
        </div>
        
        <p className="forgot-password text-right">
          Already have an account?<a href="/sign-in">Log in</a>
        </p>
      </form>
    )
  }
}