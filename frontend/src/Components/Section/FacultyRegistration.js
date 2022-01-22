import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar';

const FacultyRegistration = () => {
    const history = useHistory();
    const [Student,setStudent] = useState({
      name: '',
      email:'',
      password:'',
      password_confirmation:'',
      phoneNo:'',
    })
  const [error,setError]=useState({
    errorList:[]
  })
   const handleInput=(e)=>{
  e.persist();
  setStudent({...Student,[e.target.name]:e.target.value})
   }
  const data ={
    name: Student.name,
    email:Student.email,
    password:Student.password,
    password_confirmation:Student.password_confirmation,
    phoneNo:Student.phoneNo
  }
    
  
  
  const handleSubmit = async (e)=>{
     e.preventDefault();
    console.log(data);
     const res = await axios.post('http://127.0.0.1:8000/api/faculty/register',data);
     if(res.data.status === 200){
      console.log(res.data)
      Swal.fire(
        'Good job!',
        res.data.message,
        'success'
      )
      setStudent({
        name: '',
        email:'',
        password:'',
        password_confirmation:'',
        phoneNo:'',
      });
      setError({
        errorList:[]
      })
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('user',res.data.user.name)
      localStorage.setItem('role',res.data.role[0].role_name)
      history.push('/');
     }
     else if(res.data.status ===422){
   setError({...error,errorList:res.data.errors})
     }
   
   }
  

    return (
        <div>
            <Navbar />
            <div class="row">
                <form class="col s12" onSubmit={handleSubmit}>

             
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">account_box</i>
                      <input id="icon_prefix" type="text" className="validate" name="name" onChange={handleInput}/>
                      <label for="icon_prefix" >Full Name</label>
                      <span className="red-text text-darken-2">{error.errorList.name}</span>
                    </div>
                    <div class="input-field col s6">
                    <i class="material-icons prefix">mail</i>
                      <input id="email" type="text" className="validate" name="email"  onChange={handleInput}/>
                      <label for="email">Email</label>
                      <span className="red-text text-darken-2">{error.errorList.email}</span>
                    </div>
                  </div>
            
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">password</i>
                      <input id="password" type="password" className="validate" name="password"  onChange={handleInput} />
                      <label for="password">Password</label>
                      <span className="red-text text-darken-2">{error.errorList.password}</span>
                    </div>
                    <div class="input-field col s6">
                    <i class="material-icons prefix">password</i>
                      <input id="password_confirmation" type="password" className="validate" name="password_confirmation"  onChange={handleInput}/>
                      <label for="password_confirmation">Password Confirmation</label>
                      <span className="red-text text-darken-2">{error.errorList.password_confirmation}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">phone_in_talk</i>
                      <input id="phoneNo" type="tel" className="validate" name="phoneNo"  onChange={handleInput}/>
                      <label for="phoneNo">Contact Number</label>
                      <span className="red-text text-darken-2">{error.errorList.phoneNo}</span>
                    </div>
            
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
                    
                </form>
              </div>
        </div>
    )
}

export default FacultyRegistration
