
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const token = localStorage.getItem('token')
  const user= localStorage.getItem('user')



  const Logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
  }

  return token?(<div>
     <nav>
            <div className="nav">
              <a href="/" className="brand-logo">RateMyProfessor</a>
              <ul className="right ">


        
              <li><Link to="/profile">{user}</Link></li>
                <li><a href="/login" onClick={Logout}>Logout</a></li>
 
               
            
              </ul>
            </div>
          </nav>
  </div>):(
    <div>

          
  
          <nav>
            <div className="nav">
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

export default Navbar
