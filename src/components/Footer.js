import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => (
  <Container
    fluid
    id="footer"
    as="footer"
    className="bg-dark text-white py-3 border-top position-absolute bottom-0"
  >
    <Row className="mx-0 g-0 justify-content-center">
      <Col xs="auto" className="small">
        ©2021 Amanda López. All rights reserved.
      </Col>
    </Row>
  </Container>
);

export default Footer;
