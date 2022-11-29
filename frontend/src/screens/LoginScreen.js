import{React,useState} from 'react'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
import{useDispatch,useSelector} from'react-redux'
import {login} from '../actions/userAction'

const LoginScreen = () => {
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const dispatch = useDispatch()
const userLogin = useSelector(state =>state.userLogin)
const {loading,error,userInfo} = userLogin
const FormSubmit=(e)=>{
  e.preventDefault()
  dispatch((login(email,password)))
}

  return (
    <Container>
        <Row>
            <Col xs={6} className="m-auto">
            <h1>Login</h1>
            <Form onSubmit={FormSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <Form.Text className="text-muted">
  
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
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