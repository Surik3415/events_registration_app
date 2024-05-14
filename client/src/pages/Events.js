import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Context } from "../index";

const Events = observer(() => {
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
                <Card.Link href="#">Registrate</Card.Link>
                <Card.Link href={`/events/${event.id}`}>View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default Events;
