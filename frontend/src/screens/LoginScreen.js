import{React,useState,useEffect} from 'react'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
import{useDispatch,useSelector} from'react-redux'
import {login} from '../actions/userAction'
import { useNavigate } from 'react-router-dom';
import {Toast} from '../components/Toast';
import Loader from '../components/Loader'
import FormError from '../components/FormError';
import Message from '../components/Message'

const LoginScreen = () => {

const navigate = useNavigate()  
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const dispatch = useDispatch()
const userLogin = useSelector(state =>state.userLogin)


const {loading,error,userInfo} = userLogin
const FormSubmit=(e)=>{
  e.preventDefault()
  dispatch((login(email,password)))
}
useEffect(()=>{
if(userInfo){ 
  Toast.fire({
    icon: 'success',
    title: userInfo.message,
  })
navigate('/')
}
},[userInfo,navigate,Toast])
  return (
    <Container>
    {loading && <Loader />}
        <Row>
            <Col xs={6} className="m-auto">
            <h1>Login</h1>
            {error && error.message ? (<Message variant="danger">{error.message}</Message>):(<></>)}
            <Form onSubmit={FormSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
      {error && error.email ? (<FormError>{error.email}</FormError>):(<></>)}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      {error && error.password ? (<FormError>{error.password}</FormError>):(<></>)}
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember Me" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Sign In
    </Button>
  </Form>
            </Col>
        </Row>

  </Container>
  )
}
export default LoginScreen;