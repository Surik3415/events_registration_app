import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Context } from "../index";
import { EVENT_ROUTE, USER_EVENT_REGISTER } from "../utils/consts";

const EventList = observer(() => {
  const { events } = useContext(Context);

  return (
    <Container className="mt-4">
      <Row>
        {events.events.map(event => (
          <Col key={event.id} md={3} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Link href={`${EVENT_ROUTE}/${event.id}${USER_EVENT_REGISTER}`}>Register</Card.Link>
                <Card.Link href={`${EVENT_ROUTE}/${event.id}`}>View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default EventList;
