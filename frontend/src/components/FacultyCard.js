import React from 'react'
import { Card } from 'react-bootstrap'


const FacultyCard = ({faculty}) => {
  return (
   
 <Card>
 <Card.Body>
     <Card.Title>{faculty.name}</Card.Title>
     <Card.Text>Rating</Card.Text>
         <Card.Link>view profile</Card.Link>
 </Card.Body>
</Card>

  )
}
export default FacultyCard