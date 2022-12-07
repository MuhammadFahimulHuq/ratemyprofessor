import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {facultyDetailById} from '../actions/userAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import ReviewSection from '../components/ReviewSection'
import { fetchReviews } from '../actions/reviewAction'

const FacultyDetailScreen = () => {
  const facultyDetail = useSelector(state=>state.facultyDetail) 
  const {loading,error,faculty} = facultyDetail 
  const userLogin = useSelector(state=>state.userLogin)
  const{userInfo} = userLogin
const[rating,setRating] =useState('')
const[comment,setComment]= useState('')
  const getUserReview = useSelector(state => state.getReviews)
  const {loadingReview,errorReview,reviews} = getUserReview

  const dispatch = useDispatch()
  const {id} = useParams()
const reviewForm =()=>{

}

  useEffect(()=>{
    dispatch(facultyDetailById(id))
    dispatch(fetchReviews(id))
  },[dispatch,id])
  return (
    <>
    {loading && <Loader />}
    {error && <Message variant="danger">{error}</Message>}
    <Container>
      <Row>
        <Col className="d-flex flex-column col-3">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"  alt=""/>
   
    {userInfo && userInfo.user.id === faculty.id ?(<>
     <Button variant="outline-primary" className="mt-1">Upload Photo</Button>
     </>):(<></>)
     }
        </Col>
        <Col >
         <p>{faculty.name}</p>   
          <p>Email : {faculty.email}</p> 
          <Form onSubmit={reviewForm}>
          <Form.Label>Rate Faculty</Form.Label>
          <Form.Select aria-label="Default select example">
      <option>Give Star</option>
      <option value="1">One-disappointment</option>
      <option value="2">Two-not bad</option>
      <option value="3">Three-average</option>
      <option value="4">Four-above average</option>
      <option value="5">Five-excellent</option>
      </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment faculty - {faculty.name}</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button type="submit" className="mt-2" >Post</Button>
      </Form.Group>
          </Form>
          {loadingReview && <Loader />}
          {errorReview && <Message variant="danger">{error}</Message>}
{!reviews.message?(reviews.map(review=>(
 <ReviewSection key={review.id} review={review}/>
))):(<><div className='text-muted'>Not Review Yet.</div></>)}
    

        </Col>
      </Row>
    </Container>
  
    </>
  )
}
export default FacultyDetailScreen;