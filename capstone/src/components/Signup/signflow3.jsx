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
            placeholder="State/Province"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Country"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Postal code"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account?<a href="/sign-in">Log in</a>
        </p>
      </form>
    )
  }
}