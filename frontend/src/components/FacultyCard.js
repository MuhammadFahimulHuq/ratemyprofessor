import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const FacultyCard = ({ faculty }) => {
  return (
    <Card>
      <Card.Body>
        <Row className="d-flex justify-content align-items-center">
          <Col className="flex-shrink-0">
            <img
              src={
                faculty.profile_image_path
                  ? `http://localhost:8000/upload/profileImage/` +
                    faculty.profile_image_path
                  : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
              }
              alt=""
              Style="width:100px"
            />
          </Col>
          <Col>
            <Card.Title>{faculty.name}</Card.Title>

            <LinkContainer to={`/faculty/${faculty.id}`}>
              <Card.Link>view profile</Card.Link>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default FacultyCard;
