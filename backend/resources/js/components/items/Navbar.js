import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
          

<nav>
  <div className="nav-wrapper">
    <a href="/" className="brand-logo">RateMyProfessor</a>
    <ul className="right ">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
  
    </ul>
  </div>
</nav>

            </div>
        )
    }
}
