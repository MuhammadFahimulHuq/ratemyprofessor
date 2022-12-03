import React, { useEffect } from 'react'
import FacultyCard from '../components/FacultyCard';
import {useDispatch, useSelector} from 'react-redux'
import { getFaculty } from '../actions/userAction';
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row,Col} from 'react-bootstrap'
const HomeScreen = () => {
const dispatch = useDispatch()
  const getAllFaculty = useSelector(state => state.getAllFaculty)
const {loading,error,faculties} = getAllFaculty
useEffect(()=>{
dispatch(getFaculty())
},[dispatch])
return (
<>
{loading && <Loader />}
{error && <Message variant="danger">{error}</Message>}
<Row>
{faculties.map(faculty=>(
  <Col className="" key={faculty.id}><FacultyCard faculty={faculty}/></Col>
))}
</Row>
</>
  )
}
export default HomeScreen;