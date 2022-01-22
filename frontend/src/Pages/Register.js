
import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import { Link} from 'react-router-dom';





export default function Register() {

    return (
      <div>
       <Navbar />
                <Link to="/studentregister" >Student</Link>
                <Link to="/facultyregister">Faculty</Link>
      </div>
    )
  }

