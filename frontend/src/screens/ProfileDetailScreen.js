import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { updateUserProfile } from "../actions/profileAction";
import { Toast } from "../components/Toast";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userAction";
const ProfileDetailScreen = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const profileupdate = useSelector((state) => state.updateProfile);
  const { loading, error, success } = profileupdate;
  const { userInfo } = userLogin;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const dispatch = useDispatch();
  const profileUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(name, email, phoneNo, image));
  };
  useEffect(() => {
    setName(userInfo.user.name);
    setEmail(userInfo.user.email);
    setPhoneNo(userInfo.user.phoneNo);
    if (success) {
      Toast.fire({
        icon: "success",
        title: success.message + ` please login again`,
      });
      // dispatch(logout());
      // navigate("/login");
    }
  }, [success, dispatch, navigate, userInfo]);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Container>
        <Row>
          <Col className="d-flex flex-column col-3">
            <img
              src={
                userInfo.user.profile_image_path
                  ? `http://localhost:8000/upload/profileImage/` +
                    userInfo.user.profile_image_path
                  : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
              }
              alt=""
            />
          </Col>
          <Col>
            {userInfo ? (
              <>
                <Form onSubmit={profileUpdate} encType="multipart/form-data">
                  <Form.Group>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phoneNo"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Upload Profile Image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Form.Group>
                  <Button type="submit" className="my-2">
                    Update
                  </Button>
                </Form>
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileDetailScreen;
