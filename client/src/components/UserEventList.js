import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Context } from "../index";

const UserEventList = observer(() => {
  const { id } = useParams();
  const { events } = useContext(Context);

  const userEvents = events._user_event.filter(userEvent => userEvent.event_id === parseInt(id));

  return (
    <Container className="mt-4">
      <Row>
        {userEvents.map(userEvent => (
          <Col key={userEvent.id} md={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>{userEvent.full_name}</Card.Title>
                <Card.Text>{userEvent.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default UserEventList;
