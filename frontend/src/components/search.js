import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const Search = ({ word, setWord, submithandler }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={submithandler}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image.."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
