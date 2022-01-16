import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CoverPhoto from '../assets/cover.jpg';

const Cover = () => (
  <Container as="section" id="cover" className="py-5 px-0" fluid>
    <Card className="py-2 py-md-3 bg-dark text-white justify-content-center ">
      <div className="col-md-6 mx-md-auto">
        <Card.Img src={CoverPhoto} alt="cover photo" />
      </div>
      <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
        <Card.Title as="h1" className="display-1">
          Amanda López
        </Card.Title>
        <Card.Text as="h2" className="mb-2 fs-5">
          Colombian model
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Container>
);

export default Cover;
