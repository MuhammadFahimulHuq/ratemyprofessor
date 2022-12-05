import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {facultyDetailById} from '../actions/userAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Container,Row,Col,Button} from 'react-bootstrap'
export const FacultyDetailScreen = () => {
  const facultyDetail = useSelector(state=>state.facultyDetail) 
  const {loading,error,faculty} = facultyDetail 
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(facultyDetailById(id))
  },[dispatch,id])
  return (
    <>
    {loading && <Loader />}
    {error && <Message variant="danger">{error}</Message>}
    <Container>
      <Row>
        <Col className="d-flex flex-column col-3">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"  alt=""/>
        <Button variant="outline-primary" className="mt-1">Upload Photo</Button>
        </Col>
        <Col>
         <p>{faculty.name}</p>   
          <p>Email : {faculty.email}</p> 
        </Col>
      </Row>
    </Container>
  
    </>
  )
}
