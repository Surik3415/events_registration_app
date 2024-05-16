// components/EventList.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { EVENT_ROUTE, USER_EVENT_REGISTER } from "../utils/consts";
import { Pagination } from "react-bootstrap";

const EventList = ({ events, countOfEvents, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const totalPages = Math.ceil(countOfEvents / limit);
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-4">
      <Row>
        {events.map(event => (
          <Col key={event.id} md={3} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <p>{formatDate(event.event_date)}</p>
                <p>Organizer: {event.organizer}</p>
                <Card.Link href={`${EVENT_ROUTE}/${event.id}${USER_EVENT_REGISTER}`}>Register</Card.Link>
                <Card.Link href={`${EVENT_ROUTE}/${event.id}`}>View</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination>
        {pagesArray.map(pageNumber => (
          <Pagination.Item key={pageNumber} onClick={() => handlePageClick(pageNumber)} active={pageNumber === currentPage}>
            {pageNumber}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default EventList;
