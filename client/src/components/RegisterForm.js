import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Context } from "../index";
import { regitstrate } from "../http/userEventAPI";

const Register = ({eventTitle}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [userHearItFrom, setHeardAbout] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserEvent = {
      email,
      fullName,
      birthDate: dob,
      userHearItFrom,
      event_id: parseInt(id),
    };

    try {
      const response = await regitstrate(newUserEvent);
      console.log("New User Event: ", response);
      navigate('/events');
    } catch (error) {
      console.error("Registration failed: ", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Register for Event {eventTitle ? eventTitle : "Loading..."}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="dob" className="mt-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Where did you hear about this event?</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              label="Social media"
              name="userHearItFrom"
              value="Social media"
              onChange={(e) => setHeardAbout(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Friends"
              name="userHearItFrom"
              value="Friends"
              onChange={(e) => setHeardAbout(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Found myself"
              name="userHearItFrom"
              value="Found myself"
              onChange={(e) => setHeardAbout(e.target.value)}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
