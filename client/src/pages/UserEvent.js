import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import UserEventList from "../components/UserEventList";
import { getEvent } from "../http/eventAPI";
import { useParams } from "react-router-dom";

const UserEvent = () => {
  const { id } = useParams();
  const [userEvents, setUserEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState(' ');

  const [error, setError] = useState(null);

  useEffect(() => {
    getEvent(id)
      .then(data => {
        setUserEvents(data.UserEvents || []);
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
        <UserEventList userEvents={userEvents} eventTitle={eventTitle}  />
      </Row>
    </Container>
  );
};

export default UserEvent;
