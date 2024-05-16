// pages/Events.js
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EventList from "../components/EventList";
import { getEvents } from "../http/eventAPI";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [countOfEvents, setCountOfEvents] = useState();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Default page is 1
  const [limit] = useState(12);

  useEffect(() => {
    fetchEvents();
  }, [page]); // Fetch events when page changes

  const fetchEvents = async () => {
    try {
      const data = await getEvents(page, limit);
      setEvents(data.rows);
      setCountOfEvents(data.count);
    } catch (error) {
      setError(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  if (error) {
    return <div>Error fetching events: {error.message}</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <EventList events={events} countOfEvents={countOfEvents} onPageChange={handlePageChange} />
      </Row>
    </Container>
  );
};

export default Events;
