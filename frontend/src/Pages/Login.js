import axios from 'axios';
import React,{useState} from 'react'
import Swal from 'sweetalert2';
import { useHistory} from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Login = () => {
const history = useHistory();

  const[Login,setLogin] = useState({
    email: '',
    password: ''
  })
  
  const handleInput=(e)=>{
    e.persist();
    setLogin({...Login,[e.target.name]:e.target.value})
  }
  const[error,setError] = useState({
    errorList:[]
  })
  const data ={
    email: Login.email,
    password: Login.password
  }
const handleSubmit = async (e)=>{
  e.preventDefault();
  const res = await axios.post('http://127.0.0.1:8000/api/login',data);
  if(res.data.status === 200){
    Swal.fire(
      'Good job!',
      res.data.message,
      'success'
    )
    console.log(res.data)
    localStorage.setItem('token',res.data.token)
    localStorage.setItem('user',res.data.user.name)
    localStorage.setItem('role',res.data.role[0].role_name)
    setLogin({email:'',password:''})
    setError({erroList:[]})
    history.push('/');
  }
  else if(res.data.status ===422){
    setError({...error,errorList:res.data.errors})
  }
  
}


  return (
          <div>
       <Navbar />
              <div className="row" >
  <form classname="col s12" onSubmit={handleSubmit}>
    <div className="row">
      <div className="input-field col s6">
      <i className="material-icons prefix">mail</i>
        <input id="email" type="text" className="validate" name="email"  onChange={handleInput}/>
        <label for="email">Email</label>
       
      </div>
    </div>

    <div className="row">
      <div className="input-field col s6">
      <i className="material-icons prefix">password</i>
        <input id="password" type="password" className="validate" name="password"  onChange={handleInput}/>
        <label for="password">Password</label>
       
      </div>
  </div>

    <button className="btn waves-effect waves-light" type="submit" name="action" >Submit
  <i className="material-icons right">send</i>
</button>
      
  </form>
</div>
              
          </div>
      )
  }

export default Login
