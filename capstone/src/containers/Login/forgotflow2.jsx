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
        
        <div>
            <h2>Forgot Password</h2>
            <h5>Don't worry. We've got you.</h5>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
          />
        </div>     
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>    
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Save new Password
          </button>
        </div>
        </form>
    )
  }
}