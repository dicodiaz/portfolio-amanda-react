import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => (
  <Container as="section" id="contact" className="py-5 bg-dark text-white min-vh-100" fluid>
    <Row className="mx-0 g-0 justify-content-center">
      <h2 className="py-5 display-6 text-center">
        <span className="py-2 border-bottom">Contact me</span>
      </h2>
      <Col sm={10} md={9} lg={8} xl={7}>
        <Form action="https://formspree.io/f/mwkaydoo" method="post">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name*"
            className="mb-3 py-2 bg-dark text-white"
            required
          />
          <Form.Control
            type="email"
            name="email"
            placeholder="Email*"
            className="mb-3 py-2 bg-dark text-white"
            required
          />
          <Form.Control
            as="textarea"
            name="msg"
            rows={3}
            placeholder="Message*"
            className="mb-4 py-2 bg-dark text-white"
            required
          />
          <Button type="submit" variant="light" className="w-100">
            SUBMIT
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
