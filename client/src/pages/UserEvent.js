import React from "react";
import {Container, Row} from "react-bootstrap"
import UserEventList from "../components/UserEventList";

const UserEvent = () => {
  return (
    <Container className="mt-4">
      <Row>
        <UserEventList />
      </Row>
    </Container>
  )
}

export default UserEvent
