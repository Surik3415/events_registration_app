import { observer } from "mobx-react-lite";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const UserEventList = observer(({ userEvents, eventTitle }) => {

  return (
    <Container className="mt-4">
      <h3 className="mt-4 mb-4">'{eventTitle}' Participants</h3>
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
