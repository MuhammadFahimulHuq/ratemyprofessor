import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import{useDispatch,useSelector} from 'react-redux'
import {register} from '../actions/userAction'
import { useNavigate } from 'react-router-dom';
import FormError from '../components/FormError'
import Message from '../components/Message'
import {Toast} from '../components/Toast'
import Loader from '../components/Loader'
const RegisterScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phoneNo,setPhoneNo] = useState('')
    const[password,setPassword]=useState('')
    const[password_confirmation,setPasswordConfirmation]=useState('')
    const[message,setMessage] = useState('')
    const userRegister = useSelector(state=>state.userRegister)
    const{loading,error,userInfo} = userRegister

useEffect(()=>{
if(userInfo){
    Toast.fire({
        icon:'success',
        title:userInfo.message
    })
    navigate('/')
}
},[userInfo,navigate,Toast])

const FormSubmit=(e)=>{
    e.preventDefault()
    if(password !==password_confirmation){
        setMessage('Confirm password do not match!')
    }
    else{
    dispatch(register(name,email,phoneNo,password,password_confirmation))

    }
}
  return (
    <Container>
        <Row>
            {loading && <Loader />}
            <Col xs={6} className="m-auto">
                <h2>Fill out the form to register now</h2>
                {error && error.message ? <Message variant="danger">{error.message}</Message>:(<></>)}
                <Form onSubmit={FormSubmit}>
                <Form.Group className="mb-3" controlId="name" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" name="name" value={name} onChange={e=>setName(e.target.value)} />
                {error && error.name ? <FormError>{error.name}</FormError>:(<></>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"  value={email} onChange={e=>setEmail(e.target.value)} />
                {error && error.email ? <FormError>{error.email}</FormError>:(<></>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone" >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" name="phoneNo" value={phoneNo} onChange={e=>setPhoneNo(e.target.value)} />
                {error && error.phoneNo ? <FormError>{error.phoneNo}</FormError>:(<></>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                {error && error.password ? <FormError>{error.password}</FormError>:(<></>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmpassword" >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter confirm password"  name="password_confirmation" value={password_confirmation} onChange={e=>setPasswordConfirmation(e.target.value)} />
                {message ? <FormError>{message}</FormError>:(<></>)}
                </Form.Group>
                <Button variant='primary' type="submit">Sign up</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
export default RegisterScreen;