import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import { getEvent } from "../http/eventAPI";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


const Register = observer(() => {
  const { id } = useParams();
  const [eventTitle, setEventTitle] = useState(' ');
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvent(id)
      .then(data => {
        setEventTitle(data.title);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  if (error) {
    return <div>Error fetching user events: {error.message}</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <RegisterForm eventTitle={eventTitle} />
      </Row>
    </Container>
  );
});

export default Register;
