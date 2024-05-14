import { observer } from "mobx-react-lite";
import { Container, Row } from "react-bootstrap";
import EventList from "../components/EventList";

const Events = observer(() => {
  return (
    <Container className="mt-4">
      <Row>
        <EventList />
      </Row>
    </Container>
  );
});

export default Events;
