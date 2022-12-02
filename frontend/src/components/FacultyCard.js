import React from 'react'
import { Card,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const FacultyCard = () => {
  return (
    <Container>
    <Card className="w-50">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <h2>Rating</h2>
                <Card.Link>view profile</Card.Link>
        
        </Card.Body>
    </Card>
    </Container>
  )
}
export default FacultyCard